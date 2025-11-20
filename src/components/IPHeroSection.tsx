import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Shield, Users, Award, Globe } from "lucide-react";

export function IPHeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-technology-background-24761-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/75"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-orange-100 to-red-100 text-red-700 rounded-full mb-8 border border-red-200">
              Trusted IP Partner in India
            </div>
            <h1 className="text-gray-900 mb-6">
              Welcome to iVakil IP
            </h1>
            <h2 className="text-3xl lg:text-4xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-8">
              Protecting Ideas, Powering Innovation
            </h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Innovation drives progress. Behind every invention, brand, or design is an idea worth protecting—and that's where iVakil IP comes in. We deliver tailored intellectual property solutions that help inventors, startups, researchers, and businesses transform originality into strategic advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6 h-auto"
              >
                Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-red-600 text-red-700 hover:bg-red-50 text-lg px-8 py-6 h-auto"
              >
                Free Patent Cost Calculator
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">153+</div>
                <div className="text-sm text-gray-600">Countries Supported</div>
              </div>
              <div className="text-center">
                <div className="text-4xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">1000+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">80+</div>
                <div className="text-sm text-gray-600">IP Experts</div>
              </div>
              <div className="text-center">
                <div className="text-4xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-sm text-gray-600">Authorized Agents</div>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-5">
            {[
              {
                icon: Shield,
                title: "Government-Authorized Patent Agents",
                description: "Registered with Indian Patent Office ensuring compliance and credibility"
              },
              {
                icon: Globe,
                title: "Global IP Filing Support",
                description: "Seamless patent and trademark filing in India, USA, and internationally"
              },
              {
                icon: Users,
                title: "Cross-Disciplinary Expert Team",
                description: "80+ attorneys, scientists, and tech experts across domains"
              },
              {
                icon: Award,
                title: "Transparent & Competitive Pricing",
                description: "No hidden costs. Clear pricing for every service"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-5 p-6 bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-gray-100 hover:border-red-300 hover:shadow-xl transition-all"
              >
                <div className="p-3.5 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2 text-lg">{feature.title}</h3>
                  <p className="text-base text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
