import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Target, Heart, CheckCircle, Users, Clock, Shield } from "lucide-react";

export function PharmaceuticalPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* SEO Meta Tags */}
            <Helmet>
                <title>Pharma IP Services India | iVakil IP | Protect Innovations</title>
                <meta
                    name="description"
                    content="iVakil IP provides expert pharmaceutical IP services in India. From patent drafting and FTO searches to ANDA strategies, portfolio management, and licensing, we help pharma innovators protect, enforce, and maximize the value of their intellectual property globally."
                />
            </Helmet>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-gray-900 mb-4 text-4xl sm:text-5xl lg:text-6xl font-semibold">
                            Pharmaceutical Industry IP Services in India
                        </h1>
                        <h2 className="text-2xl text-blue-700 mb-6">
                            Protecting Innovation That Drives Healthcare Forward
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            The pharmaceutical industry thrives on innovation, long-term R&D investments, and a strong foundation of intellectual property rights.
                            At iVakil IP, tailored IP strategies are crafted to protect innovations, unlock commercial value, and navigate complex regulatory frameworks.
                            With a deep understanding of the pharmaceutical domain, services are aligned with scientific, legal, and commercial realities unique to this space.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why IP Matters */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-gray-900 mb-6 text-4xl font-bold text-center">Why Intellectual Property Matters in Pharmaceuticals</h2>
                        <p className="text-gray-700 mb-4 leading-relaxed"
                            style={{
                                textAlign: "justify",
                                textJustify: "inter-word",
                                hyphens: "auto"
                            }}>
                            Pharmaceutical innovations often require years of research, testing, and regulatory clearances before reaching the market.
                            In this high-stakes environment, protecting molecules, compositions, processes, delivery mechanisms, and formulations is essential
                            to secure a competitive edge.
                        </p>
                        <p className="text-gray-700 leading-relaxed"
                            style={{
                                textAlign: "justify",
                                textJustify: "inter-word",
                                hyphens: "auto"
                            }}>
                            IP rights form the basis of exclusivity, licensing revenues, and strategic collaborations. Robust IP protection enables sustainable
                            market leadership and returns on innovation.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <ImageWithFallback
                                src="/Pharmaceuticalservice.jpg"
                                alt="Pharmaceutical Research"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Full-Spectrum IP Services */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-gray-900 mb-6 text-4xl font-bold">Comprehensive IP Support for the Entire Product Lifecycle</h2>
                    <p className="text-xl text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
                        From early-stage R&D to lifecycle management and post-market enforcement, iVakil IP offers services that support every stage of pharmaceutical development.
                        The goal is to ensure regulatory compliance, avoid litigation pitfalls, and maintain patent portfolios that stand strong in global markets.
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
                                title: "Patent Drafting & Filing",
                                desc: "Drafting and filing patents for APIs, formulations, delivery systems, and processes. Coverage includes India and global jurisdictions through PCT and Paris Convention routes."
                            },
                            {
                                icon: Shield,
                                title: "Freedom-to-Operate (FTO) Searches",
                                desc: "Clearance analysis to avoid infringement risks before product launch. Helps identify patent barriers and explore workarounds or licensing needs."
                            },
                            {
                                icon: Clock,
                                title: "ANDA & 505(b)(2) Strategy",
                                desc: "Support for generics and modified drugs. Services include Paragraph IV strategies, regulatory planning, and litigation preparedness."
                            },
                            {
                                icon: Target,
                                title: "Opposition & Litigation Support",
                                desc: "Technical and legal support for patent oppositions, invalidity analysis, and infringement cases. Strengthens defense and enforcement strategies."
                            },
                            {
                                icon: Users,
                                title: "Patent Portfolio Management",
                                desc: "Manage filings, renewals, and global IP portfolios. Monitor competitor activity and optimize asset value through analytics and landscaping."
                            },
                            {
                                icon: Heart,
                                title: "Licensing & Valuation",
                                desc: "Unlock revenue through licensing and strategic IP deals. iVakil IP helps in valuation, negotiation, and deal structuring."
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
                            <h2 className="text-gray-900 mb-6 text-4xl font-bold">Who We Serve</h2>
                            <p className="text-gray-700 leading-relaxed"
                                style={{
                                    textAlign: "justify",
                                    textJustify: "inter-word",
                                    hyphens: "auto"
                                }}>
                                Services are designed for pharma innovators, generic manufacturers, biotech firms, and R&D organizations.
                                Strategies are aligned with product pipelines, markets, and regulatory frameworks.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}

export default PharmaceuticalPage;