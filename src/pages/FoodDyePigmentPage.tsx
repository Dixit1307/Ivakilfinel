import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Target, Heart, CheckCircle, Users, Clock, Shield } from "lucide-react";

export function FoodDyePigmentPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-gray-900 mb-4 text-4xl sm:text-5xl lg:text-6xl font-semibold">
              Food, Dye & Pigment Industry IP Services in India
            </h1>

            <h2 className="text-2xl text-yellow-700 mb-6">
              Protecting Innovation in Food, Colorants, and Formulations
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              The food, dye, and pigment industries are rapidly evolving with the rise of health-conscious consumers, sustainable materials, and advanced processing technologies. Whether it's a new food additive, a natural colorant, or a unique formulation process, innovation lies at the core of these sectors. iVakil IP offers specialized intellectual property services that protect and strengthen these innovations, helping businesses secure their competitive edge and unlock long-term value.
            </p>
          </div>
        </div>
      </section>

      {/* Why IP Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-gray-900 mb-6 text-4xl font-bold text-center">
              Importance of IP Services
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed"
              style={{ textAlign: "justify", textJustify: "inter-word", hyphens: "auto" }}
>
              Innovation in the food, dye, and pigment industries demands years of research and investment. Without strong IP protection, these efforts risk being copied or misused. Intellectual property helps secure exclusivity, build brand value, attract partnerships, and support global expansion. iVakil IP ensures these benefits through focused, strategic IP solutions.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/Fooddyepigment.jpg"
                alt="Food, Dye & Pigment Industry"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Full Spectrum IP Services */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-gray-900 mb-6 text-4xl font-bold">
            Key Services for Food, Dye & Pigment Industry
          </h2>

          <p className="text-xl text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
            iVakil IP offers end-to-end IP support tailored to the unique scientific, legal, and commercial challenges of food, dye, and pigment innovators. Each service is designed to protect creativity, improve legal strength, and drive commercialization.
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
                desc: "Protection for food compositions, flavors, dyes, pigments, extraction methods, and packaging innovations with strong, strategic patents."
              },
              {
                icon: Shield,
                title: "Freedom-to-Operate (FTO) Analysis",
                desc: "Identify existing patents, assess infringement risks, and explore safe pathways to launch or develop products."
              },
              {
                icon: Clock,
                title: "Process & Composition Strategy",
                desc: "Secure IP for preparation methods, ingredient blends, clean-label solutions, and shelf-life enhancements."
              },
              {
                icon: Target,
                title: "Opposition & Litigation Support",
                desc: "Support for patent oppositions, invalidations, and IP disputes with evidence-based legal and technical strategies."
              },
              {
                icon: Users,
                title: "Trademark & Brand Protection",
                desc: "Register and protect brand names, logos, and packaging; monitor misuse and manage global trademark portfolios."
              },
              {
                icon: Heart,
                title: "Licensing & Valuation Support",
                desc: "Monetize IP through licensing, accurate valuation, royalty structuring, and IP due diligence for partnerships or M&A."
              }
            ].map((service, i) => (
              <Card key={i} className="border-2 border-gray-100 hover:border-yellow-300 hover:shadow-xl transition-all">
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
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Card className="border-2 border-yellow-300 bg-white">
            <CardContent className="pt-8">

              <h2 className="text-gray-900 mb-6 text-4xl font-bold">Serving a Wide Range of Applications</h2>

              <p className="text-gray-700 leading-relaxed"
                style={{
                  textAlign: "justify",
                  textJustify: "inter-word",
                  hyphens: "auto"
                }}>
                iVakil IP works with companies across the food, dye, and pigment ecosystem — including flavor manufacturers, nutraceutical firms, natural dye producers, cosmetic colorant companies, and food tech startups. Each service is tailored to the product life cycle, innovation model, and business goals.
              </p>

            </CardContent>
          </Card>

        </div>
      </section>

    </div>
  );
}