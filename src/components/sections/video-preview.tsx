"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, CalendarDays, BarChart3, FileText, Users } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

// Dados ilustrativos do portal do cliente (infográfico combinado em reunião — dados fictícios)
const cronograma = [
  { fase: "Diagnóstico", status: "Concluído", pct: 100, color: "#7ab442" },
  { fase: "Plano de Ação", status: "Concluído", pct: 100, color: "#7ab442" },
  { fase: "Implementação", status: "Em andamento", pct: 64, color: "#00c7fd" },
  { fase: "Pré-auditoria", status: "Agendada", pct: 0, color: "#c0c0c0" },
];

const sideNav = [
  { icon: LayoutDashboard, label: "Visão Geral", active: true },
  { icon: CalendarDays, label: "Cronograma", active: false },
  { icon: BarChart3, label: "Indicadores", active: false },
  { icon: FileText, label: "Relatórios", active: false },
];

export function VideoPreview() {
  return (
    <section className="py-24 lg:py-32 bg-ice">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texto */}
          <FadeIn>
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-petrol">
                <span className="memphis-line bg-petrol rounded-full" />
                Como funciona
              </span>
              <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-coal">
                Etapas do Projeto
              </h2>
              <p className="mt-4 text-base text-coal/60 leading-relaxed">
                Entenda em poucos minutos como a plataforma organiza cada etapa
                do seu projeto.
              </p>

              {/* 5 etapas do projeto */}
              <div className="mt-8 space-y-4">
                {[
                  {
                    step: "01",
                    title: "Acesso ao Portal do Cliente",
                    text: "Receba acesso exclusivo à plataforma e acompanhe todas as informações em um único ambiente.",
                  },
                  {
                    step: "02",
                    title: "Planejamento e Estruturação do Projeto",
                    text: "Definição do escopo, cronograma, responsáveis e etapas para uma execução organizada.",
                  },
                  {
                    step: "03",
                    title: "Execução e Acompanhamento Integrado",
                    text: "Todas as atividades conduzidas e monitoradas diretamente pela plataforma.",
                  },
                  {
                    step: "04",
                    title: "Atualizações em Tempo Real",
                    text: "Visualize status, avanços, pendências e indicadores do projeto em tempo real.",
                  },
                  {
                    step: "05",
                    title: "Relatórios Inteligentes e Entregas Automatizadas",
                    text: "Documentos, indicadores e entregas programadas gerados de forma prática e centralizada.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-petrol/8 flex items-center justify-center text-xs font-bold text-petrol font-data">
                      {item.step}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-coal">{item.title}</p>
                      <p className="mt-0.5 text-sm text-coal/55 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-base font-medium text-coal/80 leading-relaxed border-l-2 border-lime pl-4">
                Menos planilhas, menos trocas de e-mails, mais controle,
                visibilidade e resultados em tempo real.
              </p>
            </div>
          </FadeIn>

          {/* Infográfico do Portal do Cliente — visão ilustrativa com dados fictícios */}
          <FadeIn delay={0.15}>
            <div className="rounded-2xl overflow-hidden border border-coal/10 shadow-2xl shadow-coal/10 bg-white">
              {/* Barra do app */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-coal/5 bg-coal/[0.02]">
                <span className="w-2.5 h-2.5 rounded-full bg-coal/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-coal/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-coal/15" />
                <span className="ml-2 text-[11px] text-coal/40 font-medium">
                  Portal do Cliente · Legitimus GreenTech
                </span>
                <span className="ml-auto flex items-center gap-1.5 text-[10px] font-semibold text-leaf">
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-leaf"
                  />
                  Tempo real
                </span>
              </div>

              <div className="flex">
                {/* Sidebar */}
                <aside className="hidden sm:flex flex-col w-40 flex-shrink-0 bg-gradient-to-b from-[#124e6a] to-[#0a2e40] p-3.5 gap-1">
                  {sideNav.map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-[11px] font-medium ${
                        item.active ? "bg-lime/15 text-lime" : "text-ice/45"
                      }`}
                    >
                      <item.icon size={13} />
                      {item.label}
                    </div>
                  ))}
                  <div className="mt-auto flex items-center gap-2 px-2.5 pt-3 border-t border-ice/10">
                    <div className="w-6 h-6 rounded-full bg-lime/20 flex items-center justify-center">
                      <Users size={11} className="text-lime" />
                    </div>
                    <span className="text-[10px] text-ice/50 leading-tight">Sua equipe<br />conectada</span>
                  </div>
                </aside>

                {/* Conteúdo */}
                <div className="flex-1 min-w-0 p-4 sm:p-5 bg-[#f7f9fa] space-y-4">
                  {/* Cards de topo */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Progresso geral", value: "72%", color: "#7ab442" },
                      { label: "Atividades", value: "18/25", color: "#00c7fd" },
                      { label: "Pendências", value: "2", color: "#aa8e6b" },
                    ].map((c) => (
                      <div key={c.label} className="bg-white rounded-xl border border-coal/5 p-3">
                        <p className="text-[9px] font-semibold uppercase tracking-wider text-coal/40 truncate">
                          {c.label}
                        </p>
                        <p className="font-data text-lg font-bold mt-0.5" style={{ color: c.color }}>
                          {c.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Cronograma */}
                  <div className="bg-white rounded-xl border border-coal/5 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-coal/40 mb-3">
                      Cronograma do projeto
                    </p>
                    <div className="space-y-2.5">
                      {cronograma.map((f) => (
                        <div key={f.fase} className="flex items-center gap-3">
                          <span className="text-[11px] font-medium text-coal/70 w-24 flex-shrink-0 truncate">
                            {f.fase}
                          </span>
                          <div className="flex-1 h-1.5 bg-coal/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${f.pct}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="h-full rounded-full"
                              style={{ backgroundColor: f.color }}
                            />
                          </div>
                          <span
                            className="text-[9px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: `${f.color}18`, color: f.color === "#c0c0c0" ? "#6b7680" : f.color }}
                          >
                            {f.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-center text-[9px] text-coal/30">
                    Visão ilustrativa do Portal do Cliente — dados fictícios
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
