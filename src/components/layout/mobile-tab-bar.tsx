"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Stethoscope, Phone, CalendarCheck, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site-config";

const primaryTabs = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/services", icon: Stethoscope },
  { label: "Book", href: "/contact#appointment-form", icon: CalendarCheck },
];

const moreLinks = [
  { label: "About", href: "/about" },
  { label: "Doctors", href: "/doctors" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const tabClasses =
  "flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium transition-colors";

export function MobileTabBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Primary mobile navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80 pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <div className="grid grid-cols-5 items-stretch">
        {primaryTabs.map(({ label, href, icon: Icon }) => {
          const basePath = href.split("#")[0];
          const active =
            basePath === "/" ? pathname === "/" : pathname?.startsWith(basePath);
          return (
            <Link
              key={label}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                tabClasses,
                active
                  ? "text-brand-blue"
                  : "text-muted-foreground hover:text-brand-blue",
              )}
            >
              <Icon className="size-5" aria-hidden="true" />
              {label}
            </Link>
          );
        })}

        <a
          href={`tel:${siteConfig.phone}`}
          className={cn(tabClasses, "text-brand-emerald hover:text-brand-emerald/80")}
        >
          <Phone className="size-5" aria-hidden="true" />
          Call
        </a>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <button
                type="button"
                className={cn(
                  tabClasses,
                  "w-full text-muted-foreground hover:text-brand-blue",
                )}
                aria-label="More menu"
              />
            }
          >
            <Menu className="size-5" aria-hidden="true" />
            More
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle>{siteConfig.shortName}</SheetTitle>
            </SheetHeader>
            <nav
              aria-label="More navigation"
              className="flex flex-col gap-1 px-4"
            >
              {moreLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-base font-medium text-foreground hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
