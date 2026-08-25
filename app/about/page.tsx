import { Section } from "@/components/design/section";
import { Heading } from "@/components/design/heading";
import { Card } from "@/components/design/card";
import { Badge } from "@/components/design/badge";
import { Timeline } from "@/components/design/timeline";
import { SmartBio } from "@/components/public/smart-bio";
import Link from "next/link";
import profile from "@/data/profile.json";
import experience from "@/data/experience.json";
import education from "@/data/education.json";
import awards from "@/data/awards.json";
import policyContributions from "@/data/policy-contributions.json";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <Section>
      <Heading eyebrow="About" title="Biography" />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.72fr]">
        <div className="space-y-8">
          <Card className="border-l-4 border-l-[var(--brand)]">
            <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">
                  Profile
                </p>
                <h2 className="mt-2 text-2xl font-bold">Academic Biography</h2>
              </div>
              <Badge>Current appointment</Badge>
            </div>
            <SmartBio text={profile.bio} />
          </Card>

          <div className="grid gap-5 md:grid-cols-3">
            <Card className="p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">Research</p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                AI, cybersecurity, privacy-preserving computing, and data-driven digital transformation.
              </p>
            </Card>
            <Card className="p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">Teaching</p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Computer science, artificial intelligence, cybersecurity, and software engineering.
              </p>
            </Card>
            <Card className="p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">Service</p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Digital governance, Internet development, cybersecurity initiatives, and collaborations.
              </p>
            </Card>
          </div>

          <Card>
            <h2 className="mb-4 text-xl font-bold">Selected Policy & Advisory Contributions</h2>
            <ul className="space-y-3 text-sm leading-7 text-[var(--muted)]">
              {policyContributions.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span className="mt-3 size-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div>
            <h2 className="mb-5 text-2xl font-bold">Academic Path</h2>
            <Timeline items={education} />
          </div>

          <div>
            <h2 className="mb-5 text-2xl font-bold">Professional Experience</h2>
            <Timeline items={experience} />
          </div>
        </div>

        <div className="space-y-5">
          <Card>
            <h2 className="mb-4 text-xl font-bold">Awards</h2>
            <div className="space-y-4">
              {awards.map((item) => (
                <div key={item.title}>
                  <p className="font-bold">{item.title}</p>
                  <p className="text-sm text-[var(--muted)]">{item.organization} · {item.year}</p>
                </div>
              ))}
            </div>
            <Link href="/awards" className="academic-link mt-5 inline-block text-sm">
              View all awards &amp; certificates
            </Link>
          </Card>

          <Card className="text-[var(--brand-foreground)]" style={{ background: "var(--brand)" }}>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] opacity-75">Affiliation</p>
            <h2 className="mt-3 text-2xl font-bold">{profile.institution}</h2>
            <p className="mt-3 text-sm leading-7 opacity-80">{profile.location}</p>
          </Card>

          <Card>
            <h2 className="mb-4 text-xl font-bold">Core Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => <Badge key={skill}>{skill}</Badge>)}
            </div>
          </Card>

          <Card>
            <h2 className="mb-4 text-xl font-bold">Responsibilities</h2>
            <ul className="space-y-3 text-sm leading-7 text-[var(--muted)]">
              {profile.responsibilities.map((item) => (
                <li className="border-l-2 border-[var(--line)] pl-4" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </Section>
  );
}
