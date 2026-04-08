import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Prenota Campo",
  description:
    "Prenota i tuoi campi padel al Dica Padel Center di Fiume Veneto, Pordenone. Chiama ora per assicurarti un posto nei nostri campi coperti.",
});

export default function PrenotaCampoPage() {
  return (
    <>
      <PageHero
        title="Prenota il tuo campo"
        subtitle="Prenota i tuoi campi padel al Dica Padel Center di Fiume Veneto, Pordenone. Chiama ora per assicurarti un posto nei nostri campi coperti e goditi una partita senza pensieri."
        image="/images/hero/prenota.jpg"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <Button
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            external
            variant="primary"
          >
            Chiama ora
          </Button>
          <Button href={CONTACT.whatsapp} external variant="outline">
            Scrivi su WhatsApp
          </Button>
        </div>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="container-site text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase mb-6">
            Come prenotare
          </h2>
          <p className="text-gray-medium text-lg mb-8 leading-relaxed">
            Per prenotare il tuo campo, contattaci telefonicamente o via
            WhatsApp. Il nostro staff sarà lieto di aiutarti a trovare
            l&apos;orario perfetto per la tua partita.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="bg-gray-light rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-3">📞</div>
              <h3 className="font-heading font-bold text-lg mb-2">Telefono</h3>
              <p className="text-primary font-semibold">{CONTACT.phoneDisplay}</p>
            </a>

            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-light rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-heading font-bold text-lg mb-2">WhatsApp</h3>
              <p className="text-primary font-semibold">Scrivici un messaggio</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
