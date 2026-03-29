import Link from "next/link";
import { BRAND, PRODUCTS, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-coal to-coal/95 text-ice/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              {/* Logo placeholder */}
              <div className="w-8 h-8 rounded-lg bg-lime/20 border border-lime/30 border-dashed flex items-center justify-center">
                <span className="text-xs font-bold text-lime">L</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-heading text-xl font-bold text-ice tracking-wide">
                  Legitimus
                </span>
                <span className="font-sans text-sm font-semibold text-lime tracking-wider uppercase">
                  GreenTech
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-ice/50 leading-relaxed max-w-xs">
              {BRAND.tagline}. Tecnologia, método e inteligência de dados para
              a sustentabilidade empresarial.
            </p>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-ice/40 mb-4">
              Produtos
            </h3>
            <ul className="space-y-3">
              {PRODUCTS.map((product) => (
                <li key={product.key}>
                  <Link
                    href={product.href}
                    className="text-sm text-ice/50 hover:text-lime transition-colors duration-200 flex items-center gap-2"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: product.color }}
                    />
                    {product.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-ice/40 mb-4">
              Navegação
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ice/50 hover:text-lime transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-ice/40 mb-4">
              Contato
            </h3>
            <ul className="space-y-3 text-sm text-ice/50">
              <li>
                <a
                  href="mailto:contato@legitimus.greentech"
                  className="hover:text-lime transition-colors duration-200"
                >
                  contato@legitimus.greentech
                </a>
              </li>
              <li>
                <a
                  href={BRAND.evolutoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lime transition-colors duration-200"
                >
                  Área do Cliente
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-ice/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ice/30">
            &copy; {new Date().getFullYear()} Legitimus GreenTech. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            {PRODUCTS.map((product) => (
              <span
                key={product.key}
                className="memphis-dot"
                style={{ backgroundColor: product.color }}
                title={product.shortName}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
