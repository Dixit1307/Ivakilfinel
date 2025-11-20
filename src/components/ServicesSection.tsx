import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Video, FileEdit, Gavel, Building2 } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Vakil-on-Demand",
    description: "Instant legal consultation with verified lawyers via video call. Get answers to your legal questions in minutes.",
    features: ["15-60 min sessions", "Instant booking", "Record & transcripts"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: FileEdit,
    title: "Document Drafting",
    description: "Professional drafting of legal agreements, notices, contracts, and other legal documents.",
    features: ["Rental agreements", "Notices & contracts", "Custom documents"],
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Gavel,
    title: "Legal Representation",
    description: "Experienced lawyers to represent you in courts and handle legal proceedings on your behalf.",
    features: ["Court filing", "Case management", "Expert advocacy"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Building2,
    title: "Compliance & Corporate",
    description: "Complete support for GST registration, ROC filings, company incorporation, and regulatory compliance.",
    features: ["GST & tax support", "Company setup", "ROC compliance"],
    gradient: "from-pink-500 to-rose-500"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive legal solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-indigo-200">
              <CardHeader>
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-4 w-fit`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
