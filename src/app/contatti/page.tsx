import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contatti/ContactForm";
import { ContactInfo } from "@/components/contatti/ContactInfo";
import { MapEmbed } from "@/components/contatti/MapEmbed";

export const metadata: Metadata = createMetadata({
  title: "Contatti",
  description:
    "Contatta il DICA Padel Center di Fiume Veneto, Pordenone. Chiamaci, scrivici o vieni a trovarci.",
});

export default function ContattiPage() {
  return (
    <>
      <PageHero
        title="Contatti"
        subtitle="Non esitare a contattarci per qualsiasi informazione"
        image="/images/hero/contatti.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Scrivici"
                subtitle="Compila il modulo e ti risponderemo al più presto"
                centered={false}
              />
              <ContactForm />
            </div>
            <div>
              <SectionHeading
                title="Informazioni"
                centered={false}
              />
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-site">
          <SectionHeading title="Dove trovarci" />
          <MapEmbed />
        </div>
      </section>
    </>
  );
}
