import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.url}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/work`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/middleman`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
