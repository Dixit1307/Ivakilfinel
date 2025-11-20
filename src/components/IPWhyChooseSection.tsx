import React from "react";
import { Users, RefreshCw, Globe2, Zap, Trophy, Target } from "lucide-react";

export function IPWhyChooseSection() {
  const features = [
    {
      icon: Users,
      title: "Cross-Domain Expertise",
      description:
        "With professionals from legal, scientific, and business backgrounds, iVakil IP provides a balanced, strategic approach to every IP challenge."
    },
    {
      icon: RefreshCw,
      title: "End-to-End Solutions",
      description:
        "From ideation to enforcement, all stages of the IP lifecycle are supported under one roof—ensuring continuity, accuracy, and speed."
    },
    {
      icon: Target,
      title: "Strategy-Driven Execution",
      description:
        "Services go beyond formality. Every action is part of a bigger business strategy, ensuring your IP doesn’t just exist—it works for you."
    },
    {
      icon: Globe2,
      title: "Global Outlook, Local Knowledge",
      description:
        "Whether filing in India or expanding into global markets, iVakil IP navigates all regulations with precision and context."
    },
    {
      icon: Zap,
      title: "Insight-Powered Innovation",
      description:
        "Every report, filing, or advisory service is driven by data and insight. This leads to better decisions and smarter IP investments."
    },
    {
      icon: Trophy,
      title: "Trusted by Innovators",
      description:
        "Our proven track record across sectors has made us a reliable partner for startups, enterprises, and research organizations."
    }
  ];

  return (
    <section className="py-24 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-6 text-4xl font-bold">
            Why Choose iVakil IP?
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto">
            Combining technical excellence, legal precision, and business insight.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  animation: `fadeUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-gray-900 mb-3 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-justify">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
