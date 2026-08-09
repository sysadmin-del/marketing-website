"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import DownloadAppModal from "@/components/DownloadAppModal";

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const MODAL_STORAGE_KEY = "cashnix-download-modal-dismissed-at";
const DISMISS_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000;
/** Wait until the user pauses after interacting before showing the modal. */
const IDLE_BEFORE_MODAL_MS = 12_000;

function wasRecentlyDismissed(): boolean {
  try {
    const raw = window.localStorage.getItem(MODAL_STORAGE_KEY);
    if (!raw) return false;
    const dismissedAt = Number(raw);
    if (Number.isNaN(dismissedAt)) return false;
    return Date.now() - dismissedAt < DISMISS_COOLDOWN_MS;
  } catch {
    return false;
  }
}

function NumberField({
  id,
  label,
  value,
  onChange,
  prefix,
  suffix,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-500">
            {prefix}
          </span>
        )}
        <input
          id={id}
          type="number"
          min="0"
          inputMode="decimal"
          value={value}
          onChange={(event) => onChange(Math.max(0, Number(event.target.value)))}
          className={`h-12 w-full rounded-xl border border-slate-300 bg-white text-slate-950 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 ${
            prefix ? "pl-9 pr-4" : "px-4"
          } ${suffix ? "pr-20" : ""}`}
        />
        {suffix && (
          <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm text-slate-500">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Calculator() {
  const [monthlyExpenses, setMonthlyExpenses] = useState(35000);
  const [months, setMonths] = useState(6);
  const [currentSavings, setCurrentSavings] = useState(50000);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasShownRef = useRef(false);

  const result = useMemo(() => {
    const target = monthlyExpenses * months;
    const shortfall = Math.max(target - currentSavings, 0);
    const coveredMonths =
      monthlyExpenses > 0 ? currentSavings / monthlyExpenses : 0;
    const progress = target > 0 ? Math.min((currentSavings / target) * 100, 100) : 0;

    return { target, shortfall, coveredMonths, progress };
  }, [monthlyExpenses, months, currentSavings]);

  const markInteracted = useCallback(() => {
    setHasInteracted(true);
  }, []);

  useEffect(() => {
    if (!hasInteracted || hasShownRef.current || wasRecentlyDismissed()) return;

    const tryShowModal = () => {
      if (hasShownRef.current || wasRecentlyDismissed()) return;

      // Avoid interrupting while the user is still focused in an input.
      if (document.activeElement instanceof HTMLInputElement) {
        idleTimerRef.current = setTimeout(tryShowModal, IDLE_BEFORE_MODAL_MS);
        return;
      }

      hasShownRef.current = true;
      setIsModalOpen(true);
    };

    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(tryShowModal, IDLE_BEFORE_MODAL_MS);

    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [hasInteracted, monthlyExpenses, months, currentSavings]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    try {
      window.localStorage.setItem(MODAL_STORAGE_KEY, String(Date.now()));
    } catch {
      // Ignore storage failures (private mode, etc.)
    }
  }, []);

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_rgb(15_23_42/0.08)] sm:rounded-3xl">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-5 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-emerald-100 text-lg sm:size-11 sm:text-xl" aria-hidden="true">
                🛡️
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  Your details
                </p>
                <h2 className="text-lg font-bold text-slate-950 sm:text-xl">Plan your safety net</h2>
              </div>
            </div>

            <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
              <NumberField
                id="monthly-expenses"
                label="Essential monthly expenses"
                value={monthlyExpenses}
                onChange={(value) => {
                  markInteracted();
                  setMonthlyExpenses(value);
                }}
                prefix="₹"
              />

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="coverage-months" className="text-sm font-semibold text-slate-700">
                    Months of coverage
                  </label>
                  <span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-sm font-semibold text-emerald-800">
                    {months} months
                  </span>
                </div>
                <input
                  id="coverage-months"
                  type="range"
                  min="3"
                  max="12"
                  step="1"
                  value={months}
                  onChange={(event) => {
                    markInteracted();
                    setMonths(Number(event.target.value));
                  }}
                  className="w-full accent-emerald-700"
                />
                <div className="mt-1 flex justify-between text-xs text-slate-500">
                  <span>3 months</span>
                  <span>12 months</span>
                </div>
              </div>

              <NumberField
                id="current-savings"
                label="Current emergency savings"
                value={currentSavings}
                onChange={(value) => {
                  markInteracted();
                  setCurrentSavings(value);
                }}
                prefix="₹"
              />
            </div>

            <p className="mt-6 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
              Tip: Include only essential costs such as housing, food, utilities,
              insurance, transport, and minimum debt payments.
            </p>
          </div>

          <div className="flex min-w-0 flex-col bg-slate-950 p-5 text-white sm:p-8 lg:p-10">
            <p className="text-sm font-medium text-slate-400">Recommended emergency fund</p>
            <p className="mt-2 break-words text-3xl font-bold tracking-tight sm:text-5xl">
              {currency.format(result.target)}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Based on {months} months of essential expenses.
            </p>

            <div className="mt-8">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Current progress</span>
                <span className="font-semibold">{result.progress.toFixed(0)}%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-emerald-400 transition-[width] duration-500"
                  style={{ width: `${result.progress}%` }}
                />
              </div>
            </div>

            <dl className="mt-7 grid gap-3 sm:mt-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-4">
                <dt className="text-xs text-slate-400">Amount still needed</dt>
                <dd className="mt-1 break-words text-lg font-semibold sm:text-xl">{currency.format(result.shortfall)}</dd>
              </div>
              <div className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-4">
                <dt className="text-xs text-slate-400">Currently covered</dt>
                <dd className="mt-1 text-xl font-semibold">{result.coveredMonths.toFixed(1)} months</dd>
              </div>
            </dl>

            <div className="mt-auto pt-8 text-sm leading-6 text-slate-400">
              This estimate is a planning guide, not financial advice. Adjust the
              target to fit your income stability and responsibilities.
            </div>
          </div>
        </div>
      </div>

      <DownloadAppModal
        isOpen={isModalOpen}
        onClose={closeModal}
        campaign="emergency_fund_calculator"
      />
    </>
  );
}
