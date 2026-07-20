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

  const rows = [
    ["Nome", name],
    ["E-mail", email],
    ["Empresa", company || "—"],
    ["Telefone", phone || "—"],
    ["Interesse", interest],
    ["Mensagem", message || "—"],
  ]
    .map(
      ([label, value]) =>
        `<tr>` +
        `<td style="padding:8px 12px;font-weight:600;color:#124e6a;border-bottom:1px solid #eee;vertical-align:top;white-space:nowrap">${label}</td>` +
        `<td style="padding:8px 12px;color:#1f2a33;border-bottom:1px solid #eee">${escapeHtml(value)}</td>` +
        `</tr>`,
    )
    .join("");

  const html =
    `<div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto">` +
    `<h2 style="color:#124e6a;margin:0 0 16px">Novo contato via site</h2>` +
    `<table style="width:100%;border-collapse:collapse;font-size:14px">${rows}</table>` +
    `</div>`;

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
      return NextResponse.json({ success: false, error: "Falha no envio." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "Erro ao enviar a mensagem." }, { status: 500 });
  }
}
