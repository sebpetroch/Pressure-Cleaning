import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import QuoteSection from "@/components/QuoteSection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <Services />
      <QuoteSection />
      <BeforeAfter />
      <Reviews />
      <Faq />
      <FinalCta />
    </>
  );
}
