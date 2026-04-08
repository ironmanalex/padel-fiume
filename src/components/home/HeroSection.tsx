import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center text-white">
      <Image
        src="/images/hero/home.jpg"
        alt="DICA Padel Center"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading uppercase mb-4">
          DICA <span className="text-primary">Padel</span> Center
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
          Vivi il padel in un ambiente unico come non lo hai mai fatto!
        </p>
        <Button href="/prenota-campo" variant="primary">
          Prenota ora
        </Button>
      </div>
    </section>
  );
}
