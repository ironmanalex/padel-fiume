import type { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION } from "./constants";

export function createMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const title = overrides.title
    ? `${overrides.title} | ${SITE_NAME}`
    : SITE_NAME;

  return {
    title,
    description: (overrides.description as string) || SITE_DESCRIPTION,
    openGraph: {
      title: title as string,
      description: (overrides.description as string) || SITE_DESCRIPTION,
      siteName: SITE_NAME,
      locale: "it_IT",
      type: "website",
      ...(typeof overrides.openGraph === "object" ? overrides.openGraph : {}),
    },
    ...overrides,
  };
}
