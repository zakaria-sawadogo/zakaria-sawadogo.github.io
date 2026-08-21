"use client";

import { useMemo, useState } from "react";
import { Search, FileText, Github, PlayCircle, Quote, Check } from "lucide-react";
import { Badge } from "@/components/design/badge";
import type { Publication } from "@/types/site";

function venueBadge(pub: Publication) {
  const venue = pub.venue.trim();
  const paren = venue.match(/\(([^)]+)\)\s*$/);
  if (paren) return paren[1];
  const trailingAcronym = venue.match(/,\s*([A-Z][A-Za-z0-9]{2,})\s*$/);
  if (trailingAcronym) return trailingAcronym[1];
  if (/^[A-Z][A-Za-z0-9]{2,14}$/.test(venue)) return venue;
  return pub.type;
}

function AuthorsLine({ authors }: { authors: string }) {
  const parts = authors.split(", ");
  return (
    <p className="mt-1 text-sm text-[var(--muted)]">
      {parts.map((name, index) => (
        <span key={`${name}-${index}`}>
          {index > 0 ? ", " : ""}
          <span className={name.includes("Zakaria Sawadogo") ? "font-bold text-[var(--foreground)]" : undefined}>{name}</span>
        </span>
      ))}
    </p>
  );
}

function CiteButton({ bibtex }: { bibtex: string }) {
  const [copied, setCopied] = useState(false);

  if (!bibtex) return null;

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(bibtex);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        } catch {
          // clipboard unavailable — silently ignore
        }
      }}
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--brand)]"
    >
      {copied ? <Check size={15} /> : <Quote size={15} />}
      {copied ? "Copied" : "Cite"}
    </button>
  );
}

export function PublicationExplorer({ publications }: { publications: Publication[] }) {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("All");
  const years = ["All", ...Array.from(new Set(publications.map((item) => String(item.year)))).sort((a, b) => Number(b) - Number(a))];

  const filtered = useMemo(() => {
    return publications.filter((item) => {
      const matchesQuery = `${item.title} ${item.authors} ${item.venue} ${item.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase());
      const matchesYear = year === "All" || String(item.year) === year;
      return matchesQuery && matchesYear;
    });
  }, [publications, query, year]);

  const groupedByYear = useMemo(() => {
    const groups = new Map<number, Publication[]>();
    filtered.forEach((item) => {
      const bucket = groups.get(item.year) ?? [];
      bucket.push(item);
      groups.set(item.year, bucket);
    });
    return Array.from(groups.entries()).sort((a, b) => b[0] - a[0]);
  }, [filtered]);

  return (
    <div>
      <div className="mb-10 flex flex-col gap-3 border-b border-[var(--line)] pb-6 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex min-h-11 flex-1 items-center gap-2 rounded-md border border-[var(--line)] px-3 sm:max-w-sm">
          <Search size={17} className="shrink-0 text-[var(--muted)]" />
          <input
            className="min-h-11 w-full bg-transparent text-sm outline-none"
            placeholder="Search publications"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <div className="flex flex-wrap items-center gap-2">
          {years.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setYear(item)}
              className={`rounded-full border px-3 py-1.5 text-sm font-semibold transition ${
                year === item
                  ? "border-[var(--brand)] bg-[var(--brand)] text-white"
                  : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--brand)] hover:text-[var(--brand)]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {groupedByYear.length === 0 ? (
        <p className="text-[var(--muted)]">No publications match your search.</p>
      ) : null}

      {groupedByYear.map(([groupYear, items]) => (
        <section key={groupYear} className="mb-12 last:mb-0">
          <h2 className="mb-5 flex items-baseline gap-3 text-2xl font-bold text-[var(--ink)]">
            {groupYear}
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="text-sm font-semibold text-[var(--muted)]">
              {items.length} {items.length > 1 ? "papers" : "paper"}
            </span>
          </h2>
          <ol className="paper-list divide-y divide-[var(--line)]">
            {items.map((item) => (
              <li key={item.title} className="flex items-start gap-4 py-6 first:pt-0 before:mt-1.5 before:shrink-0 before:font-mono">
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span
                      className="inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-bold"
                      style={{ borderColor: "color-mix(in srgb, var(--brand) 35%, transparent)", background: "color-mix(in srgb, var(--brand) 12%, transparent)", color: "var(--brand-dark)" }}
                    >
                      {venueBadge(item)}&apos;{String(item.year).slice(-2)}
                    </span>
                    {item.citations > 0 ? (
                      <span className="text-xs font-semibold text-[var(--muted)]">{item.citations} citations</span>
                    ) : null}
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-[var(--ink)] sm:text-xl">
                    {item.pdf ? (
                      <a href={item.pdf} target="_blank" rel="noreferrer" className="academic-link">
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <AuthorsLine authors={item.authors} />
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.venue}</p>
                  {item.abstract ? (
                    <details className="group mt-2">
                      <summary className="inline-flex cursor-pointer list-none items-center text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--brand)] [&::-webkit-details-marker]:hidden">
                        <span className="mr-1 inline-block transition-transform group-open:rotate-90">›</span>
                        Abstract
                      </summary>
                      <p className="mt-2 max-w-3xl leading-7 text-[var(--muted)]">{item.abstract}</p>
                    </details>
                  ) : null}
                  <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                    {item.pdf ? (
                      <a href={item.pdf} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--brand)]">
                        <FileText size={15} /> DOI / PDF
                      </a>
                    ) : null}
                    {item.code ? (
                      <a href={item.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--brand)]">
                        <Github size={15} /> Code
                      </a>
                    ) : null}
                    {item.video ? (
                      <a href={item.video} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--brand)]">
                        <PlayCircle size={15} /> Video
                      </a>
                    ) : null}
                    <CiteButton bibtex={item.bibtex} />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
