"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

const clients = [32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52].map((n) => ({
  src: `/clients/${n}.jpg`,
  alt: "Cliente certificado pela Legitimus GreenTech",
}));

const LOGO_WIDTH = 200;
const GAP = 24;
const ITEM_TOTAL = LOGO_WIDTH + GAP;
const SPEED = 0.15; // bem mais lento

export function ClientsLogos() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const offsetRef = useRef(0);
  const targetRef = useRef(0); // para animação suave ao clicar
  const pausedRef = useRef(false);

  const setWidth = clients.length * ITEM_TOTAL;

  useEffect(() => {
    function animate() {
      if (!pausedRef.current) {
        targetRef.current -= SPEED;
      }

      // Interpola suavemente para o target (smooth ao clicar nas setas)
      offsetRef.current += (targetRef.current - offsetRef.current) * 0.08;

      // Loop infinito
      if (Math.abs(targetRef.current) >= setWidth) {
        targetRef.current += setWidth;
        offsetRef.current += setWidth;
      }
      if (targetRef.current > 0) {
        targetRef.current -= setWidth;
        offsetRef.current -= setWidth;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    }
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [setWidth]);

  function slide(direction: "left" | "right") {
    const amount = ITEM_TOTAL * 3;
    targetRef.current += direction === "left" ? amount : -amount;
  }

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

      <div className="relative group">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-ice to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-ice to-transparent z-10 pointer-events-none" />

        {/* Arrow left */}
        <button
          onClick={() => slide("left")}
          aria-label="Anterior"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-coal/10 flex items-center justify-center text-coal/40 hover:text-petrol hover:border-petrol/30 active:bg-petrol/5 transition-all min-h-[44px] min-w-[44px] opacity-0 group-hover:opacity-100 sm:opacity-100"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Arrow right */}
        <button
          onClick={() => slide("right")}
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
                key={`${client.src}-${i}`}
                className="flex-shrink-0 w-[200px] h-20 flex items-center justify-center rounded-xl bg-white/60 border border-coal/5 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 px-4"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={160}
                  height={64}
                  className="object-contain max-h-14 w-auto select-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
