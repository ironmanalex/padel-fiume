import Image from "next/image";
import { Partner } from "@/types/partner";

export function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col items-center text-center">
      <div className="relative w-24 h-24 mb-4">
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="font-heading font-bold text-lg mb-2">{partner.name}</h3>
      <p className="text-primary font-semibold text-sm mb-2">
        {partner.discount}
      </p>
      {partner.description && (
        <p className="text-gray-medium text-sm">{partner.description}</p>
      )}
    </div>
  );
}
