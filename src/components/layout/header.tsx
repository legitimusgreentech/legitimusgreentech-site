"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BRAND } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquear scroll do body quando menu mobile aberto
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-petrol/5"
          : "bg-[#124e6a]"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-18 items-center justify-between">
          {/* Logo placeholder */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 min-h-[44px]">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-lime/20 border-2 border-lime/40 border-dashed flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-lime">L</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span
                className={`font-heading text-lg sm:text-xl font-bold tracking-wide transition-colors ${
                  scrolled ? "text-coal" : "text-ice"
                }`}
              >
                Legitimus
              </span>
              <span
                className={`font-sans text-[11px] sm:text-sm font-semibold tracking-wider uppercase transition-colors ${
                  scrolled ? "text-sage" : "text-lime"
                }`}
              >
                GreenTech
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 py-2 min-h-[44px] flex items-center ${
                  scrolled
                    ? "text-coal/70 hover:text-petrol"
                    : "text-ice/70 hover:text-ice"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BRAND.evolutoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-coal bg-lime rounded-full hover:bg-lime/80 transition-colors duration-200 min-h-[44px]"
            >
              Área do Cliente
            </a>
          </div>

          {/* Mobile toggle - min 44px touch target */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-3 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg transition-colors active:bg-white/10 ${
              scrolled ? "text-coal" : "text-ice"
            }`}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu - full screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-16 bg-[#124e6a]/98 backdrop-blur-lg z-40 overflow-y-auto"
          >
            <div className="px-6 py-8 space-y-1">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center min-h-[52px] px-4 text-lg font-medium text-ice/80 hover:text-lime active:bg-white/5 rounded-xl transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-6">
                <a
                  href={BRAND.evolutoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-6 py-4 text-base font-semibold text-coal bg-lime rounded-2xl active:bg-lime/80 min-h-[52px]"
                >
                  Área do Cliente
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
