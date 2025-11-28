import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Target, Heart, CheckCircle, Users, Clock, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function AnimalHealthcarePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          Animal Healthcare IP Services India – Protect Veterinary Innovations
        </title>
        <meta
          name="description"
          content="iVakil IP provides comprehensive IP services for the animal healthcare industry in India, including patents, trademarks, trade secrets, and licensing to safeguard veterinary drugs, vaccines, and biotech innovations."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-gray-900 mb-4 text-4xl sm:text-5xl lg:text-6xl font-semibold">
              Animal Healthcare Industry IP Services in India
            </h1>
            <h2 className="text-2xl text-blue-700 mb-6">
              Protecting Innovations for Animal Health and Welfare
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Animal healthcare is a rapidly evolving industry with significant contributions to food safety, public health, and the overall well-being of companion and livestock animals. From vaccines and feed additives to diagnostics and biotechnology, innovations in this sector drive efficiency, sustainability, and global health standards. iVakil IP understands the unique intellectual property (IP) needs of animal healthcare companies and delivers comprehensive support to secure and manage their innovations effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Why IP Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-gray-900 mb-6 text-4xl font-bold text-center">
              Importance of IP in Animal Healthcare
            </h2>
            <p
              className="text-gray-700 mb-4 leading-relaxed"
              style={{
                textAlign: "justify",
                textJustify: "inter-word",
                hyphens: "auto",
              }}
            >
              In the animal healthcare sector, where innovation demands heavy R&D and regulatory compliance, intellectual property plays a crucial role in safeguarding investments. IP protection secures exclusive rights over veterinary formulations, delivery systems, and branding, while also enabling global licensing and market expansion. iVakil IP ensures each innovation is strategically protected for long-term success.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/Animalhealthcareservice.jpg"
                alt="Animal Healthcare Industry"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full Spectrum IP Services */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 mb-6 text-4xl font-bold">
            Our IP Services for the Animal Healthcare Industry
          </h2>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
            iVakil IP offers end-to-end IP support for veterinary pharmaceutical firms, nutraceutical brands, animal biotech innovators, and pet care product developers.
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
                desc: "Protect veterinary drugs, vaccines, and diagnostics with strong, enforceable patents tailored for global markets.",
              },
              {
                icon: Shield,
                title: "FTO & Patent Analysis",
                desc: "Ensure safe product launch with in-depth patent searches, risk assessment, and strategic guidance.",
              },
              {
                icon: Clock,
                title: "Design & Packaging Protection",
                desc: "Safeguard product appearance and packaging through industrial design registration and anti-copying measures.",
              },
              {
                icon: Target,
                title: "Trademark & Brand Identity",
                desc: "Build brand trust with comprehensive trademark registration, monitoring, and opposition handling.",
              },
              {
                icon: Users,
                title: "Trade Secret Protection",
                desc: "Secure sensitive processes and formulations through policy drafting, NDAs, and internal compliance.",
              },
              {
                icon: Heart,
                title: "Litigation & Enforcement Support",
                desc: "Defend IP rights with legal action, oppositions, and enforcement across regulatory and commercial channels.",
              },
              {
                icon: Heart,
                title: "Licensing & Valuation",
                desc: "Unlock growth through licensing, IP valuation, and international portfolio management for strategic expansion.",
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="border-2 border-gray-100 hover:border-amber-300 hover:shadow-xl transition-all"
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
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-amber-300 bg-white">
            <CardContent className="pt-8">
              <h2 className="text-gray-900 mb-6 text-4xl font-bold">
                Serving Innovators Across Animal Health Segments
              </h2>
              <p
                className="text-gray-700 leading-relaxed"
                style={{ textAlign: "justify", textJustify: "inter-word", hyphens: "auto" }}
              >
                iVakil IP supports companies working in livestock nutrition, pet wellness, aquaculture, poultry vaccines, and animal diagnostics. Services are customized to match innovation scale, target species, and market goals delivering IP protection that supports product integrity and brand growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default AnimalHealthcarePage;