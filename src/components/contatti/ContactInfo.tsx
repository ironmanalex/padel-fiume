import { CONTACT, HOURS } from "@/lib/constants";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-heading font-bold text-lg mb-3 uppercase">
          Dove siamo
        </h3>
        <p className="text-gray-medium">
          {CONTACT.address}
          <br />
          {CONTACT.city}
        </p>
      </div>

      <div>
        <h3 className="font-heading font-bold text-lg mb-3 uppercase">
          Contatti
        </h3>
        <div className="space-y-2 text-gray-medium">
          <p>
            Tel:{" "}
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="text-primary hover:underline"
            >
              {CONTACT.phoneDisplay}
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-primary hover:underline"
            >
              {CONTACT.email}
            </a>
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-heading font-bold text-lg mb-3 uppercase">Orari</h3>
        <ul className="space-y-1 text-gray-medium">
          {HOURS.map((h) => (
            <li key={h.days} className="flex justify-between max-w-xs">
              <span>{h.days}</span>
              <span className="font-medium">{h.hours}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
