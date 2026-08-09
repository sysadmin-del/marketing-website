import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import GuideNavigation from "@/components/GuideNavigation";
import GuideSidebar from "@/components/GuideSidebar";
import { getGuideBySlug, getGuideHref, guides } from "@/lib/guides";
import { getPlayStoreUrl } from "@/lib/playStore";

type GuideLayoutProps = {
  slug: string;
  children: ReactNode;
};

type CalloutProps = {
  title?: string;
  children: ReactNode;
  variant?: "tip" | "note" | "info";
};

const calloutStyles = {
  tip: "border-emerald-200 bg-emerald-50 text-emerald-950",
  note: "border-amber-200 bg-amber-50 text-amber-950",
  info: "border-slate-200 bg-slate-50 text-slate-800",
} as const;

export function GuideCallout({
  title,
  children,
  variant = "info",
}: CalloutProps) {
  return (
    <aside
      className={`my-8 rounded-2xl border px-5 py-4 text-sm leading-7 ${calloutStyles[variant]}`}
    >
      {title && <p className="font-semibold">{title}</p>}
      <div className={title ? "mt-1" : ""}>{children}</div>
    </aside>
  );
}

export function GuideSteps({ children }: { children: ReactNode }) {
  return (
    <ol className="my-6 list-decimal space-y-3 pl-5 text-base leading-7 text-slate-700 marker:font-semibold marker:text-slate-950">
      {children}
    </ol>
  );
}

type GuideFigureProps = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export function GuideFigure({
  src,
  alt,
  caption,
  width,
  height,
}: GuideFigureProps) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgb(15_23_42/0.04)]">
      <div className="bg-slate-950/95 p-3 sm:p-5">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="mx-auto h-auto w-full max-w-[320px] rounded-xl border border-white/10 shadow-lg"
          sizes="(max-width: 640px) 90vw, 320px"
          priority={false}
          unoptimized
        />
      </div>
      <figcaption className="border-t border-slate-200 px-4 py-3 text-sm leading-6 text-slate-600 sm:px-5">
        {caption}
      </figcaption>
    </figure>
  );
}

type GuideFaqItem = {
  question: string;
  answer: string;
};

export function GuideFaq({ items }: { items: GuideFaqItem[] }) {
  return (
    <section className="my-10" aria-labelledby="guide-faq-title">
      <p className="text-sm font-semibold text-emerald-700">FAQ</p>
      <h2 id="guide-faq-title" className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        Frequently asked questions
      </h2>
      <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 sm:px-7">
        {items.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-950">
              <span>{item.question}</span>
              <span
                className="shrink-0 text-xl font-normal text-slate-400 transition-transform group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="max-w-2xl pt-3 text-sm leading-7 text-slate-600">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default function GuideLayout({ slug, children }: GuideLayoutProps) {
  const guide = getGuideBySlug(slug);

  if (!guide) {
    throw new Error(`Unknown guide slug: ${slug}`);
  }

  return (
    <div className="bg-[#fbfcfd]">
      <header className="border-b border-slate-200 bg-white">
        <Container className="py-10 sm:py-12">
          <nav aria-label="Breadcrumb" className="flex min-w-0 items-center text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-950">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <Link href="/guides" className="hover:text-slate-950">
              Guides
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="min-w-0 truncate text-slate-700">{guide.title}</span>
          </nav>

          <div className="mt-6 max-w-3xl">
            <p className="text-sm font-semibold text-emerald-700">Cashnix Guide</p>
            <h1 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              {guide.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {guide.description}
            </p>
          </div>
        </Container>
      </header>

      <Container className="py-10 sm:py-14">
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 lg:hidden">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Guides
          </p>
          <nav className="mt-3 flex gap-2 overflow-x-auto pb-1" aria-label="Guides">
            {guides.map((item) => {
              const isActive = item.slug === slug;
              return (
                <Link
                  key={item.slug}
                  href={getGuideHref(item.slug)}
                  aria-current={isActive ? "page" : undefined}
                  className={`shrink-0 rounded-full px-3.5 py-2 text-sm whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-emerald-50 font-semibold text-emerald-800"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  {item.sidebarLabel}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14">
          <div className="min-w-0">
            <article className="guide-prose max-w-3xl">{children}</article>

            <section className="mt-12 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-6 text-white sm:p-8">
              <p className="text-sm font-semibold text-emerald-400">Cashnix for Android</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">
                Download Cashnix
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                Track expenses automatically, review transactions faster, and keep
                your finances organized in one place.
              </p>
              <a
                href={getPlayStoreUrl(slug, "guide")}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary mt-6"
              >
                Download Cashnix
              </a>
            </section>

            <GuideNavigation currentSlug={slug} />
          </div>

          <GuideSidebar currentSlug={slug} />
        </div>
      </Container>
    </div>
  );
}
