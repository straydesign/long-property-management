export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery-winter-house.jpg", alt: "Freshly shoveled driveway after winter snowfall", width: 800, height: 1067 },
  { src: "/images/gallery-lawn.jpg", alt: "Freshly mowed lawn with clean stripes", width: 800, height: 533 },
  { src: "/images/gallery-snow-road.jpg", alt: "Cleared walkway through deep snow near residential homes", width: 800, height: 533 },
  { src: "/images/card-repairs.jpg", alt: "Exterior painting and maintenance work", width: 800, height: 533 },
  { src: "/images/gallery-landscape.jpg", alt: "Well-maintained landscaping at a rental property", width: 800, height: 1067 },
  { src: "/images/gallery-aerial.jpg", alt: "Aerial view of a residential neighborhood", width: 1200, height: 675 },
];
