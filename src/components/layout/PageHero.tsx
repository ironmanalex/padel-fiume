import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  children?: React.ReactNode;
}

export function PageHero({ title, subtitle, image, children }: PageHeroProps) {
  return (
    <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center text-white">
      {image && (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading uppercase mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
