import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingTable } from "@/components/tariffario/PricingTable";
import { MembershipCard } from "@/components/tariffario/MembershipCard";

export const metadata: Metadata = createMetadata({
  title: "Tariffario",
  description:
    "Tariffe campi padel al DICA Padel Center: soci da €12, ospiti da €17. Scopri le nostre quote associative.",
});

const memberPricing = [
  { label: "Prima delle 18:00 (Lun-Ven) — 1h 30min", price: "€12" },
  { label: "Dopo le 18:00 (Lun-Ven) e Sab-Dom — 1h 30min", price: "€14" },
  { label: "Pacchetto 10 partite + 1 omaggio", price: "€140" },
];

const guestPricing = [
  { label: "Prima delle 18:00 — 1h 30min", price: "€17" },
  { label: "Dopo le 18:00 — 1h 30min", price: "€17" },
];

export default function TariffarioPage() {
  return (
    <>
      <PageHero
        title="Tariffario"
        subtitle="Scopri le nostre tariffe e le quote associative"
        image="/images/hero/tariffario.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="container-site">
          <SectionHeading
            title="Tariffe campi"
            subtitle="Prezzi per 1 ora e 30 minuti di gioco"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingTable
              title="Tesserato e Atleta"
              subtitle="Soci del DICA Padel"
              rows={memberPricing}
              highlight
            />
            <PricingTable
              title="Non Tesserato / Ospite"
              rows={guestPricing}
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-light">
        <div className="container-site">
          <SectionHeading
            title="Quote Associative"
            subtitle="Diventa socio e risparmia su ogni partita"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <MembershipCard
              title="Tesseramento DICA"
              price="€40"
              features={["Accesso tariffe socio", "Convenzioni partner"]}
            />
            <MembershipCard
              title="FITP Non Agonistico"
              price="€10"
              features={["Tessera federale", "Tornei non agonistici"]}
            />
            <MembershipCard
              title="FITP Agonistico"
              price="€30"
              features={["Tessera federale", "Tornei agonistici FITP"]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
