import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    title: "5 campi al coperto",
    image: "/images/facility/campi.jpg",
    href: "/struttura",
  },
  {
    title: "Vetri 8+8",
    image: "/images/facility/vetri.jpg",
    href: "/struttura",
  },
  {
    title: "Bar",
    image: "/images/facility/bar.jpg",
    href: "/struttura",
  },
  {
    title: "Sala Piancavallo",
    image: "/images/facility/piancavallo.jpg",
    href: "/struttura",
  },
];

export function ServiceCards() {
  return (
    <section className="py-16 md:py-24 bg-gray-light">
      <div className="container-site">
        <SectionHeading
          title="I nostri servizi"
          subtitle="Il DICA PADEL CENTER di Fiume Veneto, Pordenone, offre 5 campi coperti, bar e club house. Un ambiente perfetto per gli appassionati di padel di ogni livello!"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <h3 className="absolute bottom-4 left-4 right-4 text-white font-heading font-bold text-lg uppercase">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
