"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

export function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#124e6a] via-[#0e3f56] to-[#0a2e40] px-8 py-16 lg:px-16 lg:py-24">
            {/* Decorative gradients */}
            <div
              className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-20"
              style={{
                background: "radial-gradient(circle, var(--color-lime) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-10"
              style={{
                background: "radial-gradient(circle, var(--color-cyan) 0%, transparent 70%)",
              }}
            />

            <div className="relative max-w-2xl">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ice leading-tight">
                Vamos estruturar seu projeto?
              </h2>
              <p className="mt-4 text-lg text-ice/60 leading-relaxed">
                Solicite uma proposta ou acesse a plataforma do cliente.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
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
                <a
                  href="https://legitimus.evoluto.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-sm font-semibold text-ice border border-ice/20 rounded-full hover:bg-ice/5 active:bg-ice/10 transition-all duration-200 min-h-[48px]"
                >
                  Acessar plataforma
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
