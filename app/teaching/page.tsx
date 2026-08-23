import { ArrowRight } from "lucide-react";
import { Section } from "@/components/design/section";
import { Heading } from "@/components/design/heading";
import { Card } from "@/components/design/card";
import { Button } from "@/components/design/button";
import courses from "@/data/courses.json";

export const metadata = { title: "Teaching" };

export default function TeachingPage() {
  const teaching = courses[0];

  return (
    <Section>
      <Heading eyebrow="Teaching" title="Courses, practical work, and downloadable material" />
      <Card className="max-w-2xl p-8">
        <h2 className="font-serif text-2xl font-bold text-[var(--ink)]">{teaching.title}</h2>
        <p className="mt-3 leading-7 text-[var(--muted)]">{teaching.description}</p>
        <Button href={teaching.materials[0]} variant="secondary" className="mt-5">
          Visit the course site <ArrowRight size={16} />
        </Button>
      </Card>
    </Section>
  );
}
