"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Shield, Recycle, Cog } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background com gradiente forte */}
      <div className="absolute inset-0 bg-gradient-to-br from-petrol via-coal to-coal" />

      {/* Decorative orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-20 right-[-5%] w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, var(--color-lime) 0%, transparent 60%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, var(--color-cyan) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div>
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
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ice leading-tight"
            >
              Estruturamos a{" "}
              <span className="text-lime">sustentabilidade</span>{" "}
              com inteligência
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-lg text-ice/60 leading-relaxed max-w-lg"
            >
              Tecnologia, método e dados para integrar a sustentabilidade
              às decisões do seu negócio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-sm font-semibold text-coal bg-lime rounded-full hover:bg-lime/80 active:bg-lime/70 transition-all duration-200 group min-h-[48px]"
              >
                Fale com um especialista
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="#produtos"
                className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-sm font-semibold text-ice border border-ice/20 rounded-full hover:bg-ice/5 active:bg-ice/10 transition-all duration-200 min-h-[48px]"
              >
                Conheça nossos produtos
              </Link>
            </motion.div>
          </div>

          {/* Visual: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Card principal - Dashboard mockup */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-ice/10 p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-lime/60" />
                  <div className="w-3 h-3 rounded-full bg-cyan/60" />
                  <div className="w-3 h-3 rounded-full bg-gold/60" />
                </div>

                {/* Fake dashboard */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-ice/40 uppercase tracking-wider">
                      Painel de Sustentabilidade
                    </span>
                    <span className="text-xs text-lime font-semibold">Ao vivo</span>
                  </div>

                  {/* Charts mockup */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 rounded-xl p-4 border border-ice/5">
                      <div className="text-xs text-ice/40 mb-2">Emissões GEE</div>
                      <div className="text-2xl font-bold text-lime font-data">
                        -23%
                      </div>
                      <div className="mt-3 flex items-end gap-1 h-12">
                        {[40, 65, 50, 80, 60, 45, 35].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t bg-lime/30"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-ice/5">
                      <div className="text-xs text-ice/40 mb-2">Score ESG</div>
                      <div className="text-2xl font-bold text-cyan font-data">
                        87.4
                      </div>
                      <div className="mt-3 h-12 flex items-center justify-center">
                        <svg viewBox="0 0 80 40" className="w-full h-full">
                          <path
                            d="M 0 35 Q 20 10, 40 20 T 80 5"
                            fill="none"
                            stroke="var(--color-cyan)"
                            strokeWidth="2"
                            opacity="0.6"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Progress bars */}
                  <div className="space-y-3 pt-2">
                    {PRODUCTS.map((p) => (
                      <div key={p.key} className="flex items-center gap-3">
                        <span className="text-xs text-ice/40 w-24 truncate">
                          {p.shortName}
                        </span>
                        <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${60 + Math.random() * 35}%` }}
                            transition={{ duration: 1.2, delay: 1 + Math.random() * 0.5 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: p.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-3 shadow-lg border border-coal/5 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-leaf/10 flex items-center justify-center">
                  <Recycle size={16} className="text-leaf" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-coal">Lixo Zero</div>
                  <div className="text-[10px] text-coal/50">Certificação ativa</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-coal/5 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-petrol/10 flex items-center justify-center">
                  <Shield size={16} className="text-petrol" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-coal">ESG Score</div>
                  <div className="text-[10px] text-lime font-semibold">A+</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
