import type { Metadata } from "next";
import { knownGaps, sources, watchLinks } from "../../../content/sources";

export const metadata: Metadata = {
  title: "Sources",
  description: "Public sources for Grok Bot Galaxy Days 1–3 skim pack.",
};

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
          Attribution
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Sources
        </h1>
        <p className="mt-3 max-w-2xl text-base text-[var(--text-muted)]">
          Real public posts/pages. No invented stream URLs. Scraped Sep 17–18,
          2026 PT.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="mb-4 text-lg font-semibold">Watch / register</h2>
        <ul className="space-y-2 text-sm">
          {watchLinks.map((w) => (
            <li key={w.url}>
              <a
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline"
              >
                {w.label}
              </a>
              <span className="ml-2 text-[var(--text-dim)] break-all">{w.url}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-lg font-semibold">Source index</h2>
        <div className="overflow-x-auto rounded-lg border border-[var(--border-soft)]">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <thead className="bg-[var(--bg-elevated)] text-[var(--text-muted)]">
              <tr>
                <th className="px-3 py-2.5 font-medium">Source</th>
                <th className="px-3 py-2.5 font-medium">Day</th>
                <th className="px-3 py-2.5 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody>
              {sources.map((s) => (
                <tr key={s.url} className="border-t border-[var(--border-soft)]">
                  <td className="px-3 py-2.5 align-top">
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[var(--accent)] hover:underline"
                    >
                      {s.label}
                    </a>
                  </td>
                  <td className="px-3 py-2.5 align-top text-[var(--text-muted)]">
                    {s.day}
                  </td>
                  <td className="px-3 py-2.5 align-top text-[var(--text-muted)]">
                    {s.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold">Known gaps</h2>
        <ul className="space-y-2 text-sm text-[var(--text-muted)]">
          {knownGaps.map((g) => (
            <li key={g} className="flex gap-2">
              <span className="tag tag-warn shrink-0">Gap</span>
              <span>{g}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
