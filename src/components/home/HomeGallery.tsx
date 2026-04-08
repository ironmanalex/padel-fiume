"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageGallery } from "@/components/ui/ImageGallery";

const galleryImages = [
  { src: "/images/gallery/gallery-1.jpg", alt: "DICA Padel Center" },
  { src: "/images/gallery/gallery-2.jpg", alt: "Campi da padel" },
  { src: "/images/gallery/gallery-3.jpg", alt: "Sala Piancavallo" },
  { src: "/images/gallery/gallery-4.jpg", alt: "Bar e area relax" },
  { src: "/images/gallery/gallery-5.jpg", alt: "Evento al DICA Padel" },
  { src: "/images/gallery/gallery-6.jpg", alt: "Torneo di padel" },
  { src: "/images/gallery/gallery-7.jpg", alt: "Club house" },
  { src: "/images/gallery/gallery-8.jpg", alt: "Partita di padel" },
];

export function HomeGallery() {
  return (
    <section className="py-16 md:py-24 bg-gray-light">
      <div className="container-site">
        <SectionHeading title="Gallery" />
        <ImageGallery images={galleryImages} />
      </div>
    </section>
  );
}
