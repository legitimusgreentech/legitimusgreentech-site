import { NextResponse } from "next/server";
import { Resend } from "resend";
import { BRAND } from "@/lib/constants";

// Remetente. Enquanto o domínio não estiver verificado no Resend, usa o sandbox
// (onboarding@resend.dev só entrega para o e-mail dono da conta Resend).
// Após verificar legitimusgreentech.com.br, defina RESEND_FROM com um endereço do domínio.
const FROM = process.env.RESEND_FROM || "Legitimus GreenTech <onboarding@resend.dev>";

const INTEREST_LABELS: Record<string, string> = {
  "inventario-gee": "Inventário de Emissões GEE",
  esg: "Certificação ESG",
  "lixo-zero": "Certificação Lixo Zero",
  equipamentos: "Equipamentos Ambientais",
  outro: "Outro assunto",
};

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Requisição inválida." }, { status: 400 });
  }

  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const company = String(payload.company ?? "").trim();
  const phone = String(payload.phone ?? "").trim();
  const interestRaw = String(payload.interest ?? "").trim();
  const message = String(payload.message ?? "").trim();

  if (!name || !email || !email.includes("@")) {
    return NextResponse.json(
      { success: false, error: "Nome e e-mail válido são obrigatórios." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { success: false, error: "Serviço de e-mail não configurado." },
      { status: 503 },
    );
  }

  const interest = INTEREST_LABELS[interestRaw] || interestRaw || "—";

  const e = escapeHtml;
  const dataRow = (label: string, value: string, isLast = false) =>
    `<tr>
      <td style="padding:12px 0;font-size:11px;font-weight:700;color:#8a949c;text-transform:uppercase;letter-spacing:1px;vertical-align:top;white-space:nowrap;width:110px;${isLast ? "" : "border-bottom:1px solid #eef1f3;"}">${label}</td>
      <td style="padding:12px 0 12px 16px;font-size:14px;color:#1f2a33;vertical-align:top;${isLast ? "" : "border-bottom:1px solid #eef1f3;"}">${value}</td>
    </tr>`;

  const firstName = e(name.split(" ")[0]);
  const messageHtml = message ? e(message).replace(/\n/g, "<br>") : "— sem mensagem —";

  // Template "bulletproof": tabelas + cores sólidas + padding no <td> (funciona no Outlook).
  const html = `
  <div style="margin:0;padding:24px 12px;background-color:#f2f5f7;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" align="center" style="max-width:600px;width:100%;margin:0 auto;border-collapse:collapse;">
      <!-- Cabeçalho -->
      <tr>
        <td bgcolor="#124e6a" style="padding:32px 40px;">
          <div style="font-size:22px;font-weight:bold;color:#f2f5f7;letter-spacing:2px;">LEGITIMUS</div>
          <div style="font-size:12px;font-weight:bold;color:#c1ff72;letter-spacing:4px;margin-top:2px;">GREENTECH</div>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:16px;">
            <tr><td width="48" height="3" bgcolor="#c1ff72" style="width:48px;height:3px;font-size:0;line-height:0;">&nbsp;</td></tr>
          </table>
          <div style="font-size:18px;font-weight:bold;color:#ffffff;margin-top:16px;">Novo contato pelo site</div>
          <div style="font-size:13px;color:#9fb6c2;margin-top:6px;">Alguém preencheu o formulário de contato agora há pouco.</div>
        </td>
      </tr>

      <!-- Corpo -->
      <tr>
        <td bgcolor="#ffffff" style="padding:32px 40px;">
          <!-- Badge de interesse -->
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:22px;border-collapse:collapse;">
            <tr><td bgcolor="#eef2f5" style="padding:7px 15px;font-size:12px;font-weight:bold;color:#124e6a;">${e(interest)}</td></tr>
          </table>

          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">
            ${dataRow("Nome", e(name))}
            ${dataRow("E-mail", `<a href="mailto:${e(email)}" style="color:#124e6a;text-decoration:none;font-weight:bold;">${e(email)}</a>`)}
            ${dataRow("Empresa", e(company || "—"))}
            ${dataRow("Telefone", phone ? `<a href="tel:${e(phone.replace(/\D/g, ""))}" style="color:#124e6a;text-decoration:none;">${e(phone)}</a>` : "—", true)}
          </table>

          <!-- Mensagem -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;margin-top:24px;border-collapse:collapse;">
            <tr>
              <td bgcolor="#f2f5f7" style="border-left:4px solid #c1ff72;padding:18px 20px;">
                <div style="font-size:11px;font-weight:bold;color:#8a949c;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Mensagem</div>
                <div style="font-size:14px;color:#1f2a33;line-height:1.6;">${messageHtml}</div>
              </td>
            </tr>
          </table>

          <!-- Botão responder (padding no TD = funciona no Outlook) -->
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:28px auto 0;">
            <tr>
              <td align="center" bgcolor="#c1ff72" style="padding:14px 34px;">
                <a href="mailto:${e(email)}?subject=${encodeURIComponent("Re: Contato via site — Legitimus GreenTech")}" style="color:#1f2a33;font-size:14px;font-weight:bold;text-decoration:none;">Responder para ${firstName} &rarr;</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Rodapé -->
      <tr>
        <td bgcolor="#ffffff" style="padding:20px 40px;border-top:1px solid #eef1f3;">
          <div style="font-size:11px;color:#8a949c;text-align:center;line-height:1.6;">
            Recebido pelo formulário de contato do site<br/>
            <span style="color:#124e6a;font-weight:bold;">legitimusgreentech.com.br</span>
          </div>
        </td>
      </tr>
    </table>
  </div>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: [BRAND.email],
      replyTo: email,
      subject: `Contato via site — ${name}`,
      html,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json(
        { success: false, error: error.message || "Falha no envio." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ success: false, error: "Erro ao enviar a mensagem." }, { status: 500 });
  }
}
