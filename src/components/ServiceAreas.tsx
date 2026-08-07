import { MapPin } from "lucide-react";
import { serviceAreas } from "@/lib/config";

export default function ServiceAreas() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue">
            Service Areas
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Pressure Cleaning Across Adelaide
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/60">
            Adelaide Pressure Cleaning provides professional exterior
            cleaning services throughout Adelaide and surrounding suburbs.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {serviceAreas.map((suburb) => (
            <div
              key={suburb}
              className="flex items-center gap-2 rounded-lg bg-grey-light px-4 py-3 text-sm font-medium text-navy/80"
            >
              <MapPin className="h-4 w-4 shrink-0 text-blue" />
              {suburb}
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-navy/50">
          Don&apos;t see your suburb listed? Contact us — we likely still service your area.
        </p>
      </div>
    </section>
  );
}
