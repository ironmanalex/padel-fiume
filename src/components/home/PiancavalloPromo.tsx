import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function PiancavalloPromo() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/facility/piancavallo.jpg"
              alt="Sala Piancavallo"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-primary font-heading font-semibold uppercase text-sm tracking-wider mb-2">
              La nostra
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase mb-4">
              Sala Piancavallo
            </h2>
            <p className="text-gray-medium text-lg leading-relaxed mb-6">
              Organizza il tuo evento in un ambiente unico, luminoso e spazioso
              grazie alla nostra Sala Piancavallo. Vista panoramica sui campi,
              divanetti e bar per un&apos;esperienza indimenticabile.
            </p>
            <Button href="/eventi">Organizza evento</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
