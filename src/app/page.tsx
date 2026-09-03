import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import HashCleanup from "@/components/HashCleanup";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <HashCleanup />
      <Hero />
      <Services />
      <BeforeAfter />
      <Reviews />
      <Faq />
      <FinalCta />
    </>
  );
}
