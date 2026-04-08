import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { TeamSection } from "@/components/squadre/TeamSection";

export const metadata: Metadata = createMetadata({
  title: "Squadre",
  description:
    "Le squadre del DICA Padel Center: squadra maschile e femminile in Serie C.",
});

export default function SquadrePage() {
  return (
    <>
      <PageHero
        title="Le nostre squadre"
        subtitle="Due squadre ufficiali che rappresentano il DICA Padel Center in Serie C"
        image="/images/hero/squadre.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="container-site space-y-20">
          <TeamSection
            title="Squadra Maschile"
            description="La nostra squadra maschile partecipa al campionato di Serie C con giocatori motivati e determinati. Allenamento, strategia e collaborazione sono gli elementi fondamentali per la preparazione delle partite. Il miglioramento continuo del livello di gioco, l'entusiasmo e lo spirito competitivo in ogni gara rappresentano il DICA Padel Center in campo e fuori."
            image="/images/teams/squadra-maschile.jpg"
          />

          <TeamSection
            title="Squadra Femminile"
            description="La nostra squadra femminile in Serie C è composta da giocatrici determinate, unite dalla passione condivisa per il padel. La coesione e l'impegno del gruppo sono i valori che ci contraddistinguono. Ogni partita rappresenta un momento di condivisione, sostegno e tifo da parte di tutta la nostra organizzazione sportiva."
            image="/images/teams/squadra-femminile.jpg"
            reverse
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-dark text-white text-center">
        <div className="container-site max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase mb-6">
            Spirito di comunità
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Entrambe le squadre incarnano lo spirito di comunità del nostro
            centro. Il DICA Padel Center mira a far crescere la cultura del
            padel attraverso passione, rispetto e divertimento.
          </p>
        </div>
      </section>
    </>
  );
}
