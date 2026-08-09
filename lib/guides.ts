export type Guide = {
  slug: string;
  title: string;
  description: string;
  /** Short label used in sidebar navigation */
  sidebarLabel: string;
};

/**
 * Ordered registry of all guides.
 * Add new guides here — sidebar, prev/next, listing, and sitemap all use this.
 */
export const guides: Guide[] = [
  {
    slug: "why-review-transactions",
    title: "Why Review Transactions",
    sidebarLabel: "Why Review Transactions",
    description:
      "Learn why reviewing transactions matters and how it helps keep your Cashnix records accurate.",
  },
  {
    slug: "keep-transactions-accurate",
    title: "Keep Your Transactions Accurate",
    sidebarLabel: "Keep Transactions Accurate",
    description:
      "Learn why notes, categories, daily cash logging, and recurring expenses help you understand where your money really goes.",
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuideHref(slug: string): string {
  return `/guides/${slug}`;
}

export function getAdjacentGuides(slug: string): {
  previous: Guide | null;
  next: Guide | null;
} {
  const index = guides.findIndex((guide) => guide.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: index > 0 ? guides[index - 1] : null,
    next: index < guides.length - 1 ? guides[index + 1] : null,
  };
}
