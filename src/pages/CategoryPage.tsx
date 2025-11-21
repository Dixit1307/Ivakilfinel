import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { serviceCategories } from "../types/services";
import { ArrowRight, Building2, Home, Users, Shield, Scale, FileText, Briefcase, Check } from "lucide-react";

interface CategoryPageProps {
  categorySlug: string;
  onNavigate: (page: string) => void;
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

export function CategoryPage({ categorySlug, onNavigate }: CategoryPageProps) {
  const category = serviceCategories.find(cat => cat.slug === categorySlug);

  if (!category) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-gray-900 mb-4">Category not found</h2>
          <Button onClick={() => onNavigate("home")}>Go to Home</Button>
        </div>
      </div>
    );
  }

  const Icon = iconMap[category.icon];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 mb-6`}>
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
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
            >
              Book Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-gray-900 mb-4">Our {category.name} Services</h2>
            <p className="text-xl text-gray-600">
              Expert legal services tailored to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {category.services.map((service) => (
              <Card 
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-indigo-200 cursor-pointer"
                onClick={() => onNavigate(`service/${categorySlug}/${service.slug}`)}
              >
                <CardHeader>
                  <CardTitle className="text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                  >
                    Learn More & Book
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose This Category */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-gray-900 mb-6">
                Why Choose iVakil for {category.name}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-gray-900 mb-1">Expert Lawyers</h3>
                    <p className="text-gray-700">
                      Access to verified lawyers with extensive experience in {category.name.toLowerCase()}.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-gray-900 mb-1">Fast Turnaround</h3>
                    <p className="text-gray-700">
                      Quick document preparation and legal consultation available within 24-48 hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-gray-900 mb-1">Transparent Pricing</h3>
                    <p className="text-gray-700">
                      Clear, upfront pricing with no hidden costs or surprise fees.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-gray-900 mb-1">Online Convenience</h3>
                    <p className="text-gray-700">
                      Complete consultations and documentation from the comfort of your home.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
              <h3 className="text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl text-indigo-600 mb-2">100+</div>
                  <p className="text-gray-700">Specialized lawyers in this category</p>
                </div>
                <div>
                  <div className="text-3xl text-indigo-600 mb-2">5,000+</div>
                  <p className="text-gray-700">Cases handled successfully</p>
                </div>
                <div>
                  <div className="text-3xl text-indigo-600 mb-2">4.9★</div>
                  <p className="text-gray-700">Average client rating</p>
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <Button 
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
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
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Need {category.name} Help?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Our expert lawyers are ready to assist you. Book a consultation today and get the legal support you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100"
              onClick={() => onNavigate("contact")}
            >
              Book Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-600"
            >
              Call +91 98765 43210
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
