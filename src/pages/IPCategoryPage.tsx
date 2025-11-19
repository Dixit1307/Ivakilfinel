import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ipServiceCategories } from "../types/ip-services";
import { ArrowRight, FileText, Award, Palette, Search, TrendingUp, Pill, Gavel, Activity, Check } from "lucide-react";

interface IPCategoryPageProps {
  categorySlug: string;
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

export function IPCategoryPage({ categorySlug, onNavigate }: IPCategoryPageProps) {
  const category = ipServiceCategories.find(cat => cat.slug === categorySlug);

  if (!category) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-gray-900 mb-4">Service category not found</h2>
          <Button onClick={() => onNavigate("home")}>Go to Home</Button>
        </div>
      </div>
    );
  }

  const Icon = iconMap[category.icon];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 mb-6`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-gray-900 mb-6">
              {category.name}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {category.description}
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
            >
              Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-gray-900 mb-4">Our {category.name}</h2>
            <p className="text-xl text-gray-600">
              Expert IP services tailored to your innovation needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {category.services.map((service) => (
              <Card 
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-200 cursor-pointer"
                onClick={() => onNavigate(`service/${categorySlug}/${service.slug}`)}
              >
                <CardHeader>
                  <CardTitle className="text-gray-900 group-hover:text-blue-700 transition-colors">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                  >
                    Learn More & Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-gray-900 mb-6">
                Why Choose iVakil IP for {category.name}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-gray-900 mb-1">Government-Authorized Experts</h3>
                    <p className="text-gray-600">
                      All our patent agents are registered with the Indian Patent Office, ensuring credibility and compliance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-gray-900 mb-1">Cross-Domain Expertise</h3>
                    <p className="text-gray-600">
                      80+ attorneys, scientists, and tech experts with deep knowledge across industries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-gray-900 mb-1">Transparent Pricing</h3>
                    <p className="text-gray-600">
                      Clear, upfront pricing with no hidden costs. Free patent cost calculator available.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-gray-900 mb-1">Global Reach</h3>
                    <p className="text-gray-600">
                      Seamless filing in India, USA, and 153+ countries worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
              <h3 className="text-gray-900 mb-6">Service Highlights</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl text-blue-700 mb-2">100+</div>
                  <p className="text-gray-600">Specialized IP professionals</p>
                </div>
                <div>
                  <div className="text-3xl text-blue-700 mb-2">1000+</div>
                  <p className="text-gray-600">Clients served successfully</p>
                </div>
                <div>
                  <div className="text-3xl text-blue-700 mb-2">24-48h</div>
                  <p className="text-gray-600">Average response time</p>
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                    onClick={() => onNavigate("contact")}
                  >
                    Get Started Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Need Help with {category.name}?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our IP experts are ready to assist you. Get a free consultation today and protect your innovations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100"
              onClick={() => onNavigate("contact")}
            >
              Free Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white text-blue-700 hover:bg-gray-100"
            >
              Call (+91) 9265275336
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
