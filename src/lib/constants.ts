export const BRAND = {
  name: "Legitimus GreenTech",
  tagline: "Sustentabilidade com método, tecnologia e resultado",
  description:
    "Greentech que estrutura inventários de emissões, agenda ESG, certificação Lixo Zero e equipamentos ambientais com tecnologia e gestão via plataforma digital.",
  url: "https://legitimus.greentech",
  evolutoUrl: "https://legitimus.evoluto.com.br",
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
}

export const PRODUCTS: Product[] = [
  {
    key: "inventario-gee",
    name: "Inventário de Emissões de GEE",
    shortName: "Inventário GEE",
    headline: "Seu inventário completo, do cálculo ao relatório",
    description:
      "Escopo 1, 2 e 3 com acompanhamento em tempo real via plataforma. Pontual ou recorrente.",
    color: COLORS.goldEarth,
    colorName: "gold",
    href: "/inventario-gee",
    benefits: [
      "Escopo 1, 2 e 3 completo",
      "Gestão em tempo real via plataforma",
      "Base para créditos de carbono",
      "Validação e auditoria",
      "Pontual ou recorrência mensal",
    ],
    icon: "BarChart3",
  },
  {
    key: "esg",
    name: "Agenda ESG",
    shortName: "ESG",
    headline: "Diagnóstico, indicadores e governança integrados",
    description:
      "Da estruturação à implementação, com software e relatórios alinhados a GRI e SASB.",
    color: COLORS.leafGreen,
    colorName: "leaf",
    href: "/esg",
    benefits: [
      "Diagnóstico personalizado",
      "Indicadores claros e rastreáveis",
      "Governança aplicável",
      "Software ESG integrado",
      "Relatórios GRI e SASB",
    ],
    icon: "Shield",
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
  },
  {
    key: "maquinas-equipamentos",
    name: "Equipamentos Ambientais",
    shortName: "Equipamentos",
    headline: "Equipamentos que fecham o ciclo",
    description:
      "Caixa separadora Eco Box e composteiras Topema. Instalação, suporte técnico e integração ao programa ambiental.",
    color: COLORS.silver,
    colorName: "silver",
    href: "/maquinas-equipamentos",
    benefits: [
      "Caixa separadora Eco Box (água e óleo)",
      "Composteiras Terraform Kitchen (Topema)",
      "Redução de 90% no volume de resíduos",
      "Instalação e suporte técnico",
      "Integração ao programa ambiental",
    ],
    icon: "Cog",
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
