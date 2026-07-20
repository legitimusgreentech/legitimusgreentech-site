"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

const clients = [
  { file: "scania", name: "Scania" },
  { file: "volkswagen", name: "Volkswagen" },
  { file: "givaudan", name: "Givaudan" },
  { file: "mwm", name: "MWM" },
  { file: "mapfre", name: "Mapfre" },
  { file: "takasago", name: "Takasago" },
  { file: "casacor", name: "CasaCor" },
  { file: "ibema", name: "Ibema" },
  { file: "irani", name: "Irani" },
  { file: "lear-corporation", name: "Lear Corporation" },
  { file: "fidens", name: "Fidens" },
  { file: "ctg-brasil", name: "CTG Brasil" },
  { file: "odata", name: "Odata" },
  { file: "ftd-educacao", name: "FTD Educação" },
  { file: "grupo-polar", name: "Grupo Polar" },
  { file: "emibra", name: "Emibra" },
  { file: "euro-ambiental", name: "Euro Ambiental" },
  { file: "globokraft", name: "GloboKraft" },
  { file: "diadema-embalagens", name: "Diadema Embalagens" },
  { file: "bf-dias", name: "B&F Dias" },
  { file: "pacha", name: "Pacha" },
  { file: "rock-the-mountain", name: "Rock the Mountain" },
  { file: "shopping-metropole", name: "Shopping Metrópole" },
  { file: "industria-fox", name: "Indústria Fox" },
].map((c) => ({
  src: `/logos/${c.file}.png`,
  alt: `${c.name} — cliente da Legitimus GreenTech`,
}));

const LOGO_WIDTH = 240;
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
                className="group/logo flex-shrink-0 w-[240px] h-24 flex items-center justify-center rounded-xl bg-white border border-coal/5 opacity-90 hover:opacity-100 hover:shadow-md hover:shadow-coal/5 transition-all duration-300 px-5"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={200}
                  height={80}
                  className="object-contain max-h-16 max-w-[190px] w-auto select-none transition-transform duration-300 ease-out group-hover/logo:scale-110"
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
