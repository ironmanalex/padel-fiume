export interface PriceSlot {
  label: string;
  price: string;
}

export interface PricingSection {
  title: string;
  subtitle?: string;
  slots: PriceSlot[];
}

export interface Membership {
  title: string;
  price: string;
  period: string;
  features: string[];
}
