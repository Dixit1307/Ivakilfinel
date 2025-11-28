import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function IPPremiumContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          theme: "colored",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message.", {
          position: "top-right",
          autoClose: 5000,
          theme: "colored",
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SEO */}
      <Helmet>
        <title>
          Contact iVakil IP – Intellectual Property Experts in India
        </title>
        <meta
          name="description"
          content="Reach out to iVakil IP for expert IP support. Whether you're a startup, entrepreneur, or business, our Gujarat-based team helps protect, monetize, and manage your intellectual property."
        />
      </Helmet>

      <ToastContainer />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-gray-900 mb-4 text-4xl sm:text-5xl lg:text-6xl font-semibold">
              Contact Us
            </h1>
            <h2 className="text-2xl text-red-700 mb-6">
              Have a question? Need expert IP guidance?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Whether you're an entrepreneur, startup, researcher, or an established business, the team at iVakil IP is here to support your innovation journey. Get in touch to discuss how your ideas can be protected, monetized, and strategically managed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-gray-900 mb-8 text-2xl sm:text-3xl font-semibold">
                Contact Form
              </h2>

              <Card className="border-2 border-gray-200 shadow-xl">
                <CardContent className="p-8">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name*</Label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name*</Label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email*</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone*</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message*</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your IP needs..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="min-h-[150px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className={`w-full bg-gradient-to-r from-orange-500 to-red-600 text-white ${loading ? "opacity-60 cursor-not-allowed" : ""
                        }`}
                      disabled={loading}
                    >
                      {loading ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" /> Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-gray-900 mb-8 text-2xl sm:text-3xl font-semibold">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <Card className="border-2 border-gray-200 hover:border-red-300 hover:shadow-xl transition-all">
                  <CardContent className="p-6 flex items-start gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>

                    <div>
                      <h3 className="text-gray-900 mb-2 text-lg">
                        Office Address
                      </h3>
                      <a
                        href="https://www.google.com/maps/search/+U-8%2F9,+Corner+Point+Opp.+Maheshwari+Bhawan,+City+Light+Road,+Surat-395007,+Gujarat/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-red-600 text-lg"
                      >
                        IVAKIL IP Firm
                        U-8/9, Corner Point <br />
                        Opp. Maheshwari Bhawan <br />
                        City Light Road, Surat-395007 <br />
                        Gujarat, India
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Phone */}
                <Card className="border-2 border-gray-200 hover:border-red-300 hover:shadow-xl transition-all">
                  <CardContent className="p-6 flex items-start gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-7 h-7 text-white" />
                    </div>

                    <div>
                      <h3 className="text-gray-900 mb-2 text-lg">
                        Phone Number
                      </h3>
                      <a
                        href="tel:+919265275336"
                        className="text-gray-600 hover:text-red-600 text-lg"
                      >
                        (+91) 9265275336
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="border-2 border-gray-200 hover:border-red-300 hover:shadow-xl transition-all">
                  <CardContent className="p-6 flex items-start gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-7 h-7 text-white" />
                    </div>

                    <div>
                      <h3 className="text-gray-900 mb-2 text-lg">
                        Email Address
                      </h3>
                      <a
                        href="mailto:info@ivakilip.com"
                        className="text-gray-600 hover:text-red-600 text-lg"
                      >
                        info@ivakilip.com
                      </a>
                      <p className="text-gray-500 text-sm mt-1">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Call */}
                <div className="mt-8 p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border-2 border-red-200">
                  <h3 className="text-gray-900 mb-3 text-xl">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-gray-700 mb-5">
                    Book a free consultation call with our IP experts
                  </p>

                  <a href="tel:+919265275336" className="block">
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-base py-6 h-auto"
                    >
                      <Phone className="mr-2 w-5 h-5" />
                      Schedule a Call
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps?q=U-8%2F9,+Corner+Point+Opp.+Maheshwari+Bhawan,+City+Light+Road,+Surat-395007,+Gujarat&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="iVakil IP Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
