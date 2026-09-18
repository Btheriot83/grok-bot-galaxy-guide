export function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--border-soft)]">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <p className="text-sm text-[var(--text-dim)]">
          Compiled by Stream Desk for Brandon Theriot · not affiliated with xAI
        </p>
        <p className="mt-2 text-xs text-[var(--text-dim)]">
          Facts sourced from public posts and third-party notes. Gaps labeled.
          Domain claims (e.g. shipbythurs.day) may 404 — verify before citing as
          live.
        </p>
      </div>
    </footer>
  );
}
