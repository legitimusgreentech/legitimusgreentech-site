"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  Check,
  ChefHat,
  ChevronRight,
  Clock,
  Cog,
  Droplet,
  Factory,
  FlaskConical,
  Handshake,
  Headset,
  House,
  Layers,
  Leaf,
  Package,
  RefreshCw,
  Settings,
  ShieldCheck,
  Sprout,
  Store,
  Trash2,
  UtensilsCrossed,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

/* ------------------------------------------------------------------ */
/* L-SEPARATOR                                                         */
/* ------------------------------------------------------------------ */

const separatorHighlights: { icon: LucideIcon; label: string }[] = [
  { icon: Droplet, label: "Retenção de óleos e gorduras" },
  { icon: Leaf, label: "Apoio à gestão ambiental" },
  { icon: FlaskConical, label: "Sem uso de produtos químicos" },
  { icon: Layers, label: "Integração com sistemas existentes" },
];

const separatorBenefits = [
  "Auxilia no controle de contaminantes nos efluentes",
  "Contribui para a organização da gestão ambiental",
  "Operação prática e de baixa manutenção",
  "Reduz riscos de entupimentos e paradas operacionais",
  "Aplicável a diferentes tipos de estabelecimentos",
  "Alinhado às estratégias de sustentabilidade da empresa",
];

const separatorDifferentials: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: ShieldCheck, title: "Construção robusta", desc: "Estrutura em aço inoxidável, com alta durabilidade." },
  { icon: Droplet, title: "Separação eficiente", desc: "Auxilia na retenção de óleos, gorduras e resíduos." },
  { icon: Settings, title: "Praticidade operacional", desc: "Projeto funcional, com operação e manutenção simples." },
  { icon: Layers, title: "Versatilidade de aplicação", desc: "Disponível em diferentes configurações, conforme necessidade." },
];

const separatorApplications: { icon: LucideIcon; label: string }[] = [
  { icon: UtensilsCrossed, label: "Restaurantes" },
  { icon: ChefHat, label: "Cozinhas industriais" },
  { icon: Store, label: "Comércios" },
  { icon: Factory, label: "Indústrias" },
];

/* ------------------------------------------------------------------ */
/* COMPOSTEIRA AUTOMATIZADA                                            */
/* ------------------------------------------------------------------ */

const compostProcess: { icon: LucideIcon; label: string; desc: string; color: string }[] = [
  {
    icon: Trash2,
    label: "Entrada",
    desc: "Resíduos orgânicos de origem alimentar e vegetal.",
    color: "var(--color-lime)",
  },
  {
    icon: Cog,
    label: "Processo",
    desc: "Decomposição controlada, com ciclos automatizados de 6 a 24 horas, sem uso de aditivos químicos.",
    color: "var(--color-cyan)",
  },
  {
    icon: Sprout,
    label: "Saída",
    desc: "Composto orgânico estabilizado, rico em nutrientes, para reaproveitamento em áreas verdes e jardinagem.",
    color: "var(--color-leaf)",
  },
];

const compostLines = [
  {
    name: "Linha Compacta",
    desc: "Ideal para operações de menor porte, com alta eficiência e praticidade.",
    img: "/equipamentos/composteira-compacta.jpg",
    imgW: 824,
    imgH: 1130,
    specs: [
      { icon: Zap, label: "Alimentação elétrica", value: "Monofásica ou bifásica (conforme configuração)" },
      { icon: Clock, label: "Tempo de ciclo", value: "A partir de 6 horas" },
      { icon: BarChart3, label: "Consumo de energia", value: "Conforme capacidade e uso" },
      { icon: Package, label: "Capacidade de processamento", value: "Sob consulta (adequada à sua demanda)" },
      { icon: Store, label: "Aplicações indicadas", value: "Restaurantes, escritórios, condomínios, escolas e pequenas operações" },
    ],
  },
  {
    name: "Linha Profissional",
    desc: "Solução robusta para operações de maior volume de resíduos orgânicos.",
    img: "/equipamentos/composteira-profissional.jpg",
    imgW: 1118,
    imgH: 951,
    specs: [
      { icon: Zap, label: "Alimentação elétrica", value: "Monofásica, bifásica ou trifásica (conforme configuração)" },
      { icon: Clock, label: "Tempo de ciclo", value: "De 6 a 24 horas" },
      { icon: BarChart3, label: "Consumo de energia", value: "Conforme capacidade e uso" },
      { icon: Package, label: "Capacidade de processamento", value: "Sob consulta (dimensionada por projeto)" },
      { icon: Factory, label: "Aplicações indicadas", value: "Indústrias, hotéis, hospitais, centros de alimentação, eventos e grandes operações" },
    ],
  },
];

const rentalTags: { icon: LucideIcon; label: string }[] = [
  { icon: Handshake, label: "Sem compra obrigatória" },
  { icon: Wrench, label: "Manutenção inclusa" },
  { icon: Headset, label: "Suporte técnico" },
  { icon: CalendarCheck, label: "Início imediato" },
];

const commercialApplications = [
  "Restaurantes, cafeterias e padarias",
  "Hotéis, pousadas e eventos",
  "Condomínios residenciais e corporativos",
  "Escolas e instituições de ensino",
  "Clínicas, academias e espaços de bem-estar",
];

const industrialApplications: { icon: LucideIcon; before: string; strong?: string; after?: string }[] = [
  { icon: Settings, before: "Equipamentos de ", strong: "alta performance", after: ", com capacidade configurável" },
  { icon: RefreshCw, before: "Tratamento contínuo e ", strong: "automatizado" },
  { icon: BarChart3, before: "Redução significativa do volume de resíduos" },
  { icon: Leaf, before: "Geração de composto com potencial de reaproveitamento" },
  { icon: Sprout, before: "Apoio às metas de ", strong: "sustentabilidade", after: " e economia circular" },
];

/* ------------------------------------------------------------------ */
/* Componentes auxiliares                                              */
/* ------------------------------------------------------------------ */

function SectionHeader({
  number,
  title,
  subtitle,
  icon: Icon,
}: {
  number: string;
  title: string;
  subtitle: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="flex items-start gap-4 mb-12 lg:mb-16">
      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-petrol/10 flex items-center justify-center text-lg font-data font-bold text-petrol">
        {number}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-leaf mb-1">
          Solução ambiental Legitimus
        </p>
        <h2 className="flex items-center gap-3 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-coal">
          {title}
          {Icon && <Icon size={32} strokeWidth={1.75} className="text-leaf flex-shrink-0" aria-hidden />}
        </h2>
        <p className="mt-2 text-base text-coal/60">{subtitle}</p>
        <div className="mt-4 h-1 w-12 rounded-full bg-leaf" />
      </div>
    </div>
  );
}

function IllustrativeNote({ className = "" }: { className?: string }) {
  return <p className={`text-[11px] italic text-coal/40 ${className}`}>*Imagem ilustrativa</p>;
}

function CalloutBand({ title, text }: { title: string; text: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#124e6a] via-[#0e3f56] to-[#0a2e40] p-6 sm:p-8">
      <div className="relative flex flex-col sm:flex-row sm:items-center gap-5">
        <div className="flex items-center gap-5 sm:pr-6 sm:border-r sm:border-ice/15">
          <Leaf size={30} strokeWidth={1.5} className="text-ice/90 flex-shrink-0" aria-hidden />
          <p className="font-sans text-lg font-bold text-ice leading-snug">{title}</p>
        </div>
        <div className="flex-1">
          <p className="text-sm text-ice/70 leading-relaxed">{text}</p>
        </div>
        <Link
          href="/contato"
          className="inline-flex items-center justify-center gap-2 self-start sm:self-center px-5 py-2.5 text-sm font-semibold text-coal bg-lime rounded-full hover:bg-lime/85 transition-colors min-h-[44px] group"
        >
          Fale com a equipe
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Página                                                              */
/* ------------------------------------------------------------------ */

export function EquipamentosContent() {
  return (
    <>
      {/* Intro */}
      <section className="py-24 lg:py-32 bg-ice">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <FadeIn className="lg:col-span-2">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-coal/40">
                  <span className="h-px w-8 bg-coal/20 rounded-full" />
                  Equipamentos Ambientais
                </span>
                <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-coal">
                  Equipamentos que fecham o ciclo da sustentabilidade
                </h2>
                <p className="mt-2 text-base text-coal/40 font-medium">O ciclo da Sustentabilidade</p>
                <p className="mt-5 text-base text-coal/60 leading-relaxed">
                  A Legitimus oferece soluções ambientais inteligentes para impulsionar programas de
                  Lixo Zero, Aterro Zero e ESG, promovendo economia circular, redução de desperdícios,
                  diminuição dos impactos ambientais e mais eficiência operacional.
                </p>
              </div>
            </FadeIn>

            {/* Lista de equipamentos — navegação (lado direito) */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-coal/5 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-coal/40 mb-4">
                  Nossos equipamentos
                </p>
                <nav className="divide-y divide-coal/5">
                  {[
                    { href: "#l-separator", label: "Separação de Água e Óleo", icon: Droplet },
                    { href: "#composteiras", label: "Composteira Automatizada", icon: Sprout },
                  ].map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="group flex items-center justify-between gap-3 py-4 text-sm font-semibold text-coal hover:text-petrol transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <item.icon size={16} className="text-leaf" aria-hidden />
                        {item.label}
                      </span>
                      <ArrowRight size={15} className="text-coal/30 group-hover:text-petrol group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}
                </nav>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Produto 1 — L-SEPARATOR */}
      <section id="l-separator" className="py-24 lg:py-32 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              number="01"
              title="L-Separator"
              subtitle="Sistema de separação de água e óleo"
              icon={Droplet}
            />
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Descrição + destaques */}
            <FadeIn>
              <div className="space-y-8">
                <p className="text-base text-coal/70 leading-relaxed">
                  Solução eficiente para o gerenciamento de efluentes em cozinhas comerciais e
                  industriais.
                </p>

                <div>
                  <h3 className="font-sans text-base font-semibold text-coal mb-3">Como funciona</h3>
                  <p className="text-sm text-coal/60 leading-relaxed">
                    O L-Separator é um sistema de separação de água e óleo projetado para o tratamento
                    preliminar de efluentes com presença de óleos, gorduras e resíduos de origem alimentar.
                  </p>
                  <p className="mt-3 text-sm text-coal/60 leading-relaxed">
                    Por meio de um processo físico de separação, retém os contaminantes e direciona a água
                    tratada para a rede de efluentes, contribuindo para a conformidade ambiental e a
                    operação segura do estabelecimento.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {separatorHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 p-4 rounded-xl bg-ice border border-coal/5"
                    >
                      <item.icon size={20} strokeWidth={1.75} className="text-leaf flex-shrink-0" aria-hidden />
                      <span className="text-sm text-coal/80 font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="font-sans text-base font-semibold text-coal mb-4">Benefícios operacionais</h3>
                  <ul className="space-y-2.5">
                    {separatorBenefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-coal/70">
                        <Check size={16} strokeWidth={2.5} className="text-leaf flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Imagem + Diferenciais */}
            <FadeIn delay={0.15}>
              <div className="space-y-6">
                <figure>
                  <div className="relative rounded-2xl bg-white border border-coal/5 h-64 sm:h-72 flex items-center justify-center p-6">
                    <Image
                      src="/equipamentos/l-separator.jpg"
                      alt="L-Separator — caixa separadora de água e óleo em aço inox"
                      width={1367}
                      height={1103}
                      sizes="(max-width: 1024px) 90vw, 520px"
                      className="object-contain max-h-full w-auto mix-blend-multiply"
                    />
                    <Image
                      src="/equipamentos/selo-aco-inox.png"
                      alt="Selo Aço Inox"
                      width={866}
                      height={858}
                      className="absolute bottom-4 right-4 w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow"
                    />
                  </div>
                  <figcaption>
                    <IllustrativeNote className="mt-2 text-right" />
                  </figcaption>
                </figure>

                <div className="rounded-2xl border border-coal/5 bg-white overflow-hidden shadow-sm">
                  <div className="relative overflow-hidden flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#124e6a] to-[#0e3f56]">
                    <Settings size={20} className="text-ice/90" aria-hidden />
                    <h3 className="font-sans text-sm font-bold text-ice uppercase tracking-wider">
                      Diferenciais da solução
                    </h3>
                    <div
                      className="pointer-events-none absolute -right-6 top-0 h-full w-24 bg-leaf/80 -skew-x-[30deg]"
                      aria-hidden
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4">
                    {separatorDifferentials.map((d) => (
                      <div key={d.title} className="flex items-start gap-3 rounded-xl bg-ice p-4">
                        <d.icon size={22} strokeWidth={1.75} className="text-leaf flex-shrink-0 mt-0.5" aria-hidden />
                        <div>
                          <p className="text-sm font-semibold text-coal">{d.title}</p>
                          <p className="mt-0.5 text-xs text-coal/60 leading-relaxed">{d.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-6 pb-6">
                    <div className="flex items-center gap-4 mb-3">
                      <p className="text-xs font-bold uppercase tracking-widest text-petrol">Aplicações</p>
                      <span className="h-px flex-1 bg-coal/10" />
                    </div>
                    <ul className="grid grid-cols-2 gap-2">
                      {separatorApplications.map((a) => (
                        <li
                          key={a.label}
                          className="inline-flex items-center gap-2 rounded-lg bg-ice px-3 py-2 text-xs font-medium text-coal/80"
                        >
                          <a.icon size={16} strokeWidth={1.75} className="text-leaf" aria-hidden />
                          {a.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="mt-12">
              <CalloutBand
                title="Uma solução para cada operação."
                text="Consulte nossa equipe e conheça as configurações disponíveis para a sua necessidade."
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Divisor */}
      <div className="h-px bg-coal/5 mx-auto max-w-7xl" />

      {/* Produto 2 — Composteira Automatizada */}
      <section id="composteiras" className="py-24 lg:py-32 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              number="02"
              title="Composteira Automatizada"
              subtitle="Tecnologia para o tratamento de resíduos orgânicos e produção de composto"
            />
          </FadeIn>

          {/* Entrada → Processo → Saída */}
          <FadeIn>
            <div className="bg-gradient-to-br from-[#124e6a] via-[#0e3f56] to-[#0a2e40] rounded-2xl p-8 lg:p-10 mb-12">
              <ol className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-8 lg:gap-6 items-center">
                {compostProcess.map((step, i) => (
                  <li key={step.label} className="contents">
                    {i > 0 && (
                      <ChevronRight size={28} className="hidden lg:block text-cyan/70" aria-hidden />
                    )}
                    <div className="flex items-start gap-4">
                      <step.icon
                        size={44}
                        strokeWidth={1.5}
                        className="flex-shrink-0"
                        style={{ color: step.color }}
                        aria-hidden
                      />
                      <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-ice">
                          {step.label}
                        </p>
                        <p className="mt-1 text-sm text-ice/70 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>

          {/* Linhas de produto */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {compostLines.map((line, i) => (
              <FadeIn key={line.name} delay={i * 0.1}>
                <div className="relative h-full rounded-2xl bg-white border border-coal/10 overflow-hidden flex flex-col">
                  <div className="relative grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-6 items-center p-6 sm:p-8">
                    <figure>
                      <div className="relative h-52 sm:h-56">
                        <Image
                          src={line.img}
                          alt={`Composteira automatizada — ${line.name}`}
                          width={line.imgW}
                          height={line.imgH}
                          sizes="(max-width: 640px) 80vw, 260px"
                          className="h-full w-full object-contain mix-blend-multiply"
                        />
                      </div>
                      <figcaption>
                        <IllustrativeNote className="mt-2 text-center" />
                      </figcaption>
                    </figure>
                    <div className="border-l-4 border-leaf pl-5">
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-coal">{line.name}</h3>
                      <p className="mt-2 text-sm text-coal/60 leading-relaxed">{line.desc}</p>
                    </div>
                  </div>

                  <div className="mx-4 sm:mx-6 mb-6 rounded-xl bg-ice overflow-hidden flex-1">
                    <div className="flex items-center gap-3 px-5 py-3 border-b border-coal/5">
                      <Settings size={18} className="text-petrol" aria-hidden />
                      <p className="text-xs font-bold uppercase tracking-wider text-coal">
                        Principais características
                      </p>
                    </div>
                    <dl className="divide-y divide-coal/5">
                      {line.specs.map((s) => (
                        <div
                          key={s.label}
                          className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-1 sm:gap-4 px-5 py-3"
                        >
                          <dt className="flex items-center gap-3 text-sm font-semibold text-coal/80">
                            <s.icon size={18} strokeWidth={1.75} className="text-leaf flex-shrink-0" aria-hidden />
                            {s.label}
                          </dt>
                          <dd className="text-sm text-coal/60 sm:border-l sm:border-coal/10 sm:pl-4 pl-[30px]">
                            {s.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Diversos fabricantes */}
          <FadeIn>
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-leaf/25 bg-leaf/5 p-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-leaf/15 flex items-center justify-center">
                <Handshake size={22} className="text-leaf" aria-hidden />
              </div>
              <div>
                <p className="text-sm font-semibold text-coal">Trabalhamos com diversos fabricantes</p>
                <p className="mt-1 text-sm text-coal/60 leading-relaxed">
                  Selecionamos o equipamento mais adequado entre diferentes fabricantes parceiros,
                  considerando o volume de resíduos, o espaço disponível e a infraestrutura de cada
                  operação.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Locação Verde */}
          <FadeIn>
            <div className="relative mt-16 overflow-hidden rounded-2xl bg-gradient-to-br from-[#124e6a] via-[#0e3f56] to-[#0a2e40] p-8 lg:p-10">
              <div
                className="pointer-events-none absolute -right-24 -bottom-32 w-96 h-96 rounded-full border-[24px] border-leaf/20"
                aria-hidden
              />
              <div className="relative flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-leaf flex items-center justify-center shadow-lg shadow-black/20">
                  <RefreshCw size={30} className="text-white" aria-hidden />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-ice/60">
                    Modalidade exclusiva
                  </p>
                  <h3 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-ice">Locação Verde</h3>
                  <div className="mt-2 h-1 w-12 rounded-full bg-leaf" />
                  <p className="mt-4 text-sm sm:text-base text-ice/75 leading-relaxed max-w-3xl">
                    Transforme a gestão de resíduos orgânicos com a{" "}
                    <strong className="text-ice">Locação Verde</strong>. Um modelo de assinatura que
                    oferece o uso da composteira com assistência técnica, manutenção preventiva e suporte
                    especializado, sem investimento inicial elevado.
                  </p>
                  <ul className="mt-6 grid grid-cols-2 lg:flex lg:flex-wrap gap-3">
                    {rentalTags.map((tag) => (
                      <li
                        key={tag.label}
                        className="flex items-center gap-3 rounded-xl border border-ice/10 bg-white/10 px-4 py-3 text-sm font-medium text-ice"
                      >
                        <tag.icon size={20} strokeWidth={1.75} className="text-lime flex-shrink-0" aria-hidden />
                        {tag.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Aplicações */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FadeIn>
              <div className="h-full rounded-2xl border border-coal/10 bg-white overflow-hidden">
                <div className="flex items-center gap-5 px-6 sm:px-8 py-6 bg-leaf/10">
                  <div className="flex items-end gap-1 text-leaf flex-shrink-0" aria-hidden>
                    <Store size={36} strokeWidth={1.5} />
                    <House size={28} strokeWidth={1.5} />
                  </div>
                  <div className="border-l-2 border-leaf pl-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-coal/50">Aplicações</p>
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-coal">Comercial / Residencial</h3>
                  </div>
                </div>
                <div className="px-6 sm:px-8 py-6">
                  <p className="text-sm text-coal/60 leading-relaxed">
                    Soluções práticas e eficientes para a gestão de resíduos orgânicos em diferentes
                    ambientes.
                  </p>
                  <ul className="mt-4 divide-y divide-coal/5">
                    {commercialApplications.map((item) => (
                      <li key={item} className="flex items-center gap-3 py-3 text-sm font-medium text-coal/80">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-leaf/15 flex items-center justify-center">
                          <Check size={15} strokeWidth={3} className="text-leaf" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="h-full rounded-2xl border border-coal/10 bg-white overflow-hidden">
                <div className="flex items-center gap-5 px-6 sm:px-8 py-6 bg-petrol/10">
                  <Factory size={40} strokeWidth={1.5} className="text-petrol flex-shrink-0" aria-hidden />
                  <div className="border-l-2 border-leaf pl-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-coal/50">Aplicações</p>
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-coal">Industriais</h3>
                  </div>
                </div>
                <div className="px-6 sm:px-8 py-6">
                  <p className="text-sm text-coal/60 leading-relaxed">
                    Soluções robustas e dimensionadas para operações com maior geração de resíduos
                    orgânicos.
                  </p>
                  <ul className="mt-4 divide-y divide-coal/5">
                    {industrialApplications.map((item) => (
                      <li key={item.before} className="flex items-center gap-3 py-3 text-sm text-coal/70">
                        <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-petrol/10 flex items-center justify-center">
                          <item.icon size={15} className="text-petrol" aria-hidden />
                        </span>
                        <span>
                          {item.before}
                          {item.strong && <strong className="font-semibold text-petrol">{item.strong}</strong>}
                          {item.after}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="mt-12">
              <CalloutBand
                title="Transforme resíduos em valor ambiental."
                text="Consulte nossa equipe e conheça as configurações ideais para a sua operação."
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-coal">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-1 bg-silver rounded-full mx-auto mb-8"
            />
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ice">
              Encontre os equipamentos ideais para sua operação
            </h2>
            <p className="mt-4 text-base text-ice/50 max-w-xl mx-auto">
              Nossa equipe avalia sua operação e indica o modelo ideal, com instalação e suporte técnico inclusos.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-coal bg-silver rounded-full hover:bg-silver/80 transition-all duration-200 group min-h-[48px]"
              >
                Solicitar proposta
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
