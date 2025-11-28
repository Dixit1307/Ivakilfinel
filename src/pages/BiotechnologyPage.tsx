import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Target, Heart, CheckCircle, Users, Clock, Shield } from "lucide-react";

export function BiotechnologyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Biotech IP Services India – Protect Innovation | iVakil IP

        </title>
        <meta
          name="description"
          content="Secure your biotech innovations with iVakil IP. From patents and FTO searches to regulatory alignment and licensing, we help Indian biotech companies protect, commercialize, and maximize their IP globally."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-gray-900 mb-4 text-4xl sm:text-5xl lg:text-6xl font-semibold">
              Biotechnology Industry IP Services in India
            </h1>
            <h2 className="text-2xl text-blue-700 mb-6">Protecting Innovation That Saves Lives</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Biotechnology is one of the most innovation-driven industries, where scientific breakthroughs lead
              to life-saving therapies, agricultural advancements, and industrial solutions. At iVakil IP,
              specialized intellectual property services help biotech innovators protect their discoveries,
              accelerate commercialization, and navigate complex regulatory landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Why IP Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-gray-900 mb-6 text-4xl font-bold text-center">Why IP Matters in Biotechnology</h2>
            <p className="text-gray-700 mb-4 leading-relaxed"
              style={{ textAlign: "justify", textJustify: "inter-word", hyphens: "auto" }}
            >
              Biotech R&D requires years of experimentation, regulatory approvals, and significant investment.
              Strong IP rights secure proprietary biological materials, genetic sequences, engineered organisms,
              therapeutic methods, diagnostic tools, and bio-processes.
            </p>
            <p className="text-gray-700 leading-relaxed"
              style={{ textAlign: "justify", textJustify: "inter-word", hyphens: "auto" }}
            >
              With well-structured patents and IP assets, biotech companies gain exclusivity, attract investors,
              secure licensing opportunities, and strengthen competitive advantage.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/Biotechnologyservice.jpg"
                alt="Biotechnology Research"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full-Spectrum IP Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 mb-6 text-4xl font-bold">Full-Spectrum IP Services for Biotech Companies</h2>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
            At iVakil IP, comprehensive IP services cover the entire innovation cycle—from concept to commercialization.
            Our team unites scientific expertise with legal strategy to ensure biotech inventions are protected globally.
          </p>
        </div>
      </section>

      {/* Approach / Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Patent Drafting & Filing",
                desc: "Patents for gene sequences, biologics, diagnostics, cell therapies, biosimilars, and bioprocesses with global compliance."
              },
              {
                icon: Shield,
                title: "Freedom-to-Operate (FTO) Searches",
                desc: "Assessment to identify infringement risks, licensing needs, or design-around strategies before launch."
              },
              {
                icon: Clock,
                title: "Regulatory & IP Alignment",
                desc: "Synchronizing patent filings with clinical trials, biosimilar pathways, and regulatory approvals."
              },
              {
                icon: Target,
                title: "Opposition & Litigation Support",
                desc: "Support in pre/post-grant opposition, revocation actions, and biotech patent litigation."
              },
              {
                icon: Users,
                title: "Portfolio Management",
                desc: "Global biotech IP portfolio organization, renewals, monitoring, and competitive analysis."
              },
              {
                icon: Heart,
                title: "Licensing & IP Valuation",
                desc: "Support for technology licensing, valuation for investment, and due diligence for partnerships."
              }
            ].map((service, i) => (
              <Card key={i} className="border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-4 text-xl">{service.title}</h3>
                  <p className="text-gray-700"
                    style={{
                      textAlign: "justify",
                      textJustify: "inter-word",
                      hyphens: "auto"
                    }}>{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Biotech Segments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-blue-200 bg-white">
            <CardContent className="pt-8">
              <h2 className="text-gray-900 mb-6 text-4xl font-bold">Supporting a Wide Range of Biotech Segments</h2>
              <p className="text-gray-700 leading-relaxed"
                style={{ textAlign: "justify", textJustify: "inter-word", hyphens: "auto" }}
              >
                iVakil IP supports companies across medical biotechnology, agricultural biotechnology, industrial biotech,
                and environmental biotechnology. Whether it’s a startup developing a novel gene therapy or an established
                company creating biosimilars, customized IP strategies align with R&D goals and market requirements.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default BiotechnologyPage;