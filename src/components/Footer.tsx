import { Scale, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl text-white">iVakil</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your digital vakil for all legal needs. Fast, transparent, and affordable legal services online.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Consultation</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Document Drafting</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Legal Representation</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Compliance</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#pricing" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Refund Policy</a></li>
              <li><a href="#faq" className="hover:text-indigo-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} iVakil. All rights reserved. | Made with care for your legal needs.</p>
        </div>
      </div>
    </footer>
  );
}
