import type { GalleryImage } from "@/types/gallery";

// Real clinic photography (client-provided, 2026-09-30), served from public/images/clinic.
export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    category: "reception",
    imageUrl: "/images/clinic/reception-desk.jpg",
    alt: "Dr. Singh Dental Clinic reception desk with backlit wave wall",
  },
  {
    id: "g2",
    category: "reception",
    imageUrl: "/images/clinic/reception-waiting-area.png",
    alt: "Patient waiting area beside the reception desk",
  },
  {
    id: "g3",
    category: "treatment-rooms",
    imageUrl: "/images/clinic/treatment-hall.jpg",
    alt: "Treatment hall with multiple modern dental chairs",
  },
  {
    id: "g4",
    category: "treatment-rooms",
    imageUrl: "/images/clinic/treatment-hall-window.jpg",
    alt: "Naturally lit treatment area with dental chairs by the windows",
  },
  {
    id: "g5",
    category: "treatment-rooms",
    imageUrl: "/images/clinic/treatment-hall-consultation.jpg",
    alt: "Dental chairs with the doctors' consultation desk in the background",
  },
  {
    id: "g6",
    category: "treatment-rooms",
    imageUrl: "/images/clinic/treatment-chair.jpg",
    alt: "Dental treatment chair with overhead operating light",
  },
  {
    id: "g7",
    category: "equipment",
    imageUrl: "/images/clinic/equipment-counter.jpg",
    alt: "Clinical counter with dental equipment and instrument stations",
  },
  {
    id: "g8",
    category: "interiors",
    imageUrl: "/images/clinic/awards-shelf.jpg",
    alt: "Awards and certificates earned by the clinic's doctors on display",
  },
];
