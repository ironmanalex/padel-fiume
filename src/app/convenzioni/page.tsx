import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PartnerCard } from "@/components/convenzioni/PartnerCard";
import { Partner } from "@/types/partner";

export const metadata: Metadata = createMetadata({
  title: "Convenzioni",
  description:
    "Sconti esclusivi, agevolazioni e collaborazioni per i soci del DICA Padel Center.",
});

const partners: Partner[] = [
  {
    name: "Adria Rent",
    logo: "/images/partners/adria-rent.png",
    discount: "Fino al 20% di sconto",
    description:
      "Auto nuove 2%, usato 3%, noleggio lungo 5%, noleggio breve 20%, manutenzione 10%, pneumatici 15%",
  },
  {
    name: "Le Monde Wine",
    logo: "/images/partners/le-monde.png",
    discount: "10% di sconto",
    description: "Sugli acquisti in cantina",
  },
  {
    name: "Birrificio di Naon",
    logo: "/images/partners/birrificio-naon.png",
    discount: "10% di sconto",
    description: "In cassa su tutti i prodotti",
  },
  {
    name: "Carrozzeria Jolly",
    logo: "/images/partners/carrozzeria-jolly.png",
    discount: "Agevolazioni",
    description: "Vantaggi su carrozzeria, pneumatici e servizi — Cordenons",
  },
  {
    name: "Tirelli Medical Group",
    logo: "/images/partners/tirelli-medical.png",
    discount: "Agevolazioni",
    description: "Vantaggi su visite medico sportive — Pordenone",
  },
  {
    name: "Hotel Florida",
    logo: "/images/partners/hotel-florida.png",
    discount: "15% di sconto",
    description: "Sui soggiorni — Lignano Sabbiadoro",
  },
  {
    name: "Pupulin Service",
    logo: "/images/partners/pupulin-service.png",
    discount: "Fino al 20% di sconto",
    description:
      "Soccorso stradale ACI 20%, tagliando base e ricarica clima — Fiume Veneto",
  },
  {
    name: "Più Sport",
    logo: "/images/partners/piu-sport.png",
    discount: "Fino al 30% di sconto",
    description: "Su articoli sportivi, calzature e abbigliamento — Sacile",
  },
  {
    name: "Sporting House",
    logo: "/images/partners/sporting-house.png",
    discount: "10% di sconto",
    description: "Su sala fitness e sauna — Fiume Veneto",
  },
  {
    name: "Masso Terapista",
    logo: "/images/partners/masso-terapista.png",
    discount: "€10 di sconto",
    description: "Su massaggio sportivo e decontratturante — DICA Padel Center",
  },
  {
    name: "Technopoint",
    logo: "/images/partners/technopoint.png",
    discount: "10% di sconto",
    description: "Su tutti gli accessori — Pordenone e Sacile",
  },
  {
    name: "Santin Casa",
    logo: "/images/partners/santin-casa.png",
    discount: "10% di sconto",
    description: "Su tutti gli articoli — Pasiano di Pordenone",
  },
];

export default function ConvenzioniPage() {
  return (
    <>
      <PageHero
        title="Convenzioni"
        subtitle="Sconti esclusivi, agevolazioni e collaborazioni per i nostri soci"
        image="/images/hero/convenzioni.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="container-site">
          <SectionHeading
            title="I nostri partner"
            subtitle="Essere socio DICA Padel conviene: scopri tutte le convenzioni riservate ai nostri tesserati"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
