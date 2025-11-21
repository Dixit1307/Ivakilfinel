import React from "react";
import { MessageSquare, FileText, Briefcase, Shield } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "Connect instantly with verified lawyers for expert legal advice via video or chat.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: FileText,
    title: "Drafting",
    description: "Get professional legal documents drafted, reviewed, and customized to your needs.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Briefcase,
    title: "Representation",
    description: "Expert legal representation for court cases and legal proceedings across India.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Compliance",
    description: "Stay compliant with GST, ROC, and corporate regulations with our expert guidance.",
    gradient: "from-pink-500 to-rose-500"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            How iVakil Helps You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with verified lawyers for expert advice, document drafting, and legal representation — all from the comfort of your home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity" 
                   style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
              ></div>
              
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-gray-900 mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
