export const BRAND = {
  name: "Legitimus GreenTech",
  tagline: "Estruturando a sustentabilidade com inteligência",
  description:
    "Greentech especializada na estruturação estratégica da sustentabilidade empresarial. Integramos tecnologia, método e inteligência de dados para transformar exigências ambientais e ESG em processos organizados e alinhados ao negócio.",
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
    headline: "Dados precisos para decisões estratégicas sobre emissões",
    description:
      "Estruturamos seu inventário de emissões de gases de efeito estufa com método, tecnologia e inteligência de dados. Do cálculo à gestão, com acompanhamento em tempo real via plataforma.",
    color: COLORS.limeGreen,
    colorName: "lime",
    href: "/inventario-gee",
    benefits: [
      "Cálculo completo de Escopo 1, 2 e 3",
      "Acompanhamento via plataforma digital",
      "Base sólida para créditos de carbono",
      "Validação e auditoria por especialistas",
      "Modalidade pontual ou recorrência mensal",
    ],
    icon: "BarChart3",
  },
  {
    key: "esg",
    name: "Agenda ESG",
    shortName: "ESG",
    headline: "ESG integrado à estratégia do seu negócio",
    description:
      "Estruturamos e implementamos sua agenda ESG com diagnóstico, indicadores e governança. Sustentabilidade que se conecta às decisões e ao desempenho da empresa.",
    color: COLORS.petrolBlue,
    colorName: "petrol",
    href: "/esg",
    benefits: [
      "Diagnóstico ESG completo e personalizado",
      "Indicadores claros e rastreáveis",
      "Governança estruturada e aplicável",
      "Software ESG para gestão integrada",
      "Relatórios alinhados a frameworks reconhecidos",
    ],
    icon: "Shield",
  },
  {
    key: "lixo-zero",
    name: "Certificação Lixo Zero",
    shortName: "Lixo Zero",
    headline: "Certificação Lixo Zero com método e rastreabilidade",
    description:
      "Conduzimos todo o programa de Certificação Lixo Zero como consultores e auditores credenciados pelo ILZB. Da implementação à certificação, com gestão por etapas.",
    color: COLORS.leafGreen,
    colorName: "leaf",
    href: "/lixo-zero",
    benefits: [
      "Consultoria e auditoria credenciada ILZB",
      "Implementação completa da metodologia",
      "Gestão por etapas via plataforma digital",
      "Rastreabilidade de todas as ações",
      "Posicionamento como referência no setor",
    ],
    icon: "Recycle",
  },
  {
    key: "maquinas-equipamentos",
    name: "Máquinas e Equipamentos Ambientais",
    shortName: "Máquinas",
    headline: "Equipamentos que fecham o ciclo da sustentabilidade",
    description:
      "Fornecemos máquinas e equipamentos ambientais que complementam sua estratégia de sustentabilidade. Soluções práticas para operações mais limpas e eficientes.",
    color: COLORS.goldEarth,
    colorName: "gold",
    href: "/maquinas-equipamentos",
    benefits: [
      "Caixa separadora de água e óleo",
      "Composteira automatizada industrial",
      "Parceiros de fabricação reconhecidos",
      "Instalação e suporte técnico",
      "Integração com programas de sustentabilidade",
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
  { label: "Máquinas", href: "/maquinas-equipamentos" },
  { label: "Contato", href: "/contato" },
] as const;
