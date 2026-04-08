import { AMENITIES } from "@/lib/constants";

const icons: Record<string, string> = {
  court: "🏟️",
  relax: "🛋️",
  heating: "🔥",
  glass: "🪟",
  bar: "☕",
};

export function AmenitiesBar() {
  return (
    <section className="bg-dark text-white py-6">
      <div className="container-site">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {AMENITIES.map((amenity) => (
            <div
              key={amenity.label}
              className="flex items-center gap-2 text-sm md:text-base"
            >
              <span className="text-xl">{icons[amenity.icon]}</span>
              <span className="font-heading font-medium">{amenity.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
