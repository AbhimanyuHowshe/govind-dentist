import { Phone, Siren } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

export function EmergencyCta() {
  return (
    <section className="bg-gradient-to-r from-brand-navy to-[#1e1b4b]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 text-white">
          <span className="relative flex size-6 shrink-0 items-center justify-center">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-emerald/50" />
            <Siren className="relative size-6 text-brand-emerald" aria-hidden="true" />
          </span>
          <p className="text-sm sm:text-base">
            <span className="font-semibold">Dental Emergency?</span> We
            prioritize urgent cases — call us right away.
          </p>
        </div>
        <Button
          render={<a href={`tel:${siteConfig.phone}`} />}
          className="bg-brand-emerald text-white hover:bg-brand-emerald/90"
        >
          <Phone className="size-4" aria-hidden="true" />
          Call {siteConfig.phoneDisplay}
        </Button>
      </div>
    </section>
  );
}
