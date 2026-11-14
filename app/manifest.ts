import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — Personal Portfolio`,
    short_name: siteConfig.name,
    description: siteConfig.seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f8f9fa",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
