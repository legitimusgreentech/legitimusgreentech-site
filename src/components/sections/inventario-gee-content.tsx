"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, FileSpreadsheet, Monitor, Search, AlertTriangle } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

const PRODUCT_COLOR = "var(--color-gold)";
const PRODUCT_COLOR_HEX = "#aa8e6b";

const scopes = [
  {
    n: "1",
    title: "Escopo 1 — Emissões Diretas",
    desc: "Fontes próprias da organização: queima de combustíveis, processos industriais, emissões fugitivas (extintores, ar-condicionado), frota própria.",
  },
  {
    n: "2",
    title: "Escopo 2 — Energia",
    desc: "Emissões indiretas provenientes da aquisição externa de energia, associada à produção dessa energia que é demandada pela empresa.",
  },
  {
    n: "3",
    title: "Escopo 3 — Cadeia de Valor",
    desc: "Demais emissões indiretas ao longo da cadeia de valor: fornecedores, logística terceirizada, resíduos, viagens a negócio, uso e descarte dos produtos vendidos — tudo que está além do controle direto mas é consequência da atividade da empresa.",
  },
];

const services = [
  {
    icon: FileSpreadsheet,
    number: "01",
    name: "Via Ferramenta GHG Protocol",
    subtitle: "Metodologia tradicional",
    description:
      "Elaboração do inventário com a ferramenta oficial do Programa Brasileiro GHG Protocol (FGV). Planilha de cálculo para emissões atmosféricas — combustíveis, energia, ar-condicionado — convertendo dados em toneladas de CO₂ equivalente. Processo validável pela ISO 14064-3.",
    deliverables: [
      "Cálculo de Escopo 1, 2 e 3",
      "Inventário formatado para publicação no Registro Público de Emissões",
      "Relatório técnico completo",
      "Base para estratégia de descarbonização",
    ],
    note: "Obrigatório para empresas que geram mais de 10.000 t CO₂eq/ano",
  },
  {
    icon: Monitor,
    number: "02",
    name: "Software de Gestão de Emissões GEE e Descarbonização",
    subtitle: "Software de Emissões — gestão contínua",
    description:
      "Software de gestão de emissões de GEE para empresas: organize seu inventário de carbono, defina metas de descarbonização e gere relatórios ESG. Elaboramos o inventário diretamente no software de emissões — cálculos automáticos, dashboards por escopo e acompanhamento contínuo da jornada.",
    deliverables: [
      "Inventário de carbono organizado no software",
      "Definição de metas de descarbonização",
      "Geração de relatórios ESG (GRI, SASB, SBTi)",
      "Acompanhamento contínuo — não apenas pontual",
    ],
    note: "Ideal para empresas que querem gestão contínua, não pontual",
  },
  {
    icon: Search,
    number: "03",
    name: "Diagnóstico de Fontes",
    subtitle: "Mapeamento antes do inventário",
    description:
      "Muitas empresas desconhecem todas as suas fontes emissoras — extintores de incêndio, frota terceirizada, gases de refrigeração. O diagnóstico mapeia e valida cada fonte antes da elaboração do inventário, garantindo completude e rastreabilidade.",
    deliverables: [
      "Matriz de verificação de fontes GEE (Escopos 1, 2 e 3)",
      "Entrevistas técnicas e análise documental",
      "Relatório de diagnóstico com pontos de observação",
      "Análise SWOT das fontes identificadas",
    ],
    note: "Recomendado como primeiro passo para novos inventários",
  },
];

const validationSteps = [
  { label: "Elaboração", desc: "Consultoria e elaboração do inventário via GHG Protocol ou Software de Emissões" },
  { label: "Publicação", desc: "Publicação no Registro Público de Emissões da FGV (sem auditoria)" },
  { label: "Validação", desc: "Organismo certificador audita rastreabilidade e veracidade conforme ISO 14064-3" },
  { label: "Certificação", desc: "Emissão do selo (Bronze, Prata ou Ouro)" },
];

const faqItems = [
  {
    q: "Qual a diferença entre elaborar e auditar o inventário?",
    a: "A Legitimus elabora o inventário de emissões. A auditoria é feita por organismos certificadores independentes (ISO 14064-3). Um consultor não pode auditar a mesma empresa que preparou — são funções separadas por norma.",
  },
  {
    q: "O que é Net Zero e por que empresas são multadas por greenwashing?",
    a: "Net Zero significa chegar ao limite do plano de descarbonização — reduzindo todas as emissões possíveis. Comprar créditos de carbono para compensar sem reduzir primeiro é considerado greenwashing. Créditos de carbono só devem cobrir o remanescente irredutível.",
  },
  {
    q: "Minha empresa é obrigada a elaborar o inventário?",
    a: "Empresas que geram mais de 10.000 toneladas de CO₂ equivalente por ano são obrigadas a elaborar e publicar o inventário. Para as demais, o inventário é estratégico para ESG, acesso a financiamentos e cadeias de fornecimento exigentes.",
  },
  {
    q: "Como o Escopo 3 funciona na prática?",
    a: "As emissões dos seus fornecedores (Escopo 3 da sua empresa) devem fechar com o Escopo 1 do fornecedor. É um ciclo: o que um reporta como Escopo 3 é o Escopo 1 ou 2 de outro elo da cadeia.",
  },
  {
    q: "Qual a diferença entre usar GHG Protocol e um Software de Emissões?",
    a: "O GHG Protocol usa a ferramenta oficial da FGV, indicada para inventários pontuais e publicação no Registro Público. O software de emissões oferece gestão contínua — dashboards por escopo, metas de descarbonização e geração de relatórios ESG em ambiente digital integrado. A escolha depende do estágio e necessidade da sua empresa.",
  },
];

export function InventarioGeeContent() {
  return (
    <>
      {/* Escopos */}
      <section className="py-16 bg-white border-b border-coal/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-coal/30 mb-10">
              Estrutura do Inventário de Emissões — GHG Protocol
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {scopes.map((scope, i) => (
              <FadeIn key={scope.n} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-ice border border-coal/5">
                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold mb-4"
                    style={{
                      backgroundColor: `${PRODUCT_COLOR_HEX}15`,
                      color: PRODUCT_COLOR_HEX,
                    }}
                  >
                    Escopo {scope.n}
                  </div>
                  <h3 className="font-sans text-sm font-semibold text-coal mb-2">{scope.title}</h3>
                  <p className="text-sm text-coal/50 leading-relaxed">{scope.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3 serviços */}
      <section className="py-24 lg:py-32 bg-ice">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-coal/40">
                <span className="h-px w-8 rounded-full" style={{ backgroundColor: PRODUCT_COLOR }} />
                Como podemos ajudar
              </span>
              <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-coal">
                Três formas de estruturar seu inventário
              </h2>
              <p className="mt-4 text-base text-coal/50">
                Dependendo do estágio e necessidade da sua empresa, oferecemos ferramentas específicas e personalizadas.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {services.map((svc, i) => (
              <FadeIn key={svc.number} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-coal/5 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Left */}
                    <div
                      className="p-8 lg:p-10 flex flex-col justify-between"
                      style={{ borderRight: "1px solid rgba(31,42,51,0.06)" }}
                    >
                      <div>
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                          style={{ backgroundColor: `${PRODUCT_COLOR_HEX}15` }}
                        >
                          <svc.icon size={20} style={{ color: PRODUCT_COLOR }} />
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-coal/30 mb-1">
                          {svc.subtitle}
                        </div>
                        <h3 className="font-heading text-xl font-bold text-coal">{svc.name}</h3>
                      </div>
                      {svc.note && (
                        <div className="mt-6 flex items-start gap-2 p-3 rounded-xl bg-ice border border-coal/5">
                          <AlertTriangle size={13} className="text-coal/30 flex-shrink-0 mt-0.5" />
                          <p className="text-xs text-coal/40 leading-relaxed">{svc.note}</p>
                        </div>
                      )}
                    </div>

                    {/* Right */}
                    <div className="p-8 lg:p-10 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <p className="text-sm text-coal/60 leading-relaxed">{svc.description}</p>
                      <ul className="space-y-2">
                        {svc.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-coal/70">
                            <Check
                              size={14}
                              style={{ color: PRODUCT_COLOR }}
                              className="flex-shrink-0 mt-0.5"
                            />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Fluxo de validação */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#1f2a33] via-[#1a2329] to-[#141c21]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest" style={{ color: PRODUCT_COLOR }}>
                <span className="h-px w-8 rounded-full" style={{ backgroundColor: PRODUCT_COLOR }} />
                Do inventário ao selo
              </span>
              <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ice">
                Publicação e validação do inventário
              </h2>
              <p className="mt-4 text-base text-ice/50">
                O inventário pode ser publicado sem auditoria — mas somente com validação de
                organismo certificador ele recebe o selo de qualidade (Bronze, Prata ou Ouro).
              </p>
            </div>
          </FadeIn>

          <div className="relative">
            <div
              className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px"
              style={{ backgroundColor: `${PRODUCT_COLOR_HEX}30` }}
            />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {validationSteps.map((step, i) => (
                <FadeIn key={step.label} delay={i * 0.08}>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-heading font-bold relative z-10"
                      style={{ backgroundColor: `${PRODUCT_COLOR_HEX}20`, color: PRODUCT_COLOR }}
                    >
                      {i + 1}
                    </div>
                    <h3 className="text-sm font-semibold text-ice mb-2">{step.label}</h3>
                    <p className="text-xs text-ice/40 leading-relaxed">{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ técnico */}
      <section className="py-24 lg:py-32 bg-ice">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-coal/40">
                <span className="h-px w-8 rounded-full" style={{ backgroundColor: PRODUCT_COLOR }} />
                Dúvidas frequentes
              </span>
              <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-bold text-coal">
                Perguntas técnicas respondidas
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-2xl mx-auto space-y-4">
            {faqItems.map((item, i) => (
              <FadeIn key={item.q} delay={i * 0.06}>
                <div className="bg-white rounded-2xl border border-coal/5 p-6">
                  <h3 className="font-sans text-sm font-semibold text-coal mb-3">{item.q}</h3>
                  <p className="text-sm text-coal/60 leading-relaxed">{item.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32" style={{ background: `linear-gradient(135deg, ${PRODUCT_COLOR_HEX}15 0%, #f2f5f7 100%)` }}>
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
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-coal">
              Pronto para estruturar seu inventário de emissões?
            </h2>
            <p className="mt-4 text-base text-coal/60 max-w-2xl mx-auto">
              Fale com nossa equipe e descubra qual abordagem — GHG Protocol, Software de Emissões ou Diagnóstico
              de Fontes — faz mais sentido para a realidade da sua empresa.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white rounded-full hover:opacity-80 transition-all duration-200 group min-h-[48px]"
                style={{ backgroundColor: PRODUCT_COLOR }}
              >
                Solicitar proposta
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-coal border border-coal/15 rounded-full hover:bg-coal/5 transition-all duration-200 min-h-[48px]"
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
