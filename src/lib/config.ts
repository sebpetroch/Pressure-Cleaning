// Central business configuration.
// Edit this file to update contact details, services, service areas and pricing across the whole site.

import { images } from "./images";

export const business = {
  name: "Adelaide Pressure Works",
  shortName: "APW",
  tagline: "Professional Pressure Cleaning & Exterior Cleaning Services",
  phone: "0400 000 000",
  phoneHref: "tel:+61400000000",
  email: "adelaidepressureworks@gmail.com",
  abn: "44 762 257 208",
  address: {
    suburb: "Adelaide",
    state: "SA",
    postcode: "5000",
    country: "AU",
  },
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://www.instagram.com/adelaidepressureworks/",
  },
  hours: "Mon – Sat: 7:00am – 5:00pm",
  domain: "https://adelaidepressureworks.vercel.app",
};

export type ServiceKey =
  | "house-wash"
  | "driveway"
  | "walkway"
  | "roof"
  | "solar-panels"
  | "exterior-walls"
  | "other";

export interface Service {
  key: ServiceKey;
  title: string;
  shortTitle: string;
  description: string;
  ctaLabel: string;
  image: string;
  // Optional starting price - leave undefined to hide pricing on the site
  startingPrice?: number;
}

export const services: Service[] = [
  {
    key: "driveway",
    title: "Driveway Pressure Cleaning",
    shortTitle: "Driveway Pressure Washing",
    description:
      "Remove built-up dirt, grime, mould and staining from your driveway and restore the appearance of your concrete or paved surfaces.",
    ctaLabel: "Get a Driveway Quote",
    image: images.services.driveway,
  },
  {
    key: "walkway",
    title: "Walkway Pressure Cleaning",
    shortTitle: "Walkway Pressure Washing",
    description:
      "Clean pathways, entrances, courtyards and outdoor areas to remove dirt, mould and slippery surface buildup.",
    ctaLabel: "Get a Walkway Quote",
    image: images.services.walkway,
  },
  {
    key: "house-wash",
    title: "House Washing",
    shortTitle: "House Wash",
    description:
      "Professionally clean exterior walls and surfaces to remove dirt, grime, mould and environmental buildup while improving your home's street appeal.",
    ctaLabel: "Get a House Wash Quote",
    image: images.services.houseWash,
  },
  {
    key: "roof",
    title: "Roof Washing",
    shortTitle: "Roof Washing",
    description:
      "Safely remove moss, lichen, mould and built-up grime from your roof to protect your property and restore its appearance.",
    ctaLabel: "Get a Roof Washing Quote",
    image: images.services.roof,
  },
  {
    key: "solar-panels",
    title: "Solar Panel Cleaning",
    shortTitle: "Solar Panel Cleaning",
    description:
      "Remove dust, dirt and grime from your solar panels to help maintain their efficiency and get the most out of your system.",
    ctaLabel: "Get a Solar Panel Quote",
    image: images.services.solarPanels,
  },
  {
    key: "exterior-walls",
    title: "Exterior Wall Cleaning",
    shortTitle: "Exterior Walls",
    description:
      "Remove dirt, grime, mould and staining from brick, render and cladding to bring your exterior walls back to life.",
    ctaLabel: "Get an Exterior Walls Quote",
    image: images.services.exteriorWalls,
  },
];

// Suburbs are grouped for the Service Areas section. Add more any time.
export const serviceAreas: string[] = [
  "Adelaide CBD",
  "North Adelaide",
  "Prospect",
  "Norwood",
  "Unley",
  "Burnside",
  "Glenelg",
  "Brighton",
  "Henley Beach",
  "West Lakes",
  "Semaphore",
  "Port Adelaide",
  "Mawson Lakes",
  "Modbury",
  "Tea Tree Gully",
  "Golden Grove",
  "Salisbury",
  "Elizabeth",
  "Marion",
  "Morphett Vale",
];

// Customer reviews shown in the scrolling testimonials section. Replace with
// real reviews any time — initials/colors are generated automatically if omitted.
export const reviews = [
  {
    name: "Sarah M.",
    suburb: "Glenelg",
    badge: "Driveway looks brand new",
    quote:
      "Honestly didn't think our driveway could look this good again. The mould and oil stains are completely gone. Booked in within a couple of days too.",
  },
  {
    name: "Daniel R.",
    suburb: "Norwood",
    badge: "Booked next day",
    quote:
      "Called in the morning, had someone out the next day. Turned up on time, walked me through the quote clearly, and the walkway looks amazing.",
  },
  {
    name: "Priya K.",
    suburb: "Burnside",
    badge: "Great with solar panels",
    quote:
      "Had our solar panels and roof cleaned together. Really careful with the panels and the difference in our power output since has been noticeable.",
  },
  {
    name: "Mark T.",
    suburb: "Brighton",
    badge: "House looks 10 years newer",
    quote:
      "The whole exterior of the house was covered in grime from years of weather. These guys pressure washed it all and it honestly looks like a new build.",
  },
  {
    name: "Emma L.",
    suburb: "Prospect",
    badge: "Fair, upfront pricing",
    quote:
      "Got quotes from a few places and these were the most transparent about pricing upfront. No surprises on the day, and the work was excellent.",
  },
  {
    name: "James O.",
    suburb: "Marion",
    badge: "Sorted our rental property",
    quote:
      "Manage a few rental properties and needed driveways and walkways cleaned before new tenants moved in. Quick turnaround and great communication throughout.",
  },
  {
    name: "Alicia B.",
    suburb: "Unley",
    badge: "Roof moss completely gone",
    quote:
      "Our tiled roof had moss all over it that we'd been putting off dealing with for years. Came back looking practically new. Highly recommend.",
  },
  {
    name: "Chris H.",
    suburb: "West Lakes",
    badge: "Friendly and professional",
    quote:
      "From the first phone call to the final clean-up, everything was professional. They even swept up afterwards. Will definitely be using again.",
  },
  {
    name: "Nicole F.",
    suburb: "Golden Grove",
    badge: "Removed years of buildup",
    quote:
      "The courtyard pavers hadn't been cleaned since we moved in five years ago. Genuinely amazed at how much dirt and mould came off.",
  },
  {
    name: "Ben S.",
    suburb: "Semaphore",
    badge: "Commercial job done right",
    quote:
      "Used them for the entryway and car park at our shopfront. Worked around our opening hours and the results were exactly what we needed.",
  },
];

export const faqs = [
  {
    question: "How much does pressure cleaning cost?",
    answer:
      "Pricing depends on the size of the area, surface type and condition. Send us your details or photos and we'll provide a free quote.",
  },
  {
    question: "Do I need to be home?",
    answer:
      "Not always. If we have access to the required area and water supply, we can discuss completing the work while you're away.",
  },
  {
    question: "Can you remove mould and grime?",
    answer:
      "Pressure cleaning can remove significant amounts of dirt, grime and organic buildup. The exact cleaning process will depend on the surface and condition.",
  },
  {
    question: "What surfaces can you clean?",
    answer: "Driveways, paths, pavers, walls, decks, patios - most exterior surfaces.",
  },
  {
    question: "Will my pavers need re-sanding afterward?",
    answer:
      "Only if the joints are already low or loose. A standard clean doesn't automatically require re-sanding.",
  },
  {
    question: "Do you clean roofs and solar panels?",
    answer:
      "Yes, we offer roof washing and solar panel cleaning for residential properties.",
  },
  {
    question: "What areas of Adelaide do you service?",
    answer:
      "We service Adelaide and many surrounding metropolitan suburbs. Contact us with your suburb to confirm availability.",
  },
  {
    question: "Can I send photos for a quote?",
    answer:
      "Yes. Customers should be able to upload photos directly through the quote form to help us assess the job.",
  },
];

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Articles", href: "/articles" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#quote" },
];
