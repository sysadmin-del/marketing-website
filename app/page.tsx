import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import ToolCard from "@/components/ToolCard";
import { getPlayStoreUrl } from "@/lib/playStore";

export const metadata: Metadata = {
  title: "Cashnix | Free Financial Tools",
  description:
    "Free calculators and planners to help you make smarter financial decisions. Start with the Emergency Fund Calculator and more tools from Cashnix.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cashnix | Free Financial Tools",
    description:
      "Free calculators and planners to help you make smarter financial decisions.",
    url: "/",
  },
};

const featuredTools = [
  {
    title: "Emergency Fund Calculator",
    description: "Find out how much you need for a strong financial safety net.",
    href: "/tools/emergency-fund-calculator",
    icon: "🛡️",
  },
  {
    title: "EMI Calculator",
    description: "Estimate monthly loan payments and understand total interest.",
    icon: "🏦",
  },
  {
    title: "Budget Planner",
    description: "Create a practical monthly plan for your income and expenses.",
    icon: "📋",
  },
  {
    title: "Savings Goal Calculator",
    description: "Build a clear path toward your next important savings goal.",
    icon: "🎯",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.09),transparent_65%)]" />
        <Container className="relative py-16 text-center sm:py-28 lg:py-32">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-800">
              Simple tools. Clear decisions.
            </span>
            <h1 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-slate-950 min-[380px]:text-4xl sm:mt-6 sm:text-6xl">
              Free Financial Tools
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-xl sm:leading-8">
              Simple calculators and planners to help you make smarter financial
              decisions.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/tools" className="button-primary">
                Explore Tools
              </Link>
              <a
                href={getPlayStoreUrl("home_hero")}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                Download Cashnix
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-20" aria-labelledby="featured-tools-title">
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold text-emerald-700">
                Built for everyday money
              </p>
              <h2
                id="featured-tools-title"
                className="mt-2 text-3xl font-bold tracking-tight text-slate-950"
              >
                Explore our tools
              </h2>
            </div>
            <Link
              href="/tools"
              className="text-sm font-semibold text-slate-700 hover:text-emerald-700"
            >
              View all tools <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.title} {...tool} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
