"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, Shield, Recycle, Cog } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { PRODUCTS } from "@/lib/constants";

const iconMap = {
  BarChart3,
  Shield,
  Recycle,
  Cog,
} as const;

export function ProductsShowcase() {
  return (
    <section id="produtos" className="py-24 lg:py-32 bg-ice">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-petrol">
              <span className="memphis-line bg-petrol rounded-full" />
              Nossos Produtos
            </span>
            <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-coal">
              O que fazemos
            </h2>
            <p className="mt-4 text-lg text-coal/60 leading-relaxed mx-auto">
              Quatro frentes. Uma plataforma. Resultado mensurável.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCTS.map((product, index) => {
            const Icon = iconMap[product.icon as keyof typeof iconMap];
            return (
              <FadeIn key={product.key} delay={index * 0.1}>
                <Link
                  href={product.href}
                  className="group relative block p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-coal/5 hover:border-transparent active:bg-coal/[.02] transition-all duration-300 hover:shadow-xl hover:shadow-coal/8 overflow-hidden min-h-[44px]"
                >
                  {/* Color accent left bar */}
                  <div
                    className="absolute top-0 left-0 w-1 h-full rounded-r-full transition-all duration-300 group-hover:w-1.5"
                    style={{ backgroundColor: product.color }}
                  />

                  <div className="flex items-start gap-5">
                    <div
                      className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${product.color}15` }}
                    >
                      <Icon size={26} style={{ color: product.color }} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-sans text-lg font-semibold text-coal">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-sm text-coal/60 leading-relaxed">
                        {product.headline}
                      </p>

                      <div
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                        style={{ color: product.color }}
                      >
                        Saiba mais
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
