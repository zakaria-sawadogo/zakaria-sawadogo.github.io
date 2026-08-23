import { ShieldCheck, BrainCircuit, Rocket, type LucideIcon } from "lucide-react";
import { Section } from "@/components/design/section";
import { Heading } from "@/components/design/heading";
import { Card } from "@/components/design/card";
import { Badge } from "@/components/design/badge";
import research from "@/data/research.json";

export const metadata = { title: "Research" };

const icons: Record<string, LucideIcon> = {
  "Cybersecurity & Privacy": ShieldCheck,
  "Artificial Intelligence & Data Science": BrainCircuit,
  "Digital Transformation": Rocket
};

export default function ResearchPage() {
  return (
    <Section>
      <Heading eyebrow="Research" title="Research areas" text="Each research area connects technologies, projects, and publications so the academic record stays navigable." />
      <div className="grid gap-6 md:grid-cols-2">
        {research.map((item) => {
          const Icon = icons[item.area] ?? ShieldCheck;
          return (
          <Card key={item.slug}>
            <div
              className="mb-5 flex aspect-video w-full items-center justify-center rounded-md"
              style={{ background: "color-mix(in srgb, var(--brand) 10%, var(--soft))" }}
            >
              <Icon size={56} className="text-[var(--brand)]" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-bold">{item.area}</h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">{item.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">{item.technologies.map((tech) => <Badge key={tech}>{tech}</Badge>)}</div>
            <p className="mt-5 text-sm font-bold">Associated projects</p>
            <p className="mt-1 text-sm text-[var(--muted)]">{item.projects.join(", ")}</p>
            <p className="mt-4 text-sm font-bold">Associated publications</p>
            <p className="mt-1 text-sm text-[var(--muted)]">{item.publications.join(", ")}</p>
          </Card>
          );
        })}
      </div>
    </Section>
  );
}
