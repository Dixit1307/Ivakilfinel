import { useState } from "react";
import { ChevronRight, Building2, Home, Users, Shield, Scale, FileText, Briefcase } from "lucide-react";
import { serviceCategories } from "../types/services";

interface MegaMenuProps {
  onNavigate: (page: string) => void;
  onClose?: () => void;
}

const iconMap: { [key: string]: any } = {
  Building2,
  Home,
  Users,
  Shield,
  Scale,
  FileText,
  Briefcase
};

export function MegaMenu({ onNavigate, onClose }: MegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (categorySlug: string) => {
    onNavigate(`category/${categorySlug}`);
    onClose?.();
  };

  const handleServiceClick = (categorySlug: string, serviceSlug: string) => {
    onNavigate(`service/${categorySlug}/${serviceSlug}`);
    onClose?.();
  };

  return (
    <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Categories List */}
          <div className="lg:col-span-1 border-r border-gray-200 pr-6">
            <h3 className="text-sm text-gray-500 mb-4 uppercase tracking-wider">
              Service Categories
            </h3>
            <div className="space-y-1">
              {serviceCategories.map((category) => {
                const Icon = iconMap[category.icon];
                return (
                  <button
                    key={category.id}
                    className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-3 transition-colors ${
                      activeCategory === category.id
                        ? "bg-indigo-50 text-indigo-600"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                    onMouseEnter={() => setActiveCategory(category.id)}
                    onClick={() => handleCategoryClick(category.slug)}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span>{category.name}</span>
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Services Grid */}
          <div className="lg:col-span-3">
            {activeCategory ? (
              <div>
                {serviceCategories
                  .filter((cat) => cat.id === activeCategory)
                  .map((category) => (
                    <div key={category.id}>
                      <div className="mb-6">
                        <h3 className="text-xl text-gray-900 mb-2">
                          {category.name}
                        </h3>
                        <p className="text-gray-600">{category.description}</p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {category.services.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => handleServiceClick(category.slug, service.slug)}
                            className="text-left p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all group"
                          >
                            <h4 className="text-gray-900 mb-1 group-hover:text-indigo-600">
                              {service.name}
                            </h4>
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {service.description}
                            </p>
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => handleCategoryClick(category.slug)}
                        className="mt-6 text-indigo-600 hover:text-indigo-700 flex items-center gap-2"
                      >
                        View all {category.name} services
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                <div className="text-center">
                  <Scale className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Hover over a category to view services</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
