import type { Metadata } from "next";
import { business } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions that apply to quotes and services booked with Adelaide Pressure Works.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-navy">Terms &amp; Conditions</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-navy/70">
        <p>
          By requesting a quote or engaging {business.name} for services, you
          agree to the following terms. Quotes are provided based on the
          information and photos supplied and may be subject to change upon
          inspection of the property.
        </p>
        <p>
          Services are scheduled subject to availability and weather
          conditions. Payment terms will be confirmed at the time of
          quoting.
        </p>
        <p>
          For any questions regarding these terms, please contact us at{" "}
          {business.email}.
        </p>
      </div>
    </div>
  );
}
