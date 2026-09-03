import type { Metadata } from "next";
import { business } from "@/lib/config";
import QuoteSection from "@/components/QuoteSection";

export const metadata: Metadata = {
  title: "Request a Free Quote",
  description:
    "Request a free, no-obligation pressure cleaning quote from Adelaide Pressure Works. Tell us what you need cleaned and we'll get back to you.",
  alternates: {
    canonical: "/quote",
  },
  openGraph: {
    title: `Request a Free Quote | ${business.name}`,
    description:
      "Request a free, no-obligation pressure cleaning quote from Adelaide Pressure Works.",
    url: `${business.domain}/quote`,
  },
};

export default function QuotePage() {
  return <QuoteSection />;
}
