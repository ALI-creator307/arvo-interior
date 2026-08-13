import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import StructuredData from "@/components/StructuredData";
import { BUSINESS_INFO } from "@/lib/constants";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS_INFO.name} | Expert Interior Installation Dubai, Sharjah & Ajman`,
    template: `%s | ${BUSINESS_INFO.name}`,
  },
  description:
    "UAE's premier installation-only specialists. TV unit wall mounting, wall panels (foam, steel, gold strip), curtains & blinds, SPC flooring & interior painting in Dubai, Sharjah, and Ajman.",
  keywords: [
    "TV unit installation Dubai",
    "Wall panels installation Sharjah",
    "Curtains installation Ajman",
    "SPC flooring installation Dubai",
    "Interior painting Sharjah",
    "Arvo Interior UAE",
    "Wall mounting service Dubai",
    "Installation only interior service UAE"
  ],
  metadataBase: new URL(BUSINESS_INFO.websiteUrl),
  openGraph: {
    title: `${BUSINESS_INFO.name} — Your Satisfaction is Our Commitment`,
    description:
      "Installation-only interior specialists in Dubai, Sharjah, and Ajman. Get a free WhatsApp quote for TV units, wall panels, blinds, flooring & painting.",
    url: BUSINESS_INFO.websiteUrl,
    siteName: BUSINESS_INFO.name,
    locale: "en_UAE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: BUSINESS_INFO.name,
    description: "Professional interior installation services across Dubai, Sharjah & Ajman.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-charcoal-950 text-zinc-100 flex flex-col antialiased">
        <StructuredData />
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
        <Analytics />
      </body>
    </html>
  );
}
