export type GalleryCategory =
  | "reception"
  | "treatment-rooms"
  | "equipment"
  | "sterilization"
  | "interiors";

export interface GalleryImage {
  id: string;
  category: GalleryCategory;
  imageUrl: string;
  alt: string;
}
