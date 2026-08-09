import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  href?: string;
  icon: string;
};

export default function ToolCard({
  title,
  description,
  href,
  icon,
}: ToolCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgb(15_23_42/0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_rgb(15_23_42/0.08)]">
      <div className="grid size-11 place-items-center rounded-xl bg-emerald-50 text-xl" aria-hidden="true">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-6">
        {href ? (
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800"
          >
            Open tool
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        ) : (
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-400"
          >
            Coming Soon
          </button>
        )}
      </div>
    </article>
  );
}
