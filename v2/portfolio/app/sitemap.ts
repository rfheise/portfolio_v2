import type { MetadataRoute } from "next";

import { getSiteUrl } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return [
    {
      url: siteUrl.origin,
      lastModified,
      changeFrequency: "always",
      priority: 1,
    },
  ];
}

