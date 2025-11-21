import React from "react";
import { Card, CardContent } from "./ui/card";
import { Users, Package, Target, Globe, Lightbulb, TrendingUp } from "lucide-react";

export function IPWhyChooseUs() {
  const reasons = [
    {
      icon: Users,
      title: "Cross-Domain Expertise",
      description: "With professionals from legal, scientific, and business backgrounds, iVakil IP provides a balanced, strategic approach to every IP challenge."
    },
    {
      icon: Package,
      title: "End-to-End Solutions",
      description: "From ideation to enforcement, all stages of the IP lifecycle are supported under one roof—ensuring continuity, accuracy, and speed."
    },
    {
      icon: Target,
      title: "Strategy-Driven Execution",
      description: "Services go beyond formality. Every action is part of a bigger business strategy, ensuring your IP doesn't just exist—it works for you."
    },
    {
      icon: Globe,
      title: "Global Outlook, Local Knowledge",
      description: "Whether filing in India or expanding into global markets, iVakil IP navigates all regulations with precision and context."
    },
    {
      icon: Lightbulb,
      title: "Insight-Powered Innovation",
      description: "Every report, filing, or advisory service is driven by data and insight. This leads to better decisions and smarter IP investments."
    },
    {
      icon: TrendingUp,
      title: "Competitive Intelligence",
      description: "Stay ahead with real-time visibility into your competitive environment. iVakil IP continuously monitors IP filings and technology trends."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-gray-900 mb-6">Why Choose iVakil IP?</h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            We align innovation with impact, turning ideas into powerful business assets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="border-2 border-gray-100 hover:border-red-200 hover:shadow-xl transition-all group"
            >
              <CardContent className="pt-8">
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 mb-5 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-gray-900 mb-4 text-xl">{reason.title}</h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
