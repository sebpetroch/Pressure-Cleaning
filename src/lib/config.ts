// Central business configuration.
// Edit this file to update contact details, services, service areas and pricing across the whole site.

import { images } from "./images";

export const business = {
  name: "Adelaide Pressure Cleaning",
  shortName: "APC",
  tagline: "Professional Pressure Cleaning & Exterior Cleaning Services",
  phone: "0400 000 000",
  phoneHref: "tel:+61400000000",
  email: "info@adelaidepressurecleaning.com.au",
  abn: "00 000 000 000",
  address: {
    suburb: "Adelaide",
    state: "SA",
    postcode: "5000",
    country: "AU",
  },
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
  hours: "Mon – Sat: 7:00am – 5:00pm",
  domain: "https://adelaidepressurecleaning.vercel.app",
};

export type ServiceKey =
  | "house-wash"
  | "driveway"
  | "walkway"
  | "roof"
  | "solar-panels"
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
    question: "Do you clean driveways?",
    answer: "Yes. Driveway pressure cleaning is one of our main services.",
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
  { label: "About", href: "/#about" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#quote" },
];
