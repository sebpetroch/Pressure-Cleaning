import type { Metadata } from "next";
import { business } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-navy">Privacy Policy</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-navy/70">
        <p>
          {business.name} respects your privacy. Information submitted
          through our quote request form, including your name, contact
          details and any uploaded photos, is used solely to prepare and
          provide you with a quote and to deliver our services.
        </p>
        <p>
          We do not sell or share your personal information with third
          parties, except where required to provide our services or as
          required by law.
        </p>
        <p>
          If you have any questions about how your information is handled,
          please contact us at {business.email}.
        </p>
      </div>
    </div>
  );
}
