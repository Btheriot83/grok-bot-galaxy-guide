"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Overview" },
  { href: "/day-1", label: "Day 1" },
  { href: "/day-2", label: "Day 2" },
  { href: "/day-3", label: "Day 3" },
  { href: "/steals", label: "Steals" },
  { href: "/sources", label: "Sources" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-[color-mix(in_oklab,var(--bg)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2 no-underline">
          <span className="text-sm font-semibold tracking-tight text-[var(--text)]">
            Galaxy Guide
          </span>
          <span className="hidden text-xs text-[var(--text-dim)] sm:inline">
            Grok Bot · Sep 15–17
          </span>
        </Link>

        <button
          type="button"
          className="rounded-md border border-[var(--border)] px-2.5 py-1.5 text-xs text-[var(--text-muted)] md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-md px-2.5 py-1.5 text-sm no-underline transition-colors ${
                  active
                    ? "bg-[var(--bg-elevated)] text-[var(--accent)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {open && (
        <nav className="border-t border-[var(--border-soft)] px-4 py-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => {
              const active =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-2 text-sm no-underline ${
                      active
                        ? "bg-[var(--bg-elevated)] text-[var(--accent)]"
                        : "text-[var(--text-muted)]"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
