import { Card, CardContent } from "./ui/card";
import { FileText, Award, Palette, Search, TrendingUp, Pill, Gavel, Activity, Paperclip } from "lucide-react";
import { ipServiceCategories } from "../types/ip-services";

interface IPServicesGridProps {
  onNavigate: (page: string) => void;
}

const iconMap: { [key: string]: any } = {
  FileText,
  Award,
  Palette,
  Search,
  TrendingUp,
  Pill,
  Gavel,
  Activity
};

export function IPServicesGrid({ onNavigate }: IPServicesGridProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-gray-900 mb-6">What We Do</h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IP solutions tailored to your innovation needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ipServiceCategories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <button
                key={category.id}
                onClick={() => onNavigate(`category/${category.slug}`)}
                className="group text-left"
              >
                <Card className="relative overflow-hidden border-2 border-gray-200 hover:border-red-300 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 h-full">
                  {/* Paperclip decoration */}
                  <div className="absolute top-0 right-6 transform -translate-y-1">
                    <Paperclip className="w-8 h-8 text-gray-400 rotate-45" />
                  </div>
                  
                  <CardContent className="pt-10 pb-8 px-7">
                    <div className="flex items-start gap-5 mb-5">
                      <div className="p-3.5 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex-shrink-0">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-900 mb-3 text-xl group-hover:text-red-600 transition-colors">
                          {category.name}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-base leading-relaxed mb-5">
                      {category.description}
                    </p>

                    {/* Service list */}
                    <div className="space-y-3 border-t border-gray-200 pt-5">
                      {category.services.slice(0, 3).map((service, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-base text-gray-700">{service.name}</span>
                        </div>
                      ))}
                      {category.services.length > 3 && (
                        <div className="text-base text-red-600 pt-2">
                          +{category.services.length - 3} more services
                        </div>
                      )}
                    </div>
                  </CardContent>

                  {/* Bottom accent */}
                  <div className="h-1 bg-gradient-to-r from-orange-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </Card>
              </button>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
          >
            <span className="text-lg">Need help choosing the right service?</span>
            <span className="underline">Contact our experts</span>
          </button>
        </div>
      </div>
    </section>
  );
}
