import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { ProofStrip } from "@/components/sections/proof-strip";
import { Services } from "@/components/sections/services";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { MaintenanceRules } from "@/components/sections/maintenance-rules";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { LeadForm } from "@/components/sections/lead-form";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ProofStrip />
      <Services />
      <HowItWorks />
      <Pricing />
      <MaintenanceRules />
      <Gallery />
      <Testimonials />
      <Faq />
      <LeadForm />
      <Footer />
    </>
  );
}
