import { Card, CardContent } from "./ui/card";
import { Globe, Users, Award, Briefcase, CheckCircle, TrendingUp } from "lucide-react";

export function IPTrustIndicators() {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-600 to-red-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-white mb-6">Let's Secure the Future Together</h2>
          <p className="text-2xl text-orange-100 max-w-3xl mx-auto">
            Trusted partner for intellectual property protection and strategy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 transition-all">
            <CardContent className="pt-8 text-center">
              <Globe className="w-14 h-14 text-white mx-auto mb-5" />
              <div className="text-5xl text-white mb-3">153+</div>
              <div className="text-orange-100 text-lg">Countries Supported</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 transition-all">
            <CardContent className="pt-8 text-center">
              <Users className="w-14 h-14 text-white mx-auto mb-5" />
              <div className="text-5xl text-white mb-3">1000+</div>
              <div className="text-orange-100 text-lg">Start-ups, MSMEs & MNCs</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 transition-all">
            <CardContent className="pt-8 text-center">
              <Briefcase className="w-14 h-14 text-white mx-auto mb-5" />
              <div className="text-5xl text-white mb-3">80+</div>
              <div className="text-orange-100 text-lg">Patent Attorneys & Tech Experts</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 transition-all">
            <CardContent className="pt-8 text-center">
              <Award className="w-14 h-14 text-white mx-auto mb-5" />
              <div className="text-5xl text-white mb-3">100%</div>
              <div className="text-orange-100 text-lg">Authorized Indian Patent Agents</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 transition-all">
            <CardContent className="pt-8 text-center">
              <CheckCircle className="w-14 h-14 text-white mx-auto mb-5" />
              <div className="text-5xl text-white mb-3">Seamless</div>
              <div className="text-orange-100 text-lg">India, USA & Global Filing</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 transition-all">
            <CardContent className="pt-8 text-center">
              <TrendingUp className="w-14 h-14 text-white mx-auto mb-5" />
              <div className="text-5xl text-white mb-3">Best</div>
              <div className="text-orange-100 text-lg">Transparent Pricing</div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-3xl text-white mb-3">Supporting Innovation Across All Industries</p>
          <p className="text-orange-100 text-xl">From startups to Fortune 500 companies</p>
        </div>
      </div>
    </section>
  );
}
