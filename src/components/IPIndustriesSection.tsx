import React from "react";
import { Microscope, Pill, ShoppingBag, Beaker, Sprout, Code, Heart, Cog } from "lucide-react";

export function IPIndustriesSection() {
  const industries = [
    { icon: Microscope, name: "Biotechnology", gradient: "from-purple-500 to-pink-500" },
    { icon: Pill, name: "Pharmaceuticals", gradient: "from-blue-500 to-cyan-500" },
    { icon: ShoppingBag, name: "FMCG", gradient: "from-green-500 to-emerald-500" },
    { icon: Beaker, name: "Chemicals", gradient: "from-yellow-500 to-orange-500" },
    { icon: Sprout, name: "Agrochemical", gradient: "from-lime-500 to-green-500" },
    { icon: Code, name: "Software & IT", gradient: "from-indigo-500 to-purple-500" },
    { icon: Heart, name: "Medical Devices", gradient: "from-red-500 to-pink-500" },
    { icon: Cog, name: "Engineering", gradient: "from-gray-600 to-slate-700" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#FFF8F6] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-6 text-4xl font-bold">
            Serving Diverse Industries with IP Expertise
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto">
            From biotech to software, we protect innovation across every sector
          </p>  
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-gray-100 hover:border-transparent"
              >
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
                
                <div className={`w-20 h-20 mx-auto mb-5 bg-gradient-to-br ${industry.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-gray-900 text-lg group-hover:text-red-700 transition-colors">
                  {industry.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
