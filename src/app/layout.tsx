import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import { business } from "@/lib/config";
import { images } from "@/lib/images";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.domain),
  title: {
    default: "Pressure Cleaning Adelaide | Adelaide Pressure Works",
    template: "%s | Adelaide Pressure Works",
  },
  description:
    "Professional pressure cleaning in Adelaide for driveways, walkways, house exteriors, roofs and solar panels. Request a free quote from Adelaide Pressure Works today.",
  keywords: [
    "Pressure Cleaning Adelaide",
    "Pressure Washing Adelaide",
    "Driveway Cleaning Adelaide",
    "Driveway Pressure Cleaning Adelaide",
    "House Washing Adelaide",
    "Exterior House Cleaning Adelaide",
    "Roof Washing Adelaide",
    "Solar Panel Cleaning Adelaide",
    "Concrete Cleaning Adelaide",
    "Walkway Cleaning Adelaide",
  ],
  openGraph: {
    title: "Pressure Cleaning Adelaide | Adelaide Pressure Works",
    description:
      "Professional pressure cleaning in Adelaide for driveways, walkways, house exteriors, roofs and solar panels. Request a free quote today.",
    url: business.domain,
    siteName: business.name,
    locale: "en_AU",
    type: "website",
    images: [images.hero],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pressure Cleaning Adelaide | Adelaide Pressure Works",
    description:
      "Professional pressure cleaning in Adelaide for driveways, walkways, house exteriors, roofs and solar panels.",
    images: [images.hero],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col pb-[60px] lg:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
