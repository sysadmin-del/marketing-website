import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Personal Finance Articles",
  description:
    "Practical guides on emergency funds, budgeting, and smarter money habits from Cashnix.",
  alternates: {
    canonical: "/articles",
  },
  openGraph: {
    title: "Personal Finance Articles | Cashnix",
    description:
      "Practical guides on emergency funds, budgeting, and smarter money habits.",
    url: "/articles",
  },
};

export default function ArticlesPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-12 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-emerald-700">Guides</p>
            <h1 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-5xl">
              Personal finance articles
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
              Clear, practical guides to help you build better money habits and
              use Cashnix tools with confidence.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-20" aria-label="All articles">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgb(15_23_42/0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_rgb(15_23_42/0.08)]"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  {article.readingTimeMinutes} min read
                </p>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 group-hover:text-emerald-800">
                  {article.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {article.description}
                </p>
                <span className="mt-6 text-sm font-semibold text-emerald-700">
                  Read article <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
