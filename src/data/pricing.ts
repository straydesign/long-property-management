export interface PricingBlock {
  title: string;
  price: string;
  description: string;
  features: string[];
}

export const pricingBlocks: PricingBlock[] = [
  {
    title: "Management fee",
    price: "Competitive % of collected rent",
    description: "Final pricing depends on property type, number of units, and scope. If rent isn't collected, we don't charge a management fee.",
    features: [
      "Owner reporting and documentation",
      "Vendor coordination and scheduling",
      "Turn support and rent-ready checklists",
      "Regular property check-ins",
    ],
  },
  {
    title: "Maintenance billing",
    price: "Billed separately, at cost",
    description: "You pay the actual repair cost. We follow your approval threshold and document the work.",
    features: [
      "Under your threshold: proceed + notify with photos and invoice",
      "Over your threshold: request approval before work begins",
      "Emergency: proceed to prevent damage, then notify immediately",
      "Photo documentation on every job",
    ],
  },
];
