import { siteConfig } from "@/data/site-config";

export function GoogleMapEmbed() {
  return (
    <div className="aspect-16/9 w-full overflow-hidden rounded-xl border border-border">
      <iframe
        src={siteConfig.mapEmbedSrc}
        title={`Map showing the location of ${siteConfig.clinicName}`}
        className="size-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
