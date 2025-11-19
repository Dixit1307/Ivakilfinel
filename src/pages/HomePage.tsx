import { HeroSection } from "../components/HeroSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { ServicesSection } from "../components/ServicesSection";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { PricingSection } from "../components/PricingSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { FAQSection } from "../components/FAQSection";
import { ContactSection } from "../components/ContactSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
