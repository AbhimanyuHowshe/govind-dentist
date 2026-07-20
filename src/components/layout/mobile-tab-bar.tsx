"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import {
  Home,
  Stethoscope,
  Phone,
  CalendarCheck,
  Menu,
  Info,
  UserRound,
  Images,
  Quote,
  MapPin,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site-config";
import { useChatVisibility } from "@/lib/chat-visibility";

const primaryTabs = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/services", icon: Stethoscope },
  { label: "Book", href: "/contact#appointment-form", icon: CalendarCheck },
];

const moreLinks = [
  { label: "About", href: "/about", icon: Info },
  { label: "Doctors", href: "/doctors", icon: UserRound },
  { label: "Services", href: "/services", icon: Stethoscope },
  { label: "Gallery", href: "/gallery", icon: Images },
  { label: "Testimonials", href: "/testimonials", icon: Quote },
  { label: "Contact", href: "/contact", icon: MapPin },
];

const tabClasses =
  "flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium transition-colors";

export function MobileTabBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { chatOpen } = useChatVisibility();
  const shouldReduceMotion = useReducedMotion();

  return (
    <nav
      aria-label="Primary mobile navigation"
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80 pb-[env(safe-area-inset-bottom)] md:hidden",
        chatOpen && "hidden",
      )}
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
          <SheetContent side="right" className="w-72 gap-0 p-0">
            <SheetHeader className="bg-[linear-gradient(135deg,#6D5EF7_0%,#3B82F6_100%)] pb-6 text-white">
              <SheetTitle className="text-white">{siteConfig.shortName}</SheetTitle>
              <SheetDescription className="text-white/80">
                Tap a page below, or tap Close to go back.
              </SheetDescription>
            </SheetHeader>
            <nav
              aria-label="More navigation"
              className="flex flex-col gap-1 bg-background px-4 py-4"
            >
              {moreLinks.map((item, i) => {
                const active = pathname?.startsWith(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={
                      shouldReduceMotion || !open
                        ? undefined
                        : { opacity: 0, x: 16 }
                    }
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05, ease: "easeOut" }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2.5 text-base font-medium transition-colors",
                        active
                          ? "bg-brand-blue/10 text-brand-blue"
                          : "text-foreground hover:bg-brand-blue/5 hover:text-brand-blue",
                      )}
                    >
                      <item.icon className="size-5 shrink-0" aria-hidden="true" />
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            <SheetFooter className="bg-background">
              <SheetClose
                render={
                  <Button variant="outline" className="w-full">
                    Close
                  </Button>
                }
              />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
