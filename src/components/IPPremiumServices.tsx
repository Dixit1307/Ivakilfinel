import React from "react";
import { Card, CardContent } from "./ui/card";
import { 
  FileText, 
  Scale, 
  Palette, 
  Lightbulb, 
  Search, 
  Gavel, 
  ArrowRight 
} from "lucide-react";

interface IPPremiumServicesProps {
  onNavigate: (page: string) => void;
}

export function IPPremiumServices({ onNavigate }: IPPremiumServicesProps) {

  const services = [
    {
      icon: FileText,
      title: "Patent Services",
      description:
        "Secure exclusive rights to your innovation with confidence. iVakil IP handles everything from patent drafting, filing, and prosecution to post-grant actions. Our team ensures strong, broad, and enforceable claims tailored for both Indian and international jurisdictions.",
      link: "patent-services",
    },
    {
      icon: Scale,
      title: "Trademark Registration",
      description:
        "Build and protect a strong brand. Our trademark services cover availability searches, filings, renewals, opposition, and portfolio management—ensuring your identity stays distinctive and protected across all touchpoints.",
      link: "trademark-services",
    },
    {
      icon: Palette,
      title: "Design Protection",
      description:
        "Visual appeal matters. iVakil IP assists in registering industrial designs, protecting the visual features and aesthetics of your products. This adds a valuable layer of IP that strengthens your competitive advantage in design-driven industries.",
      link: "design-services",
    },
    {
      icon: Search,
      title: "Prior Art Search & FTO Reports",
      description:
        "Before filing or launching a product, it’s critical to assess the IP landscape. iVakil IP conducts thorough prior art searches to evaluate novelty and generate Freedom to Operate (FTO) reports to minimize legal risks. Make informed decisions with data-backed insights.",
      link: "prior-art-search",
    },
    {
      icon: Lightbulb,
      title: "Intellectual Property Strategy Consulting",
      description:
        "More than legal protection, IP is a business enabler. iVakil IP offers specialized strategy consulting to align IP with product development, R&D, market entry, and commercialization plans. Identify white space, prioritize filings, plan for licensing, or structure your portfolio to attract investors. Every recommendation is driven by your business goals and market realities.",
      link: "ip-strategy",
    },
    {
      icon: Search,
      title: "Competitive Intelligence & Market Dynamics Monitoring",
      description:
        "Stay ahead with real-time visibility into your competitive environment. iVakil IP continuously monitors IP filings, technology trends, and competitor activity to help your organization innovate smarter, avoid duplication, and lead the market with confidence.",
      link: "competitive-intelligence",
    },
    {
      icon: FileText,
      title: "ANDA & 505(b)(2) Strategy Consulting",
      description:
        "Navigate the complex regulatory pathways of generic and modified drug approval. iVakil IP assists pharmaceutical companies in structuring ANDA and 505(b)(2) applications with minimal litigation risk. Support includes Paragraph IV certifications, exclusivity evaluation, and patent analysis.",
      link: "anda-strategy",
    },
    {
      icon: Gavel,
      title: "Litigation Strategy Consulting",
      description:
        "When legal challenges arise, a well-prepared IP litigation strategy makes all the difference. iVakil IP supports clients in preparing technical evidence, conducting infringement analysis, and evaluating the strengths and weaknesses of a case. Work alongside your legal team with complete confidence.",
      link: "litigation-strategy",
    },
    {
      icon: Lightbulb,
      title: "Portfolio & Business Strategy Consulting",
      description:
        "Transform IP into a strategic asset. iVakil IP helps build and manage IP portfolios that support licensing, partnerships, mergers, or investment. From auditing current assets to identifying monetization opportunities, every step is focused on maximizing long-term value.",
      link: "portfolio-strategy",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-6 text-4xl font-bold">
            What We Do
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto">
            Comprehensive and strategic IP solutions empowering innovators, enterprises, and industry leaders.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                onClick={() => onNavigate(service.link)}
                className="group border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Top accent line */}
                <div className="h-1.5 bg-gradient-to-r from-[#C1272D] to-[#FF4D00] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <CardContent className="pt-8 pb-8 px-8">
                  <div className="flex items-start gap-6">

                    {/* Icon */}
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center group-hover:from-orange-500 group-hover:to-red-600 transition-all duration-300">
                      <Icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-3 text-2xl group-hover:text-red-700 transition-colors font-semibold">
                        {service.title}
                      </h3>

                      <p className="text-gray-700 mb-4 leading-relaxed text-base text-justify">
                        {service.description}
                      </p>

                      <button className="flex items-center gap-2 text-red-600 group-hover:gap-4 transition-all duration-300 text-base font-medium">
                        Learn More
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
