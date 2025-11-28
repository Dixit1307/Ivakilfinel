import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CheckCircle, Shield, Clock, Target, Users, Heart } from "lucide-react";

export function ChemicalIndustryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          Chemical IP Services India – Protect Patents | iVakil IP
        </title>
        <meta
          name="description"
          content="iVakil IP offers comprehensive IP services for the chemical industry in India, including patents, FTO searches, trade secrets, and licensing to secure and monetize innovations globally."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-gray-900 mb-4 text-4xl sm:text-5xl lg:text-6xl font-semibold">
              Chemical Industry IP Services in India
            </h1>
            <h2 className="text-2xl text-blue-700 mb-6">
              Securing Innovation in the Chemical Sector
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The chemical industry plays a crucial role in driving innovation across pharmaceuticals, agrochemicals, polymers, energy, and specialty chemicals. From novel compounds to improved production methods, intellectual property is essential to secure commercial success and long-term growth. iVakil IP provides end-to-end IP services designed specifically for the unique needs of the chemical industry. The aim is to protect innovation, avoid legal risks, and support global business expansion.
            </p>
          </div>
        </div>
      </section>

      {/* Why IP Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-gray-900 mb-6 text-4xl font-bold text-center">
              The Role of IP in the Chemical Industry
            </h2>
            <p
              className="text-gray-700 mb-4 leading-relaxed"
              style={{
                textAlign: "justify",
                textJustify: "inter-word",
                hyphens: "auto",
              }}
            >
              Developing a new chemical process or formulation requires years of research and significant investment. Without proper IP protection, these innovations are vulnerable to imitation, infringement, and commercial loss. Patents, trade secrets, and technical documentation help companies establish ownership, attract partners, and create market exclusivity. At iVakil IP, every step is taken to ensure that critical discoveries remain protected and enforceable in global markets.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/ChemicalIndustryservice.jpg"
                alt="Chemical Industry"
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
            Comprehensive IP Services for the Chemical Industry
          </h2>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
            iVakil IP supports chemical companies at every stage of product development—from discovery and formulation to process scale-up and market launch. Each service is tailored to the technical and commercial nature of chemical innovations.
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
                desc: "Protection for chemical compounds, compositions, polymers, catalysts, and processes. Drafted for strong scope and legal enforceability in India and globally.",
              },
              {
                icon: Shield,
                title: "Freedom-to-Operate (FTO) Searches",
                desc: "Identify patent risks before product launch. Avoid infringement and explore design-around or licensing options.",
              },
              {
                icon: Clock,
                title: "Process & Formulation Strategy",
                desc: "Secure IP for scalable chemical processes, trade secrets, and hybrid protection models. Align with regulatory plans.",
              },
              {
                icon: Target,
                title: "Opposition & Litigation Support",
                desc: "Support in patent oppositions, revocations, and infringement matters with strong technical documentation and strategy.",
              },
              {
                icon: Users,
                title: "Portfolio Management",
                desc: "Efficient handling of chemical IP assets, renewals, and competitive monitoring. Analyze gaps and optimize protection.",
              },
              {
                icon: Heart,
                title: "Licensing & Valuation",
                desc: "Support for technology licensing, IP valuation, and structuring commercial deals to monetize innovation.",
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="border-2 border-gray-100 hover:border-green-200 hover:shadow-xl transition-all"
              >
                <CardContent className="pt-6">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-4 text-xl">{service.title}</h3>
                  <p
                    className="text-gray-700"
                    style={{
                      textAlign: "justify",
                      textJustify: "inter-word",
                      hyphens: "auto",
                    }}
                  >
                    {service.desc}
                  </p>
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
              <h2 className="text-gray-900 mb-6 text-4xl font-bold">
                Serving Diverse Chemical Segments
              </h2>
              <p
                className="text-gray-700 leading-relaxed"
                style={{ textAlign: "justify", textJustify: "inter-word", hyphens: "auto" }}
              >
                Whether dealing with bulk chemicals, specialty materials, agrochemicals, dyes, or industrial gases, iVakil IP provides industry-specific IP support. Services are adapted for small labs, R&D units, large-scale manufacturers, and academic research institutions with commercial goals.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default ChemicalIndustryPage;