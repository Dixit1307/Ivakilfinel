import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-gray-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600">
              Have questions? Our team of legal experts is here to help. Reach out and we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Category</Label>
                  <Select 
                    value={formData.service} 
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="corporate">Corporate Law</SelectItem>
                      <SelectItem value="property">Property Law</SelectItem>
                      <SelectItem value="family">Family Law</SelectItem>
                      <SelectItem value="criminal">Criminal Law</SelectItem>
                      <SelectItem value="civil">Civil Litigation</SelectItem>
                      <SelectItem value="documentation">Legal Documentation</SelectItem>
                      <SelectItem value="labour">Labour & Employment</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Please describe your legal matter in detail..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                >
                  Submit Inquiry
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-gray-900 mb-2">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Prefer to reach out directly? Use any of the following methods to get in touch with us.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="border-2 border-gray-100 hover:border-indigo-200 transition-colors">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-900 mb-1">Phone</div>
                      <div className="text-gray-600 mb-2">+91 98765 43210</div>
                      <div className="text-gray-600">+91 98765 43211 (WhatsApp)</div>
                      <div className="text-sm text-gray-500 mt-2">Mon-Sat, 9:00 AM - 7:00 PM IST</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-100 hover:border-indigo-200 transition-colors">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-900 mb-1">Email</div>
                      <div className="text-gray-600 mb-2">support@ivakil.com</div>
                      <div className="text-gray-600">hello@ivakil.com</div>
                      <div className="text-sm text-gray-500 mt-2">Response within 24 hours</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-100 hover:border-indigo-200 transition-colors">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-900 mb-1">Office Address</div>
                      <div className="text-gray-600">
                        iVakil Legal Services Pvt. Ltd.<br />
                        123 Legal Tower, 4th Floor<br />
                        Connaught Place, New Delhi - 110001<br />
                        India
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-100 hover:border-indigo-200 transition-colors">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-900 mb-1">Business Hours</div>
                      <div className="text-gray-600">
                        Monday - Friday: 9:00 AM - 7:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <Card className="border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle className="w-6 h-6 text-indigo-600" />
                    <h3 className="text-gray-900">Need Immediate Help?</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    For urgent legal matters, book a consultation directly or chat with our support team.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                      Book Instant Consultation
                    </Button>
                    <Button variant="outline" className="w-full border-2 border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50">
                      Start Live Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600">
              Located in the heart of New Delhi, easily accessible by metro and road
            </p>
          </div>
          <div className="aspect-[21/9] bg-gray-200 rounded-2xl overflow-hidden border-2 border-gray-300">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Map Integration Available</p>
                <p className="text-sm mt-2">Connaught Place, New Delhi - 110001</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                question: "How quickly can I get a consultation?",
                answer: "Usually within 24 hours of booking"
              },
              {
                question: "What are your consultation charges?",
                answer: "Starting from ₹999 for 30 minutes"
              },
              {
                question: "Do you handle cases across India?",
                answer: "Yes, we have lawyers in all major cities"
              },
              {
                question: "Is my information confidential?",
                answer: "100% confidential as per legal ethics"
              },
              {
                question: "Can I get documents online?",
                answer: "Yes, all documents are delivered digitally"
              },
              {
                question: "Do you offer refunds?",
                answer: "Yes, as per our refund policy terms"
              }
            ].map((faq, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-indigo-200 transition-colors">
                <CardContent className="pt-6">
                  <h3 className="text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
