"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function ContatoPage() {
  const [sending, setSending] = useState(false);

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

    // Simula envio (integrar com API real depois)
    setTimeout(() => {
      setSending(false);
      toast.success("Mensagem enviada com sucesso!", {
        description: "Nosso time entrará em contato em breve.",
        icon: <CheckCircle2 size={18} className="text-leaf" />,
      });
      form.reset();
    }, 1500);
  }

  return (
    <section className="relative min-h-screen pt-16">
      {/* Top gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-br from-petrol via-petrol/90 to-coal -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-ice/50 hover:text-ice transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Voltar ao início
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-1 w-12 bg-lime rounded-full mb-8" />
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-ice leading-tight">
              Fale conosco
            </h1>
            <p className="mt-6 text-lg text-ice/60 leading-relaxed max-w-md">
              Pronto para estruturar a sustentabilidade do seu negócio? Entre em
              contato e descubra como podemos ajudar.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-ice/10 flex items-center justify-center">
                  <Mail size={20} className="text-lime" />
                </div>
                <div>
                  <p className="text-xs text-ice/40 uppercase tracking-wider font-semibold">
                    E-mail
                  </p>
                  <a
                    href="mailto:contato@legitimus.greentech"
                    className="text-sm font-medium text-ice/80 hover:text-lime transition-colors"
                  >
                    contato@legitimus.greentech
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-ice/10 flex items-center justify-center">
                  <Phone size={20} className="text-lime" />
                </div>
                <div>
                  <p className="text-xs text-ice/40 uppercase tracking-wider font-semibold">
                    Telefone
                  </p>
                  <span className="text-sm text-ice/80">
                    Em breve
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-ice/10 flex items-center justify-center">
                  <MapPin size={20} className="text-lime" />
                </div>
                <div>
                  <p className="text-xs text-ice/40 uppercase tracking-wider font-semibold">
                    Localização
                  </p>
                  <span className="text-sm text-ice/80">
                    Brasil
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5 bg-white rounded-2xl p-8 shadow-xl border border-coal/5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-wider text-coal/50 mb-2"
                >
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 text-sm rounded-xl border border-coal/10 bg-ice/50 text-coal placeholder:text-coal/30 focus:outline-none focus:border-petrol focus:ring-2 focus:ring-petrol/20 transition-all"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-coal/50 mb-2"
                >
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 text-sm rounded-xl border border-coal/10 bg-ice/50 text-coal placeholder:text-coal/30 focus:outline-none focus:border-petrol focus:ring-2 focus:ring-petrol/20 transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-xs font-semibold uppercase tracking-wider text-coal/50 mb-2"
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 text-sm rounded-xl border border-coal/10 bg-ice/50 text-coal placeholder:text-coal/30 focus:outline-none focus:border-petrol focus:ring-2 focus:ring-petrol/20 transition-all"
                  placeholder="Nome da empresa"
                />
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-xs font-semibold uppercase tracking-wider text-coal/50 mb-2"
                >
                  Interesse
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-4 py-3 text-sm rounded-xl border border-coal/10 bg-ice/50 text-coal focus:outline-none focus:border-petrol focus:ring-2 focus:ring-petrol/20 transition-all"
                >
                  <option value="">Selecione um produto</option>
                  <option value="inventario-gee">Inventário de Emissões GEE</option>
                  <option value="esg">Agenda ESG</option>
                  <option value="lixo-zero">Certificação Lixo Zero</option>
                  <option value="maquinas">Máquinas e Equipamentos</option>
                  <option value="outro">Outro assunto</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-coal/50 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-coal/10 bg-ice/50 text-coal placeholder:text-coal/30 focus:outline-none focus:border-petrol focus:ring-2 focus:ring-petrol/20 transition-all resize-none"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
