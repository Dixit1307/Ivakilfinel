import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { serviceCategories } from "../types/services";
import { 
  Check, 
  Clock, 
  FileText, 
  Shield, 
  ArrowRight,
  Phone,
  Mail,
  MessageCircle
} from "lucide-react";

interface ServiceDetailPageProps {
  categorySlug: string;
  serviceSlug: string;
  onNavigate: (page: string) => void;
}

export function ServiceDetailPage({ categorySlug, serviceSlug, onNavigate }: ServiceDetailPageProps) {
  const category = serviceCategories.find(cat => cat.slug === categorySlug);
  const service = category?.services.find(svc => svc.slug === serviceSlug);

  if (!category || !service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-gray-900 mb-4">Service not found</h2>
          <Button onClick={() => onNavigate("home")}>Go to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <button onClick={() => onNavigate("home")} className="hover:text-indigo-600">
              Home
            </button>
            <span>/</span>
            <button onClick={() => onNavigate(`category/${categorySlug}`)} className="hover:text-indigo-600">
              {category.name}
            </button>
            <span>/</span>
            <span className="text-gray-900">{service.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm mb-4">
                {category.name}
              </div>
              <h1 className="text-gray-900 mb-6">
                {service.name}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                >
                  Book Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50"
                >
                  Free Consultation
                </Button>
              </div>
            </div>

            {/* Quick Contact Card */}
            <Card className="border-2 border-indigo-200 shadow-xl">
              <CardContent className="pt-6">
                <h3 className="text-gray-900 mb-6">Get Expert Help</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-lg">
                    <div className="p-3 bg-indigo-600 rounded-full">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Call us</div>
                      <div className="text-gray-900">+91 98765 43210</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                    <div className="p-3 bg-purple-600 rounded-full">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Email us</div>
                      <div className="text-gray-900">support@ivakil.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-pink-50 rounded-lg">
                    <div className="p-3 bg-pink-600 rounded-full">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Live Chat</div>
                      <div className="text-gray-900">Available 9 AM - 7 PM</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-gray-900 mb-6">Service Overview</h2>
              <p className="text-gray-600 mb-6">
                Our {service.name.toLowerCase()} service provides comprehensive legal support tailored to your specific needs. 
                We understand that legal matters can be complex and stressful, which is why our expert lawyers are here to 
                guide you through every step of the process.
              </p>

              <h3 className="text-gray-900 mb-4 mt-8">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Initial legal consultation",
                  "Document preparation & review",
                  "Expert legal advice",
                  "Court representation (if needed)",
                  "Follow-up support",
                  "Document delivery",
                  "Email & phone support",
                  "Progress tracking"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Check className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-gray-900 mb-4 mt-8">How It Works</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                    1
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Book Your Consultation</h4>
                    <p className="text-gray-600">
                      Schedule a convenient time slot and provide basic details about your case.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                    2
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Connect with Expert Lawyer</h4>
                    <p className="text-gray-600">
                      Meet with a verified lawyer via video call to discuss your legal matter in detail.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                    3
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Get Documents & Support</h4>
                    <p className="text-gray-600">
                      Receive professionally drafted documents and ongoing legal support for your case.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-gray-900 mb-4 mt-8">Required Documents</h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-600 mb-4">
                  To provide you with the best service, please keep the following documents ready:
                </p>
                <ul className="space-y-2">
                  {[
                    "Valid ID proof (Aadhaar, PAN, Passport, etc.)",
                    "Relevant case documents or agreements",
                    "Any previous legal notices or communications",
                    "Supporting evidence or records"
                  ].map((doc, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="border-2 border-gray-200">
                <CardContent className="pt-6">
                  <h3 className="text-gray-900 mb-4">Service Features</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-gray-900 mb-1">Quick Turnaround</div>
                        <div className="text-sm text-gray-600">24-48 hours delivery</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-gray-900 mb-1">100% Confidential</div>
                        <div className="text-sm text-gray-600">Your data is secure</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-gray-900 mb-1">Professional Drafting</div>
                        <div className="text-sm text-gray-600">Expert legal documents</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50">
                <CardContent className="pt-6">
                  <h3 className="text-gray-900 mb-4">Pricing</h3>
                  <div className="text-3xl text-indigo-600 mb-2">₹999</div>
                  <p className="text-gray-600 mb-6">Starting from (consultation)</p>
                  <Button 
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                  >
                    Book Now
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-3">
                    Custom pricing for extended services
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardContent className="pt-6">
                  <h3 className="text-gray-900 mb-4">Related Services</h3>
                  <div className="space-y-2">
                    {category.services
                      .filter(s => s.id !== service.id)
                      .slice(0, 3)
                      .map((relatedService) => (
                        <button
                          key={relatedService.id}
                          onClick={() => onNavigate(`service/${categorySlug}/${relatedService.slug}`)}
                          className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
                        >
                          <div className="text-gray-900 text-sm">{relatedService.name}</div>
                        </button>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Book your consultation now and get expert legal help within 24 hours.
          </p>
          <Button 
            size="lg"
            className="bg-white text-indigo-600 hover:bg-gray-100"
          >
            Book Consultation Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
