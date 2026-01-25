import type { MetadataRoute } from "next";

import { getSiteUrl } from "./site";
import { getCities } from "./photos/data";
import { slugifyCityName } from "./photos/slug";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  // const lastModified = new Date();

  const cities = await getCities();
  const cityEntries = cities.map((city) => ({
    url: `${siteUrl.origin}/photos/${slugifyCityName(city.name)}`,
    // lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl.origin,
      // lastModified,
      changeFrequency: "always",
      priority: 1,
    },
    {
      url: `${siteUrl.origin}/photos`,
      // lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...cityEntries,
  ];
}
