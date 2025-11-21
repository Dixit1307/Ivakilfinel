import React from "react";
import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Small Business Owner",
    content: "iVakil made getting legal help so simple. I got my rental agreement drafted within a day, and the lawyer was very professional and helpful.",
    rating: 5,
    image: "PS"
  },
  {
    name: "Rajesh Kumar",
    role: "Startup Founder",
    content: "The compliance support for my startup was excellent. They helped with company registration, GST, and all corporate filings. Highly recommended!",
    rating: 5,
    image: "RK"
  },
  {
    name: "Ananya Desai",
    role: "Individual Client",
    content: "I needed urgent legal advice for a property dispute. The video consultation was quick and the lawyer gave me clear guidance on next steps.",
    rating: 5,
    image: "AD"
  },
  {
    name: "Vikram Patel",
    role: "Entrepreneur",
    content: "Transparent pricing, quick response, and expert lawyers. iVakil has become my go-to platform for all legal matters.",
    rating: 5,
    image: "VP"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of clients across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative border-2 border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-indigo-200 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 line-clamp-4">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
