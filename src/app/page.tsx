import Link from "next/link";
import { dayCards, eventMeta } from "../../content/overview";
import { topStealsForHome } from "../../content/steals";
import { knownGaps, watchLinks } from "../../content/sources";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <section className="mb-14">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          Public guide · Stream Desk
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          {eventMeta.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--text-muted)]">
          {eventMeta.dates} · {eventMeta.venue}
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
          {eventMeta.filter}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="card p-5">
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-dim)]">
              Builders
            </h2>
            <ul className="mt-3 space-y-1.5 text-sm">
              {eventMeta.builders.map((b) => (
                <li key={b.handle}>
                  <span className="text-[var(--text)]">{b.name}</span>{" "}
                  <span className="text-[var(--text-dim)]">{b.handle}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-5">
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-dim)]">
              What shipped
            </h2>
            <p className="mt-3 text-base font-medium text-[var(--text)]">
              {eventMeta.company.name}
            </p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              {eventMeta.company.pitch}
            </p>
            <p className="mt-3 text-sm">
              <a
                href={eventMeta.company.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline"
              >
                {eventMeta.company.site}
              </a>
            </p>
            <p className="mt-2 text-xs text-[var(--text-dim)]">
              {eventMeta.company.siteNote}
            </p>
            <p className="mt-2 text-xs text-[var(--warm)]">
              Late KPIs: {eventMeta.company.lateKpis}
            </p>
            <p className="mt-2 text-xs text-[var(--text-dim)]">
              {eventMeta.company.dogfood} · {eventMeta.company.legacyDomain}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-14">
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight">
            Three-day overview
          </h2>
          <Link
            href="/sources"
            className="text-sm text-[var(--accent)] no-underline hover:underline"
          >
            All sources →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {dayCards.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="card group block p-5 no-underline transition-colors"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-lg font-semibold text-[var(--text)] group-hover:text-[var(--accent)]">
                  {d.label}
                </span>
                <span className="tag">{d.date}</span>
              </div>
              <p className="mt-2 text-xs text-[var(--text-dim)]">{d.depth}</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {d.blurb}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight">
            Top steals for one-person / AZMDR / flatter ops
          </h2>
          <Link
            href="/steals"
            className="text-sm text-[var(--accent)] no-underline hover:underline"
          >
            Full playbook →
          </Link>
        </div>
        <ol className="grid gap-3 sm:grid-cols-2">
          {topStealsForHome.map((s, i) => (
            <li key={s.title} className="card p-4">
              <p className="text-sm font-medium text-[var(--text)]">
                <span className="mr-2 text-[var(--text-dim)]">{i + 1}.</span>
                {s.title}
              </p>
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
      </section>

      <section className="mb-14 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="mb-3 text-lg font-semibold tracking-tight">Watch</h2>
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
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-lg font-semibold tracking-tight">
            Known gaps
          </h2>
          <ul className="space-y-2 text-sm text-[var(--text-muted)]">
            {knownGaps.map((g) => (
              <li key={g} className="flex gap-2">
                <span className="tag tag-warn shrink-0">Gap</span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
