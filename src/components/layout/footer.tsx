import Link from "next/link";
import Image from "next/image";
import { Award, ShieldCheck } from "lucide-react";
import { BRAND, PRODUCTS, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-coal to-coal/95 text-ice/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex">
              <Image
                src="/logo-blue.png"
                alt="Legitimus GreenTech"
                width={338}
                height={137}
                className="h-9 w-auto"
                style={{ width: "auto" }}
              />
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

        {/* Certificações */}
        <div className="mt-16 pt-10 border-t border-ice/10">
          <p className="text-xs font-semibold uppercase tracking-widest text-ice/30 mb-5">
            Certificações e Credenciamentos
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-ice/15 bg-white/5">
              <div className="w-8 h-8 rounded-lg bg-lime/15 flex items-center justify-center flex-shrink-0">
                <Award size={16} className="text-lime" />
              </div>
              <div>
                <p className="text-xs font-bold text-ice/80 leading-none">ISO 9001</p>
                <p className="text-[11px] text-ice/45 mt-1 leading-none">Quality Management</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-ice/15 bg-white/5">
              <div className="w-8 h-8 rounded-lg bg-[#7ab442]/20 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={16} className="text-[#7ab442]" />
              </div>
              <div>
                <p className="text-xs font-bold text-ice/80 leading-none">Empresa Credenciada</p>
                <p className="text-[11px] text-ice/45 mt-1 leading-none">Instituto Lixo Zero Brasil</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-ice/10 flex flex-col sm:flex-row justify-between items-center gap-4">
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
