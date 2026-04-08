import Image from "next/image";

interface CardProps {
  image?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

export function Card({ image, title, description, children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {image && (
        <div className="relative h-48 md:h-56">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold font-heading mb-3">{title}</h3>
        <p className="text-gray-medium leading-relaxed">{description}</p>
        {children}
      </div>
    </div>
  );
}
