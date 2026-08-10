import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { business, navLinks, services } from "@/lib/config";
import SectionLink from "@/components/SectionLink";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.25-1.5 1.6-1.5H16.5V4.3c-.28-.04-1.24-.13-2.36-.13-2.34 0-3.94 1.43-3.94 4.04V10.5h-2.5v3H10.2V21h3.3Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/logo.png"
              alt={business.name}
              width={1536}
              height={1024}
              className="h-16 w-auto object-contain"
            />
            <p className="mt-3 text-sm leading-relaxed">
              {business.tagline}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={business.social.facebook}
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-blue"
              >
                <FacebookIcon />
              </a>
              <a
                href={business.social.instagram}
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-blue"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <SectionLink href={link.href} className="hover:text-white">
                    {link.label}
                  </SectionLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              Services
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.key}>
                  <Link href={`/articles/${s.articleSlug}`} className="hover:text-white">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-blue" />
                <a href={business.phoneHref} className="hover:text-white">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-blue" />
                <a href={`mailto:${business.email}`} className="hover:text-white">
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                <span>
                  Servicing {business.address.suburb} &amp; surrounding suburbs, {business.address.state}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {business.name}. All rights reserved. ABN {business.abn}.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white/80">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white/80">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
