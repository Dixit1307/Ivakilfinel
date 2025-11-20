import React from "react";
import { Card, CardContent } from "./ui/card";
import { Quote, Star } from "lucide-react";

export function IPTestimonials() {
  const testimonials = [
    {
      name: "Ravi Singh",
      role: "Startup Founder",
      content: "I've been very happy with my experience with iVakil IP and the company's support and have been recommending it to others. Thank you!",
      rating: 5
    },
    {
      name: "John Doe",
      role: "R&D Director",
      content: "I've been very happy with my experience with iVakil IP and the company's support and have been recommending it to others. Thank you!",
      rating: 5
    },
    {
      name: "Sophia Smith",
      role: "IP Manager",
      content: "As per my experience working with iVakil IP firm for so many years, they are one of the quality and cost-driven search firm across the globe with excellent time.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-gray-900 mb-6">What Our Clients Say</h2>
          <p className="text-2xl text-gray-600">
            Trusted by innovators, startups, and enterprises worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-2 border-gray-100 hover:border-red-200 hover:shadow-xl transition-all"
            >
              <CardContent className="pt-8">
                <div className="flex items-center justify-between mb-5">
                  <Quote className="w-12 h-12 text-red-600 opacity-50" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
