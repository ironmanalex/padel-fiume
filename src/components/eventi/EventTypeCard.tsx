import Image from "next/image";

interface EventTypeCardProps {
  title: string;
  description: string;
  details: string;
  image: string;
}

export function EventTypeCard({
  title,
  description,
  details,
  image,
}: EventTypeCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-56">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold font-heading uppercase mb-3">
          {title}
        </h3>
        <p className="text-gray-medium mb-3">{description}</p>
        <p className="text-sm text-gray-medium leading-relaxed">{details}</p>
      </div>
    </div>
  );
}
