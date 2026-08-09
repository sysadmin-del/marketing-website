import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { BRAND } from "@/lib/brand";
import { getPlayStoreUrl } from "@/lib/playStore";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div className="max-w-sm">
            <BrandLogo />
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Simple financial tools and smarter expense tracking to help you
              feel confident about your money.
            </p>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-slate-950"
              aria-label={`Follow Cashnix on Instagram ${BRAND.instagramHandle}`}
            >
              <span className="grid size-9 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700">
                <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                  <circle cx="12" cy="12" r="3.8" />
                  <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
                </svg>
              </span>
              Instagram
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-950">Quick Links</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><Link className="hover:text-slate-950" href="/">Home</Link></li>
              <li><Link className="hover:text-slate-950" href="/tools">Financial Tools</Link></li>
              <li><Link className="hover:text-slate-950" href="/guides">Guides</Link></li>
              <li><Link className="hover:text-slate-950" href="/articles">Articles</Link></li>
              <li>
                <a
                  className="hover:text-slate-950"
                  href={getPlayStoreUrl("footer")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download App
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-950">Company</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><a className="hover:text-slate-950" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-slate-950" href="mailto:hello@cashnix.emperva.com">Contact</a></li>
              <li>
                <a
                  className="hover:text-slate-950"
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Cashnix. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
