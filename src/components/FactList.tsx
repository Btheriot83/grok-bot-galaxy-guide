import type { Fact } from "../../content/types";

function Sources({ sources }: { sources?: string[] }) {
  if (!sources?.length) return null;
  return (
    <span className="mt-1 block text-xs text-[var(--text-dim)]">
      {sources.map((s, i) => {
        const isUrl = s.startsWith("http");
        return (
          <span key={`${s}-${i}`}>
            {i > 0 && " · "}
            {isUrl ? (
              <a
                href={s}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline"
              >
                {s.replace(/^https?:\/\//, "").slice(0, 48)}
                {s.length > 56 ? "…" : ""}
              </a>
            ) : (
              s
            )}
          </span>
        );
      })}
    </span>
  );
}

export function FactBullets({
  items,
  numbered = false,
}: {
  items: Fact[];
  numbered?: boolean;
}) {
  const Tag = numbered ? "ol" : "ul";
  return (
    <Tag
      className={`space-y-3 text-[0.9375rem] leading-relaxed text-[var(--text)] ${
        numbered ? "list-decimal pl-5" : "list-disc pl-5"
      }`}
    >
      {items.map((item, i) => (
        <li key={i} className="pl-1 marker:text-[var(--text-dim)]">
          <span className="tag tag-accent mr-2 align-middle">{item.day}</span>
          {item.text}
          <Sources sources={item.sources} />
        </li>
      ))}
    </Tag>
  );
}

export function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: { cells: string[] }[];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-[var(--border-soft)]">
      <table className="w-full min-w-[32rem] text-left text-sm">
        <thead className="bg-[var(--bg-elevated)] text-[var(--text-muted)]">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-3 py-2.5 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-t border-[var(--border-soft)] text-[var(--text)]"
            >
              {row.cells.map((c, j) => (
                <td key={j} className="px-3 py-2.5 align-top leading-snug">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
