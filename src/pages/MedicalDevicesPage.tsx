import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Target, Heart, CheckCircle, Users, Clock, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function MedicalDevicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          Medical Devices IP Services India – Protect Innovative Health Tech
        </title>
        <meta
          name="description"
          content="iVakil IP offers expert IP services for the medical devices industry in India, including patents, trademarks, and regulatory support to protect and commercialize innovative health technologies."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-gray-900 mb-4 text-4xl sm:text-5xl lg:text-6xl font-semibold">
              Medical Devices Industry IP Services in India
            </h1>
            <h2 className="text-2xl text-blue-700 mb-6">
              Protecting Innovation in Life-Saving Technologies
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The medical devices industry is one of the most innovation-driven sectors, continuously evolving with advancements in technology, materials, and digital integration. From wearable health monitors to life-saving surgical equipment, every product involves intensive R&D, regulatory compliance, and precision engineering. At iVakil IP, dedicated intellectual property (IP) services are offered to protect these innovations and support companies in navigating the complexities of the medical device landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Why IP Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-gray-900 mb-6 text-4xl font-bold text-center">
              Importance of IP in Medical Devices
            </h2>
            <p
              className="text-gray-700 mb-4 leading-relaxed"
              style={{
                textAlign: "justify",
                textJustify: "inter-word",
                hyphens: "auto",
              }}
            >
              Medical devices involve complex innovations that require strong IP protection to secure exclusivity, prevent misuse, and support regulatory success. Proper IP enhances market position and investor confidence. iVakil IP delivers focused strategies to protect and grow these innovations.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="Medicaldevicesservice.jpg"
                alt="Medical Devices Industry"
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
            Comprehensive IP Services for Medical Device Innovators
          </h2>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
            At iVakil IP, IP services are tailored to match the technical and commercial needs of medical device companies. Each service is designed to strengthen innovation, reduce legal risks, and support market expansion.
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
                desc: "Protection for diagnostic tools, wearables, implants, imaging systems, and AI-based devices with strong, clear patents.",
              },
              {
                icon: Shield,
                title: "Freedom-to-Operate (FTO) Analysis",
                desc: "Identify potential IP conflicts, assess infringement risks, and plan safe product launches.",
              },
              {
                icon: Clock,
                title: "Design Protection & Utility Models",
                desc: "Secure industrial design and functional features to enhance product uniqueness and brand identity.",
              },
              {
                icon: Target,
                title: "Regulatory & IP Coordination",
                desc: "Align patent strategy with clinical trials, regulatory approvals, and global filing requirements.",
              },
              {
                icon: Users,
                title: "Opposition & Litigation Support",
                desc: "Expert assistance in patent oppositions, invalidations, and infringement matters with technical depth.",
              },
              {
                icon: Heart,
                title: "Portfolio Management & Commercialization",
                desc: "Manage IP assets, monitor competitors, support licensing deals, and assist in valuation for business growth.",
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="border-2 border-gray-100 hover:border-purple-300 hover:shadow-xl transition-all"
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
          <Card className="border-2 border-purple-300 bg-white">
            <CardContent className="pt-8">
              <h2 className="text-gray-900 mb-6 text-4xl font-bold">
                Supporting All Types of Medical Device Companies
              </h2>
              <p
                className="text-gray-700 leading-relaxed"
                style={{ textAlign: "justify", textJustify: "inter-word", hyphens: "auto" }}
              >
                iVakil IP works with a wide range of device developers from startups building smart wearable health tools to multinational companies manufacturing surgical robotics. Each service is customized based on device classification, target market, and innovation roadmap.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default MedicalDevicesPage;