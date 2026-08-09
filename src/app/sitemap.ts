import type { MetadataRoute } from "next";
import { business } from "@/lib/config";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: business.domain, lastModified: new Date(), priority: 1 },
    { url: `${business.domain}/articles`, lastModified: new Date(), priority: 0.8 },
    ...articles.map((article) => ({
      url: `${business.domain}/articles/${article.slug}`,
      lastModified: new Date(article.publishedAt),
      priority: 0.6,
    })),
    { url: `${business.domain}/privacy-policy`, lastModified: new Date() },
    { url: `${business.domain}/terms-and-conditions`, lastModified: new Date() },
  ];
}
