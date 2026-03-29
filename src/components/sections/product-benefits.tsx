"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import type { Product } from "@/lib/constants";

interface ProductBenefitsProps {
  product: Product;
}

export function ProductBenefits({ product }: ProductBenefitsProps) {
  return (
    <section className="py-24 lg:py-32 bg-ice">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Benefícios */}
          <div>
            <FadeIn>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-coal/40">
                <span
                  className="memphis-line rounded-full"
                  style={{ backgroundColor: product.color }}
                />
                O que entregamos
              </span>
              <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-bold text-coal">
                {product.headline}
              </h2>
            </FadeIn>

            <div className="mt-8 space-y-3">
              {product.benefits.map((benefit, index) => (
                <FadeIn key={benefit} delay={index * 0.06}>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-coal/5">
                    <div
                      className="flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center"
                      style={{ backgroundColor: `${product.color}18` }}
                    >
                      <Check size={14} style={{ color: product.color }} />
                    </div>
                    <p className="text-sm font-medium text-coal/80">
                      {benefit}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Screenshot placeholder */}
          <FadeIn delay={0.15}>
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-coal/5"
              style={{ backgroundColor: `${product.color}08` }}
            >
              {/* Fake screenshot da plataforma */}
              <div className="absolute inset-0 p-6 sm:p-8">
                <div className="h-full rounded-xl bg-white/80 border border-coal/5 p-4 sm:p-6 overflow-hidden">
                  {/* Top bar */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: product.color }} />
                    <div className="w-2.5 h-2.5 rounded-full bg-coal/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-coal/10" />
                    <div className="ml-auto text-[10px] font-semibold text-coal/30 uppercase tracking-wider">
                      Plataforma Legitimus
                    </div>
                  </div>

                  {/* Fake content */}
                  <div className="h-3 w-2/3 bg-coal/8 rounded-full mb-2" />
                  <div className="h-2 w-1/2 bg-coal/5 rounded-full mb-6" />

                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-16 rounded-lg"
                        style={{ backgroundColor: `${product.color}${10 + i * 5}` }}
                      />
                    ))}
                  </div>

                  <div className="h-24 rounded-lg bg-coal/3 border border-coal/5" />
                </div>
              </div>

              {/* Etiqueta */}
              <div className="absolute bottom-3 right-3">
                <span
                  className="px-3 py-1 text-[10px] font-semibold rounded-full text-white/90"
                  style={{ backgroundColor: product.color }}
                >
                  Substituir por screenshot real
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
