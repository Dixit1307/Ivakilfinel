import React, { useState } from "react";
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Failed to send message.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Toasts */}
      <ToastContainer />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-gray-900 mb-4 text-4xl sm:text-5xl lg:text-6xl font-semibold">
            Contact Us
          </h1>
          <p className="text-gray-700 text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed">
            Have a question? Need expert IP guidance? <br />
            Whether you're an entrepreneur, startup, researcher, or an established business, the team at iVakil IP is here to support your innovation journey. Get in touch to discuss how your ideas can be protected, monetized, and strategically managed.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
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
                      {loading ? "Sending..." : <><Send className="mr-2 w-5 h-5" /> Send Message</>}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-gray-900 mb-8 text-2xl sm:text-3xl font-semibold">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Office */}
                <Card className="border-2 border-gray-200 hover:border-red-300 hover:shadow-xl transition-all">
                  <CardContent className="p-6 flex items-start gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-2 text-lg">Office Address</h3>
                      <a
                        href="https://www.google.com/maps/place/Radhe+Park/@20.9415476,72.9076886,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0f721b4ef9159:0x3013659672a44c06!8m2!3d20.9415426!4d72.9102635!16s%2Fg%2F11m9pws8dr?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-red-600 transition-colors text-lg"
                      >
                        30B Haridarshan Villa, Radhe Park<br />
                        Navsari, Gujarat – 396445<br />
                        India
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
                      <h3 className="text-gray-900 mb-2 text-lg">Phone Number</h3>
                      <a href="tel:+919265275336" className="text-gray-600 hover:text-red-600 transition-colors text-lg">
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
                      <h3 className="text-gray-900 mb-2 text-lg">Email Address</h3>
                      <a href="mailto:info@ivakilip.com" className="text-gray-600 hover:text-red-600 transition-colors text-lg">
                        info@ivakilip.com
                      </a>
                      <p className="text-gray-500 text-sm mt-1">We'll respond within 24 hours</p>
                    </div>
                  </CardContent>
                </Card>
                <div className="mt-8 p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border-2 border-red-200">
                  <h3 className="text-gray-900 mb-3 text-xl">Need Immediate Assistance?</h3>
                  <p className="text-gray-700 mb-5">
                    Book a free consultation call with our IP experts
                  </p>
                  <a
                    href="tel:+919265275336"
                    className="block"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-600 
               hover:from-orange-600 hover:to-red-700 
               text-white text-base py-6 h-auto"
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
      {/* Map Section (Optional) */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.151278206668!2d72.90707431548603!3d20.941542635838374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0f721b4ef9159%3A0x3013659672a44c06!2sRadhe%20Park!5e0!3m2!1sen!2sin!4v1697712345678!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="iVakil IP Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
