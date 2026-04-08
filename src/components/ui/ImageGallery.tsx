"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i)}
            className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-primary"
            onClick={() => setSelectedIndex(null)}
          >
            &times;
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-primary"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(
                selectedIndex > 0 ? selectedIndex - 1 : images.length - 1
              );
            }}
          >
            &#8249;
          </button>
          <div className="relative max-w-4xl max-h-[80vh] w-full aspect-video">
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              fill
              className="object-contain"
            />
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-primary"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(
                selectedIndex < images.length - 1 ? selectedIndex + 1 : 0
              );
            }}
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  );
}
