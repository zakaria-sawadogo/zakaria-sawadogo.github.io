import QRCode from "qrcode";
import { Mail, MapPin, Phone } from "lucide-react";
import { Section } from "@/components/design/section";
import { Heading } from "@/components/design/heading";
import { Card } from "@/components/design/card";
import { Button } from "@/components/design/button";
import profile from "@/data/profile.json";

export const metadata = { title: "Contact" };

function buildVCard() {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Sawadogo;Zakaria;;Dr.;",
    `FN:${profile.name}`,
    // Institution name is transliterated to plain ASCII here: QR scanners generally
    // assume Latin-1 unless a UTF-8 ECI marker is present, so accented characters
    // (e.g. "Ecole") can render as mojibake on some phone camera apps otherwise.
    "ORG:Ecole Polytechnique de Ouagadougou",
    `TITLE:${profile.title}`,
    `EMAIL;TYPE=INTERNET:${profile.email}`,
    `TEL;TYPE=CELL:${profile.phone}`,
    `ADR;TYPE=WORK:;;;Ouagadougou;;;Burkina Faso`,
    "URL:https://zakaria-sawadogo.github.io/zs/",
    "END:VCARD"
  ];
  return lines.join("\r\n");
}

export default async function ContactPage() {
  const qrSvg = await QRCode.toString(buildVCard(), {
    type: "svg",
    margin: 1,
    color: { dark: "#16181b", light: "#ffffff" }
  });

  return (
    <Section>
      <Heading eyebrow="Contact" title="Collaborations, supervision, and speaking invitations" />
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Card>
          <div className="space-y-4 text-[var(--muted)]">
            <p className="flex items-center gap-3"><Mail size={18} /> {profile.email}</p>
            <p className="flex items-center gap-3"><Phone size={18} /> {profile.phone}</p>
            <p className="flex items-center gap-3"><MapPin size={18} /> {profile.location}</p>
          </div>
          <div className="mt-6 flex flex-col items-center gap-3 rounded-lg border border-[var(--line)] bg-white p-6">
            <div
              className="w-full max-w-[220px] [&>svg]:h-auto [&>svg]:w-full"
              dangerouslySetInnerHTML={{ __html: qrSvg }}
            />
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Scan to save contact</p>
          </div>
        </Card>
        <Card>
          <form className="grid gap-4">
            <input className="rounded-md border border-[var(--line)] bg-transparent px-4 py-3" placeholder="Name" />
            <input className="rounded-md border border-[var(--line)] bg-transparent px-4 py-3" placeholder="Email" />
            <textarea className="min-h-40 rounded-md border border-[var(--line)] bg-transparent px-4 py-3" placeholder="Message" />
            <Button type="submit">Send message</Button>
          </form>
        </Card>
      </div>
    </Section>
  );
}
