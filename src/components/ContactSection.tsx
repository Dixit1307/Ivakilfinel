import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    caseSummary: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", caseSummary: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600">
            Have questions? We're here to help
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-2 border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-900">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
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
                  <Label htmlFor="caseSummary">Case Summary</Label>
                  <Textarea
                    id="caseSummary"
                    placeholder="Briefly describe your legal matter..."
                    rows={5}
                    value={formData.caseSummary}
                    onChange={(e) => setFormData({ ...formData, caseSummary: e.target.value })}
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                >
                  Submit Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl text-gray-900 mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of these channels. Our team is available to assist you with your legal needs.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="border-2 border-gray-100 hover:border-indigo-200 transition-colors">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Email</div>
                    <div className="text-gray-600">support@ivakil.com</div>
                    <div className="text-gray-600">hello@ivakil.com</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-indigo-200 transition-colors">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Phone</div>
                    <div className="text-gray-600">+91 98765 43210</div>
                    <div className="text-sm text-gray-500">Mon-Sat, 9AM-7PM IST</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-indigo-200 transition-colors">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Office</div>
                    <div className="text-gray-600">
                      123 Legal Tower, Connaught Place<br />
                      New Delhi - 110001, India
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
