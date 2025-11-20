import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "₹999",
    period: "per consultation",
    description: "Perfect for one-time legal advice",
    features: [
      "30-minute video consultation",
      "Verified lawyer",
      "Session recording",
      "Email support",
      "Basic legal advice"
    ],
    popular: false
  },
  {
    name: "Standard",
    price: "₹2,999",
    period: "per month",
    description: "Best for ongoing legal needs",
    features: [
      "3 video consultations",
      "Document drafting (2 docs)",
      "Priority support",
      "Legal document review",
      "Follow-up via chat",
      "Dedicated case manager"
    ],
    popular: true
  },
  {
    name: "Custom",
    price: "Custom",
    period: "tailored pricing",
    description: "For businesses and complex cases",
    features: [
      "Unlimited consultations",
      "Full legal representation",
      "Court filing support",
      "Corporate compliance",
      "24/7 priority support",
      "Dedicated legal team"
    ],
    popular: false
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your legal needs and budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${
                plan.popular 
                  ? 'border-2 border-indigo-500 shadow-2xl scale-105' 
                  : 'border-2 border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-gray-900 mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-2">
                  <span className="text-4xl text-gray-900">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-gray-600 ml-2">/{plan.period.split(' ')[1]}</span>
                  )}
                </div>
                <CardDescription>
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
