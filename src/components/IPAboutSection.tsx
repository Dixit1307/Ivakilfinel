import React from "react";
import { Award, Globe, Shield, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function IPAboutSection() {
  const highlights = [
    {
      icon: Award,
      title: "Cross-Domain Expertise",
      description: "Technical and legal mastery across industries",
    },
    {
      icon: TrendingUp,
      title: "Strategy-Driven Execution",
      description: "Converting IP into business advantage",
    },
    {
      icon: Globe,
      title: "Global Outlook",
      description: "International filing and protection",
    },
    {
      icon: Shield,
      title: "Transparent Process",
      description: "Clear communication at every step",
    },
  ];

  return (
    <section className="py-24 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP TWO COLUMN LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT (FULL HEIGHT MATCHES IMAGE) */}
          <div className="flex flex-col justify-center h-full mr-2">
            <h2 className="text-gray-900 mb-6 text-4xl font-bold"
              style={{
                textAlign: "justify",
                textJustify: "inter-word",
                hyphens: "auto"
              }}>
              A Trusted Name in IP Services in India
            </h2>

            <p className="text-gray-700 text-xl mb-6 leading-relaxed mr-2"
              style={{
                textAlign: "justify",
                textJustify: "inter-word",
                hyphens: "auto"
              }}>
              At iVakil IP, we don't just protect ideas — we transform them into strategic assets.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mr-2"
              style={{
                textAlign: "justify",
                textJustify: "inter-word",
                hyphens: "auto"
              }}>
              Our clients span diverse domains—from pharmaceuticals and biotechnology
              to software, mechanical engineering, electronics, and healthcare.
              Every IP portfolio we manage is crafted to enhance competitive edge,
              reduce legal exposure, and unlock opportunities for growth, licensing,
              and investment.
            </p>
          </div>

          {/* RIGHT IMAGE (MATCH HEIGHT WITH CONTENT) */}
          <div className="h-full">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?auto=format&fit=crop&w=1200&q=80"
                alt="Legal and innovation workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* HIGHLIGHTS BELOW BOTH SIDES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-900 text-lg font-semibold mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
