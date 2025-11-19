import { IPVideoHeroSection } from "../components/IPVideoHeroSection";
import { IPAboutSection } from "../components/IPAboutSection";
import { IPPremiumServices } from "../components/IPPremiumServices";
import { IPIndustriesSection } from "../components/IPIndustriesSection";
import { IPWhyChooseSection } from "../components/IPWhyChooseSection";
import { IPPremiumTestimonials } from "../components/IPPremiumTestimonials";
import { IPCTABanner } from "../components/IPCTABanner";

interface IPPremiumHomePageProps {
  onNavigate: (page: string) => void;
}

export function IPPremiumHomePage({ onNavigate }: IPPremiumHomePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video Background */}
      <IPVideoHeroSection onNavigate={onNavigate} />

      {/* About Us Section */}
      <IPAboutSection />

      {/* Services Section */}
      <IPPremiumServices onNavigate={onNavigate} />

      {/* Industries We Serve */}
      <IPIndustriesSection />

      {/* Why Choose Us */}
      <IPWhyChooseSection />

      {/* Testimonials */}
      <IPPremiumTestimonials />

      {/* CTA Banner */}
      <IPCTABanner onNavigate={onNavigate} />
    </div>
  );
}
