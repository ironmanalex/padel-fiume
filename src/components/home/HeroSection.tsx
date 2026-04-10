import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FeatureBanners } from "@/components/home/FeatureBanners";

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center text-white overflow-hidden">
      <Image
        src="/images/hero/home.jpg"
        alt="DICA Padel Center"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero text — left aligned */}
      <div className="relative z-10 px-6 md:px-12 lg:px-16 pb-40 md:pb-48 max-w-3xl">
        {/* Yellow dot grid decoration */}
        <div className="mb-4 md:mb-6 flex flex-col gap-1.5">
          <div className="flex gap-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <span key={`r1-${i}`} className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-primary inline-block" />
            ))}
          </div>
          <div className="flex gap-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <span key={`r2-${i}`} className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-primary inline-block" />
            ))}
          </div>
        </div>

        <h1 className="font-heading font-black uppercase mb-6 leading-[0.9] tracking-tight" style={{ fontStyle: "italic" }}>
          <span className="block text-4xl md:text-6xl lg:text-7xl text-white">DICA</span>
          <span className="block text-4xl md:text-6xl lg:text-7xl text-white">PADEL</span>
          <span className="block text-4xl md:text-6xl lg:text-7xl text-primary">CENTER</span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-md mb-8 italic">
          Vivi il padel in un ambiente unico come non lo hai mai fatto!
        </p>
        <Button href="/prenota-campo" variant="primary" className="px-10 md:px-16 py-4 text-base md:text-lg">
          Prenota ora
        </Button>
      </div>

      {/* Feature banners at the bottom */}
      <FeatureBanners />
    </section>
  );
}
