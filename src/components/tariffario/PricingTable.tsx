interface PricingTableProps {
  title: string;
  subtitle?: string;
  rows: { label: string; price: string }[];
  highlight?: boolean;
}

export function PricingTable({
  title,
  subtitle,
  rows,
  highlight = false,
}: PricingTableProps) {
  return (
    <div
      className={`rounded-2xl overflow-hidden ${
        highlight ? "ring-2 ring-primary" : "border border-gray-200"
      }`}
    >
      <div
        className={`px-6 py-5 ${highlight ? "bg-primary text-dark" : "bg-dark text-white"}`}
      >
        <h3 className="font-heading font-bold text-xl uppercase">{title}</h3>
        {subtitle && <p className="text-sm mt-1 opacity-80">{subtitle}</p>}
      </div>
      <div className="divide-y divide-gray-100">
        {rows.map((row, i) => (
          <div
            key={i}
            className="flex justify-between items-center px-6 py-4"
          >
            <span className="text-gray-medium">{row.label}</span>
            <span className="font-heading font-bold text-lg">{row.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
