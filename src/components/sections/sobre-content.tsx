"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import {
  ArrowLeft,
  Eye,
  Target,
  Heart,
  ShieldCheck,
  Award,
  Zap,
  Users,
  Clock,
} from "lucide-react";

const valores = [
  {
    icon: Heart,
    title: "Integridade e Transparência",
    description:
      "Atuamos com ética, justiça e clareza em todas as relações, garantindo segurança técnica e confiança nas decisões.",
    color: "var(--color-sage)",
  },
  {
    icon: Award,
    title: "Rigor e Credibilidade Técnica",
    description:
      "Priorizamos qualidade, metodologia reconhecida e entregas consistentes que sustentam a legitimidade do nosso trabalho.",
    color: "var(--color-petrol)",
  },
  {
    icon: Zap,
    title: "Tecnologia com Agilidade",
    description:
      "Aplicamos inovação e inteligência de dados para estruturar soluções eficientes, com rapidez e precisão na execução.",
    color: "var(--color-lime)",
  },
  {
    icon: Users,
    title: "Parceria Estratégica",
    description:
      "Valorizamos proximidade e responsabilidade compartilhada, atuando como extensão do negócio do cliente.",
    color: "var(--color-cyan)",
  },
  {
    icon: Clock,
    title: "Compromisso com Resultado e Prazo",
    description:
      "Entregamos com organização, disciplina e foco em performance, respeitando prazos e garantindo impacto real.",
    color: "var(--color-gold)",
  },
];

export function SobreContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#124e6a] via-[#0e3f56] to-[#0a2e40]" />
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-10"
          style={{
            background: "radial-gradient(circle at top right, var(--color-cyan) 0%, transparent 50%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-ice/40 hover:text-ice transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              Voltar ao início
            </Link>
          </motion.div>

          <div className="max-w-3xl">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-lime rounded-full mb-8"
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ice leading-tight"
            >
              Sobre a Legitimus{" "}
              <span className="text-lime">GreenTech</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-lg text-ice/60 leading-relaxed max-w-2xl"
            >
              Somos uma greentech especializada na estruturação estratégica da
              sustentabilidade empresarial. Integramos tecnologia, método e
              inteligência de dados para transformar exigências ambientais e ESG
              em processos organizados, rastreáveis e alinhados às decisões do
              negócio.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="pt-24 lg:pt-32 pb-16 bg-ice">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-coal/5 h-full">
                <div className="w-14 h-14 rounded-2xl bg-petrol/10 flex items-center justify-center mb-6">
                  <Target size={28} className="text-petrol" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-coal">
                  Missão
                </h2>
                <p className="mt-4 text-base text-coal/70 leading-relaxed">
                  Estruturar e acelerar a sustentabilidade empresarial por meio
                  de tecnologia, método e inteligência de dados, atuando como
                  parceiro estratégico na integração dessa agenda às decisões do
                  negócio.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-coal/5 h-full">
                <div className="w-14 h-14 rounded-2xl bg-cyan/10 flex items-center justify-center mb-6">
                  <Eye size={28} className="text-cyan" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-coal">
                  Visão
                </h2>
                <p className="mt-4 text-base text-coal/70 leading-relaxed">
                  Ser a Greentech de referência para empresas que buscam
                  estruturar sua sustentabilidade com agilidade, precisão e
                  visão estratégica.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="pt-16 pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-petrol">
                <span className="memphis-line bg-petrol rounded-full" />
                Nossos Valores
              </span>
              <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-coal">
                O que nos guia
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((valor, index) => (
              <FadeIn key={valor.title} delay={index * 0.08}>
                <div className="group bg-white rounded-2xl p-8 border border-coal/5 hover:shadow-lg hover:shadow-coal/5 transition-all duration-300 h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${valor.color}15` }}
                  >
                    <valor.icon size={24} style={{ color: valor.color }} />
                  </div>
                  <h3 className="font-sans text-base font-semibold text-coal">
                    {valor.title}
                  </h3>
                  <p className="mt-2 text-sm text-coal/60 leading-relaxed">
                    {valor.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Posicionamento */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#124e6a] via-[#0e3f56] to-[#0a2e40]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-lime">
                <span className="memphis-line bg-lime rounded-full" />
                Nosso Posicionamento
              </span>
              <blockquote className="mt-8 font-heading text-2xl lg:text-3xl font-bold text-ice leading-relaxed">
                &ldquo;A Legitimus GreenTech é a parceira que caminha ao lado
                das empresas para estruturar e acelerar sua sustentabilidade com
                tecnologia, método e inteligência de dados.&rdquo;
              </blockquote>
              <p className="mt-8 text-base text-ice/50 leading-relaxed max-w-2xl mx-auto">
                Mais do que atender exigências, ajudamos nossos clientes a
                transformar sustentabilidade em desempenho, segurança e
                crescimento consistente.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Atributos visuais */}
      <section className="py-24 lg:py-32 bg-ice">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-coal">
                Nossa essência
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Estratégica",
                desc: "A sustentabilidade é integrada à decisão do negócio. Pensamos no longo prazo, na governança e na competitividade.",
                color: "var(--color-petrol)",
                icon: ShieldCheck,
              },
              {
                title: "Tecnológica",
                desc: "Orientada por dados, método e inovação aplicada. Não é consultoria tradicional — é estrutura com inteligência.",
                color: "var(--color-cyan)",
                icon: Zap,
              },
              {
                title: "Confiável",
                desc: "Rigor técnico, transparência e compromisso com resultado. Transmitimos segurança, legitimidade e consistência.",
                color: "var(--color-sage)",
                icon: Award,
              },
            ].map((attr, index) => (
              <FadeIn key={attr.title} delay={index * 0.1} className="h-full">
                <div className="text-center bg-white rounded-2xl p-10 border border-coal/5 h-full">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: `${attr.color}12` }}
                  >
                    <attr.icon size={30} style={{ color: attr.color }} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-coal">
                    {attr.title}
                  </h3>
                  <p className="mt-3 text-sm text-coal/60 leading-relaxed">
                    {attr.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
