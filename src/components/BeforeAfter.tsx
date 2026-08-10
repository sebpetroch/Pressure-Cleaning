import BeforeAfterCard from "./BeforeAfterCard";
import { images } from "@/lib/images";

const items = [
  { label: "Driveways", ...images.beforeAfter.driveway },
  { label: "Walkways", ...images.beforeAfter.walkway },
  { label: "Exterior Walls", ...images.beforeAfter.houseWash },
  { label: "Roof Cleaning", ...images.beforeAfter.roof },
];

export default function BeforeAfter() {
  return (
    <section className="bg-grey-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue">
            Real Results
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            See The Difference
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/60">
            Professional pressure cleaning can completely transform tired
            outdoor surfaces.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {items.map((item) => (
            <BeforeAfterCard
              key={item.label}
              before={item.before}
              after={item.after}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
