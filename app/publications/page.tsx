import { Section } from "@/components/design/section";
import { PublicationExplorer } from "@/components/public/publication-explorer";
import publications from "@/data/publications.json";

export const metadata = { title: "Publications" };

export default function PublicationsPage() {
  return (
    <Section>
      <PublicationExplorer publications={publications} />
    </Section>
  );
}
