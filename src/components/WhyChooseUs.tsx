import {
  MapPin,
  Wrench,
  Eye,
  FileCheck,
  Clock,
  Building,
} from "lucide-react";

const reasons = [
  {
    title: "Local Adelaide Service",
    description:
      "We're a local Adelaide business servicing homes and properties throughout Adelaide and surrounding suburbs.",
    icon: MapPin,
  },
  {
    title: "Professional Equipment",
    description:
      "We use professional pressure cleaning equipment to deliver consistent results.",
    icon: Wrench,
  },
  {
    title: "Attention to Detail",
    description:
      "Every job is treated with care, from preparation through to the final clean-up.",
    icon: Eye,
  },
  {
    title: "Upfront Quotes",
    description: "Know what you're paying before the work begins.",
    icon: FileCheck,
  },
  {
    title: "Reliable Service",
    description:
      "Clear communication, reliable scheduling and professional service from start to finish.",
    icon: Clock,
  },
  {
    title: "Residential & Commercial",
    description:
      "Cleaning solutions for homes, investment properties, businesses and commercial spaces.",
    icon: Building,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Why Adelaide Chooses Us
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-black/5 bg-grey-light p-7 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-light">
                <Icon className="h-6 w-6 text-blue" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
