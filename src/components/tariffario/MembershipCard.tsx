interface MembershipCardProps {
  title: string;
  price: string;
  features?: string[];
}

export function MembershipCard({ title, price, features }: MembershipCardProps) {
  return (
    <div className="bg-gray-light rounded-2xl p-6 text-center">
      <h3 className="font-heading font-bold text-lg uppercase mb-2">{title}</h3>
      <p className="text-3xl font-heading font-bold text-primary mb-4">{price}</p>
      {features && features.length > 0 && (
        <ul className="text-sm text-gray-medium space-y-1">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
