import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Stethoscope } from "lucide-react";
import { footerQuickLinks } from "@/data/nav";
import { siteConfig, fullAddressString } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#3331A5] text-white pb-16 md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2 font-heading text-lg font-semibold">
            <Stethoscope className="size-6 text-brand-blue" aria-hidden="true" />
            {siteConfig.clinicName}
          </div>
          <p className="mt-3 max-w-sm text-sm text-white/70">
            {siteConfig.description}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-white/60">
            Quick Links
          </h2>
          <ul className="mt-4 flex flex-col gap-2">
            {footerQuickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/80 hover:text-brand-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-white/60">
            Contact
          </h2>
          <address className="mt-4 flex flex-col gap-3 text-sm text-white/80 not-italic">
            <span className="flex gap-2">
              <MapPin
                className="mt-0.5 size-4 shrink-0 text-brand-accent"
                aria-hidden="true"
              />
              {fullAddressString}
            </span>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 hover:text-brand-accent"
            >
              <Phone className="size-4 shrink-0 text-brand-accent" aria-hidden="true" />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 hover:text-brand-accent"
            >
              <Mail className="size-4 shrink-0 text-brand-accent" aria-hidden="true" />
              {siteConfig.email}
            </a>
            <span className="flex gap-2">
              <Clock
                className="mt-0.5 size-4 shrink-0 text-brand-accent"
                aria-hidden="true"
              />
              <span className="flex flex-col gap-0.5">
                {siteConfig.hours.map((h) => (
                  <span key={h.day}>
                    {h.day}: {h.hours}
                  </span>
                ))}
              </span>
            </span>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/50 sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {siteConfig.clinicName}. All rights
          reserved.
        </p>
        <p className="mt-1.5">
          Designed by{" "}
          <a
            href="https://aiinity.in"
            target="_blank"
            rel="noopener"
            className="font-semibold text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            aiinity.in
          </a>
        </p>
      </div>
    </footer>
  );
}
