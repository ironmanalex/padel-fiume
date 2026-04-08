import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FacilityCard } from "@/components/struttura/FacilityCard";

export const metadata: Metadata = createMetadata({
  title: "Struttura",
  description:
    "Al DICA Padel Center offriamo 5 campi coperti, Sala Piancavallo, bar e ogni comfort. Scopri la nostra struttura.",
});

const facilities = [
  {
    title: "5 Campi al coperto",
    description:
      "I nostri 5 campi da padel al coperto garantiscono partite entusiasmanti tutto l'anno. Dotati di vetri doppi 8+8, illuminazione LED, grip ottimale e ottimo isolamento acustico.",
    image: "/images/facility/campi.jpg",
    features: [
      "Vetri doppi 8+8",
      "Illuminazione LED",
      "Grip ottimale",
      "Isolamento acustico",
    ],
  },
  {
    title: "Sala Piancavallo",
    description:
      "La nostra Sala Piancavallo offre un'area lounge accogliente con vista panoramica sui campi, sedute confortevoli e spazi per socializzare. Perfetta per eventi, feste e meeting aziendali.",
    image: "/images/facility/piancavallo.jpg",
    features: [
      "Vista panoramica sui campi",
      "Sedute confortevoli",
      "Addobbabile a piacimento",
      "Ideale per eventi",
    ],
  },
  {
    title: "Bar",
    description:
      "Il nostro bar propone una varietà di bevande e snack. Bevande rinfrescanti e pasti leggeri prima e dopo le partite per un momento di relax e convivialità.",
    image: "/images/facility/bar.jpg",
    features: [
      "Bevande e snack",
      "Pasti leggeri",
      "Zona relax",
    ],
  },
  {
    title: "Comfort",
    description:
      "Spogliatoi moderni, docce ampie e tutte le comodità necessarie per rendere la tua esperienza al DICA Padel Center ancora più piacevole.",
    image: "/images/facility/comfort.jpg",
    features: [
      "Spogliatoi moderni",
      "Docce ampie",
      "Armadietti smart",
      "Impianto riscaldato",
    ],
  },
];

export default function StrutturaPage() {
  return (
    <>
      <PageHero
        title="Il nostro centro padel"
        subtitle="Al DICA Padel Center, offriamo un'esperienza unica con strutture di alta qualità"
        image="/images/hero/struttura.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="container-site">
          <SectionHeading
            title="Le nostre strutture"
            subtitle="Tutto ciò che serve per vivere al meglio la tua esperienza padel"
          />
          <div className="space-y-20">
            {facilities.map((facility, i) => (
              <div
                key={facility.title}
                className={i % 2 !== 0 ? "lg:[direction:rtl]" : ""}
              >
                <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                  <FacilityCard {...facility} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
