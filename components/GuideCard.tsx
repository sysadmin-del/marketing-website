import Link from "next/link";
import { getGuideHref, type Guide } from "@/lib/guides";

type GuideCardProps = {
  guide: Guide;
};

export default function GuideCard({ guide }: GuideCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgb(15_23_42/0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_rgb(15_23_42/0.08)]">
      <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
        Guide
      </p>
      <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 group-hover:text-emerald-800">
        {guide.title}
      </h2>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
        {guide.description}
      </p>
      <Link
        href={getGuideHref(guide.slug)}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800"
      >
        Read Guide
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </Link>
    </article>
  );
}
