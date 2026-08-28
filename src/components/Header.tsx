"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { business, navLinks } from "@/lib/config";
import SectionLink from "@/components/SectionLink";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow ${
        scrolled ? "shadow-md" : ""
      } bg-navy`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo.png"
            alt={business.name}
            width={1536}
            height={1024}
            priority
            className="h-14 w-auto object-contain lg:h-16"
          />
        </Link>

        <nav className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((link) => (
            <SectionLink
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-white"
            >
              {link.label}
            </SectionLink>
          ))}
        </nav>

        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
          >
            <Phone className="h-4 w-4" />
            {business.phone}
          </a>
          <SectionLink
            href="/#quote"
            className="rounded-lg bg-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue/90"
          >
            Request a Quote
          </SectionLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex items-center justify-center rounded-md p-2 text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy lg:hidden">
          <nav className="flex flex-col px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <SectionLink
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3.5 text-base font-medium text-white/90 last:border-none"
              >
                {link.label}
              </SectionLink>
            ))}
            <div className="mt-4 flex flex-col gap-3 pb-2">
              <a
                href={business.phoneHref}
                className="flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4" />
                Call {business.phone}
              </a>
              <SectionLink
                href="/#quote"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-blue px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Request a Quote
              </SectionLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
