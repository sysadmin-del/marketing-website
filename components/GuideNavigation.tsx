import Link from "next/link";
import { getAdjacentGuides, getGuideHref } from "@/lib/guides";

type GuideNavigationProps = {
  currentSlug: string;
};

export default function GuideNavigation({ currentSlug }: GuideNavigationProps) {
  const { previous, next } = getAdjacentGuides(currentSlug);

  if (!previous && !next) return null;

  return (
    <nav
      aria-label="Guide pagination"
      className="mt-14 grid gap-3 border-t border-slate-200 pt-8 sm:grid-cols-2"
    >
      {previous ? (
        <Link
          href={getGuideHref(previous.slug)}
          className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-md"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Previous Guide
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-950 group-hover:text-emerald-800">
            ← {previous.title}
          </p>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}

      {next ? (
        <Link
          href={getGuideHref(next.slug)}
          className="group rounded-2xl border border-slate-200 bg-white p-5 text-right transition hover:border-slate-300 hover:shadow-md sm:justify-self-stretch"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Next Guide
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-950 group-hover:text-emerald-800">
            {next.title} →
          </p>
        </Link>
      ) : null}
    </nav>
  );
}
