import Link from "next/link";
import Container from "@/components/Container";
import { getPlayStoreUrl } from "@/lib/playStore";
import type { Article } from "@/lib/articles";
import { getRelatedArticles } from "@/lib/articles";

type ArticleLayoutProps = {
  article: Article;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export default function ArticleLayout({ article }: ArticleLayoutProps) {
  const related = getRelatedArticles(article.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Organization",
      name: "Cashnix",
      url: "https://cashnix.emperva.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Cashnix",
      url: "https://cashnix.emperva.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://cashnix.emperva.com/articles/${article.slug}`,
    },
    keywords: article.keywords.join(", "),
  };

  const faqJsonLd =
    article.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <article>
        <header className="border-b border-slate-200 bg-white">
          <Container className="py-10 sm:py-16">
            <nav aria-label="Breadcrumb" className="flex min-w-0 items-center text-sm text-slate-500">
              <Link href="/" className="hover:text-slate-950">
                Home
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <Link href="/articles" className="hover:text-slate-950">
                Articles
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="min-w-0 truncate text-slate-700">{article.title}</span>
            </nav>

            <div className="mt-6 max-w-3xl sm:mt-8">
              <p className="text-sm font-semibold text-emerald-700">Personal finance guide</p>
              <h1 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-slate-950 sm:text-5xl">
                {article.title}
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">{article.description}</p>
              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500">
                <time dateTime={article.updatedAt}>
                  Updated {formatDate(article.updatedAt)}
                </time>
                <span aria-hidden="true">•</span>
                <span>{article.readingTimeMinutes} min read</span>
              </div>
            </div>
          </Container>
        </header>

        <Container className="py-10 sm:py-16">
          <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
            <div className="min-w-0 max-w-3xl">
              <div className="space-y-5 text-base leading-8 text-slate-700">
                {article.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-12">
                {article.sections.map((section, index) => {
                  const sectionId = `section-${index + 1}`;
                  return (
                    <section key={section.heading} aria-labelledby={sectionId}>
                      <h2
                        id={sectionId}
                        className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl"
                      >
                        {section.heading}
                      </h2>
                      <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      {section.bullets && (
                        <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-7 text-slate-700">
                          {section.bullets.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </section>
                  );
                })}
              </div>

              {article.faqs.length > 0 && (
                <section className="mt-14" aria-labelledby="article-faq-title">
                  <h2 id="article-faq-title" className="text-2xl font-bold tracking-tight text-slate-950">
                    Frequently asked questions
                  </h2>
                  <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 sm:px-7">
                    {article.faqs.map((faq) => (
                      <details key={faq.question} className="group py-5">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-950">
                          {faq.question}
                          <span
                            className="text-xl font-normal text-slate-400 transition-transform group-open:rotate-45"
                            aria-hidden="true"
                          >
                            +
                          </span>
                        </summary>
                        <p className="max-w-2xl pt-3 text-sm leading-7 text-slate-600">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              <p className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-600">
                This article is for educational purposes only and is not personalized
                financial advice. Your ideal emergency fund depends on your income
                stability, expenses, insurance cover, and family responsibilities.
              </p>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
              {article.relatedTool && (
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                    Free tool
                  </p>
                  <h2 className="mt-2 text-lg font-bold text-slate-950">
                    {article.relatedTool.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {article.relatedTool.description}
                  </p>
                  <Link
                    href={article.relatedTool.href}
                    className="button-primary mt-5 w-full text-sm"
                  >
                    Open calculator
                  </Link>
                </div>
              )}

              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <h2 className="text-lg font-bold text-slate-950">Track expenses with Cashnix</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Automatically track spending and stay closer to your savings goals.
                </p>
                <a
                  href={getPlayStoreUrl(article.slug, "article")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary mt-5 w-full text-sm"
                >
                  Download for Android
                </a>
              </div>
            </aside>
          </div>
        </Container>

        {related.length > 0 && (
          <section className="border-t border-slate-200 bg-white py-14 sm:py-16" aria-labelledby="more-articles-title">
            <Container>
              <h2 id="more-articles-title" className="text-3xl font-bold tracking-tight text-slate-950">
                Related articles
              </h2>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/articles/${item.slug}`}
                    className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                  >
                    <h3 className="font-semibold text-slate-950 group-hover:text-emerald-800">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                    <span className="mt-5 inline-block text-sm font-semibold text-emerald-700">
                      Read article <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        )}
      </article>
    </>
  );
}
