import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Scale } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full mb-6">
              <Scale className="w-4 h-4 text-indigo-600" />
              <span className="text-sm text-gray-700">Trusted by 10,000+ clients</span>
            </div>
            
            <h1 className="text-gray-900 mb-6">
              Your Digital Vakil — Legal help made simple
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Online consultations, document drafting, and representation — fast, transparent, and affordable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              >
                Get Legal Help
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50">
                View Services
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl text-indigo-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Verified Lawyers</div>
              </div>
              <div>
                <div className="text-2xl text-indigo-600 mb-1">15k+</div>
                <div className="text-sm text-gray-600">Cases Resolved</div>
              </div>
              <div>
                <div className="text-2xl text-indigo-600 mb-1">4.8★</div>
                <div className="text-sm text-gray-600">Client Rating</div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8">
              <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                <Scale className="w-32 h-32 text-indigo-600 opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    </section>
  );
}
