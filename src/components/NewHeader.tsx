import React from "react";
import { Button } from "./ui/button";
import { Menu, ChevronDown, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { MegaMenu } from "./MegaMenu";

interface NewHeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function NewHeader({ onNavigate, currentPage }: NewHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => handleNavigation("home")} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
              iV
            </div>
            <span className="text-xl text-gray-900">iVakil</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavigation("home")}
              className={`transition-colors ${
                currentPage === "home" ? "text-indigo-600" : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("about")}
              className={`transition-colors ${
                currentPage === "about" ? "text-indigo-600" : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              About Us
            </button>
            
            {/* Services Mega Menu */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1 transition-colors ${
                  currentPage.includes("category") || currentPage.includes("service") || servicesOpen
                    ? "text-indigo-600"
                    : "text-gray-600 hover:text-indigo-600"
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <MegaMenu onNavigate={handleNavigation} onClose={() => setServicesOpen(false)} />
              )}
            </div>

            <button
              onClick={() => handleNavigation("blog")}
              className={`transition-colors ${
                currentPage === "blog" ? "text-indigo-600" : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              Blog
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className={`transition-colors ${
                currentPage === "contact" ? "text-indigo-600" : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
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
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleNavigation("home")}
                className="text-left text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("about")}
                className="text-left text-gray-600 hover:text-indigo-600 transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-left text-gray-600 hover:text-indigo-600 transition-colors flex items-center justify-between"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 border-l-2 border-indigo-200">
                  <MegaMenu onNavigate={handleNavigation} onClose={() => setMobileMenuOpen(false)} />
                </div>
              )}
              <button
                onClick={() => handleNavigation("blog")}
                className="text-left text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Blog
              </button>
              <button
                onClick={() => handleNavigation("contact")}
                className="text-left text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Contact
              </button>
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
