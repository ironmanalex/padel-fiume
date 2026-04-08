import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventTypeCard } from "@/components/eventi/EventTypeCard";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "Eventi",
  description:
    "Organizza eventi aziendali, feste private e compleanni al DICA Padel Center di Fiume Veneto, Pordenone.",
});

const eventTypes = [
  {
    title: "Eventi Aziendali",
    description:
      "Un ambiente ideale per rafforzare lo spirito di squadra e creare ricordi indimenticabili.",
    details:
      "Attività di team building, riunioni aziendali e workshop in un ambiente stimolante e rilassato. Perfetto per offrire ai vostri collaboratori un'esperienza unica.",
    image: "/images/events/aziendali.jpg",
  },
  {
    title: "Feste Private",
    description:
      "La nostra Club House, ideale per celebrare i tuoi momenti speciali in un ambiente raffinato e confortevole.",
    details:
      "Celebrazioni esclusive come lauree, anniversari e ricorrenze con un'atmosfera riservata e curata. Vista panoramica sui campi da padel dalla Sala Piancavallo.",
    image: "/images/events/feste-private.jpg",
  },
  {
    title: "Compleanni",
    description:
      "Organizza un compleanno diverso dal solito! Un modo originale e divertente per celebrare il tuo giorno speciale.",
    details:
      "Impianto audio, tornei amichevoli e un'esperienza completa per una festa di compleanno indimenticabile al DICA Padel Center.",
    image: "/images/events/compleanni.jpg",
  },
];

export default function EventiPage() {
  return (
    <>
      <PageHero
        title="Eventi Aziendali e Team Building a Pordenone"
        subtitle="Organizza il tuo evento da noi!"
        image="/images/hero/eventi.jpg"
      >
        <p className="mt-4 text-gray-200 max-w-3xl mx-auto">
          Perfetto per team building aziendali, feste private esclusive e
          compleanni unici nella nostra Sala Piancavallo, una sala addobbabile a
          gusto, con vista panoramica, divanetti e bar. Scegli Dica Padel Center
          per celebrare in grande stile!
        </p>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="container-site">
          <SectionHeading
            title="Tipologie di evento"
            subtitle="Scegli il formato perfetto per la tua occasione"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventTypes.map((event) => (
              <EventTypeCard key={event.title} {...event} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-dark text-white text-center">
        <div className="container-site max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase mb-6">
            Organizza il tuo evento
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Per maggiori informazioni, per un preventivo su misura o per
            visitare le nostre sale, non esitare a contattarci.
          </p>
          <Button href="/contatti" variant="primary">
            Contattaci
          </Button>
        </div>
      </section>
    </>
  );
}
