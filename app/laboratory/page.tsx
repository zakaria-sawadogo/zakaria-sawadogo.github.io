import { FlaskConical, MonitorPlay, Presentation, type LucideIcon } from "lucide-react";
import { Section } from "@/components/design/section";
import { Heading } from "@/components/design/heading";
import { Card } from "@/components/design/card";
import { Badge } from "@/components/design/badge";
import laboratory from "@/data/laboratory.json";
import gallery from "@/data/gallery.json";

const icons: Record<string, LucideIcon> = {
  "Research seminar": Presentation,
  "Student project demo": MonitorPlay,
  "Laboratory workshop": FlaskConical
};

export const metadata = { title: "Laboratory" };

export default function LaboratoryPage() {
  return (
    <Section>
      <Heading eyebrow="Laboratory" title={laboratory.name} text={laboratory.mission} />
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="text-2xl font-bold">Vision</h2>
          <p className="mt-3 leading-7 text-[var(--muted)]">{laboratory.vision}</p>
          <div className="mt-5 flex flex-wrap gap-2">{laboratory.axes.map((axis) => <Badge key={axis}>{axis}</Badge>)}</div>
        </Card>
        <Card>
          <h2 className="text-2xl font-bold">Equipment & partners</h2>
          <p className="mt-3 leading-7 text-[var(--muted)]">{laboratory.equipment.join(", ")}</p>
          <p className="mt-3 leading-7 text-[var(--muted)]">{laboratory.partners.join(", ")}</p>
        </Card>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {gallery.map((item) => {
          const Icon = icons[item.title] ?? Presentation;
          return (
            <Card key={item.title}>
              <div
                className="mb-4 flex aspect-[4/3] w-full items-center justify-center rounded-md"
                style={{ background: "color-mix(in srgb, var(--brand) 10%, var(--soft))" }}
              >
                <Icon size={48} className="text-[var(--brand)]" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{item.caption}</p>
            </Card>
          );
        })}
      </div>
      <Card className="mt-8">
        <h2 className="text-2xl font-bold">Join the laboratory</h2>
        <p className="mt-3 leading-7 text-[var(--muted)]">{laboratory.join}</p>
      </Card>
    </Section>
  );
}
