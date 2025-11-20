import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Scale, Users, Award, Shield, Target, Heart } from "lucide-react";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-gray-900 mb-6">
              About iVakil
            </h1>
            <p className="text-xl text-gray-600">
              Making legal services accessible, affordable, and efficient for everyone through technology and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                To democratize access to quality legal services by leveraging technology and connecting clients with verified, experienced lawyers across India.
              </p>
              <p className="text-gray-600">
                We believe that everyone deserves affordable and transparent legal support, whether it's for a simple consultation or complex litigation.
              </p>
            </div>
            <div>
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 mb-4">
                To become India's most trusted legal-tech platform, where legal help is just a click away, and justice is accessible to all.
              </p>
              <p className="text-gray-600">
                We envision a future where legal processes are simplified, transparent, and efficient through the power of technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Why Choose iVakil</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our professional, technology-driven legal services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">Verified Lawyers</h3>
                <p className="text-gray-600">
                  All our lawyers are thoroughly verified with valid bar council registration and years of experience in their respective fields.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">Confidential & Secure</h3>
                <p className="text-gray-600">
                  Your information is protected with end-to-end encryption. We maintain strict client-lawyer confidentiality as per legal ethics.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">
                  No hidden charges or surprise fees. All our pricing is upfront and transparent, so you know exactly what you're paying for.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                iVakil was founded in 2020 with a simple mission: to make legal services accessible to everyone. Our founders, experienced lawyers and tech entrepreneurs, noticed that many people struggled to find reliable legal help when they needed it most.
              </p>
              <p className="text-gray-600 mb-4">
                Traditional legal services were often expensive, time-consuming, and intimidating. We set out to change that by building a platform that connects clients with verified lawyers through video consultations, transparent pricing, and efficient service delivery.
              </p>
              <p className="text-gray-600 mb-4">
                Today, we've helped over 15,000 clients across India with their legal needs, from simple consultations to complex litigation. Our network of 500+ verified lawyers ensures that you get expert help, no matter what your legal issue is.
              </p>
              <div className="flex items-center gap-8 mt-8">
                <div>
                  <div className="text-3xl text-indigo-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Verified Lawyers</div>
                </div>
                <div>
                  <div className="text-3xl text-indigo-600 mb-1">15,000+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl text-indigo-600 mb-1">4.8★</div>
                  <div className="text-sm text-gray-600">Client Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXd5ZXIlMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyMzc4Mjc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional legal office"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              Principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Integrity",
                description: "We uphold the highest standards of honesty and ethical practice in all our services."
              },
              {
                title: "Excellence",
                description: "We strive for excellence in every interaction, ensuring quality legal services."
              },
              {
                title: "Accessibility",
                description: "We make legal services accessible to everyone, regardless of location or budget."
              },
              {
                title: "Innovation",
                description: "We leverage technology to continuously improve and simplify legal processes."
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl border-2 border-gray-100 hover:border-indigo-200 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
