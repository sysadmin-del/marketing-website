"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import { getPlayStoreUrl } from "@/lib/playStore";
import Container from "./Container";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools" },
  { label: "Guides", href: "/guides" },
  { label: "Articles", href: "/articles" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the menu whenever navigation happens, including browser back/forward.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <Container className="flex h-16 items-center justify-between">
        <BrandLogo priority />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            className="button-primary h-10 px-4 text-sm"
            href={getPlayStoreUrl("header")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download for Android
          </a>
        </div>

        <button
          type="button"
          className="relative z-10 -mr-1.5 grid size-11 touch-manipulation place-items-center rounded-xl border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50 active:bg-slate-200 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" className="pointer-events-none size-5" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="pointer-events-none size-5" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          )}
        </button>
      </Container>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-5 py-4 shadow-lg md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="touch-manipulation rounded-xl px-3 py-3.5 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950 active:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}
            <a
              className="button-primary mt-3 w-full"
              href={getPlayStoreUrl("header_mobile")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download for Android
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
