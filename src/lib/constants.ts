export const BRAND = {
  name: "Legitimus GreenTech",
  tagline: "Atuamos integrando sustentabilidade com tecnologia, método e inteligência de dados.",
  description:
    "Greentech que estrutura inventários de emissões, Certificação ESG, Certificação Lixo Zero e equipamentos ambientais com tecnologia e gestão via plataforma digital.",
  email: "contato@legitimusgreentech.com.br",
  url: "https://legitimus.greentech",
  evolutoUrl: "https://legitimusgreentech.evolutto.com.br",
} as const;

export const COLORS = {
  coal: "#1f2a33",
  ice: "#f2f5f7",
  limeGreen: "#c1ff72",
  petrolBlue: "#124e6a",
  leafGreen: "#7ab442",
  goldEarth: "#aa8e6b",
  cyan: "#00c7fd",
  sage: "#5d9c86",
  silver: "#c0c0c0",
} as const;

export type ProductKey = "inventario-gee" | "esg" | "lixo-zero" | "maquinas-equipamentos";

export interface Product {
  key: ProductKey;
  name: string;
  shortName: string;
  headline: string;
  description: string;
  color: string;
  colorName: string;
  href: string;
  benefits: string[];
  icon: string;
  cta: string;
}

export const PRODUCTS: Product[] = [
  {
    key: "inventario-gee",
    name: "Inventário de Emissões GEE",
    shortName: "Inventário GEE",
    headline: "Seja selo ouro no GHG Protocol",
    description:
      "Seja selo ouro no GHG. Elaboramos inventário completo via ferramenta ou software de emissões — Escopo 1, 2 e 3 com método, rastreabilidade e publicação no Registro Público.",
    color: COLORS.goldEarth,
    colorName: "gold",
    href: "/inventario-gee",
    benefits: [
      "Escopo 1, 2 e 3 completo",
      "GHG Protocol ou Software de Emissões",
      "Base para créditos de carbono",
      "Validação e auditoria ISO 14064-3",
      "Publicação no Registro Público de Emissões (FGV)",
    ],
    icon: "BarChart3",
    cta: "Seja selo Ouro",
  },
  {
    key: "esg",
    name: "Certificação ESG",
    shortName: "ESG",
    headline: "Diagnóstico, indicadores e governança integrados",
    description:
      "Da estruturação à implementação, com software e relatórios alinhados a ABNT PR 2030, GRI e SASB.",
    color: COLORS.leafGreen,
    colorName: "leaf",
    href: "/esg",
    benefits: [
      "Diagnóstico conforme ABNT PR 2030",
      "Indicadores claros e rastreáveis",
      "Software ESG personalizado",
      "Consultoria para implementação",
      "Relatórios GRI e SASB",
    ],
    icon: "Shield",
    cta: "Certifique-se",
  },
  {
    key: "lixo-zero",
    name: "Certificação Lixo Zero",
    shortName: "Lixo Zero",
    headline: "Consultoria e auditoria credenciada ILZB",
    description:
      "Implementação completa da metodologia com gestão por etapas via plataforma digital.",
    color: COLORS.petrolBlue,
    colorName: "petrol",
    href: "/lixo-zero",
    benefits: [
      "Credenciados pelo ILZB",
      "Implementação completa",
      "Gestão por etapas digital",
      "Rastreabilidade total",
      "Referência nacional no setor",
    ],
    icon: "Recycle",
    cta: "Certifique-se",
  },
  {
    key: "maquinas-equipamentos",
    name: "Equipamentos Ambientais",
    shortName: "Equipamentos",
    headline: "O ciclo da Sustentabilidade",
    description:
      "Torne sua operação mais sustentável com equipamentos ambientais de alta eficiência.",
    color: COLORS.silver,
    colorName: "silver",
    href: "/maquinas-equipamentos",
    benefits: [
      "Caixa Separadora Eco Box (água e óleo)",
      "Composteira Automatizada",
      "Redução de 90% no volume de resíduos orgânicos",
      "Instalação e suporte técnico",
      "Integração ao programa ambiental",
    ],
    icon: "Cog",
    cta: "Adquira Já",
  },
];

export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Inventário GEE", href: "/inventario-gee" },
  { label: "ESG", href: "/esg" },
  { label: "Lixo Zero", href: "/lixo-zero" },
  { label: "Equipamentos", href: "/maquinas-equipamentos" },
  { label: "Contato", href: "/contato" },
] as const;
