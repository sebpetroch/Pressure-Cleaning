import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/config";
import SectionLink from "@/components/SectionLink";

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Professional Exterior Cleaning Services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/60">
            From driveways to solar panels, we help Adelaide homes and businesses
            look their best with reliable, professional pressure cleaning.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.key}
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-navy">{service.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-navy/60">
                  {service.description}
                </p>
                <SectionLink
                  href="/#quote"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-colors hover:text-navy"
                >
                  {service.ctaLabel}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </SectionLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
