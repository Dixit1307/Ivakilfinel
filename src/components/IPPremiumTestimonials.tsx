import React from "react";
import { Card, CardContent } from "./ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function IPPremiumTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "CEO, BioTech Innovations",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      quote: "iVakil IP transformed our patent portfolio strategy. Their deep technical understanding combined with legal expertise helped us secure critical patents that became key business assets.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Founder, TechStart Solutions",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      quote: "Outstanding service from start to finish. The team guided us through complex international filings with transparency and professionalism. Highly recommended for any startup.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "IP Manager, Global Pharma Corp",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      quote: "We've worked with multiple IP firms globally, but iVakil IP stands out for their strategic approach and attention to detail. They truly understand the pharmaceutical industry.",
      rating: 5
    },
    {
      name: "Anita Desai",
      role: "Director, Innovation Labs",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      quote: "Their prior art search and FTO reports are incredibly thorough. They helped us avoid potential infringement issues and saved us millions in potential litigation costs.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#F9F9F9] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-6 text-4xl font-bold">
            What Our Clients Say
          </h2>
          <p className="text-gray-700 text-xl">
            Trusted by innovators and businesses worldwide
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <Card className="border-2 border-gray-200 shadow-2xl overflow-hidden">
            <CardContent className="p-12">
              <div className="flex flex-col items-center text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-8">
                  <Quote className="w-8 h-8 text-white" />
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 text-xl mb-8 leading-relaxed max-w-3xl italic">
                  "{testimonials[currentIndex].quote}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].photo}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                  />
                  <div className="text-left">
                    <div className="text-gray-900 text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-gray-600">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="lg"
              className="rounded-full w-12 h-12 p-0 border-2 border-gray-300 hover:border-red-600 hover:bg-red-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="lg"
              className="rounded-full w-12 h-12 p-0 border-2 border-gray-300 hover:border-red-600 hover:bg-red-50"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-orange-500 to-red-600 w-8"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
