"use client";

import { Check } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import type { Product } from "@/lib/constants";

interface ProductBenefitsProps {
  product: Product;
}

export function ProductBenefits({ product }: ProductBenefitsProps) {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-coal/40">
            <span
              className="memphis-line rounded-full"
              style={{ backgroundColor: product.color }}
            />
            Beneficios
          </span>
          <h2 className="mt-4 font-heading text-3xl lg:text-4xl font-bold text-coal max-w-xl">
            {product.headline}
          </h2>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.benefits.map((benefit, index) => (
            <FadeIn key={benefit} delay={index * 0.08}>
              <div className="flex items-start gap-4 p-6 rounded-xl bg-white border border-coal/5">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${product.color}20` }}
                >
                  <Check size={16} style={{ color: product.color }} />
                </div>
                <p className="text-sm font-medium text-coal/80 leading-relaxed">
                  {benefit}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
