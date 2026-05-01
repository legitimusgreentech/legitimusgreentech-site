import type { Metadata } from "next";
import { Cinzel, Montserrat, Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OrganizationJsonLd, ProductsJsonLd, WebSiteJsonLd } from "@/components/seo/json-ld";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export { viewport } from "./viewport";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  metadataBase: new URL("https://legitimus.greentech"),
  title: {
    default: "Legitimus GreenTech | Sustentabilidade com Inteligência e Tecnologia",
    template: "%s | Legitimus GreenTech",
  },
  description:
    "Greentech especializada em estruturar a sustentabilidade empresarial com tecnologia, método e inteligência de dados. Inventário de emissões, ESG, Lixo Zero e equipamentos ambientais.",
  keywords: [
    "greentech",
    "sustentabilidade empresarial",
    "inventário de emissões",
    "inventário GEE",
    "gases efeito estufa",
    "ESG",
    "certificação lixo zero",
    "crédito de carbono",
    "consultoria ambiental",
    "tecnologia sustentável",
    "equipamentos ambientais",
    "agenda ESG",
    "governança ambiental",
    "descarbonização",
    "pegada de carbono",
    "GHG Protocol",
    "ISO 14064",
    "SBTi",
    "diagnóstico ESG",
    "plataforma ESG",
    "software emissões",
    "gestão de resíduos",
    "composteira automatizada",
    "matriz de materialidade",
    "relatório sustentabilidade",
  ],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  authors: [{ name: "Legitimus GreenTech" }],
  creator: "Legitimus GreenTech",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Legitimus GreenTech",
    title: "Legitimus GreenTech | Sustentabilidade com Inteligência e Tecnologia",
    description:
      "Estruturamos a sustentabilidade empresarial com tecnologia, método e inteligência de dados.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legitimus GreenTech",
    description:
      "Estruturamos a sustentabilidade empresarial com tecnologia, método e inteligência de dados.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cinzel.variable} ${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <ProductsJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#1f2a33",
              color: "#f2f5f7",
              border: "1px solid rgba(193, 255, 114, 0.15)",
              borderRadius: "12px",
              fontSize: "14px",
            },
          }}
          closeButton
          richColors
        />
      </body>
    </html>
  );
}
