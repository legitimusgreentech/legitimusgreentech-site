import { BRAND, PRODUCTS } from "@/lib/constants";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Legitimus GreenTech",
    alternateName: ["Legitimus Green Tech", "Legitimus Ambiental"],
    url: BRAND.url,
    logo: `${BRAND.url}/logo-light.png`,
    description: BRAND.description,
    foundingDate: "2020",
    areaServed: {
      "@type": "Country",
      name: "Brazil",
    },
    knowsAbout: [
      "Inventario de Emissoes de Gases de Efeito Estufa",
      "ESG - Environmental Social Governance",
      "Certificacao Lixo Zero",
      "Equipamentos Ambientais",
      "Sustentabilidade Empresarial",
      "Creditos de Carbono",
      "GHG Protocol",
      "ISO 14064",
      "GHG Protocol Brasil",
      "Inventario GEE",
      "Descarbonizacao",
      "Instituto Lixo Zero Brasil",
    ],
    slogan: BRAND.tagline,
    sameAs: [
      "https://www.linkedin.com/company/legitimus-greentech",
      "https://www.instagram.com/legitimus.greentech",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "contato@legitimus.greentech",
      availableLanguage: "Portuguese",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Empresa Credenciada Instituto Lixo Zero Brasil",
        dateCreated: "2021",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Legitimus GreenTech",
    url: BRAND.url,
    description: BRAND.description,
    inLanguage: "pt-BR",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BRAND.url}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductsJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Produtos Legitimus GreenTech",
    description: "Solucoes de sustentabilidade empresarial com tecnologia",
    numberOfItems: PRODUCTS.length,
    itemListElement: PRODUCTS.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: product.name,
        description: product.description,
        url: `${BRAND.url}${product.href}`,
        provider: {
          "@type": "Organization",
          name: "Legitimus GreenTech",
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BRAND.url}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQJsonLd({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
