import Link from "next/link";
import { Phone, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mainNav } from "@/data/nav";
import { siteConfig } from "@/data/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-lg font-semibold text-brand-navy"
        >
          <Stethoscope
            className="size-6 text-brand-blue"
            aria-hidden="true"
          />
          <span className="hidden sm:inline">{siteConfig.shortName}</span>
          <span className="sm:hidden">Dr. Govind &amp; Dr. Preeti</span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 md:flex"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            render={<a href={`tel:${siteConfig.phone}`} />}
            variant="outline"
            className="hidden sm:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call Now
          </Button>
          <Button
            render={<Link href="/contact#appointment-form" />}
            className="hidden sm:inline-flex"
          >
            Book an Appointment
          </Button>
        </div>
      </div>
    </header>
  );
}
