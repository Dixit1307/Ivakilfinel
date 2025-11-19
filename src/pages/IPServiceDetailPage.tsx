import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ipServiceCategories } from "../types/ip-services";
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

interface IPServiceDetailPageProps {
  categorySlug: string;
  serviceSlug: string;
  onNavigate: (page: string) => void;
}

export function IPServiceDetailPage({ categorySlug, serviceSlug, onNavigate }: IPServiceDetailPageProps) {
  const category = ipServiceCategories.find(cat => cat.slug === categorySlug);
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center gap-2 text-base text-gray-600">
            <button onClick={() => onNavigate("home")} className="hover:text-red-600">
              Home
            </button>
            <span>/</span>
            <button onClick={() => onNavigate(`category/${categorySlug}`)} className="hover:text-red-600">
              {category.name}
            </button>
            <span>/</span>
            <span className="text-gray-900">{service.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-5 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-red-700 rounded-full text-base mb-6 border border-red-200">
                {category.name}
              </div>
              <h1 className="text-gray-900 mb-8">
                {service.name}
              </h1>
              <p className="text-2xl text-gray-600 mb-10 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-base px-8 py-6 h-auto"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-red-600 text-red-700 hover:bg-red-50 text-base px-8 py-6 h-auto"
                >
                  Free Consultation
                </Button>
              </div>
            </div>

            {/* Quick Contact Card */}
            <Card className="border-2 border-red-200 shadow-xl">
              <CardContent className="pt-8">
                <h3 className="text-gray-900 mb-7 text-xl">Get Expert IP Help</h3>
                <div className="space-y-5">
                  <div className="flex items-center gap-5 p-5 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-red-100">
                    <div className="p-3.5 bg-gradient-to-br from-orange-500 to-red-600 rounded-full">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-base text-gray-600">Call us</div>
                      <div className="text-gray-900 text-lg">(+91) 9265275336</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 p-5 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-red-100">
                    <div className="p-3.5 bg-gradient-to-br from-orange-500 to-red-600 rounded-full">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-base text-gray-600">Email us</div>
                      <div className="text-gray-900 text-lg">info@ivakilip.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 p-5 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-red-100">
                    <div className="p-3.5 bg-gradient-to-br from-orange-500 to-red-600 rounded-full">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-base text-gray-600">Live Chat</div>
                      <div className="text-gray-900 text-lg">Available 9 AM - 7 PM IST</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-gray-900 mb-8">Service Overview</h2>
              <p className="text-gray-600 mb-7 leading-relaxed text-lg">
                {service.fullDescription || service.description}
              </p>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                At iVakil IP, we provide comprehensive support for {service.name.toLowerCase()} that combines technical expertise with legal precision. Our team of government-authorized patent agents and IP professionals ensures that your intellectual property is protected with the highest standards of quality and compliance.
              </p>

              <h3 className="text-gray-900 mb-6 mt-10 text-xl">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Initial consultation & strategy",
                  "Technical & legal analysis",
                  "Document preparation & filing",
                  "Regulatory compliance",
                  "Follow-up & prosecution support",
                  "Status tracking & updates",
                  "Email & phone support",
                  "Expert guidance throughout"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Check className="w-5 h-5 text-blue-700 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-gray-900 mb-4 mt-8">How It Works</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center">
                    1
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Initial Consultation</h4>
                    <p className="text-gray-600">
                      Schedule a free consultation to discuss your IP needs and innovation goals.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center">
                    2
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Strategy & Analysis</h4>
                    <p className="text-gray-600">
                      Our experts conduct thorough analysis and develop a customized IP strategy for your case.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center">
                    3
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Execution & Filing</h4>
                    <p className="text-gray-600">
                      We handle all documentation, filing, and regulatory compliance with precision and timeliness.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-gray-900 mb-4 mt-8">Required Information</h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-600 mb-4">
                  To provide you with the best service, please have the following information ready:
                </p>
                <ul className="space-y-2">
                  {[
                    "Details about your invention/brand/design",
                    "Relevant technical documentation or drawings",
                    "Prior art or competitive products (if known)",
                    "Business goals and market strategy"
                  ].map((doc, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-blue-700 mt-1 flex-shrink-0" />
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
                      <Clock className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-gray-900 mb-1">Quick Response</div>
                        <div className="text-sm text-gray-600">24-48 hours turnaround</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-gray-900 mb-1">100% Confidential</div>
                        <div className="text-sm text-gray-600">Your IP is secure with us</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-gray-900 mb-1">Expert Team</div>
                        <div className="text-sm text-gray-600">Authorized IP professionals</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="pt-6">
                  <h3 className="text-gray-900 mb-4">Get Pricing</h3>
                  <p className="text-gray-600 mb-6">Contact us for customized pricing based on your specific needs</p>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 mb-3"
                  >
                    Request Quote
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-blue-200"
                  >
                    Free Cost Calculator
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-3">
                    Transparent & competitive pricing
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
                          className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
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
      <section className="py-16 bg-gradient-to-br from-blue-700 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">
            Ready to Protect Your Innovation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get started with expert IP services today. Free consultation available.
          </p>
          <Button 
            size="lg"
            className="bg-white text-blue-700 hover:bg-gray-100"
          >
            Get Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
