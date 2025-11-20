import React from "react";
import { IPHeroSection } from "../components/IPHeroSection";
import { IPServicesGrid } from "../components/IPServicesGrid";
import { IPWhyChooseUs } from "../components/IPWhyChooseUs";
import { IPTrustIndicators } from "../components/IPTrustIndicators";
import { IPTestimonials } from "../components/IPTestimonials";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface IPHomePageProps {
  onNavigate: (page: string) => void;
}

export function IPHomePage({ onNavigate }: IPHomePageProps) {
  return (
    <>
      <IPHeroSection />
      
      {/* Trusted Partner Section */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-gray-900 mb-8">
              A Trusted Name in IP Services in India
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At iVakil IP, we don't just offer IP services. We build strategic IP assets. With a cross-disciplinary team of attorneys, engineers, scientists, and consultants, we provide comprehensive IP services in India that align with your industry, innovation lifecycle, and business goals.
            </p>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto mt-6 leading-relaxed">
              Our clients span diverse domains—from pharmaceuticals and biotechnology to software, mechanical engineering, electronics, and healthcare. Every IP portfolio we manage is crafted to enhance competitive edge, reduce legal exposure, and open doors for growth, licensing, and investment.
            </p>
          </div>
        </div>
      </section>

      <IPServicesGrid onNavigate={onNavigate} />
      <IPWhyChooseUs />
      <IPTrustIndicators />
      <IPTestimonials />

      {/* Blog Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-6">Our Latest Articles</h2>
            <p className="text-2xl text-gray-600">Stay updated with IP insights and industry trends</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="border-2 border-gray-200 hover:border-red-300 hover:shadow-xl transition-all overflow-hidden group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1704969723938-0c310608d6c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRlbnQlMjBkb2N1bWVudHMlMjBpbm5vdmF0aW9ufGVufDF8fHx8MTc2MjUwMTcyMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Blog post"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-gray-900 mb-2 group-hover:text-red-600 transition-colors text-xl">
                  Understanding Patent Strategy
                </h3>
                <p className="text-base text-gray-600 mb-4">
                  Learn how to build a robust patent portfolio that protects your innovations and drives business value.
                </p>
                <div className="flex items-center justify-between text-base text-gray-500">
                  <span>Nov 7, 2025</span>
                  <button className="text-red-600 hover:text-red-700 flex items-center gap-1">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-red-300 hover:shadow-xl transition-all overflow-hidden group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1707944745899-104a4b12d945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwcmVzZWFyY2glMjBzY2llbnRpc3R8ZW58MXx8fHwxNzYyNDE3NDc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Blog post"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-gray-900 mb-2 group-hover:text-red-600 transition-colors text-xl">
                  Trademark Protection Essentials
                </h3>
                <p className="text-base text-gray-600 mb-4">
                  Essential steps to protect your brand identity and ensure long-term market success.
                </p>
                <div className="flex items-center justify-between text-base text-gray-500">
                  <span>Nov 5, 2025</span>
                  <button className="text-red-600 hover:text-red-700 flex items-center gap-1">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-red-300 hover:shadow-xl transition-all overflow-hidden group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758873269811-4e62e346b4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjI1MDA3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Blog post"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-gray-900 mb-2 group-hover:text-red-600 transition-colors text-xl">
                  IP Strategy for Startups
                </h3>
                <p className="text-base text-gray-600 mb-4">
                  How startups can leverage intellectual property as a strategic business asset from day one.
                </p>
                <div className="flex items-center justify-between text-base text-gray-500">
                  <span>Nov 3, 2025</span>
                  <button className="text-red-600 hover:text-red-700 flex items-center gap-1">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              onClick={() => onNavigate("blog")}
              size="lg"
              variant="outline" 
              className="border-2 border-red-600 text-red-700 hover:bg-red-50 text-base px-8 py-5 h-auto"
            >
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-6">Free Consultation</h2>
            <p className="text-2xl text-gray-600">
              Get expert IP advice tailored to your innovation needs
            </p>
          </div>

          <Card className="border-2 border-gray-200 shadow-xl">
            <CardContent className="pt-10">
              <form className="space-y-7">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-base">Name*</Label>
                  <Input id="name" placeholder="Enter your name" required className="h-12 text-base" />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="text-base">Email*</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required className="h-12 text-base" />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="number" className="text-base">Number*</Label>
                  <Input id="number" type="tel" placeholder="Enter your phone number" required className="h-12 text-base" />
                </div>

                <div className="flex items-center space-x-3">
                  <Checkbox id="robot" />
                  <label htmlFor="robot" className="text-base text-gray-700">
                    I'm not a robot
                  </label>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-base py-6 h-auto"
                  size="lg"
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-orange-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-8">
            Ready to Protect Your Innovation?
          </h2>
          <p className="text-2xl text-orange-100 mb-10">
            Contact us to find out how we can help you achieve the success you deserve
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button 
              size="lg"
              className="bg-white text-red-700 hover:bg-gray-100 text-base px-8 py-6 h-auto"
              onClick={() => onNavigate("contact")}
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-red-700 text-base px-8 py-6 h-auto"
            >
              Free Patent Cost Calculator
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
