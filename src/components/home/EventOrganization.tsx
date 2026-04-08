import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const eventTypes = [
  "Eventi aziendali",
  "Feste private",
  "Feste di compleanno",
];

export function EventOrganization() {
  return (
    <section className="py-16 md:py-24 bg-dark text-white">
      <div className="container-site text-center">
        <SectionHeading
          title="Organizza il tuo evento"
          subtitle="Organizzate eventi, feste o meeting aziendali nella nostra club house!"
          light
        />
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {eventTypes.map((type) => (
            <span
              key={type}
              className="border border-primary text-primary px-5 py-2 rounded-full font-heading font-medium text-sm uppercase tracking-wider"
            >
              {type}
            </span>
          ))}
        </div>
        <Button href="/eventi" variant="primary">
          Scopri di più
        </Button>
      </div>
    </section>
  );
}
