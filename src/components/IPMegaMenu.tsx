import { FileText, Award, Palette, Search, TrendingUp, Pill, Gavel, Activity } from "lucide-react";
import { ipServiceCategories } from "../types/ip-services";

interface IPMegaMenuProps {
  onNavigate: (page: string) => void;
  onClose?: () => void;
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

export function IPMegaMenu({ onNavigate, onClose }: IPMegaMenuProps) {
  const handleCategoryClick = (categorySlug: string) => {
    onNavigate(`category/${categorySlug}`);
    onClose?.();
  };

  const handleServiceClick = (categorySlug: string, serviceSlug: string) => {
    onNavigate(`service/${categorySlug}/${serviceSlug}`);
    onClose?.();
  };

  return (
    <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 min-w-[320px]">
      <div className="py-4">
        {/* Header */}
        <div className="px-5 py-3 border-b border-gray-200">
          <h3 className="text-sm text-gray-500 uppercase tracking-wider">
            IP SERVICES
          </h3>
        </div>

        {/* Services List */}
        <div className="py-3">
          {ipServiceCategories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <button
                key={category.id}
                className="w-full text-left px-5 py-3.5 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-colors group flex items-center gap-4"
                onClick={() => handleCategoryClick(category.slug)}
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 group-hover:from-orange-600 group-hover:to-red-700 transition-all">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-base text-gray-700 group-hover:text-red-700 transition-colors">
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
