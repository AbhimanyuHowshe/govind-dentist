import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { galleryImages } from "@/data/gallery";

export function ModernEquipment() {
  // Equipment shots first, then treatment-room shots (chairs, operating lights).
  const equipmentImages = [
    ...galleryImages.filter((img) => img.category === "equipment"),
    ...galleryImages.filter((img) => img.category === "treatment-rooms"),
  ].slice(0, 4);

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Technology"
            title="Modern Equipment, Better Care"
            description="We invest in advanced diagnostic and treatment technology to make every procedure more accurate and comfortable."
            className="mb-10"
          />
        </Reveal>
        <Reveal delay={0.1} className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {equipmentImages.map((img) => (
            <div
              key={img.id}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 transition-shadow duration-200 hover:shadow-xl"
            >
              <Image
                src={img.imageUrl}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(min-width: 640px) 25vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </div>
          ))}
        </Reveal>
        <div className="mt-10 flex justify-center">
          <Button render={<Link href="/gallery" />} variant="outline">
            View Our Gallery
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
