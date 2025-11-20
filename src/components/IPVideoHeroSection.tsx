import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface IPVideoHeroSectionProps {
  onNavigate: (page: string) => void;
}

export function IPVideoHeroSection({ onNavigate }: IPVideoHeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?auto=format&fit=crop&w=1200&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-white mb-8 text-5xl sm:text-6xl lg:text-7xl leading-tight">
          Welcome to iVakil IP – <br />
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Protecting Ideas, Powering Innovation
          </span>
        </h1>

        <p className="text-white/90 text-lg sm:text-xl lg:text-2xl mb-10 leading-relaxed">
          Innovation drives progress. Behind every invention, brand, or design is an idea worth protecting. iVakil IP delivers tailored intellectual property solutions that help inventors, startups, researchers, and businesses transform originality into strategic advantage.
          <br />
          <br />
          Whether you need to secure a patent, protect a unique design, or navigate the complexities of global IP regulations, iVakil IP ensures every move is backed by legal clarity, technical precision, and market foresight.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center items-center">
          <Button
            size="lg"
            onClick={() => onNavigate("contact")}
            className="bg-gradient-to-r from-[#C1272D] to-[#FF4D00] hover:from-red-700 hover:to-orange-600 
                       text-white text-lg px-10 py-7 h-auto shadow-2xl hover:shadow-orange-500/50 
                       transition-all duration-300"
          >
            Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}