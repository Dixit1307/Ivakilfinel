import React from "react";
import { Facebook, Twitter, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";

interface IPPremiumFooterProps {
  onNavigate: (page: string) => void;
}

export function IPPremiumFooter({ onNavigate }: IPPremiumFooterProps) {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <button onClick={() => onNavigate("home")} className="flex items-center">
                <img
                  src="/ivakillogo.png"
                  alt="iVakil Logo"
                  className="w-24 h-14 object-contain"
                />
              </button>
            </div>


            <p className="text-[#1A1A1A]-400 mb-7 leading-relaxed text-base"
            style={{ textAlign: "justify", textJustify: "inter-word", hyphens: "auto" }}
>
              We believe in creating IP-based business opportunities by converting investments into innovations and building robust IP assets.
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

          {/* Services */}
          <div>
            <h3 className="text-white mb-5 text-xl relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-600"></span>
            </h3>
            <ul className="space-y-3 text-base">
              <li>
                <button className="hover:text-orange-400 transition-colors">
                  Patent Services
                </button>
              </li>
              <li>
                <button className="hover:text-orange-400 transition-colors">
                  Trademark Registration
                </button>
              </li>
              <li>
                <button className="hover:text-orange-400 transition-colors">
                  Design Protection
                </button>
              </li>
              <li>
                <button className="hover:text-orange-400 transition-colors">
                  IP Strategy Consulting
                </button>
              </li>
              <li>
                <button className="hover:text-orange-400 transition-colors">
                  Litigation Support
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white mb-5 text-xl relative inline-block">
              Resources
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-600"></span>
            </h3>
            <ul className="space-y-3 text-base">
              <li>
                <button onClick={() => onNavigate("blog")} className="hover:text-orange-400 transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-5 text-xl relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-600"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />

                <a
                  href="https://www.google.com/maps/place/Radhe+Park/@20.9415476,72.9076886,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0f721b4ef9159:0x3013659672a44c06!8m2!3d20.9415426!4d72.9102635!16s%2Fg%2F11m9pws8dr?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors text-base"
                >
                  30B Haridarshan Villa, Radhe Park<br />
                  Navsari, Gujarat – 396445<br />
                  India
                </a>
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
            <p>© 2025 iVakil IP. All Rights Reserved. | Care For Innovation</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
