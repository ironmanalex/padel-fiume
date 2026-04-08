import Image from "next/image";

interface FacilityCardProps {
  title: string;
  description: string;
  image: string;
  features?: string[];
}

export function FacilityCard({
  title,
  description,
  image,
  features,
}: FacilityCardProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl font-bold font-heading uppercase mb-4">
          {title}
        </h3>
        <p className="text-gray-medium leading-relaxed text-lg mb-4">
          {description}
        </p>
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-medium">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
