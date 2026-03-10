export interface Service {
  title: string;
  image: string;
  alt: string;
  features: string[];
  linkLabel: string;
  linkHref: string;
}

export const services: Service[] = [
  {
    title: "Property management",
    image: "/images/card-management.jpg",
    alt: "Property inspector with clipboard documenting property condition",
    features: [
      "Owner reporting and documentation",
      "Turn support and rent-ready prep",
      "Vendor coordination when needed",
    ],
    linkLabel: "See management scope",
    linkHref: "#pricing",
  },
  {
    title: "Snow removal + lawn care",
    image: "/images/card-snow.jpg",
    alt: "Snowblower clearing a residential driveway after snowfall",
    features: [
      "Snowblowing and shoveling plans by property type",
      "Scheduled mowing and basic exterior upkeep",
      "Clear scope to avoid surprise requests",
    ],
    linkLabel: "See seasonal scope",
    linkHref: "#pricing",
  },
  {
    title: "Maintenance + repairs",
    image: "/images/card-repairs.jpg",
    alt: "Painter maintaining the exterior of a rental property",
    features: [
      "Small repairs through larger fixes",
      "Photo documentation and itemized notes",
      "Approval threshold honored (except emergencies)",
    ],
    linkLabel: "See maintenance rules",
    linkHref: "#maintenance",
  },
];
