"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, Phone, MessageCircle, MapPin, Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { BRAND } from "@/lib/constants";

function formatPhone(value: string): string {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export default function ContatoPage() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [phone, setPhone] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const email = data.get("email") as string;

    if (!name.trim()) {
      toast.error("Por favor, preencha seu nome.", {
        description: "Precisamos saber como chamá-lo.",
      });
      return;
    }

    if (!email.trim() || !email.includes("@")) {
      toast.error("E-mail inválido.", {
        description: "Informe um endereço de e-mail válido para contato.",
      });
      return;
    }

    setSending(true);

    const formData = new FormData(form);
    formData.append("_subject", `Contato via site — ${name}`);
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    fetch(`https://formsubmit.co/ajax/${BRAND.email}`, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === "true" || res.success === true) {
          setSending(false);
          setSent(true);
          setPhone("");
          toast.success("Mensagem enviada com sucesso!", {
            description: "Nosso time entrará em contato em breve.",
            icon: <CheckCircle2 size={18} className="text-leaf" />,
          });
          form.reset();
        } else {
          throw new Error("Falha no envio");
        }
      })
      .catch(() => {
        setSending(false);
        toast.error("Erro ao enviar mensagem.", {
          description: "Tente novamente ou entre em contato pelo e-mail.",
        });
      });
  }

  return (
    <section className="relative min-h-screen pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-4rem)]">
        {/* Lado esquerdo - info */}
        <div className="relative bg-gradient-to-br from-[#124e6a] via-[#0e3f56] to-[#0a2e40] px-6 lg:px-16 py-10 lg:py-14 flex flex-col justify-center">
          <div
            className="absolute bottom-0 left-0 w-64 h-64 opacity-10 pointer-events-none"
            style={{
              background: "radial-gradient(circle, var(--color-cyan) 0%, transparent 70%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-ice/40 hover:text-ice transition-colors mb-5"
            >
              <ArrowLeft size={14} />
              Voltar ao início
            </Link>

            <div className="h-1 w-12 bg-lime rounded-full mb-5" />
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-ice leading-tight">
              Fale conosco
            </h1>
            <p className="mt-4 text-base text-ice/60 leading-relaxed max-w-md">
              Pronto para estruturar a sustentabilidade do seu negócio?
            </p>
            <p className="mt-1 text-base text-ice/60 leading-relaxed max-w-md">
              Entre em contato e descubra como podemos ajudar.
            </p>

            <div className="mt-7 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-ice/10 flex items-center justify-center">
                  <Mail size={20} className="text-lime" />
                </div>
                <div>
                  <p className="text-xs text-ice/40 uppercase tracking-wider font-semibold">
                    E-mail
                  </p>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="text-sm font-medium text-ice/80 hover:text-lime transition-colors"
                  >
                    {BRAND.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-ice/10 flex items-center justify-center">
                  <MessageCircle size={20} className="text-lime" />
                </div>
                <div>
                  <p className="text-xs text-ice/40 uppercase tracking-wider font-semibold">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/5511943824383"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-ice/80 hover:text-lime transition-colors block"
                  >
                    (11) 94382-4383
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-ice/10 flex items-center justify-center">
                  <Phone size={20} className="text-lime" />
                </div>
                <div>
                  <p className="text-xs text-ice/40 uppercase tracking-wider font-semibold">
                    Telefone
                  </p>
                  <a
                    href="tel:+551143373025"
                    className="text-sm font-medium text-ice/80 hover:text-lime transition-colors block"
                  >
                    (11) 4337-3025
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-ice/10 flex items-center justify-center">
                  <MapPin size={20} className="text-lime" />
                </div>
                <div>
                  <p className="text-xs text-ice/40 uppercase tracking-wider font-semibold">
                    Localização
                  </p>
                  <span className="text-sm text-ice/80">São Paulo, SP — Brasil</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lado direito - formulário */}
        <div className="bg-ice px-6 lg:px-16 py-10 lg:py-14 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-lg mx-auto"
          >
            {sent ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-leaf/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={32} className="text-leaf" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-coal mb-3">
                  Mensagem enviada!
                </h2>
                <p className="text-sm text-coal/60 leading-relaxed max-w-sm mx-auto">
                  Recebemos sua mensagem e entraremos em contato em breve pelo e-mail informado.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 px-6 py-3 text-sm font-semibold text-coal/60 border border-coal/10 rounded-full hover:bg-coal/5 transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-heading text-2xl font-bold text-coal mb-5">
                  Envie sua mensagem
                </h2>

                <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-coal/50 mb-1"
                    >
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-coal/10 bg-white text-coal placeholder:text-coal/30 focus:outline-none focus:border-petrol focus:ring-1 focus:ring-petrol/20 transition-all"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-coal/50 mb-1"
                    >
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-coal/10 bg-white text-coal placeholder:text-coal/30 focus:outline-none focus:border-petrol focus:ring-1 focus:ring-petrol/20 transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-semibold uppercase tracking-wider text-coal/50 mb-1"
                    >
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-coal/10 bg-white text-coal placeholder:text-coal/30 focus:outline-none focus:border-petrol focus:ring-1 focus:ring-petrol/20 transition-all"
                      placeholder="Nome da empresa"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-coal/50 mb-1"
                    >
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(formatPhone(e.target.value))}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-coal/10 bg-white text-coal placeholder:text-coal/30 focus:outline-none focus:border-petrol focus:ring-1 focus:ring-petrol/20 transition-all"
                      placeholder="(11) 00000-0000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-xs font-semibold uppercase tracking-wider text-coal/50 mb-1"
                    >
                      Interesse
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-coal/10 bg-white text-coal focus:outline-none focus:border-petrol focus:ring-2 focus:ring-petrol/20 transition-all"
                    >
                      <option value="">Selecione um produto</option>
                      <option value="inventario-gee">Inventário de Emissões GEE</option>
                      <option value="esg">Certificação ESG</option>
                      <option value="lixo-zero">Certificação Lixo Zero</option>
                      <option value="equipamentos">Equipamentos Ambientais</option>
                      <option value="outro">Outro assunto</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-coal/50 mb-1"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-coal/10 bg-white text-coal placeholder:text-coal/30 focus:outline-none focus:border-petrol focus:ring-2 focus:ring-petrol/20 transition-all resize-none"
                      placeholder="Conte-nos sobre sua necessidade"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full px-8 py-3.5 text-sm font-semibold text-coal bg-lime rounded-full hover:bg-lime/80 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-coal/30 border-t-coal rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar mensagem
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
