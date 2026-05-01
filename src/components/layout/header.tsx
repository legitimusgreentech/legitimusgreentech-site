"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BRAND } from "@/lib/constants";
import { usePathname } from "next/navigation";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  const activePageLink =
    NAV_LINKS.find((l) =>
      l.href === "/" ? pathname === "/" : pathname.startsWith(l.href)
    )?.href ?? null;

  const activeColor = scrolled ? "#124e6a" : "#c1ff72";
  const hoverColor = scrolled ? "rgba(18,78,106,0.28)" : "rgba(255,255,255,0.28)";

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
          {/* Logo */}
          <Link href="/" className="flex items-center min-h-[44px]">
            <Image
              src={scrolled ? "/logo-light.png" : "/logo-blue.png"}
              alt="Legitimus GreenTech"
              width={300}
              height={80}
              className="h-11 sm:h-12 w-auto transition-opacity duration-300"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`relative text-sm font-medium transition-colors duration-200 py-2 min-h-[44px] flex items-center ${
                  scrolled
                    ? "text-coal/70 hover:text-petrol"
                    : "text-ice/70 hover:text-ice"
                }`}
              >
                {link.label}
                {activePageLink === link.href && (
                  <motion.span
                    layoutId="nav-underline-active"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: activeColor }}
                    transition={{ type: "spring", stiffness: 280, damping: 18 }}
                  />
                )}
                {hoveredLink === link.href && hoveredLink !== activePageLink && (
                  <motion.span
                    layoutId="nav-underline-hover"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: hoverColor }}
                    transition={{ type: "spring", stiffness: 280, damping: 18 }}
                  />
                )}
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
