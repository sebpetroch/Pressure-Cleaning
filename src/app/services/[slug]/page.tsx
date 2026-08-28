import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BadgeCheck, Building2, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { business, services } from "@/lib/config";
import { getArticleBySlug } from "@/lib/articles";
import QuoteSection from "@/components/QuoteSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const trustPoints = [
  { label: "Adelaide Local", icon: BadgeCheck },
  { label: "Fully Insured", icon: ShieldCheck },
  { label: "Free Quotes", icon: Sparkles },
  { label: "Residential & Commercial", icon: Building2 },
];

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.key }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.key === slug);
  if (!service) return {};

  const title = `${service.title} Adelaide`;

  return {
    title,
    description: service.description,
    alternates: {
      canonical: `/services/${service.key}`,
    },
    openGraph: {
      title: `${title} | ${business.name}`,
      description: service.description,
      url: `${business.domain}/services/${service.key}`,
      images: [service.image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${business.name}`,
      description: service.description,
      images: [service.image],
    },
  };
}

export default async function ServiceLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.key === slug);
  if (!service) notFound();

  const article = getArticleBySlug(service.articleSlug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      telephone: business.phone,
      url: business.domain,
    },
    areaServed: `${business.address.suburb}, ${business.address.state}`,
    ...(service.startingPrice
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "AUD",
            price: service.startingPrice,
          },
        }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={`${service.title} in Adelaide`}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/70" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
              Adelaide&apos;s Trusted Pressure Cleaning Specialists
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              {service.title} in Adelaide
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              {service.description}
            </p>
            {service.startingPrice && (
              <p className="mt-4 text-base font-semibold text-blue">
                Starting from ${service.startingPrice}
              </p>
            )}

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="#quote"
                className="inline-flex items-center justify-center rounded-lg bg-blue px-7 py-4 text-base font-semibold text-white shadow-lg shadow-blue/20 transition-colors hover:bg-blue/90"
              >
                {service.ctaLabel}
              </Link>
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>

            <dl className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4">
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

      <QuoteSection />

      {article && (
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5">
              {article.content.map((block, i) => {
                if (block.type === "heading") {
                  return (
                    <h2 key={i} className="mt-3 text-xl font-bold text-navy">
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "list") {
                  return (
                    <ul
                      key={i}
                      className="list-disc space-y-2 pl-5 text-base leading-relaxed text-navy/70"
                    >
                      {block.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="text-base leading-relaxed text-navy/70">
                    {block.text}
                  </p>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready To Bring Your Property Back To Life?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Get a free, no-obligation quote from {business.name} today.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#quote"
              className="inline-flex items-center justify-center rounded-lg bg-blue px-7 py-4 text-base font-semibold text-white shadow-lg shadow-blue/20 transition-colors hover:bg-blue/90"
            >
              {service.ctaLabel}
            </Link>
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
    </>
  );
}
