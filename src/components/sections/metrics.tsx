"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: 100, suffix: "+", label: "Projetos entregues" },
  { value: 60, suffix: "+", label: "Empresas atendidas" },
  { value: 4, suffix: "", label: "Produtos integrados" },
  { value: 98, suffix: "%", label: "Satisfação dos clientes" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.span
      ref={ref}
      className="font-data text-4xl sm:text-5xl lg:text-6xl font-bold text-lime"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4 }}
    >
      {inView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {value}{suffix}
        </motion.span>
      ) : (
        "0"
      )}
    </motion.span>
  );
}

export function Metrics() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#124e6a] via-[#0e3f56] to-[#0a2e40]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <AnimatedNumber value={metric.value} suffix={metric.suffix} />
              <p className="mt-2 text-sm text-ice/40 font-medium">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
