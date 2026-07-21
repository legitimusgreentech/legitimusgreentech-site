"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowRight, Droplets, Leaf, Zap, ShieldCheck, RefreshCw } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

const ecoBoxHighlights = [
  { icon: Droplets, label: "Remove 85 a 95% de óleos e gorduras" },
  { icon: ShieldCheck, label: "Conformidade com CONAMA nº 430" },
  { icon: Zap, label: "Sem adição de produtos químicos" },
  { icon: Leaf, label: "Instalação em rede de efluentes existente" },
];

const ecoBoxBenefits = [
  "Aço inoxidável AISI 304 liga 18.8 — alta durabilidade",
  "Cesto gradeador perfurado para resíduos sólidos",
  "Módulo coalescente de alta eficiência na separação",
  "Visor de nível de gordura para monitoramento contínuo",
  "Reduz frequência e custo de intervenções com caminhões",
  "Previne entupimentos, maus odores e autuações sanitárias",
];

const ecoBoxSpecs = [
  { label: "Dimensões", value: "500 × 350 × 380 mm" },
  { label: "Massa", value: "10 kg" },
  { label: "Volume interno", value: "40 L" },
  { label: "Volume interno útil", value: "27 L" },
  { label: "Vazão máxima", value: "54 L/min" },
  { label: "Material", value: "Aço inox AISI 304" },
];

const compostieraLines = [
  {
    name: "Linha Smart",
    subtitle: "Para pequenos volumes",
    img: "/equipamentos/linha-smart.png",
    capacity: "Modelos Smart 2 e Smart 5 (até 5 kg/ciclo)",
    electrical: "Monofásico 127V / 220V",
    cycle: "6h a 12h",
    consumption: "0,12 kWh",
    delivery: "7 a 20 dias úteis",
    use: "Restaurantes pequenos, escritórios, residências",
  },
  {
    name: "Linha ECO",
    subtitle: "Para operações industriais",
    img: "/equipamentos/composteira.png",
    capacity: "ECO 30 (350–700 refeições/dia) · ECO 100 (1.200 refeições/dia) · ECO 120 · ECO 300",
    electrical: "ECO 30: monofásico 220V · ECO 100/120: 220V / 380V trifásico",
    cycle: "6h a 22h",
    consumption: "1,9 a 8 kWh (por modelo)",
    delivery: "7 a 20 dias úteis",
    use: "Indústrias, hotéis, hospitais, eventos, condomínios",
  },
];

const compostieiraBenefits = [
  "100% produto brasileiro — fabricado e desenvolvido no Brasil",
  "Redução de até 90% do volume de resíduos orgânicos",
  "Geração de composto substrato rico em nutrientes",
  "Geração de até 60% em litros de água de reuso (Linha ECO)",
  "Processo por decomposição mecânica, sem aditivos",
  "Produzidas com energia verde — certificadas Intertek ETL",
  "Alinhadas a 9 Objetivos de Desenvolvimento Sustentável da ONU",
];

const eco100Stats = [
  { value: "3 ton", label: "aterro zero / 30 dias" },
  { value: "2,9 ton", label: "CO₂ mitigadas" },
  { value: "300 kg", label: "composto gerado" },
  { value: "1.800 L", label: "água de reuso" },
  { value: "120", label: "sacos plásticos mitigados" },
  { value: "20", label: "árvores compensadas" },
];

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
                  <a
                    href="#eco-box"
                    className="group flex items-center justify-between gap-3 py-4 text-sm font-semibold text-coal hover:text-petrol transition-colors"
                  >
                    Separadora de Água e Óleo
                    <ArrowRight size={15} className="text-coal/30 group-hover:text-petrol group-hover:translate-x-1 transition-all" />
                  </a>
                  <a
                    href="#composteiras"
                    className="group flex items-center justify-between gap-3 py-4 text-sm font-semibold text-coal hover:text-petrol transition-colors"
                  >
                    Composteira Automatizada
                    <ArrowRight size={15} className="text-coal/30 group-hover:text-petrol group-hover:translate-x-1 transition-all" />
                  </a>
                </nav>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Produto 1 — Eco Box */}
      <section id="eco-box" className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <FadeIn>
            <div className="flex items-start gap-4 mb-16">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-coal/5 flex items-center justify-center text-xl font-heading font-bold text-coal/30">
                01
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-coal/40 mb-1">
                  Produto próprio Legitimus
                </p>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-coal">
                  Caixa Separadora Eco Box
                </h2>
                <p className="mt-2 text-base text-coal/60">
                  Tratamento eficiente de águas residuais em cozinhas comerciais e industriais
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Descrição + destaques */}
            <FadeIn>
              <div className="space-y-8">
                <div>
                  <h3 className="font-sans text-base font-semibold text-coal mb-3">Como funciona</h3>
                  <p className="text-sm text-coal/60 leading-relaxed">
                    A Eco Box é uma caixa de gordura inteligente fabricada em aço inoxidável AISI 304
                    liga 18.8. Inicia com uma filtragem por cesto gradeador perfurado que separa resíduos
                    sólidos, seguida de um módulo coalescente que acelera a separação do óleo da água —
                    removendo de <strong className="text-coal/80">85 a 95% de gordura, óleo e resíduos</strong>.
                  </p>
                  <p className="mt-3 text-sm text-coal/60 leading-relaxed">
                    É compacta, instala na rede de efluentes existente e dispensa o uso de produtos
                    químicos. O visor de nível de gordura permite acompanhar o processo durante a lavagem
                    em pias e cubas.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ecoBoxHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 p-4 rounded-xl bg-ice border border-coal/5"
                    >
                      <item.icon size={18} className="text-coal/40 flex-shrink-0" />
                      <span className="text-sm text-coal/70 font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="font-sans text-base font-semibold text-coal mb-4">Benefícios operacionais</h3>
                  <ul className="space-y-2">
                    {ecoBoxBenefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-coal/60">
                        <Check size={14} className="text-leaf flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Imagem + Dados técnicos */}
            <FadeIn delay={0.15}>
              <div className="space-y-6">
              {/* Foto Eco Box + selo Aço Inox */}
              <div className="relative rounded-2xl bg-white border border-coal/5 h-64 flex items-center justify-center p-6">
                <Image
                  src="/equipamentos/eco-box.png"
                  alt="Caixa Separadora de Água e Óleo Eco Box em aço inox"
                  width={981}
                  height={884}
                  className="object-contain max-h-52 w-auto"
                />
                <Image
                  src="/equipamentos/selo-aco-inox.png"
                  alt="Selo Aço Inox"
                  width={866}
                  height={858}
                  className="absolute bottom-4 right-4 w-16 h-16 object-contain drop-shadow"
                />
              </div>
              <div className="bg-ice rounded-2xl border border-coal/5 overflow-hidden">
                <div className="px-6 py-5 border-b border-coal/5">
                  <h3 className="font-sans text-sm font-bold text-coal uppercase tracking-wider">
                    Dados Técnicos — Caixa Eco Box
                  </h3>
                </div>
                <div className="divide-y divide-coal/5">
                  {ecoBoxSpecs.map((spec) => (
                    <div key={spec.label} className="flex items-center justify-between px-6 py-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-coal/40">
                        {spec.label}
                      </span>
                      <span className="text-sm font-semibold text-coal font-data">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-5 bg-white border-t border-coal/5">
                  <p className="text-xs text-coal/40 leading-relaxed">
                    Conformidade com a resolução CONAMA nº 430. Empresa credenciada pelo
                    Instituto Lixo Zero Brasil.
                  </p>
                </div>
              </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="h-px bg-coal/5 mx-auto max-w-7xl" />

      {/* Produto 2 — Composteira Automatizada */}
      <section id="composteiras" className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <FadeIn>
            <div className="flex items-start gap-4 mb-16">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-coal/5 flex items-center justify-center text-xl font-heading font-bold text-coal/30">
                02
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-coal/40 mb-1">
                  Composteira Automatizada
                </p>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-coal">
                  Composteira Automatizada
                </h2>
                <p className="mt-2 text-base text-coal/60">
                  Recicladoras elétricas de resíduos orgânicos — do resíduo ao composto em horas
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Como funciona */}
          <FadeIn>
            <div className="bg-gradient-to-br from-[#124e6a] via-[#0e3f56] to-[#0a2e40] rounded-2xl p-8 lg:p-12 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
                {[
                  { label: "Entrada", desc: "Resíduos orgânicos: frutas, vegetais, massas, ensopados, ovos, carnes, peixe e hortaliças", color: "var(--color-lime)" },
                  { label: "Processo", desc: "Decomposição mecânica em ciclos de 6h a 22h. Sem uso de aditivos ou água. Redução de até 90% do volume.", color: "var(--color-cyan)" },
                  { label: "Saída", desc: "Composto substrato rico em nutrientes + água de reuso (até 60% do volume — Linha ECO)", color: "var(--color-gold)" },
                ].map((step, i) => (
                  <div key={step.label}>
                    {i > 0 && (
                      <div className="hidden lg:block" />
                    )}
                    <div
                      className="w-3 h-3 rounded-full mx-auto mb-4"
                      style={{ backgroundColor: step.color }}
                    />
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: step.color }}>
                      {step.label}
                    </p>
                    <p className="text-sm text-ice/60 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Linhas de produto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {compostieraLines.map((line, i) => (
              <FadeIn key={line.name} delay={i * 0.1}>
                <div className="rounded-2xl bg-ice border border-coal/5 overflow-hidden h-full">
                  <div className="relative h-56 bg-white border-b border-coal/5">
                    <Image
                      src={line.img}
                      alt={`Composteira ${line.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="p-8">
                  <h3 className="font-heading text-xl font-bold text-coal mb-1">{line.name}</h3>
                  <p className="text-xs text-coal/40 uppercase tracking-wider mb-5">{line.subtitle}</p>
                  <dl className="space-y-3">
                    {[
                      { dt: "Capacidade", dd: line.capacity },
                      { dt: "Elétrico", dd: line.electrical },
                      { dt: "Ciclo", dd: line.cycle },
                      { dt: "Consumo", dd: line.consumption },
                      { dt: "Entrega", dd: line.delivery },
                      { dt: "Indicado para", dd: line.use },
                    ].map((row) => (
                      <div key={row.dt} className="flex items-start gap-3">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-coal/30 w-28 flex-shrink-0 pt-0.5">
                          {row.dt}
                        </dt>
                        <dd className="text-sm text-coal/70">{row.dd}</dd>
                      </div>
                    ))}
                  </dl>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Locação Verde */}
          <FadeIn>
            <div className="mb-16 rounded-2xl border border-[#124e6a]/20 bg-gradient-to-r from-[#124e6a]/6 to-transparent p-8 flex flex-col lg:flex-row items-center gap-8">
              <div className="flex items-start gap-6 flex-1">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#124e6a]/10 flex items-center justify-center">
                  <RefreshCw size={22} className="text-[#124e6a]" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-coal/40 mb-1">
                    Modalidade exclusiva
                  </div>
                  <h3 className="font-heading text-xl font-bold text-coal mb-2">Locação Verde</h3>
                  <p className="text-sm text-coal/60 leading-relaxed max-w-2xl">
                    Transforme sua gestão de resíduos com a{" "}
                    <strong className="text-coal/80">Locação Verde</strong>. Sua empresa utiliza as
                    composteiras por assinatura — sem investimento inicial elevado,
                    com manutenção e suporte técnico inclusos. Ideal para quem quer começar rápido ou
                    validar a solução antes de adquirir.
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {["Sem compra obrigatória", "Manutenção inclusa", "Suporte técnico", "Início imediato"].map((tag) => (
                      <li
                        key={tag}
                        className="px-3 py-1 text-xs font-semibold rounded-full"
                        style={{ backgroundColor: "#124e6a14", color: "#124e6a" }}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-shrink-0 w-full sm:w-80 lg:w-96">
                <Image
                  src="/equipamentos/locacao-verde.png"
                  alt="Locação Verde — você loca, nós cuidamos: composteira por assinatura"
                  width={1340}
                  height={892}
                  className="w-full h-auto max-h-80 object-contain"
                />
              </div>
            </div>
          </FadeIn>

          {/* Benefícios + Stats ECO 100 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn>
              <div>
                <h3 className="font-sans text-base font-semibold text-coal mb-5">Por que adquirir a nossa Composteira</h3>
                <ul className="space-y-3">
                  {compostieiraBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Check size={14} className="text-leaf flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-coal/70 leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-ice rounded-2xl border border-coal/5 overflow-hidden">
                <div className="px-6 py-5 border-b border-coal/5">
                  <h3 className="font-sans text-sm font-bold text-coal uppercase tracking-wider">
                    ECO 100 — Resultados em 30 dias de operação
                  </h3>
                  <p className="text-xs text-coal/40 mt-1">100 kg reciclados diariamente</p>
                </div>
                <div className="grid grid-cols-2 gap-px bg-coal/5">
                  {eco100Stats.map((stat) => (
                    <div key={stat.label} className="bg-white px-5 py-4 text-center">
                      <div className="font-data text-xl font-bold text-coal">{stat.value}</div>
                      <div className="text-xs text-coal/40 mt-1 leading-snug">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
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
