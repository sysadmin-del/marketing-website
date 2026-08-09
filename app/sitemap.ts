import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { guides } from "@/lib/guides";
export const dynamic = "force-static";
const siteUrl = "https://cashnix.emperva.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date("2026-08-07"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/tools`,
      lastModified: new Date("2026-08-07"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/tools/emergency-fund-calculator`,
      lastModified: new Date("2026-08-07"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/guides`,
      lastModified: new Date("2026-08-07"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/articles`,
      lastModified: new Date("2026-08-07"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const guideRoutes: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${siteUrl}/guides/${guide.slug}`,
    lastModified: new Date("2026-08-07"),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteUrl}/articles/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...guideRoutes, ...articleRoutes];
}
