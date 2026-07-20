"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { GalleryImage } from "@/types/gallery";

export function GalleryLightbox({ images }: { images: GalleryImage[] }) {
  const shouldReduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const current = openIndex !== null ? images[openIndex] : null;

  function showPrev() {
    setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }

  function showNext() {
    setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <motion.button
            key={image.id}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group relative aspect-square overflow-hidden rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            aria-label={`View larger image: ${image.alt}`}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24, scale: shouldReduceMotion ? 1 : 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.45,
              delay: shouldReduceMotion ? 0 : (index % 4) * 0.08,
              ease: "easeOut",
            }}
          >
            <Image
              src={image.imageUrl}
              alt={image.alt}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            />
          </motion.button>
        ))}
      </div>

      <Dialog
        open={openIndex !== null}
        onOpenChange={(open) => !open && setOpenIndex(null)}
      >
        <DialogContent className="max-w-3xl p-0 sm:max-w-3xl">
          {current && (
            <div className="relative">
              <DialogTitle className="sr-only">{current.alt}</DialogTitle>
              <DialogDescription className="sr-only">
                Image {(openIndex ?? 0) + 1} of {images.length} in the clinic
                gallery
              </DialogDescription>
              <div
                className="relative aspect-4/3 w-full"
                onKeyDown={(e) => {
                  if (e.key === "ArrowLeft") showPrev();
                  if (e.key === "ArrowRight") showNext();
                }}
              >
                <Image
                  src={current.imageUrl}
                  alt={current.alt}
                  fill
                  className="rounded-xl object-cover"
                  sizes="768px"
                />
              </div>
              <div className="absolute inset-y-0 left-2 flex items-center">
                <Button
                  type="button"
                  variant="secondary"
                  size="icon"
                  onClick={showPrev}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </Button>
              </div>
              <div className="absolute inset-y-0 right-2 flex items-center">
                <Button
                  type="button"
                  variant="secondary"
                  size="icon"
                  onClick={showNext}
                  aria-label="Next image"
                >
                  <ChevronRight className="size-5" aria-hidden="true" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
