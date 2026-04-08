import Image from "next/image";

interface TeamSectionProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export function TeamSection({
  title,
  description,
  image,
  reverse = false,
}: TeamSectionProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
        reverse ? "lg:[direction:rtl]" : ""
      }`}
    >
      <div className={reverse ? "lg:[direction:ltr]" : ""}>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className={reverse ? "lg:[direction:ltr]" : ""}>
        <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase mb-4">
          {title}
        </h2>
        <p className="text-gray-medium leading-relaxed text-lg">{description}</p>
      </div>
    </div>
  );
}
