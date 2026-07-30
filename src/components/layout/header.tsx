"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic";
import { mainNav } from "@/data/nav";
import { siteConfig } from "@/data/site-config";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur transition-all duration-300 supports-backdrop-filter:bg-background/80",
        scrolled && "shadow-md shadow-brand-navy/5"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 lg:px-8",
          scrolled ? "h-16" : "h-20"
        )}
      >
        <Link href="/" className="flex items-center" aria-label={siteConfig.shortName}>
          <Image
            src="/images/logo.png"
            alt={siteConfig.shortName}
            width={767}
            height={365}
            priority
            className="h-11 w-auto sm:h-14"
          />
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
          <Magnetic strength={0.3}>
            <Button
              render={<Link href="/contact#appointment-form" />}
              className="hidden sm:inline-flex"
            >
              Book an Appointment
            </Button>
          </Magnetic>
        </div>
      </div>
    </header>
  );
}
