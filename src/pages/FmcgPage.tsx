import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Target, Heart, CheckCircle, Users, Clock, Shield } from "lucide-react";

export function FMCGPage() {
    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-gray-900 mb-4 text-4xl sm:text-5xl lg:text-6xl font-semibold">
                            FMCG Industry IP Services in India
                        </h1>

                        <h2 className="text-2xl text-blue-700 mb-6">
                            Securing Innovation in the Fast-Moving Consumer Goods Sector
                        </h2>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            The FMCG industry is fast-paced, competitive, and brand-driven. From packaging and
                            product formulas to branding and advertising, every element carries intellectual
                            property value. iVakil IP offers comprehensive IP services that help FMCG companies
                            protect innovation, strengthen brand equity, and stay ahead in a rapidly evolving marketplace.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why IP Matters */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-gray-900 mb-6 text-4xl font-bold">
                            The Role of IP in FMCG Success
                        </h2>

                        <p className="text-gray-700 mb-4 leading-relaxed"
                            style={{
                                textAlign: "justify",
                                textJustify: "inter-word",
                                hyphens: "auto"
                            }}>
                            In the fast-moving FMCG sector, strong IP protection helps secure product
                            formulations, packaging designs, brand identity, and advertising elements.
                            Protecting these assets prevents imitation, builds customer trust, and safeguards
                            market presence across both retail and digital platforms.
                        </p>

                        <p className="text-gray-700 leading-relaxed"
                            style={{
                                textAlign: "justify",
                                textJustify: "inter-word",
                                hyphens: "auto"
                            }}>
                            With iVakil IP, businesses gain a solid legal foundation to launch confidently,
                            grow sustainably, and maintain long-term competitive advantage in crowded markets.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <ImageWithFallback
                                src="/Fmcgservice.jpg"
                                alt="FMCG Products"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* Full Spectrum IP Services */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                    <h2 className="text-gray-900 mb-6 text-4xl font-bold">
                        End-to-End IP Services for FMCG Companies
                    </h2>

                    <p className="text-xl text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
                        iVakil IP provides tailored IP solutions for FMCG brands across food & beverages,
                        personal care, home care, hygiene products, and more. From brand protection to
                        packaging design and trade secrets, every service is aligned with product lifecycle
                        and market strategy.
                    </p>

                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {[
                            {
                                icon: CheckCircle,
                                title: "Trademark Registration & Enforcement",
                                desc: "Protect brand names, logos, slogans, and advertising identity through trademark filing, renewal, and enforcement."
                            },
                            {
                                icon: Shield,
                                title: "Design Protection for Packaging",
                                desc: "Secure exclusive rights for packaging structures, bottle shapes, labels, and aesthetic product elements."
                            },
                            {
                                icon: Clock,
                                title: "Trade Secret Protection",
                                desc: "Safeguard confidential formulas, processes, and techniques with structured secrecy and compliance strategies."
                            },
                            {
                                icon: Target,
                                title: "IP Audits & Portfolio Management",
                                desc: "Streamline all IP assets with audits, renewals, and strategic planning to keep the portfolio strong and market-ready."
                            },
                            {
                                icon: Users,
                                title: "Monitoring & Enforcement",
                                desc: "Track infringement risks online and offline with strong enforcement measures including takedowns and notices."
                            },
                            {
                                icon: Heart,
                                title: "Brand Protection & Anti-Counterfeit",
                                desc: "Combat counterfeiting through proactive monitoring, legal actions, and packaging authentication strategies."
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

            {/* Who We Serve */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <Card className="border-2 border-blue-200 bg-white">
                        <CardContent className="pt-8">

                            <h2 className="text-gray-900 mb-6 text-4xl font-bold">Serving All FMCG Segments</h2>

                            <p className="text-gray-700 leading-relaxed"
                                style={{
                                    textAlign: "justify",
                                    textJustify: "inter-word",
                                    hyphens: "auto"
                                }}>
                                iVakil IP works with legacy brands, high-growth startups, and manufacturers across
                                food & beverages, personal care, cosmetics, household cleaning, and health supplement
                                categories. Solutions are customized based on product lifecycle, marketing strategy,
                                and distribution model.
                            </p>

                        </CardContent>
                    </Card>

                </div>
            </section>

        </div>
    );
}
