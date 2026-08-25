import Image from "next/image";
import { Section } from "@/components/design/section";
import awards from "@/data/awards.json";
import { withBasePath } from "@/lib/paths";

export const metadata = { title: "Awards" };

export default function AwardsPage() {
  const withCertificate = awards.filter((item) => item.certificate);

  return (
    <Section>
      <div className="rounded-md bg-[var(--soft)] px-8 py-10 text-center">
        <h1 className="font-serif text-3xl font-bold text-[var(--ink)] sm:text-4xl">
          Awards &amp; Academic Achievements
        </h1>
      </div>

      <ul className="mt-10 space-y-4">
        {awards.map((item) => (
          <li className="flex gap-3 leading-7 text-[var(--muted)]" key={item.title}>
            <span className="mt-3 size-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
            <p>
              <em className="italic text-[var(--foreground)]">{item.date}</em>
              {" — "}
              <strong className="font-bold text-[var(--ink)]">{item.title}</strong>
              {", "}
              {item.description}
              {item.organization ? (
                <span className="text-sm text-[var(--muted)]"> ({item.organization})</span>
              ) : null}
            </p>
          </li>
        ))}
      </ul>

      {withCertificate.length > 0 ? (
        <div className="mt-12 border-t border-[var(--line)] pt-10">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">
            Certificates
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {withCertificate.map((item) => (
              <figure
                className="rounded-md border-4 border-[var(--ink)]/85 bg-white p-2 shadow-sm"
                key={item.title}
              >
                <Image
                  src={withBasePath(item.certificate as string)}
                  alt={item.title}
                  width={500}
                  height={650}
                  className="h-auto w-full rounded-sm object-contain"
                />
                <figcaption className="mt-3 px-1 pb-1 text-center text-sm font-semibold text-neutral-900">
                  {item.title}
                  <span className="block text-xs font-normal text-neutral-500">{item.date}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      ) : null}
    </Section>
  );
}
