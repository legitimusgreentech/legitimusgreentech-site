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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-petrol/5"
          : "bg-gradient-to-r from-petrol via-petrol/95 to-coal"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Logo placeholder */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Espaço reservado para o logotipo */}
            <div className="w-10 h-10 rounded-lg bg-lime/20 border-2 border-lime/40 border-dashed flex items-center justify-center">
              <span className="text-xs font-bold text-lime">L</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span
                className={`font-heading text-xl font-bold tracking-wide transition-colors ${
                  scrolled ? "text-coal" : "text-ice"
                }`}
              >
                Legitimus
              </span>
              <span
                className={`font-sans text-sm font-semibold tracking-wider uppercase transition-colors ${
                  scrolled ? "text-sage" : "text-lime"
                }`}
              >
                GreenTech
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
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
              className="inline-flex items-center px-5 py-2 text-sm font-semibold text-coal bg-lime rounded-full hover:bg-lime/80 transition-colors duration-200"
            >
              Área do Cliente
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? "text-coal" : "text-ice"
            }`}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-petrol/98 backdrop-blur-lg border-b border-ice/10 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-ice/80 hover:text-lime transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={BRAND.evolutoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-coal bg-lime rounded-full"
              >
                Área do Cliente
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
