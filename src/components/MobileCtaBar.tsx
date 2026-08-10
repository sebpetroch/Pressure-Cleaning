import { Phone, ClipboardList } from "lucide-react";
import { business } from "@/lib/config";
import SectionLink from "@/components/SectionLink";

export default function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-black/10 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.08)] lg:hidden">
      <a
        href={business.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 border-r border-black/10 bg-navy py-3.5 text-sm font-semibold text-white"
      >
        <Phone className="h-4 w-4" />
        Call Now
      </a>
      <SectionLink
        href="/#quote"
        className="flex flex-1 items-center justify-center gap-2 bg-blue py-3.5 text-sm font-semibold text-white"
      >
        <ClipboardList className="h-4 w-4" />
        Free Quote
      </SectionLink>
    </div>
  );
}
