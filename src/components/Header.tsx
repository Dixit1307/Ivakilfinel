import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                iV
              </div>
              <span className="text-xl text-gray-900">iVakil</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Features
            </a>
            <a href="#services" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Services
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-gray-600 hover:text-indigo-600 transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
              Get Legal Help
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Features
              </a>
              <a href="#services" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Services
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Pricing
              </a>
              <a href="#faq" className="text-gray-600 hover:text-indigo-600 transition-colors">
                FAQ
              </a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Contact
              </a>
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                Get Legal Help
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
