"use client";

import { useEffect } from "react";
import { getPlayStoreUrl } from "@/lib/playStore";

type DownloadAppModalProps = {
  isOpen: boolean;
  onClose: () => void;
  campaign?: string;
};

export default function DownloadAppModal({
  isOpen,
  onClose,
  campaign = "website",
}: DownloadAppModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/50 backdrop-blur-sm motion-safe:animate-[fade-in_180ms_ease-out] sm:items-center sm:p-5"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="download-modal-title"
        aria-describedby="download-modal-description"
        className="relative max-h-[calc(100dvh-0.75rem)] w-full overflow-y-auto rounded-t-3xl border border-white/70 bg-white p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-2xl motion-safe:animate-[modal-in_220ms_ease-out] sm:max-w-md sm:rounded-3xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 grid size-11 place-items-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-950 sm:right-5 sm:top-5"
          aria-label="Close modal"
        >
          <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>

        <div className="grid size-11 place-items-center rounded-2xl bg-emerald-100 text-emerald-700 sm:size-12">
          <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
            <path d="M7 9h10M8 5h8l2 14H6L8 5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M9 12v3M15 12v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
        <h2 id="download-modal-title" className="mt-4 pr-10 text-xl font-bold tracking-tight text-slate-950 sm:mt-5 sm:text-2xl">
          Enjoyed this tool?
        </h2>
        <p id="download-modal-description" className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3 sm:text-base sm:leading-7">
          Track your expenses automatically with Cashnix and access many more
          powerful tools.
        </p>
        <div className="mt-6 grid gap-3">
          <a
            href={getPlayStoreUrl(campaign, "tool")}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary min-h-12 w-full whitespace-nowrap"
            onClick={onClose}
          >
            Download for Android
          </a>
          <button type="button" onClick={onClose} className="button-secondary min-h-12 w-full">
            Maybe Later
          </button>
        </div>
      </section>
    </div>
  );
}
