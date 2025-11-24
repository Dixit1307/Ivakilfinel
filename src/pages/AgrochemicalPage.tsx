import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Target, Heart, CheckCircle, Users, Clock, Shield } from "lucide-react";

export function AgrochemicalPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-gray-900 mb-4 text-4xl sm:text-5xl lg:text-6xl font-semibold">
              Agrochemicals Industry IP Services in India
            </h1>

            <h2 className="text-2xl text-green-700 mb-6">
              Protecting Innovation in Sustainable Agriculture
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              The agrochemical industry plays a vital role in ensuring global food security and sustainable farming practices. With rapid advancements in agricultural biotechnology, crop protection, and environmental safety, safeguarding intellectual property has become a core necessity for companies operating in this space. iVakil IP offers dedicated IP services tailored for the agrochemical sector, helping innovators protect, manage, and maximize the value of their scientific breakthroughs.
            </p>
          </div>
        </div>
      </section>

      {/* Why IP Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-gray-900 mb-6 text-4xl font-bold text-center">
              Understanding the Agrochemical Sector
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed"
              style={{ textAlign: "justify", textJustify: "inter-word", hyphens: "auto" }}
>
              Agrochemicals include a wide range of chemical products used in agriculture to enhance crop yield and quality. These include Pesticides, Fertilizers, Plant Growth Regulators, and Soil Conditioners. Innovations in agrochemicals are highly technical and regulated. Whether it's developing new active ingredients or formulating safer, eco-friendly alternatives, protection through patents, trade secrets, and regulatory exclusivity is crucial.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/Agrochemicalservice.jpg"
                alt="Agrochemicals Industry"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Full Spectrum IP Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-gray-900 mb-6 text-4xl font-bold">
            Tailored IP Solutions for Agrochemical Innovators
          </h2>

          <p className="text-xl text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
            iVakil IP works closely with chemical manufacturers, biotech companies, agri-startups, and research institutions to provide end-to-end IP services that align with commercial and regulatory goals. The team at iVakil IP understands the nuanced requirements of agrochemical inventions and provides custom strategies that enhance competitive positioning.
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
                desc: "Comprehensive patent drafting and filing for agrochemical compounds, formulations, and processes. iVakil IP ensures strong claim coverage and manages filings across India and international jurisdictions."
              },
              {
                icon: Shield,
                title: "Regulatory & Data Exclusivity Support",
                desc: "Strategic protection beyond patents by leveraging data exclusivity during regulatory approvals. Support includes eligibility assessment and alignment of IP with product launch timelines."
              },
              {
                icon: Clock,
                title: "Trademark Protection",
                desc: "End-to-end trademark services for agrochemical product names, logos, and packaging. iVakil IP safeguards brand identity and enforces against counterfeits."
              },
              {
                icon: Target,
                title: "Trade Secret Management",
                desc: "Secure internal know-how with confidentiality agreements and policy frameworks. Trade secret protection ensures competitive advantage for non-patented innovations."
              },
              {
                icon: Users,
                title: "FTO & Patent Landscape Studies",
                desc: "Identify IP risks and opportunities before product launch. iVakil IP maps patent landscapes and guides licensing or design-around strategies."
              },
              {
                icon: Heart,
                title: "IP Due Diligence and Licensing Support",
                desc: "Robust IP audits and licensing support for M&A and partnerships. iVakil IP ensures clean ownership, asset strength, and optimal deal terms."
              }
            ].map((service, i) => (
              <Card key={i} className="border-2 border-gray-100 hover:border-green-200 hover:shadow-xl transition-all">
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

      {/* Who We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Card className="border-2 border-green-200 bg-white">
            <CardContent className="pt-8">

              <h2 className="text-gray-900 mb-6 text-4xl font-bold">Trusted by Research-Driven Agrochemical Innovators</h2>

              <p className="text-gray-700 leading-relaxed"
                style={{
                  textAlign: "justify",
                  textJustify: "inter-word",
                  hyphens: "auto"
                }}>
                iVakil IP works with crop protection firms, agri-biotech startups, seed treatment developers, and specialty chemical manufacturers. Each solution is tailored to fit the innovation stage, regulatory pathway, and business ambition of the client.
              </p>

            </CardContent>
          </Card>

        </div>
      </section>

    </div>
  );
}