"use client";

import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

// Placeholders — substituir pelos logos reais dos clientes
const clients = [
  { name: "Cliente 1", slug: "cliente-1" },
  { name: "Cliente 2", slug: "cliente-2" },
  { name: "Cliente 3", slug: "cliente-3" },
  { name: "Cliente 4", slug: "cliente-4" },
  { name: "Cliente 5", slug: "cliente-5" },
  { name: "Cliente 6", slug: "cliente-6" },
  { name: "Cliente 7", slug: "cliente-7" },
  { name: "Cliente 8", slug: "cliente-8" },
  { name: "Cliente 9", slug: "cliente-9" },
  { name: "Cliente 10", slug: "cliente-10" },
];

const LOGO_WIDTH = 160; // px por item (w-40)
const GAP = 24; // gap-6
const ITEM_TOTAL = LOGO_WIDTH + GAP;
const SPEED = 0.5; // px por frame

export function ClientsLogos() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const [, forceRender] = useState(0);

  // Largura total de um "set" de logos
  const setWidth = clients.length * ITEM_TOTAL;

  useEffect(() => {
    function animate() {
      if (!pausedRef.current) {
        offsetRef.current -= SPEED;
        // Reset quando percorreu um set completo (loop infinito)
        if (Math.abs(offsetRef.current) >= setWidth) {
          offsetRef.current += setWidth;
        }
      }
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    }
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [setWidth]);

  function nudge(direction: "left" | "right") {
    const amount = ITEM_TOTAL * 2;
    offsetRef.current += direction === "left" ? amount : -amount;
  }

  // Duplicar logos 3x para garantir preenchimento contínuo
  const allLogos = [...clients, ...clients, ...clients];

  return (
    <section className="py-12 lg:py-16 border-y border-coal/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-coal/30 mb-8">
            Empresas que confiam na Legitimus GreenTech
          </p>
        </FadeIn>
      </div>

      {/* Carousel container */}
      <div className="relative group">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-ice to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-ice to-transparent z-10 pointer-events-none" />

        {/* Arrow left */}
        <button
          onClick={() => nudge("left")}
          aria-label="Anterior"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-coal/10 flex items-center justify-center text-coal/40 hover:text-petrol hover:border-petrol/30 active:bg-petrol/5 transition-all min-h-[44px] min-w-[44px] opacity-0 group-hover:opacity-100 sm:opacity-100"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Arrow right */}
        <button
          onClick={() => nudge("right")}
          aria-label="Próximo"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-coal/10 flex items-center justify-center text-coal/40 hover:text-petrol hover:border-petrol/30 active:bg-petrol/5 transition-all min-h-[44px] min-w-[44px] opacity-0 group-hover:opacity-100 sm:opacity-100"
        >
          <ChevronRight size={18} />
        </button>

        {/* Track */}
        <div
          className="overflow-hidden px-12 sm:px-16"
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
          onTouchStart={() => { pausedRef.current = true; }}
          onTouchEnd={() => { pausedRef.current = false; }}
        >
          <div
            ref={trackRef}
            className="flex gap-6 will-change-transform"
            style={{ width: "max-content" }}
          >
            {allLogos.map((client, i) => (
              <div
                key={`${client.slug}-${i}`}
                className="flex-shrink-0 w-40 h-16 flex items-center justify-center rounded-xl bg-white/60 border border-coal/5 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                {/* Substituir por <Image> com logo real */}
                <span className="text-sm font-semibold text-coal/50 select-none whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
