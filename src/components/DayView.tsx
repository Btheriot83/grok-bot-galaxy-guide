import type { DayPage } from "../../content/types";
import { FactBullets, DataTable } from "./FactList";

export function DayView({ day }: { day: DayPage }) {
  return (
    <article className="prose-guide mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
          {day.date}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {day.title}
        </h1>
        <p className="mt-3 max-w-2xl text-base text-[var(--text-muted)]">
          {day.subtitle}
        </p>
        <p className="mt-4 rounded-lg border border-[var(--border-soft)] bg-[var(--bg-elevated)] px-4 py-3 text-sm text-[var(--text-muted)]">
          <span className="tag tag-warn mr-2">Honesty</span>
          {day.honesty}
        </p>
      </header>

      <section className="mb-12">
        <h2 className="mb-4 text-lg font-semibold tracking-tight">
          Schedule (PT)
        </h2>
        <DataTable
          headers={["Time", "Session", "Host"]}
          rows={day.schedule.map((s) => ({
            cells: [s.time, s.session, s.host ?? "—"],
          }))}
        />
      </section>

      {day.sections.map((section) => (
        <section key={section.id} className="mb-12 section-rule pt-10">
          <h2 className="mb-3 text-lg font-semibold tracking-tight">
            {section.title}
          </h2>
          {section.intro && (
            <p className="mb-4 text-sm text-[var(--text-muted)]">
              {section.intro}
            </p>
          )}
          {section.table && (
            <div className="mb-5">
              <DataTable
                headers={section.table.headers}
                rows={section.table.rows}
              />
            </div>
          )}
          {section.bullets && <FactBullets items={section.bullets} />}
          {section.numbered && (
            <FactBullets items={section.numbered} numbered />
          )}
        </section>
      ))}

      {day.demos && day.demos.length > 0 && (
        <section className="mb-12 section-rule pt-10">
          <h2 className="mb-4 text-lg font-semibold tracking-tight">
            Demo moments worth screenshots
          </h2>
          <FactBullets items={day.demos} />
        </section>
      )}

      {day.gaps && day.gaps.length > 0 && (
        <section className="mb-4 section-rule pt-10">
          <h2 className="mb-4 text-lg font-semibold tracking-tight">
            Gaps / TODOs
          </h2>
          <ul className="space-y-2 text-sm text-[var(--text-muted)]">
            {day.gaps.map((g) => (
              <li key={g} className="flex gap-2">
                <span className="tag tag-warn shrink-0">Gap</span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
