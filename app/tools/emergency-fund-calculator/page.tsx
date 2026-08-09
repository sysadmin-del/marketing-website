import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { relatedToolArticles } from "@/lib/articles";
import { getPlayStoreUrl } from "@/lib/playStore";
import Calculator from "./Calculator";

export const metadata: Metadata = {
  title: "Emergency Fund Calculator – Free Online Tool",
  description:
    "Free emergency fund calculator to estimate how much you should save based on monthly essential expenses and 3–12 months of coverage.",
  keywords: [
    "emergency fund calculator",
    "emergency savings calculator",
    "how much emergency fund",
    "financial safety net calculator",
    "emergency fund India",
  ],
  alternates: {
    canonical: "/tools/emergency-fund-calculator",
  },
  openGraph: {
    title: "Emergency Fund Calculator | Cashnix",
    description:
      "Estimate your emergency savings target based on essential monthly expenses and coverage months.",
    url: "/tools/emergency-fund-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Fund Calculator | Cashnix",
    description:
      "Estimate your emergency savings target based on essential monthly expenses and coverage months.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question: "How much should I keep in an emergency fund?",
    answer:
      "A common starting point is three to six months of essential expenses. Consider a larger fund if your income is irregular, you support dependants, or your job is less predictable.",
  },
  {
    question: "What expenses should I include?",
    answer:
      "Include costs you must continue paying during an emergency: rent or home loan payments, groceries, utilities, insurance, transport, healthcare, and minimum debt payments.",
  },
  {
    question: "Where should I keep my emergency fund?",
    answer:
      "Keep it somewhere safe, liquid, and easy to access, such as a separate savings account or suitable liquid fund. Avoid tying all of it up in volatile or hard-to-sell investments.",
  },
  {
    question: "Should I build an emergency fund before investing?",
    answer:
      "It is generally useful to establish a basic safety buffer first. This can reduce the chance that you need to sell investments or borrow money when an unexpected expense occurs.",
  },
];

export default function EmergencyFundCalculatorPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Emergency Fund Calculator",
    url: "https://cashnix.emperva.com/tools/emergency-fund-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    description:
      "Free calculator to estimate how much emergency savings you need based on monthly essential expenses.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-10 sm:py-16">
          <nav aria-label="Breadcrumb" className="flex min-w-0 items-center text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-950">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <Link href="/tools" className="hover:text-slate-950">Tools</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="min-w-0 truncate text-slate-700">Emergency Fund Calculator</span>
          </nav>
          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-semibold text-emerald-700">Free financial calculator</p>
            <h1 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-slate-950 sm:text-5xl">
              Emergency Fund Calculator
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
              Estimate the savings you need to handle unexpected expenses
              without disrupting your long-term financial plans.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14" aria-label="Emergency fund calculator">
        <Container>
          <Calculator />
        </Container>
      </section>

      <article>
        <section className="bg-white py-12 sm:py-20" aria-labelledby="explanation-title">
          <Container className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold text-emerald-700">Explanation</p>
              <h2 id="explanation-title" className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                What is an emergency fund?
              </h2>
              <div className="mt-5 space-y-4 text-base leading-7 text-slate-600">
                <p>
                  An emergency fund is money reserved for urgent, unplanned
                  situations such as a job loss, medical bill, essential repair,
                  or family emergency.
                </p>
                <p>
                  The right amount depends on your essential spending, income
                  stability, insurance coverage, and responsibilities. Starting
                  with three months of expenses is practical for many people,
                  while six to twelve months provides a larger cushion.
                </p>
              </div>
            </div>
            <aside className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 sm:rounded-3xl sm:p-8">
              <h3 className="text-lg font-bold text-slate-950">A useful target</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Begin with one month of essential expenses, then build toward
                three to six months through regular contributions.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                <li>✓ Keep the money separate from daily spending</li>
                <li>✓ Make it easy to access in a genuine emergency</li>
                <li>✓ Revisit your target when expenses change</li>
              </ul>
            </aside>
          </Container>
        </section>

        <section className="py-12 sm:py-20" aria-labelledby="formula-title">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold text-emerald-700">Formula</p>
              <h2 id="formula-title" className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                How the calculator works
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Multiply your essential monthly expenses by the number of months
                you want your emergency fund to cover.
              </p>
              <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:mt-8 sm:p-8">
                <p className="text-base font-semibold leading-7 text-slate-950 sm:text-2xl">
                  Emergency fund = Monthly essential expenses × Coverage months
                </p>
                <p className="mt-3 text-sm text-slate-500">
                  Remaining amount = Emergency fund target − Current emergency savings
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-12 sm:py-20" aria-labelledby="examples-title">
          <Container>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-emerald-700">Examples</p>
              <h2 id="examples-title" className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                Emergency fund examples
              </h2>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                ["Starter buffer", "₹30,000 expenses × 3 months", "₹90,000"],
                ["Standard cushion", "₹40,000 expenses × 6 months", "₹2,40,000"],
                ["Extended safety net", "₹55,000 expenses × 12 months", "₹6,60,000"],
              ].map(([title, calculation, result]) => (
                <div key={title} className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="font-semibold text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm text-slate-500">{calculation}</p>
                  <p className="mt-5 text-2xl font-bold text-emerald-700">{result}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-12 sm:py-20" aria-labelledby="faq-title">
          <Container>
            <div className="mx-auto max-w-3xl">
              <p className="text-sm font-semibold text-emerald-700">FAQ</p>
              <h2 id="faq-title" className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                Frequently asked questions
              </h2>
              <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 sm:px-7">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-950">
                      {faq.question}
                      <span className="text-xl font-normal text-slate-400 transition-transform group-open:rotate-45" aria-hidden="true">
                        +
                      </span>
                    </summary>
                    <p className="max-w-2xl pt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-12 sm:py-20" aria-labelledby="related-title">
          <Container>
            <h2 id="related-title" className="text-3xl font-bold tracking-tight text-slate-950">
              Related articles
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {relatedToolArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                >
                  <h3 className="font-semibold text-slate-950 group-hover:text-emerald-800">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {article.description}
                  </p>
                  <span className="mt-5 inline-block text-sm font-semibold text-emerald-700">
                    Read article <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </article>

      <section className="bg-slate-950 py-12 text-white sm:py-20">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-emerald-400">Cashnix for Android</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Take control of more than your emergency fund
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Track expenses automatically, understand your spending, and access
              more powerful tools with Cashnix.
            </p>
          </div>
          <a
            href={getPlayStoreUrl("emergency_fund_calculator", "tool")}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary shrink-0"
          >
            Download Cashnix
          </a>
        </Container>
      </section>
    </>
  );
}
