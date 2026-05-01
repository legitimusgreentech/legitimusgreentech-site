"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Building2, ShoppingBag, Globe, Factory } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

const PRODUCT_COLOR = "var(--color-petrol)";
const PRODUCT_COLOR_HEX = "#124e6a";

const stats = [
  { value: "+20", label: "Indústrias nacionais", icon: Factory },
  { value: "+15", label: "Comércios nacionais", icon: ShoppingBag },
  { value: "+2", label: "Indústrias internacionais", icon: Globe },
  { value: "2021", label: "Credenciados pelo ILZB", icon: Building2 },
];

const certLevels = [
  {
    name: "Rumo ao Lixo Zero",
    range: "50% a 89%",
    description:
      "Selo para empresas ou eventos que encaminham entre 50 e 89% dos resíduos para reutilização, reciclagem ou compostagem. Inclui auditoria anual e renovação.",
    isTop: false,
  },
  {
    name: "Certificação Lixo Zero",
    range: "90% ou mais",
    description:
      "A certificação plena, emitida somente para organizações que alcançam o mínimo de 90% dos resíduos encaminhados para reutilização, reciclagem ou compostagem — atestando de fato a condição Lixo Zero.",
    isTop: true,
  },
];

const services = [
  {
    number: "01",
    name: "Diagnóstico Lixo Zero",
    subtitle: "Pré-Auditoria",
    description:
      "Avaliação completa da gestão de resíduos atual antes da auditoria oficial. Identificamos gaps, medimos a porcentagem de desvio de aterro e entregamos relatório com pontos de observação.",
    deliverables: [
      "Relatório de diagnóstico completo",
      "Check-list da metodologia ILZB",
      "Mapa de oportunidades de melhoria",
      "Pontuação estimada para certificação",
    ],
  },
  {
    number: "02",
    name: "Consultoria de Implementação",
    subtitle: "Do diagnóstico à certificação",
    description:
      "Para empresas que ainda não possuem a metodologia implementada. Criamos um plano personalizado, executamos e acompanhamos cada etapa até sua empresa estar pronta para a auditoria oficial.",
    deliverables: [
      "Plano de ação detalhado",
      "Estratégias para implementação integral",
      "Treinamento de colaboradores multiplicadores",
      "Suporte técnico em documentação",
    ],
  },
  {
    number: "03",
    name: "Auditoria Presencial ILZB",
    subtitle: "Certificação oficial",
    description:
      "Realizamos a auditoria presencial como credenciados pelo Instituto Lixo Zero Brasil, validando a gestão de resíduos e emitindo a certificação oficial nos níveis Rumo ao Lixo Zero ou Certificação Lixo Zero.",
    deliverables: [
      "Auditoria in loco por auditores credenciados",
      "Verificação de toda a cadeia de gestão",
      "Emissão de certificação oficial ILZB",
      "Renovação anual com acompanhamento",
    ],
  },
];

const processSteps = [
  { n: "1", title: "Diagnóstico Preliminar", desc: "Avaliação remota ou presencial da gestão atual de resíduos" },
  { n: "2", title: "Plano de Ação", desc: "Estratégias, adequações, indicadores e cronograma" },
  { n: "3", title: "Execução e Acompanhamento", desc: "Implementação, suporte técnico e treinamento" },
  { n: "4", title: "Resultados e Entregáveis", desc: "Relatório final e check-list da metodologia" },
  { n: "5", title: "Auditoria Presencial", desc: "Certificação oficial pelo Instituto Lixo Zero Brasil" },
];

const sectors = [
  "Automotivo", "Farmacêutico", "Cosmético", "Alimentício",
  "Metalúrgico", "Construção", "Agronegócio", "Cadeia Fria",
  "Hotelaria", "Escolas e Colégios", "Eventos", "Comércio em Geral",
];

const benefits = [
  "Empresas certificadas são mais preparadas para o futuro, reduzem custos e impactam positivamente o planeta",
  "Redução de custos operacionais com descarte e destinação de resíduos",
  "Fortalecimento da imagem institucional como referência em sustentabilidade",
  "Certificação específica para gestão de resíduos com critérios ESG",
  "Alinhamento a 15 dos 17 ODS da ONU",
  "Acesso a incentivos governamentais e mercados exigentes",
  "Menor produção de lixo e impacto direto na economia da reciclagem",
];

const clients = [
  "GloboKraft", "Grupo Polar", "Scania", "Emibra", "MWM",
  "Mapfre", "Givaudan", "CasaCor", "Ibema", "Lear Corporation",
];

export function LixoZeroContent() {
  return (
    <>
      {/* Stats */}
      <section className="py-16 bg-white border-b border-coal/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08}>
                <div className="text-center p-6 rounded-2xl border border-coal/5 bg-ice">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: `${PRODUCT_COLOR_HEX}12` }}
                  >
                    <s.icon size={20} style={{ color: PRODUCT_COLOR }} />
                  </div>
                  <div className="font-heading text-2xl lg:text-3xl font-bold text-coal">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-coal/50 font-medium leading-snug">
                    {s.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* O que é a certificação */}
      <section className="py-24 lg:py-32 bg-ice">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-coal/40">
                  <span className="h-px w-8 rounded-full" style={{ backgroundColor: PRODUCT_COLOR }} />
                  Metodologia
                </span>
                <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-coal">
                  Transforme seu negócio com a Certificação Lixo Zero
                </h2>
                <p className="mt-5 text-base text-coal/60 leading-relaxed">
                  A Certificação Lixo Zero é um produto do{" "}
                  <strong className="text-coal/80">Instituto Lixo Zero Brasil (ILZB)</strong>, validado pela{" "}
                  <strong className="text-coal/80">Zero Waste International Alliance (ZWIA)</strong>, com
                  pré-requisitos estabelecidos internacionalmente e aplicáveis a qualquer
                  estabelecimento ou evento.
                </p>
                <p className="mt-4 text-base text-coal/60 leading-relaxed">
                  Seu principal objetivo: <strong className="text-coal/80">atestar que no mínimo 90% dos
                  resíduos são encaminhados para reutilização, reciclagem ou compostagem</strong> — conforme
                  metodologia presente em mais de 20 países, reconhecida pela{" "}
                  <strong className="text-coal/80">ONU-Habitat em 20 cidades ao redor do mundo</strong> e alinhada
                  a <strong className="text-coal/80">15 dos 17 ODS da ONU</strong>.
                </p>
                <p className="mt-4 text-base text-coal/60 leading-relaxed">
                  A certificação é aplicada somente em locais físicos onde acontece a gestão
                  de resíduos. A Legitimus GreenTech é credenciada pelo ILZB desde
                  2021, realizando auditorias, pré-auditorias e consultorias nos mais variados
                  segmentos.
                </p>
              </div>
            </FadeIn>

            {/* Pilares ESG */}
            <FadeIn delay={0.15}>
              <div className="space-y-4">
                {[
                  {
                    label: "Ambiental",
                    items: ["Redução do impacto ambiental", "Aumento de consciência nos colaboradores", "Diminuição do uso de material", "Aumento do ciclo de vida dos resíduos"],
                    color: "#7ab442",
                  },
                  {
                    label: "Social",
                    items: ["Valorização de catadores e cooperativas", "Incentivos à economia circular", "Criação de empregos locais", "Satisfação dos consumidores"],
                    color: "#00c7fd",
                  },
                  {
                    label: "Governança",
                    items: ["Melhor eficiência na gestão de resíduos", "Transparência e controles", "Report interno e externo", "Alinhamento às estratégias e stakeholders"],
                    color: PRODUCT_COLOR_HEX,
                  },
                ].map((pillar) => (
                  <div key={pillar.label} className="p-5 rounded-2xl bg-white border border-coal/5">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-2 h-6 rounded-full"
                        style={{ backgroundColor: pillar.color }}
                      />
                      <span className="text-xs font-bold uppercase tracking-widest text-coal/50">
                        {pillar.label}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {pillar.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-coal/70">
                          <Check size={12} style={{ color: pillar.color }} className="flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Níveis de certificação */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#124e6a] via-[#0e3f56] to-[#0a2e40]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-lime">
                <span className="h-px w-8 bg-lime rounded-full" />
                Níveis de Certificação
              </span>
              <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ice">
                Dois caminhos, um objetivo
              </h2>
              <p className="mt-4 text-base text-ice/60">
                O ILZB conta com 2 certificações baseadas na porcentagem de desvio de aterro alcançada.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {certLevels.map((level, i) => (
              <FadeIn key={level.name} delay={i * 0.1}>
                <div className={`relative p-8 rounded-2xl border ${level.isTop ? "border-lime/30 bg-lime/5" : "border-ice/10 bg-white/5"}`}>
                  {level.isTop && (
                    <div className="absolute -top-3 left-6">
                      <span className="px-3 py-1 text-xs font-bold text-coal bg-lime rounded-full uppercase tracking-wider">
                        Certificação plena
                      </span>
                    </div>
                  )}
                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold mb-4"
                    style={{
                      backgroundColor: level.isTop ? "rgba(193,255,114,0.15)" : "rgba(255,255,255,0.08)",
                      color: level.isTop ? "var(--color-lime)" : "rgba(242,245,247,0.7)",
                    }}
                  >
                    {level.range}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-ice">{level.name}</h3>
                  <p className="mt-3 text-sm text-ice/60 leading-relaxed">{level.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Três serviços */}
      <section className="py-24 lg:py-32 bg-ice">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-coal/40">
                <span className="h-px w-8 rounded-full" style={{ backgroundColor: PRODUCT_COLOR }} />
                Nossos Serviços
              </span>
              <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-coal">
                Como atuamos
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {services.map((svc, i) => (
              <FadeIn key={svc.number} delay={i * 0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 bg-white rounded-2xl border border-coal/5 overflow-hidden">
                  {/* Number + title */}
                  <div
                    className="p-8 lg:p-10 flex flex-col justify-center"
                    style={{ borderRight: "1px solid rgba(31,42,51,0.06)" }}
                  >
                    <div
                      className="text-5xl font-heading font-bold mb-4"
                      style={{ color: `${PRODUCT_COLOR_HEX}20` }}
                    >
                      {svc.number}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-coal/40 mb-1">
                      {svc.subtitle}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-coal">{svc.name}</h3>
                  </div>

                  {/* Description */}
                  <div className="p-8 lg:p-10 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <p className="text-sm text-coal/60 leading-relaxed">{svc.description}</p>
                    <ul className="space-y-2">
                      {svc.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-coal/70">
                          <Check size={14} style={{ color: PRODUCT_COLOR }} className="flex-shrink-0 mt-0.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Processo em 5 etapas */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-coal/40">
                <span className="h-px w-8 rounded-full" style={{ backgroundColor: PRODUCT_COLOR }} />
                Processo
              </span>
              <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-coal">
                5 etapas até a certificação
              </h2>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Linha conectora - desktop */}
            <div
              className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px"
              style={{ backgroundColor: `${PRODUCT_COLOR_HEX}20` }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {processSteps.map((step, i) => (
                <FadeIn key={step.n} delay={i * 0.08}>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-heading font-bold relative z-10"
                      style={{
                        backgroundColor: PRODUCT_COLOR_HEX,
                        color: "#f2f5f7",
                      }}
                    >
                      {step.n}
                    </div>
                    <h3 className="text-sm font-semibold text-coal mb-2">{step.title}</h3>
                    <p className="text-xs text-coal/50 leading-relaxed">{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Setores atendidos + benefícios */}
      <section className="py-24 lg:py-32 bg-ice">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Setores */}
            <FadeIn>
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-coal/40">
                  <span className="h-px w-8 rounded-full" style={{ backgroundColor: PRODUCT_COLOR }} />
                  Segmentos atendidos
                </span>
                <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-bold text-coal mb-8">
                  Experiência em múltiplos setores
                </h2>
                <div className="flex flex-wrap gap-2">
                  {sectors.map((sector) => (
                    <span
                      key={sector}
                      className="px-3 py-1.5 text-sm font-medium rounded-full border"
                      style={{
                        borderColor: `${PRODUCT_COLOR_HEX}25`,
                        color: PRODUCT_COLOR_HEX,
                        backgroundColor: `${PRODUCT_COLOR_HEX}08`,
                      }}
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Benefícios */}
            <FadeIn delay={0.1}>
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-coal/40">
                  <span className="h-px w-8 rounded-full" style={{ backgroundColor: PRODUCT_COLOR }} />
                  Por que certificar
                </span>
                <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-bold text-coal mb-8">
                  Uma estratégia de negócios inteligente
                </h2>
                <ul className="space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <div
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: `${PRODUCT_COLOR_HEX}15` }}
                      >
                        <Check size={11} style={{ color: PRODUCT_COLOR }} />
                      </div>
                      <span className="text-sm text-coal/70 leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Empresas que já implementaram */}
      <section className="py-16 bg-white border-y border-coal/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-coal/30 mb-10">
              Empresas que já implementaram a metodologia
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="flex flex-wrap justify-center gap-3">
              {clients.map((client) => (
                <div
                  key={client}
                  className="px-5 py-2.5 rounded-full border border-coal/8 text-sm font-medium text-coal/50 bg-ice"
                >
                  {client}
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-coal/30 mt-6">
              Logos em alta resolução em breve
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#124e6a] via-[#0e3f56] to-[#0a2e40]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-1 bg-lime rounded-full mx-auto mb-8"
            />
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ice">
              Pronto para transformar seu negócio com a Certificação Lixo Zero?
            </h2>
            <p className="mt-4 text-base text-ice/60 max-w-xl mx-auto">
              Nossa pré-auditoria ajuda você a diagnosticar, corrigir e otimizar sua gestão de
              resíduos antes da avaliação oficial do ILZB — com método, rastreabilidade e suporte técnico completo.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-coal bg-lime rounded-full hover:bg-lime/80 transition-all duration-200 group min-h-[48px]"
              >
                Solicitar diagnóstico
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-ice border border-ice/20 rounded-full hover:bg-ice/5 transition-all duration-200 min-h-[48px]"
              >
                Falar com um especialista
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
