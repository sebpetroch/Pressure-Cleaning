import type { MetadataRoute } from "next";
import { business } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: business.domain, lastModified: new Date(), priority: 1 },
    { url: `${business.domain}/privacy-policy`, lastModified: new Date() },
    { url: `${business.domain}/terms-and-conditions`, lastModified: new Date() },
  ];
}
