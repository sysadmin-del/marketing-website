import Link from "next/link";
import { getGuideHref, guides } from "@/lib/guides";

type GuideSidebarProps = {
  currentSlug: string;
};

export default function GuideSidebar({ currentSlug }: GuideSidebarProps) {
  return (
    <aside className="hidden lg:block" aria-label="Guides navigation">
      <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Guides
        </p>
        <nav className="mt-4">
          <ul className="space-y-1">
            {guides.map((guide) => {
              const isActive = guide.slug === currentSlug;

              return (
                <li key={guide.slug}>
                  <Link
                    href={getGuideHref(guide.slug)}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-xl px-3 py-2.5 text-sm leading-5 transition-colors ${
                      isActive
                        ? "bg-emerald-50 font-semibold text-emerald-800"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                    }`}
                  >
                    {guide.sidebarLabel}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
