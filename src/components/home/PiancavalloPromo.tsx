import Image from "next/image";
import { Button } from "@/components/ui/Button";

const facilities = [
  { src: "/images/facility/campi.jpg", label: "5 Campi al coperto" },
  { src: "/images/facility/vetri.jpg", label: "Vetri 8+8" },
  { src: "/images/facility/bar.jpg", label: "Bar" },
  { src: "/images/facility/piancavallo.jpg", label: "Sala Piancavallo" },
];

export function PiancavalloPromo() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">
          {/* Left: text */}
          <div className="pt-0 lg:pt-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading uppercase mb-6 leading-tight italic">
              La nostra<br />struttura
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              Il DICA PADEL CENTER di Fiume Veneto, Pordenone, offre 5 campi coperti,
              bar e club house. Un ambiente perfetto per gli appassionati di padel di
              ogni livello!
            </p>
            <Button href="/struttura">Maggiori informazioni</Button>
          </div>

          {/* Right: 2x2 image grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {facilities.map((item) => (
              <div key={item.label}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-heading font-black text-sm md:text-base lg:text-lg uppercase mt-3 text-center italic">
                  {item.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
