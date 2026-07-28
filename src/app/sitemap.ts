import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/constants";

// Domínio canônico (apex, sem www). Fonte única: BRAND.url.
const BASE_URL = BRAND.url;

// Data da última publicação relevante do conteúdo.
const LAST_MODIFIED = new Date("2026-07-28");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/", changeFrequency: "monthly", priority: 1 },
    { path: "/inventario-gee", changeFrequency: "monthly", priority: 0.9 },
    { path: "/esg", changeFrequency: "monthly", priority: 0.9 },
    { path: "/lixo-zero", changeFrequency: "monthly", priority: 0.9 },
    { path: "/maquinas-equipamentos", changeFrequency: "monthly", priority: 0.8 },
    { path: "/sobre", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contato", changeFrequency: "yearly", priority: 0.7 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: path === "/" ? BASE_URL : `${BASE_URL}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency,
    priority,
  }));
}
