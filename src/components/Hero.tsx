import Image from "next/image";
import Link from "next/link";
import { Phone, ShieldCheck, Building2, Sparkles, BadgeCheck } from "lucide-react";
import { business } from "@/lib/config";
import { images } from "@/lib/images";

const trustPoints = [
  { label: "Adelaide Local", icon: BadgeCheck },
  { label: "Fully Insured", icon: ShieldCheck },
  { label: "Free Quotes", icon: Sparkles },
  { label: "Residential & Commercial", icon: Building2 },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="Professional pressure washing of a concrete driveway in Adelaide"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
            Adelaide&apos;s Trusted Pressure Cleaning Specialists
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Professional Pressure Cleaning in Adelaide
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Bring your property back to life with professional exterior
            cleaning for homes, driveways, walkways, roofs, solar panels + more.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center rounded-lg bg-blue px-7 py-4 text-base font-semibold text-white shadow-lg shadow-blue/20 transition-colors hover:bg-blue/90"
            >
              Request a Free Quote
            </Link>
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-4 sm:flex sm:flex-wrap sm:gap-x-8">
            {trustPoints.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-2 text-white/90">
                <Icon className="h-5 w-5 shrink-0 text-blue" />
                <dt className="sr-only">Trust point</dt>
                <dd className="text-sm font-medium">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
