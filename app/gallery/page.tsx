import { FlaskConical, MonitorPlay, Presentation, type LucideIcon } from "lucide-react";
import { Section } from "@/components/design/section";
import { Heading } from "@/components/design/heading";
import { Card } from "@/components/design/card";
import gallery from "@/data/gallery.json";

const icons: Record<string, LucideIcon> = {
  "Research seminar": Presentation,
  "Student project demo": MonitorPlay,
  "Laboratory workshop": FlaskConical
};

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <Section>
      <Heading eyebrow="Gallery" title="Research life, seminars, and workshops" />
      <div className="grid gap-5 md:grid-cols-3">
        {gallery.map((item) => {
          const Icon = icons[item.title] ?? Presentation;
          return (
            <Card key={item.title}>
              <div
                className="mb-4 flex aspect-[4/3] w-full items-center justify-center rounded-md"
                style={{ background: "color-mix(in srgb, var(--brand) 10%, var(--soft))" }}
              >
                <Icon size={56} className="text-[var(--brand)]" strokeWidth={1.5} />
              </div>
              <h2 className="font-bold">{item.title}</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">{item.caption}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
