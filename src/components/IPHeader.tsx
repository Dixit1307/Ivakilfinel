import { Button } from "./ui/button";
import { Menu, ChevronDown, X, Phone } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { IPMegaMenu } from "./IPMegaMenu";
import { industries } from "../types/ip-services";

interface IPHeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function IPHeader({ onNavigate, currentPage }: IPHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const industryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
      if (industryRef.current && !industryRef.current.contains(event.target as Node)) {
        setIndustryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setIndustryOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => handleNavigation("home")} className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white">
              <span className="text-base">iV</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-2xl text-gray-900 leading-tight">iVakil IP</span>
              <span className="text-sm text-gray-500 leading-tight">Care For Innovation</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-base">
            <button
              onClick={() => handleNavigation("home")}
              className={`relative transition-colors pb-1 ${currentPage === "home" ? "text-red-600" : "text-gray-600 hover:text-red-600"
                } ${currentPage === "home" ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-orange-500 after:to-red-600" : ""}`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavigation("about")}
              className={`relative transition-colors pb-1 ${currentPage === "about" ? "text-red-600" : "text-gray-600 hover:text-red-600"
                } ${currentPage === "about" ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-orange-500 after:to-red-600" : ""}`}
            >
              About Us
            </button>

            {/* Services Mega Menu */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                className={`flex items-center gap-1 transition-colors ${currentPage.includes("category") || currentPage.includes("service") || servicesOpen
                  ? "text-red-600"
                  : "text-gray-600 hover:text-red-600"
                  }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div onMouseLeave={() => setServicesOpen(false)}>
                  <IPMegaMenu onNavigate={handleNavigation} onClose={() => setServicesOpen(false)} />
                </div>
              )}
            </div>

            {/* Industry Dropdown */}
            <div className="relative" ref={industryRef}>
              <button
                onClick={() => setIndustryOpen(!industryOpen)}
                className={`flex items-center gap-1 transition-colors ${industryOpen ? "text-red-600" : "text-gray-600 hover:text-red-600"
                  }`}
              >
                Industry
                <ChevronDown className={`w-4 h-4 transition-transform ${industryOpen ? "rotate-180" : ""}`} />
              </button>
              {industryOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl py-2 z-50">
                  {industries.map((industry, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-red-700 transition-colors"
                      onClick={() => {
                        setIndustryOpen(false);
                        onNavigate(`category/${industry.slug}`);
                      }}
                    >
                      {industry.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigation("blog")}
              className={`relative transition-colors pb-1 ${currentPage === "blog" ? "text-red-600" : "text-gray-600 hover:text-red-600"
                } ${currentPage === "blog" ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-orange-500 after:to-red-600" : ""}`}
            >
              Blog
            </button>

            <button
              onClick={() => handleNavigation("contact")}
              className={`relative transition-colors pb-1 ${currentPage === "contact" ? "text-red-600" : "text-gray-600 hover:text-red-600"
                } ${currentPage === "contact" ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-orange-500 after:to-red-600" : ""}`}
            >
              Contact
            </button>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#C1272D] to-[#FF4D00] hover:from-red-700 hover:to-orange-600 text-white text-base px-8 py-5 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleNavigation("home")}
                className="text-left text-gray-600 hover:text-red-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("about")}
                className="text-left text-gray-600 hover:text-red-600 transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-left text-gray-600 hover:text-red-600 transition-colors flex items-center justify-between"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              <button
                onClick={() => handleNavigation("blog")}
                className="text-left text-gray-600 hover:text-red-600 transition-colors"
              >
                Blog
              </button>
              <button
                onClick={() => handleNavigation("contact")}
                className="text-left text-gray-600 hover:text-red-600 transition-colors"
              >
                Contact
              </button>
              <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
                Free Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
