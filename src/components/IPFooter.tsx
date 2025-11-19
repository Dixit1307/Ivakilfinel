import { Facebook, Twitter, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";

interface IPFooterProps {
  onNavigate: (page: string) => void;
}

export function IPFooter({ onNavigate }: IPFooterProps) {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white">
                <span className="text-base">iV</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-2xl text-white leading-tight">iVakil IP</span>
                <span className="text-sm text-gray-400 leading-tight">Care For Innovation</span>
              </div>
            </div>
            <p className="text-gray-400 mb-7 leading-relaxed text-base">
              We believe in creating IP based business opportunity for organization/client by converting their investments into innovations and building robust IP assets. We believe in fostering positive, long-term relationships with our clients.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-11 h-11 bg-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 rounded-full flex items-center justify-center transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 rounded-full flex items-center justify-center transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 rounded-full flex items-center justify-center transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 rounded-full flex items-center justify-center transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Our Company */}
          <div>
            <h3 className="text-white mb-5 text-xl">Our Company</h3>
            <ul className="space-y-3 text-base">
              <li>
                <button onClick={() => onNavigate("home")} className="hover:text-red-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("about")} className="hover:text-red-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button className="hover:text-red-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("blog")} className="hover:text-red-400 transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <button className="hover:text-red-400 transition-colors">
                  Testimonial
                </button>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white mb-5 text-xl">Useful Links</h3>
            <ul className="space-y-3 text-base">
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Customer Care
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-5 text-xl">Company Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <span className="text-base">
                  30B Haridarshan Villa, Radhe Park<br />
                  Navsari, Gujarat – 396445<br />
                  India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <a href="tel:+919265275336" className="hover:text-orange-400 transition-colors text-base">
                  (+91) 9265275336
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <a href="mailto:info@ivakilip.com" className="hover:text-orange-400 transition-colors text-base">
                  info@ivakilip.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-10 mt-4">
          <div className="text-center text-gray-400 text-base">
            <p>© 2025 iVakil IP. All Rights Reserved.</p>
            <p className="mt-2">Care For Innovation</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
