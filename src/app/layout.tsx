import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileTabBar } from "@/components/layout/mobile-tab-bar";
import { SkipToContent } from "@/components/layout/skip-to-content";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { ChatWidget } from "@/components/shared/chat-widget";
import { JsonLd } from "@/components/shared/json-ld";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { organizationSchema } from "@/lib/schema/organization-schema";
import { siteConfig } from "@/data/site-config";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const headingFont = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.clinicName} | Dentist in Ujjain`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.clinicName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={organizationSchema()} />
        <TooltipProvider>
          <SkipToContent />
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <MobileTabBar />
          <WhatsAppButton />
          <ChatWidget />
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
