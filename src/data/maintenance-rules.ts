export interface MaintenanceRule {
  icon: "shield" | "check-square" | "alert-triangle" | "file-text";
  title: string;
  description: string;
}

export const maintenanceRules: MaintenanceRule[] = [
  {
    icon: "shield",
    title: "Approval threshold",
    description: "Under your set threshold: we proceed to keep the unit safe, then notify you with photos and an itemized invoice.",
  },
  {
    icon: "check-square",
    title: "Large repairs",
    description: "Over your threshold: we request approval before work begins (non-emergency). You stay in control.",
  },
  {
    icon: "alert-triangle",
    title: "Emergencies",
    description: "Authorized to prevent damage or safety risk, then documented and reported immediately.",
  },
  {
    icon: "file-text",
    title: "Documentation",
    description: "Every job includes written notes and photo proof when applicable. You always have a record.",
  },
];

export const emergencies = [
  "No heat in winter",
  "Active leak",
  "Electrical hazard",
  "Sewage backup",
  "Broken exterior door or lock",
];
