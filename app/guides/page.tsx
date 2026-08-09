import type { Metadata } from "next";
import Container from "@/components/Container";
import GuideCard from "@/components/GuideCard";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Cashnix Guides",
  description:
    "Learn how Cashnix features work and how to use them effectively. Practical in-app guides for reviewing transactions and keeping records accurate.",
  alternates: {
    canonical: "/guides",
  },
  openGraph: {
    title: "Cashnix Guides",
    description:
      "Practical guides that explain Cashnix features and help you use the app with confidence.",
    url: "/guides",
  },
};

export default function GuidesPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-12 sm:py-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-emerald-700">Documentation</p>
            <h1 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-5xl">
              Cashnix Guides
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
              Short, practical guides that explain why each feature exists and how
              to use it effectively inside Cashnix.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#fbfcfd] py-10 sm:py-16" aria-label="Available guides">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
