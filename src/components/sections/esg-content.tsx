"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, BarChart2, ClipboardCheck, Settings, Layers, Users, Award } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

const PRODUCT_COLOR = "var(--color-petrol)";
const PRODUCT_COLOR_HEX = "#124e6a";

const features = [
  {
    icon: ClipboardCheck,
    title: "Diagnóstico conforme ABNT PR 2030",
    desc: "Avaliação completa do estágio de maturidade ESG da sua empresa com base na norma brasileira ABNT PR 2030.",
  },
  {
    icon: Settings,
    title: "Software ESG personalizado",
    desc: "Plataforma digital adaptada ao porte e setor da empresa, com autopreenchimento de questionários e indicadores rastreáveis.",
  },
  {
    icon: BarChart2,
    title: "Indicadores claros e rastreáveis",
    desc: "Indicadores ESG estruturados conforme GRI e SASB, com histórico auditável e evolução ao longo do tempo.",
  },
  {
    icon: Layers,
    title: "Autopreenchimento do questionário",
    desc: "O software facilita o preenchimento dos dados ESG com sugestões e validações automáticas por setor.",
  },
  {
    icon: Users,
    title: "Consultoria para implementação",
    desc: "Suporte especializado em cada etapa — da coleta de dados à implementação das práticas ESG no negócio.",
  },
  {
    icon: Award,
    title: "Receba seu nível de maturidade ESG",
    desc: "Ao final do processo, sua empresa recebe a avaliação oficial do nível de maturidade ESG conforme ABNT PR 2030.",
  },
];

const formats = [
  {
    name: "Start ESG",
    badge: "Gratuito",
    badgeColor: "#7ab442",
    description:
      "Autodiagnóstico estratégico acessível para empresas que estão começando a estruturar a pauta ESG. Orientado ao mercado, permite mapear o estágio atual e identificar as primeiras ações prioritárias.",
    items: [
      "Acesso ao questionário de diagnóstico",
      "Mapeamento do estágio ESG atual",
      "Relatório com primeiras ações prioritárias",
      "Alinhamento com ABNT PR 2030",
    ],
    cta: { label: "Começar gratuitamente", href: "/contato?interesse=esg-start" },
    highlight: false,
  },
  {
    name: "ESG Performance",
    badge: "Solicite orçamento",
    badgeColor: PRODUCT_COLOR_HEX,
    description:
      "Programa completo de estruturação, implementação e desenvolvimento ESG. Inclui software personalizado, consultoria especializada, indicadores GRI/SASB e acompanhamento da jornada até o nível de maturidade desejado.",
    items: [
      "Software ESG personalizado ao setor",
      "Diagnóstico completo conforme ABNT PR 2030",
      "Consultoria de implementação end-to-end",
      "Indicadores GRI, SASB e relatório ESG",
      "Acompanhamento contínuo e suporte técnico",
      "Nível de maturidade ESG certificado",
    ],
    cta: { label: "Solicitar orçamento", href: "/contato?interesse=esg-performance" },
    highlight: true,
  },
];

export function EsgContent() {
  return (
    <>
      {/* Intro */}
      <section className="py-24 lg:py-32 bg-ice">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-coal/40">
                <span className="h-px w-8 rounded-full" style={{ backgroundColor: PRODUCT_COLOR }} />
                Certificação ESG
              </span>
              <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-coal">
                Avaliação do estágio de maturidade ESG
              </h2>
              <p className="mt-5 text-base text-coal/60 leading-relaxed">
                A certificação ESG da ABNT avalia o estágio de maturidade das práticas ESG da sua empresa
                com base na norma <strong className="text-coal/80">ABNT PR 2030</strong>. O processo combina
                diagnóstico estruturado, software personalizado e consultoria especializada — da estruturação
                à implementação, com indicadores alinhados ao <strong className="text-coal/80">GRI</strong> e
                ao <strong className="text-coal/80">SASB</strong>.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-coal/40">
                <span className="h-px w-8 rounded-full" style={{ backgroundColor: PRODUCT_COLOR }} />
                O que está incluído
              </span>
              <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-coal">
                Da estruturação à implementação
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.08}>
                <div className="p-7 rounded-2xl bg-ice border border-coal/5 h-full">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${PRODUCT_COLOR_HEX}12` }}
                  >
                    <f.icon size={20} style={{ color: PRODUCT_COLOR }} />
                  </div>
                  <h3 className="font-sans text-sm font-semibold text-coal mb-2">{f.title}</h3>
                  <p className="text-sm text-coal/55 leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Formatos */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#124e6a] via-[#0e3f56] to-[#0a2e40]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-lime">
                <span className="h-px w-8 bg-lime rounded-full" />
                Dois formatos
              </span>
              <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ice">
                Escolha o caminho certo para sua empresa
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {formats.map((fmt, i) => (
              <FadeIn key={fmt.name} delay={i * 0.1}>
                <div className={`relative p-8 rounded-2xl border flex flex-col h-full ${fmt.highlight ? "border-lime/30 bg-lime/5" : "border-ice/10 bg-white/5"}`}>
                  {fmt.highlight && (
                    <div className="absolute -top-3 left-6">
                      <span className="px-3 py-1 text-xs font-bold text-coal bg-lime rounded-full uppercase tracking-wider">
                        Recomendado
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading text-xl font-bold text-ice">{fmt.name}</h3>
                    <span
                      className="px-3 py-1 text-xs font-bold rounded-full"
                      style={{
                        backgroundColor: `${fmt.badgeColor}25`,
                        color: fmt.highlight ? "var(--color-lime)" : "rgba(242,245,247,0.7)",
                      }}
                    >
                      {fmt.badge}
                    </span>
                  </div>
                  <p className="text-sm text-ice/60 leading-relaxed mb-5">{fmt.description}</p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {fmt.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check
                          size={13}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: fmt.highlight ? "var(--color-lime)" : "rgba(242,245,247,0.5)" }}
                        />
                        <span className="text-sm text-ice/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={fmt.cta.href}
                    className={`inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full transition-all duration-200 group ${
                      fmt.highlight
                        ? "bg-lime text-coal hover:bg-lime/80"
                        : "border border-ice/20 text-ice hover:bg-ice/5"
                    }`}
                  >
                    {fmt.cta.label}
                    <ArrowRight size={15} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32" style={{ background: `linear-gradient(135deg, ${PRODUCT_COLOR_HEX}12 0%, #f2f5f7 100%)` }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-1 rounded-full mx-auto mb-8"
              style={{ backgroundColor: PRODUCT_COLOR }}
            />
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-coal uppercase tracking-tight">
              Pronto para evoluir sua gestão ESG?
            </h2>
            <p className="mt-4 text-base text-coal/60 max-w-xl mx-auto">
              Comece gratuitamente com o Start ESG ou fale com nossa equipe para estruturar
              um programa completo conforme ABNT PR 2030.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contato?interesse=esg-start"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-coal rounded-full hover:opacity-80 transition-all duration-200 group min-h-[48px]"
                style={{ backgroundColor: "#7ab442" }}
              >
                Começar Start ESG — gratuito
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contato?interesse=esg-performance"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-coal border border-coal/15 rounded-full hover:bg-coal/5 transition-all duration-200 min-h-[48px]"
              >
                Solicitar orçamento ESG Performance
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
