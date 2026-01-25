export const siteConfig = {
  name: "Ryan Heise",
  title: "Ryan Heise",
  description:
    "Portfolio website for Ryan Heise, featuring experience, projects, skills, and contact information.",
  url:"https://ryanfheise.com",
  locale: "en_US",
} as const;

export function getSiteUrl() {
  return new URL(siteConfig.url);
}

