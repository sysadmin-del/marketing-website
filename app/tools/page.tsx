import type { Metadata } from "next";
import Container from "@/components/Container";
import ToolCard from "@/components/ToolCard";

export const metadata: Metadata = {
  title: "Free Financial Tools",
  description:
    "Browse free calculators and planners for emergency funds, loans, budgets, savings, and more.",
  alternates: {
    canonical: "/tools",
  },
  openGraph: {
    title: "Free Financial Tools | Cashnix",
    description:
      "Browse free calculators and planners for emergency funds, loans, budgets, savings, and more.",
    url: "/tools",
  },
};

const tools = [
  {
    title: "Emergency Fund Calculator",
    description: "Calculate the safety net you need based on your monthly expenses.",
    href: "/tools/emergency-fund-calculator",
    icon: "🛡️",
  },
  {
    title: "EMI Calculator",
    description: "Estimate your monthly loan payment and total cost of borrowing.",
    icon: "🏦",
  },
  {
    title: "Budget Planner",
    description: "Give every rupee a purpose with a simple monthly budget.",
    icon: "📋",
  },
  {
    title: "Expense Splitter",
    description: "Split shared costs fairly and see who owes what.",
    icon: "🧾",
  },
  {
    title: "Savings Goal Calculator",
    description: "See how much to save each month to reach your goal on time.",
    icon: "🎯",
  },
];

export default function ToolsPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-12 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-emerald-700">Free to use</p>
            <h1 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-5xl">
              Financial tools for clearer decisions
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
              Practical calculators and planners that turn money questions into
              simple, useful answers.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-20" aria-label="Available financial tools">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <ToolCard key={tool.title} {...tool} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
