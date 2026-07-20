"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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

// Comparativo Recursos/Entregas — Start ESG × ESG Performance (ajustes finais, slide 9)
const planHeaders = {
  start: {
    name: "Start ESG",
    tagline: "Autodiagnóstico gratuito para empresas que querem entender seu nível de maturidade ESG.",
    footerTitle: "Gratuito",
    footerText: "Diagnóstico rápido e simples para iniciar sua jornada ESG.",
    cta: { label: "Começar gratuitamente", href: "/contato?interesse=esg-start" },
  },
  performance: {
    name: "ESG Performance",
    tagline: "Jornada completa com estratégia, plano de ação, consultoria e possibilidade de certificação.",
    footerTitle: "Consultoria completa",
    footerText: "Transforme estratégia em resultados com suporte especializado.",
    cta: { label: "Solicitar orçamento", href: "/contato?interesse=esg-performance" },
  },
};

const planFeatures: { label: string; start: boolean; performance: boolean }[] = [
  { label: "Autodiagnóstico ESG (autopreenchimento)", start: true, performance: true },
  { label: "Definição de critérios materiais para o negócio", start: true, performance: true },
  { label: "Avaliação por níveis de cada critério dentro dos temas ESG", start: true, performance: true },
  { label: "Resultado: nível de maturidade consolidado", start: true, performance: true },
  { label: "Detalhamento dos resultados", start: false, performance: true },
  { label: "Matriz de Materialidade", start: false, performance: true },
  { label: "Matriz de Stakeholders", start: false, performance: true },
  { label: "Plano de Ação", start: false, performance: true },
  { label: "Consultoria especializada para implementação", start: false, performance: true },
  { label: "Indicadores Gerenciais", start: false, performance: true },
  { label: "Certificação PR 2030 (via organismo certificador)", start: false, performance: true },
];

// Indicadores ilustrativos do diagnóstico ESG (base: ferramenta interna — ajustes finais, slide 10)
const esgIndicators = [
  { label: "Ambiental", value: 44.0, color: "#7ab442" },
  { label: "Social", value: 47.1, color: "#00c7fd" },
  { label: "Governança", value: 41.8, color: "#aa8e6b" },
];

// Telas reais do software ESG (prints da plataforma)
const softwareShots = [
  {
    src: "/esg/login.jpg",
    caption: "Acesso à plataforma",
    alt: "Tela de login do software ESG da Legitimus GreenTech",
    width: 1600,
    height: 860,
  },
  {
    src: "/esg/dashboard.jpg",
    caption: "Dashboard ESG",
    alt: "Dashboard do software ESG com indicadores Ambiental, Social e Governança e o nível de materialidade da empresa",
    width: 1600,
    height: 795,
  },
  {
    src: "/esg/materialidade.jpg",
    caption: "Questionário de Materialidade",
    alt: "Tela de questionário de materialidade do software ESG, com critérios por pilar Ambiental, Social e Governança",
    width: 1600,
    height: 865,
  },
  {
    src: "/esg/formularios.jpg",
    caption: "Formulários por pilar",
    alt: "Tela de formulários do software ESG com temas ambientais e status de preenchimento",
    width: 1600,
    height: 857,
  },
];

export function EsgContent() {
  const [activeShot, setActiveShot] = useState(0);
  const shot = softwareShots[activeShot];

  return (
    <>
      {/* Intro */}
      <section className="py-24 lg:py-32 bg-ice">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn>
              <div>
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

            {/* Painel de indicadores do diagnóstico — dados ilustrativos (slide 10, ajustes finais) */}
            <FadeIn delay={0.15}>
              <div className="bg-white rounded-2xl border border-coal/5 shadow-xl shadow-coal/5 p-7">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-coal/40">
                    Diagnóstico ESG — % por pilar
                  </p>
                  <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-lime/20 text-coal/70 uppercase tracking-wider">
                    Exemplo
                  </span>
                </div>

                <div className="space-y-5">
                  {esgIndicators.map((ind) => (
                    <div key={ind.label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-coal/70">{ind.label}</span>
                        <span className="text-sm font-bold font-data" style={{ color: ind.color }}>
                          {ind.value.toFixed(1).replace(".", ",")}%
                        </span>
                      </div>
                      <div className="h-2.5 bg-coal/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${ind.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: ind.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 pt-6 border-t border-coal/5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-coal/40">
                      Diagnóstico Geral
                    </p>
                    <p className="font-data text-3xl font-bold text-coal mt-1">44,7%</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-coal/40">
                      Nível de maturidade
                    </p>
                    <span
                      className="inline-block mt-1.5 px-3 py-1.5 text-xs font-bold rounded-full"
                      style={{ backgroundColor: `${PRODUCT_COLOR_HEX}12`, color: PRODUCT_COLOR_HEX }}
                    >
                      3 · Gerencial
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
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

      {/* Software na prática */}
      <section className="py-24 lg:py-32 bg-ice">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-coal/40">
                <span className="h-px w-8 rounded-full" style={{ backgroundColor: PRODUCT_COLOR }} />
                O software na prática
              </span>
              <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-coal">
                Sua jornada ESG em um só lugar
              </h2>
              <p className="mt-4 text-base text-coal/60 leading-relaxed">
                Diagnóstico de materialidade, formulários por pilar e evolução do nível de
                maturidade — tudo centralizado, rastreável e sempre à mão.
              </p>
            </div>
          </FadeIn>

          {/* Tela principal — muda conforme a miniatura clicada */}
          <FadeIn delay={0.1}>
            <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-coal/10 shadow-2xl shadow-coal/10 bg-white">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-coal/5 bg-coal/[0.02]">
                <span className="w-2.5 h-2.5 rounded-full bg-coal/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-coal/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-coal/15" />
                <div className="ml-3 px-3 py-1 rounded-md bg-coal/[0.03] text-[11px] text-coal/40 font-medium">
                  Plataforma ESG · {shot.caption}
                </div>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={shot.src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    className="w-full h-auto"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </FadeIn>

          {/* Miniaturas navegáveis */}
          <div className="mt-5 flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
            {softwareShots.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => setActiveShot(i)}
                aria-label={`Ver ${s.caption}`}
                aria-pressed={i === activeShot}
                className={`group rounded-xl overflow-hidden border-2 transition-all duration-200 w-32 sm:w-40 ${
                  i === activeShot
                    ? "border-lime shadow-lg shadow-coal/10 scale-[1.03]"
                    : "border-coal/10 opacity-55 hover:opacity-100 hover:border-coal/25"
                }`}
              >
                <Image
                  src={s.src}
                  alt=""
                  width={s.width}
                  height={s.height}
                  className="w-full h-auto"
                />
                <span
                  className={`block px-2 py-1.5 text-[10px] font-semibold text-center border-t border-coal/5 ${
                    i === activeShot ? "text-coal bg-lime/10" : "text-coal/50 bg-white"
                  }`}
                >
                  {s.caption}
                </span>
              </button>
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

          {/* Tabela comparativa Recursos / Entregas */}
          <FadeIn delay={0.1}>
            <div className="max-w-5xl mx-auto overflow-x-auto">
              <div className="min-w-[720px] rounded-2xl overflow-hidden border border-ice/10 bg-white/5">
                {/* Cabeçalho */}
                <div className="grid grid-cols-[1.3fr_1fr_1fr]">
                  <div className="p-6 flex items-end">
                    <span className="text-xs font-bold uppercase tracking-widest text-ice/60 border-b-2 border-lime pb-2">
                      Recursos / Entregas
                    </span>
                  </div>
                  <div className="p-6 text-center border-l border-ice/10">
                    {/* Espaçador invisível para alinhar com a badge "Recomendado" */}
                    <div className="mb-2">
                      <span className="invisible inline-block px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider">
                        Recomendado
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-ice">{planHeaders.start.name}</h3>
                    <p className="mt-2 text-xs text-ice/50 leading-relaxed">{planHeaders.start.tagline}</p>
                  </div>
                  <div className="p-6 text-center border-l border-lime/25 bg-lime/5">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 text-[10px] font-bold text-coal bg-lime rounded-full uppercase tracking-wider">
                        Recomendado
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-ice">{planHeaders.performance.name}</h3>
                    <p className="mt-2 text-xs text-ice/50 leading-relaxed">{planHeaders.performance.tagline}</p>
                  </div>
                </div>

                {/* Linhas */}
                {planFeatures.map((row) => (
                  <div key={row.label} className="grid grid-cols-[1.3fr_1fr_1fr] border-t border-ice/8">
                    <div className="px-6 py-3.5 flex items-center">
                      <span className={`text-sm ${row.start ? "text-ice/80" : "text-ice/70"}`}>{row.label}</span>
                    </div>
                    <div className="px-6 py-3.5 flex items-center justify-center border-l border-ice/10">
                      {row.start ? (
                        <span className="w-6 h-6 rounded-full bg-leaf/20 flex items-center justify-center">
                          <Check size={13} className="text-lime" strokeWidth={3} />
                        </span>
                      ) : (
                        <span className="text-xs text-ice/25 line-through decoration-ice/30">indisponível</span>
                      )}
                    </div>
                    <div className="px-6 py-3.5 flex items-center justify-center border-l border-lime/25 bg-lime/5">
                      {row.performance ? (
                        <span className="w-6 h-6 rounded-full bg-lime/20 flex items-center justify-center">
                          <Check size={13} className="text-lime" strokeWidth={3} />
                        </span>
                      ) : (
                        <span className="text-xs text-ice/25 line-through decoration-ice/30">indisponível</span>
                      )}
                    </div>
                  </div>
                ))}

                {/* Rodapé com CTAs */}
                <div className="grid grid-cols-[1.3fr_1fr_1fr] border-t border-ice/10">
                  <div className="p-6" />
                  <div className="p-6 text-center border-l border-ice/10">
                    <p className="text-xs font-bold uppercase tracking-wider text-ice/70">{planHeaders.start.footerTitle}</p>
                    <p className="mt-1 text-[11px] text-ice/45 leading-relaxed">{planHeaders.start.footerText}</p>
                    <Link
                      href={planHeaders.start.cta.href}
                      className="mt-4 inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-ice border border-ice/20 rounded-full hover:bg-ice/5 transition-all group"
                    >
                      {planHeaders.start.cta.label}
                      <ArrowRight size={13} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="p-6 text-center border-l border-lime/25 bg-lime/5">
                    <p className="text-xs font-bold uppercase tracking-wider text-lime">{planHeaders.performance.footerTitle}</p>
                    <p className="mt-1 text-[11px] text-ice/45 leading-relaxed">{planHeaders.performance.footerText}</p>
                    <Link
                      href={planHeaders.performance.cta.href}
                      className="mt-4 inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-coal bg-lime rounded-full hover:bg-lime/80 transition-all group"
                    >
                      {planHeaders.performance.cta.label}
                      <ArrowRight size={13} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
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
