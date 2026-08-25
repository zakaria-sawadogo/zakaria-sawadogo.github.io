import type { Metadata } from "next";
import "@fontsource-variable/fraunces/wght.css";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { MotionProvider } from "@/components/layout/motion-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { LanguageRuntime } from "@/components/layout/language-runtime";
import settings from "@/data/settings.json";
import social from "@/data/social.json";

export const metadata: Metadata = {
  metadataBase: new URL(settings.siteUrl),
  title: {
    default: settings.seo.title,
    template: `%s | ${settings.seo.name}`
  },
  description: settings.seo.description,
  keywords: settings.seo.keywords,
  authors: [{ name: settings.seo.name }],
  alternates: {
    canonical: settings.siteUrl
  },
  openGraph: {
    title: settings.seo.title,
    description: settings.seo.description,
    url: settings.siteUrl,
    siteName: settings.seo.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${settings.siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: settings.seo.name
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: settings.seo.title,
    description: settings.seo.description,
    images: [`${settings.siteUrl}/images/og-image.png`]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large"
    }
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const identityProfiles = social
    .filter((item) => /scholar\.google|orcid\.org|linkedin\.com\/in\/|scopus\.com/.test(item.url))
    .map((item) => item.url);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: settings.seo.name,
    jobTitle: "Lecturer & Researcher",
    affiliation: "École Polytechnique de Ouagadougou",
    url: settings.siteUrl,
    image: `${settings.siteUrl}/images/og-image.png`,
    knowsAbout: settings.seo.keywords,
    sameAs: identityProfiles
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MotionProvider>
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
            <LanguageRuntime />
          </MotionProvider>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
