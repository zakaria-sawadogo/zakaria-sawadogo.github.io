import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Mail, MapPin, ShieldCheck } from "lucide-react";
import { Container } from "@/components/design/container";
import { Card } from "@/components/design/card";
import { Button } from "@/components/design/button";
import { Reveal } from "@/components/public/reveal";
import research from "@/data/research.json";
import projects from "@/data/projects.json";
import profile from "@/data/profile.json";
import social from "@/data/social.json";
import { withBasePath } from "@/lib/paths";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <Container className="py-10 lg:py-14">
      <section className="academic-grid relative grid gap-10 border-b border-[var(--line)] pb-10 lg:grid-cols-[320px_1fr]">
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <div
            className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--panel)]"
            style={{ boxShadow: "0 24px 60px -24px color-mix(in srgb, var(--brand) 45%, transparent)" }}
          >
            <Image
              src={withBasePath(profile.photo)}
              alt={profile.name}
              width={720}
              height={900}
              priority
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="mt-5 rounded-md border border-[var(--line)] bg-[var(--panel)] p-5">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand)]">Affiliation</p>
            <div className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
              <p className="flex items-start gap-2"><MapPin size={16} className="mt-1 shrink-0 text-[var(--brand)]" /> {profile.institution}</p>
              <p className="flex items-start gap-2"><Mail size={16} className="mt-1 shrink-0 text-[var(--brand)]" /> {profile.email}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {social.slice(0, 4).map((item) => (
                <Link className="academic-link text-sm" href={item.url} key={item.label}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand)]">{profile.title}</p>
          <h1 className="mt-3 max-w-4xl font-serif text-4xl font-bold leading-tight text-[var(--ink)] sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-4xl text-2xl font-semibold leading-snug text-[var(--foreground)]">
            {profile.headline}
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            Lecturer and researcher building secure, intelligent, and inclusive digital systems for institutions, communities, and Africa's digital transformation.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/publications" variant="secondary">
              Publications <ArrowRight size={17} />
            </Button>
            <Button href="/research" variant="secondary">
              Research <ArrowRight size={17} />
            </Button>
            <Button href={profile.cvUrl}>
              CV
            </Button>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-4">
            {profile.stats.map((item) => (
              <div className="rounded-md border border-[var(--line)] bg-[var(--soft)] p-4" key={item.label}>
                <p className="text-2xl font-bold text-[var(--ink)]">{item.value}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Card className="p-5">
              <ShieldCheck className="mb-4 size-6 text-[var(--brand)]" />
              <h2 className="text-lg font-bold text-[var(--ink)]">Secure Digital Systems</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Research on malware detection, cyber threat intelligence, privacy, and trustworthy AI.
              </p>
            </Card>
            <Card className="p-5">
              <BookOpen className="mb-4 size-6 text-[var(--brand)]" />
              <h2 className="text-lg font-bold text-[var(--ink)]">Policy & Digital Development</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Applied work connecting digital rights, AI governance, inclusion, and institutional transformation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="grid gap-10 border-b border-[var(--line)] py-10 lg:grid-cols-[0.85fr_1fr]">
          <div>
            <h2 className="flex items-center gap-3 font-serif text-2xl font-bold text-[var(--ink)]">
              <span className="gradient-bar h-px w-8 shrink-0" />
              <span className="font-mono text-xs font-bold tracking-[0.12em] text-[var(--brand)]">01</span>
              Research interests
            </h2>
            <ul className="mt-5 grid gap-3">
              {research.map((item) => (
                <li className="rounded-md border border-[var(--line)] bg-[var(--panel)] p-4" key={item.slug}>
                  <p className="font-bold text-[var(--ink)]">{item.area}</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="flex items-center gap-3 font-serif text-2xl font-bold text-[var(--ink)]">
              <span className="gradient-bar h-px w-8 shrink-0" />
              <span className="font-mono text-xs font-bold tracking-[0.12em] text-[var(--brand)]">02</span>
              Current work
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {featuredProjects.map((project) => (
                <Card className="p-5" key={project.title}>
                  <h3 className="font-bold text-[var(--ink)]">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.description}</p>
                  <Link href="/projects" className="academic-link mt-4 inline-flex text-sm">
                    View project
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </Container>
  );
}
