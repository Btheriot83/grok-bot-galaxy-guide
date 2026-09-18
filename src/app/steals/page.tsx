import type { Metadata } from "next";
import Link from "next/link";
import { steals } from "../../../content/steals";

export const metadata: Metadata = {
  title: "Steals",
  description:
    "Cross-day playbook for AZMDR / flatter / one-person builder ops from Grok Bot Galaxy.",
};

export default function StealsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
          Cross-day playbook
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Steals
        </h1>
        <p className="mt-3 max-w-2xl text-base text-[var(--text-muted)]">
          Patterns reusable for one-person / AZMDR / flatter ops. Sourced from
          Days 1–3 notes — not invented.
        </p>
      </header>

      <ol className="space-y-4">
        {steals.map((s, i) => (
          <li key={s.title} className="card p-5">
            <h2 className="text-base font-semibold text-[var(--text)]">
              <span className="mr-2 text-[var(--text-dim)]">{i + 1}.</span>
              {s.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
              {s.detail}
            </p>
            <p className="mt-3 flex flex-wrap gap-1.5">
              {s.days.map((d) => (
                <span key={d} className="tag tag-accent">
                  {d}
                </span>
              ))}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-10 text-sm text-[var(--text-dim)]">
        See full day notes:{" "}
        <Link href="/day-1" className="text-[var(--accent)] hover:underline">
          Day 1
        </Link>
        {" · "}
        <Link href="/day-2" className="text-[var(--accent)] hover:underline">
          Day 2
        </Link>
        {" · "}
        <Link href="/day-3" className="text-[var(--accent)] hover:underline">
          Day 3
        </Link>
      </p>
    </div>
  );
}
