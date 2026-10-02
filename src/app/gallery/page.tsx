import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { CtaBanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { GalleryLightbox } from "@/components/shared/gallery-lightbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb-schema";
import { galleryImages } from "@/data/gallery";
import type { GalleryCategory } from "@/types/gallery";

export const metadata: Metadata = buildMetadata({
  title: "Gallery",
  description:
    "Take a look inside Dr. Singh Dental Clinic in Ujjain — reception, treatment rooms, equipment, and sterilization standards.",
  path: "/gallery",
});

const allCategories: { value: GalleryCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "reception", label: "Reception" },
  { value: "treatment-rooms", label: "Treatment Rooms" },
  { value: "equipment", label: "Equipment" },
  { value: "sterilization", label: "Sterilization" },
  { value: "interiors", label: "Interiors" },
];

// Hide tabs for categories that don't have any photos yet.
const categories = allCategories.filter(
  (cat) =>
    cat.value === "all" || galleryImages.some((img) => img.category === cat.value)
);

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <PageHero
        title="Clinic Gallery"
        description="A look inside our reception, treatment rooms, equipment, and sterilization standards."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ]}
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Tabs defaultValue="all">
            <TabsList className="mb-8 h-auto flex-wrap gap-1.5 group-data-horizontal/tabs:h-auto">
              {categories.map((cat) => (
                <TabsTrigger key={cat.value} value={cat.value}>
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((cat) => (
              <TabsContent key={cat.value} value={cat.value}>
                <GalleryLightbox
                  images={
                    cat.value === "all"
                      ? galleryImages
                      : galleryImages.filter((img) => img.category === cat.value)
                  }
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
