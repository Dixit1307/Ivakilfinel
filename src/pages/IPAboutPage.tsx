import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Target, Heart, CheckCircle, Users, Clock, Shield } from "lucide-react";

export function IPAboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-gray-900 mb-4 text-4xl sm:text-5xl lg:text-6xl font-semibold">About iVakil IP</h1>
            <h2 className="text-2xl text-blue-700 mb-6">Where Ideas Meet Protection and Strategy</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Innovation begins with an idea—but success begins with protection. At iVakil IP, the mission is simple: empower creators, businesses, and visionaries by transforming their intellectual property into strategic assets that fuel long-term growth, security, and market leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-6 text-4xl font-bold">Who We Are</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                iVakil IP is an intellectual property consulting firm specializing in high-precision legal and strategic services for patents, trademarks, industrial designs, and IP-driven business strategies. With deep expertise across science, law, technology, and market research, every engagement is backed by thorough knowledge and actionable insight.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From startups building their first portfolio to global companies seeking regulatory clarity or competitive intelligence, iVakil IP delivers customized solutions that match real-world needs with legal excellence.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1752697589128-f8e110a86af3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlbGxlY3R1YWwlMjBwcm9wZXJ0eSUyMGJvb2tzfGVufDF8fHx8MTc2MjUwMTcyMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="IP Books and Resources"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives iVakil IP */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 mb-6 text-4xl font-bold">What Drives iVakil IP</h2>
          <p className="text-xl text-gray-700 mb-4 leading-relaxed">
            Every innovation deserves to be protected. Every business deserves to compete fairly. Every idea has the power to change the world—when it’s guided by the right strategy.
          </p>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            iVakil IP was founded with a clear vision: to simplify intellectual property and turn it into a valuable, working tool for creators, entrepreneurs, researchers, and corporates. What began as a specialized IP support venture has now grown into a trusted consulting brand with a strong reputation for quality, ethics, and strategic depth.
          </p>
        </div>
      </section>

      {/* The iVakil IP Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 text-4xl font-bold mb-12 text-center">The iVakil IP Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Personalized Support",
                description: "No templates. No generic advice. Every service is customized based on specific goals, industry context, and innovation potential."
              },
              {
                icon: CheckCircle,
                title: "Technical + Legal Expertise",
                description: "With a team of scientists, patent agents, legal experts, and analysts, iVakil IP bridges the gap between invention and law with clarity and confidence."
              },
              {
                icon: Target,
                title: "Strategic Thinking",
                description: "From patent scope to commercialization readiness, every move is planned with a broader business objective in mind."
              },
              {
                icon: Clock,
                title: "Timely Delivery & Accuracy",
                description: "Every detail counts in IP. With rigorous quality control and prompt execution, iVakil IP ensures clients never miss a deadline or lose ground."
              },
              {
                icon: Shield,
                title: "Transparent Communication",
                description: "Clear updates, defined processes, and complete documentation keep clients in control and well-informed throughout the journey."
              }
            ].map((item, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-gray-700 leading-relaxed mb-2 font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <Card className="border-2 border-blue-200 bg-white">
            <CardContent className="pt-8">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-gray-900 mb-4 text-xl font-semibold">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted intellectual property consulting partner for innovation-led businesses by delivering solutions that combine legal strength, technical depth, and business intelligence.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200 bg-white">
            <CardContent className="pt-8">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-gray-900 mb-4 text-xl font-semibold">Our Mission</h2>
              <ul className="space-y-3 text-gray-700">
                <li>To simplify IP for innovators and make protection accessible and valuable.</li>
                <li>To help businesses convert ideas into assets with the right strategies.</li>
                <li>To support compliance, growth, and market expansion through expert IP services.</li>
                <li>To continually evolve with global IP standards and technological shifts.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form Section and Footer will go here */}
    </div>
  );
}
