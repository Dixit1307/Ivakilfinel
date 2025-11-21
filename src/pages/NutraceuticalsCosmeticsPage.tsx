import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Target, Heart, CheckCircle, Users, Clock, Shield } from "lucide-react";

export function NutraceuticalsCosmeticsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-gray-900 mb-4 text-4xl sm:text-5xl lg:text-6xl font-semibold">
              Nutraceuticals & Cosmetics Industry IP Services in India
            </h1>

            <h2 className="text-2xl text-pink-700 mb-6">
              Protecting Innovation in Wellness and Beauty
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              The nutraceuticals and cosmetics industries are built on constant innovation, scientific formulation, and consumer trust. From functional food supplements to skin-care actives and herbal beauty products, companies invest heavily in R&D, branding, and packaging. iVakil IP offers tailored intellectual property (IP) solutions to protect these innovations, secure competitive advantage, and support market growth in India and globally.
            </p>
          </div>
        </div>
      </section>

      {/* Importance of IP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-gray-900 mb-6 text-4xl font-bold">
              The Importance of IP in Nutraceuticals & Cosmetics
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed"
              style={{
                textAlign: "justify",
                textJustify: "inter-word",
                hyphens: "auto"
              }}>
              In the nutraceutical and cosmetics industries, where innovation meets consumer trust, intellectual property plays a vital role in safeguarding business value. Formulations, active ingredients, packaging designs, and delivery methods are key differentiators that require protection to prevent imitation and loss of market share. Strong IP ensures exclusivity, strengthens brand identity, and enables safe expansion into competitive markets. It also opens opportunities for licensing, collaboration, and investment. With focused legal and technical expertise, iVakil IP helps protect every innovation from concept to commercialization.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/Nutraceuticalsservice.jpg"
                alt="Nutraceuticals and Cosmetics Industry"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Key IP Services */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-gray-900 mb-6 text-4xl font-bold">
            Our Key IP Services for Nutraceuticals & Cosmetics
          </h2>

          <p className="text-xl text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
            Each service is designed to address the unique blend of science, regulation, and brand marketing that defines the nutraceutical and cosmetic sectors.
          </p>

        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                icon: CheckCircle,
                title: "Patent Drafting & Filing",
                desc: "Protect innovative formulations, delivery systems, and processing techniques with precise, enforceable patents tailored to industry needs."
              },
              {
                icon: Shield,
                title: "FTO & Competitive IP Analysis",
                desc: "Identify patent risks before product launch through thorough searches and expert guidance to ensure smooth market entry."
              },
              {
                icon: Clock,
                title: "Design Registration & Protection",
                desc: "Safeguard packaging, containers, and visual aesthetics to enhance brand appeal and prevent imitation in physical and digital marketplaces."
              },
              {
                icon: Target,
                title: "Trademark & Brand Management",
                desc: "Secure names, logos, and packaging elements with strong trademark protection and anti-counterfeiting support for lasting brand value."
              },
              {
                icon: Users,
                title: "IP Enforcement & Infringement Actions",
                desc: "Combat counterfeiting and IP misuse through legal notices, litigation support, and marketplace monitoring to protect brand integrity."
              },
              {
                icon: Heart,
                title: "Licensing & Commercialization",
                desc: "Maximize IP value with licensing, valuation, and global portfolio management to support expansion and strategic partnerships."
              }
            ].map((service, i) => (
              <Card key={i} className="border-2 border-gray-100 hover:border-pink-300 hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-4 text-xl">{service.title}</h3>
                  <p className="text-gray-700"
                    style={{
                      textAlign: "justify",
                      textJustify: "inter-word",
                      hyphens: "auto"
                    }}>{service.desc}</p>
                </CardContent>
              </Card>
            ))}

          </div>

        </div>
      </section>

      {/* Serving All Business Types */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Card className="border-2 border-pink-300 bg-white">
            <CardContent className="pt-8">

              <h2 className="text-gray-900 mb-6 text-4xl font-bold">Serving All Business Types</h2>

              <p className="text-gray-700 leading-relaxed"
                style={{
                  textAlign: "justify",
                  textJustify: "inter-word",
                  hyphens: "auto"
                }}>
                iVakil IP works with R&D-driven wellness brands, herbal product developers, natural cosmetic startups, personal care manufacturers, and export-focused nutraceutical firms. Each strategy is customized based on product lifecycle, market goals, and innovation pipeline.
              </p>

            </CardContent>
          </Card>

        </div>
      </section>

    </div>
  );
}