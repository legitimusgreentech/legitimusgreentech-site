"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import type { Product } from "@/lib/constants";

interface ProductHeroProps {
  product: Product;
}

// Une as duas últimas palavras com espaço não separável — evita uma palavra órfã
// sozinha na última linha do título (ex.: "GEE" isolado).
function noOrphan(text: string): string {
  return text.replace(/ (\S+)$/, " $1");
}

export function ProductHero({ product }: ProductHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-16 overflow-hidden">
      {/* Background com gradiente do produto */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#124e6a] via-[#0e3f56] to-[#0a2e40]" />
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-15"
        style={{
          background: `radial-gradient(circle at top right, ${product.color} 0%, transparent 50%)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-ice/40 hover:text-ice transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Voltar ao início
          </Link>
        </motion.div>

        <div className="max-w-3xl">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 rounded-full mb-8"
            style={{ backgroundColor: product.color }}
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-ice leading-tight"
          >
            {noOrphan(product.name)}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-lg lg:text-xl text-ice/60 leading-relaxed"
          >
            {product.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10"
          >
            <Link
              href="/contato"
              className="inline-flex items-center px-8 py-4 text-base sm:text-sm font-semibold text-ice rounded-full transition-all duration-200 group hover:opacity-80 active:opacity-70 min-h-[48px] border"
              style={{ backgroundColor: product.color, borderColor: "rgba(255,255,255,0.22)" }}
            >
              Solicitar proposta
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
