import Image from "next/image";
import { Phone } from "lucide-react";
import { business } from "@/lib/config";
import { images } from "@/lib/images";
import SectionLink from "@/components/SectionLink";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
      <div className="absolute inset-0">
        <Image
          src={images.finalCta}
          alt="Clean Australian suburban home exterior"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ready To Bring Your Property Back To Life?
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Get a free, no-obligation quote from Adelaide Pressure Works
          today.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <SectionLink
            href="/#quote"
            className="inline-flex items-center justify-center rounded-lg bg-blue px-7 py-4 text-base font-semibold text-white shadow-lg shadow-blue/20 transition-colors hover:bg-blue/90"
          >
            Request a Free Quote
          </SectionLink>
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            <Phone className="h-5 w-5" />
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
