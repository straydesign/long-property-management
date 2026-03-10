export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "What's included in the management fee?",
    answer: "The management fee covers owner reporting and documentation, vendor coordination and scheduling, turn support, rent-ready checklists, and regular property check-ins. Repairs, seasonal services, and materials are billed separately so you always know what you're paying for.",
  },
  {
    question: "How do you handle snow and lawn schedules?",
    answer: "Snow removal is triggered by accumulation thresholds we agree on. Lawn mowing follows a regular seasonal schedule. Both services have defined scope so there are no unexpected charges or missed visits.",
  },
  {
    question: "How fast do you respond to maintenance issues?",
    answer: "Non-emergency requests are triaged within the same business day. Emergencies (no heat, active leaks, safety hazards) are addressed immediately to prevent property damage.",
  },
  {
    question: "Do you work with tenants directly?",
    answer: "Our primary relationship is with you, the owner. Tenants contact their landlord for day-to-day questions. For maintenance emergencies, we have a process to respond quickly regardless.",
  },
  {
    question: "What areas do you serve?",
    answer: "We serve rental property owners in Erie, PA and surrounding communities including Millcreek, Harborcreek, and Fairview. Contact us for specifics on your property location.",
  },
  {
    question: "Do I pay if the unit is vacant?",
    answer: "No. The management fee is based on collected rent. If rent isn't collected, we don't charge.",
  },
  {
    question: "Can I set my own maintenance approval threshold?",
    answer: "Yes. During onboarding, we agree on a dollar threshold. Repairs below that amount can proceed without prior approval. Above that, we contact you first (except emergencies).",
  },
  {
    question: "Are there any hidden fees?",
    answer: "No. You pay the management fee, placement fee when applicable, and actual repair/service costs. Everything is documented and itemized.",
  },
  {
    question: "How is snow removal priced?",
    answer: "Snow removal can be billed per service event or as a seasonal flat-rate plan. We'll recommend the best option based on your property layout and typical Erie snow patterns.",
  },
];
