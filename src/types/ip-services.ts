export interface IPService {
  id: string;
  name: string;
  description: string;
  slug: string;
  fullDescription?: string;
}

export interface IPServiceCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  services: IPService[];
}

export interface Industry {
  name: string;
  slug: string;
}

// Updated industries array
export const industries: Industry[] = [
  { name: "Biotechnology", slug: "biotechnology" },
  { name: "Pharmaceuticals", slug: "pharmaceuticals" },
  { name: "FMCG", slug: "fmcg" },
  { name: "Chemicals", slug: "chemicals" },
  { name: "Agrochemical", slug: "agrochemical" },
  { name: "Software & IT", slug: "software-it" },
  { name: "Medical Devices", slug: "medical-devices" },
  { name: "Engineering", slug: "engineering" },
];


export const ipServiceCategories: IPServiceCategory[] = [
  {
    id: "patent",
    name: "Patent Services",
    slug: "patent-services",
    description: "Comprehensive patent filing, prosecution, and portfolio management",
    icon: "FileText",
    services: [
      {
        id: "patent-drafting",
        name: "Patent Drafting & Filing",
        description: "Expert drafting of patent applications with scientific accuracy and legal precision. We handle PCT, provisional, and non-provisional filings across India, USA, and global jurisdictions.",
        slug: "patent-drafting",
        fullDescription: "Our patent drafting service combines technical expertise with legal precision to create robust patent applications that withstand scrutiny and protect your innovations effectively."
      },
      {
        id: "patent-prosecution",
        name: "Patent Prosecution",
        description: "Strategic prosecution of patent applications including office action responses, amendments, and examiner interviews to ensure successful grant.",
        slug: "patent-prosecution"
      },
      {
        id: "patent-portfolio",
        name: "Patent Portfolio Management",
        description: "End-to-end management of patent portfolios including maintenance, renewal, and strategic expansion planning.",
        slug: "patent-portfolio"
      },
      {
        id: "pct-filing",
        name: "International (PCT) Filing",
        description: "Seamless PCT and Paris Convention filings for global patent protection with cost-effective strategies.",
        slug: "pct-filing"
      }
    ]
  },
  {
    id: "trademark",
    name: "Trademark Services",
    slug: "trademark-services",
    description: "Build and protect a strong brand with comprehensive trademark solutions",
    icon: "Award",
    services: [
      {
        id: "tm-search",
        name: "Trademark Search & Clearance",
        description: "Comprehensive availability searches to evaluate distinctiveness, identify conflicts, and ensure safe brand adoption.",
        slug: "tm-search"
      },
      {
        id: "tm-filing",
        name: "Trademark Registration",
        description: "End-to-end trademark filing services covering logo, wordmark, and service marks across all classes in India and internationally.",
        slug: "tm-filing"
      },
      {
        id: "tm-opposition",
        name: "Opposition & Rectification",
        description: "Strategic handling of trademark oppositions, cancellations, and rectification proceedings to protect your brand rights.",
        slug: "tm-opposition"
      },
      {
        id: "tm-portfolio",
        name: "Trademark Portfolio Management",
        description: "Ongoing management of trademark assets including renewals, usage monitoring, and portfolio optimization.",
        slug: "tm-portfolio"
      }
    ]
  },
  {
    id: "design",
    name: "Design Registration",
    slug: "design-services",
    description: "Protect unique designs and ensure exclusive rights over visual innovations",
    icon: "Palette",
    services: [
      {
        id: "design-filing",
        name: "Industrial Design Registration",
        description: "Registration of industrial designs covering products, packaging, GUI, and ornamental features.",
        slug: "design-filing"
      },
      {
        id: "design-search",
        name: "Design Search & Analysis",
        description: "Prior art searches for designs to assess novelty and avoid infringement before product launch.",
        slug: "design-search"
      },
      {
        id: "design-portfolio",
        name: "Design Portfolio Management",
        description: "Strategic management of design assets aligned with product development and market strategy.",
        slug: "design-portfolio"
      }
    ]
  },
  {
    id: "search",
    name: "Prior Art Search & FTO",
    slug: "search-fto",
    description: "Data-backed insights to minimize legal risks and support informed IP decisions",
    icon: "Search",
    services: [
      {
        id: "novelty-search",
        name: "Novelty & Patentability Search",
        description: "Comprehensive prior art searches to assess patentability before filing. Includes patent and non-patent literature analysis.",
        slug: "novelty-search"
      },
      {
        id: "fto-analysis",
        name: "Freedom to Operate (FTO)",
        description: "In-depth FTO analysis to evaluate infringement risks before product launch, manufacturing, or market entry.",
        slug: "fto-analysis"
      },
      {
        id: "invalidation-search",
        name: "Invalidation Search",
        description: "Strategic prior art search to identify grounds for challenging competitor patents in litigation or opposition.",
        slug: "invalidation-search"
      },
      {
        id: "landscape-analysis",
        name: "Patent Landscape Analysis",
        description: "Technology and competitive landscape analysis to identify trends, white space, and market opportunities.",
        slug: "landscape-analysis"
      }
    ]
  },
  {
    id: "strategy",
    name: "IP Strategy Consulting",
    slug: "ip-strategy",
    description: "Align IP with business goals for maximum competitive advantage",
    icon: "TrendingUp",
    services: [
      {
        id: "ip-audit",
        name: "IP Audit & Assessment",
        description: "Comprehensive evaluation of existing IP assets, identifying gaps, risks, and monetization opportunities.",
        slug: "ip-audit"
      },
      {
        id: "filing-strategy",
        name: "Strategic Filing Planning",
        description: "Cost-effective filing strategies aligned with product roadmap, R&D, and market expansion plans.",
        slug: "filing-strategy"
      },
      {
        id: "licensing-support",
        name: "Licensing & Commercialization",
        description: "Support for IP monetization through licensing agreements, technology transfer, and partnership structuring.",
        slug: "licensing-support"
      },
      {
        id: "ma-due-diligence",
        name: "M&A IP Due Diligence",
        description: "IP assessment for mergers, acquisitions, and investment transactions to evaluate asset value and risk exposure.",
        slug: "ma-due-diligence"
      }
    ]
  },
  {
    id: "pharma",
    name: "Pharmaceutical IP Services",
    slug: "pharma-ip",
    description: "Specialized IP solutions for pharmaceutical and life sciences companies",
    icon: "Pill",
    services: [
      {
        id: "anda-strategy",
        name: "ANDA & 505(b)(2) Strategy",
        description: "Navigate generic and modified drug approval pathways with minimal litigation risk. Includes Paragraph IV certifications and exclusivity evaluation.",
        slug: "anda-strategy"
      },
      {
        id: "patent-linkage",
        name: "Patent Linkage Analysis",
        description: "Analysis of patent listings in Orange Book/patent registers to plan generic entry and avoid infringement.",
        slug: "patent-linkage"
      },
      {
        id: "formulation-protection",
        name: "Formulation & Process Patents",
        description: "Strategic patent protection for pharmaceutical formulations, processes, polymorphs, and delivery systems.",
        slug: "formulation-protection"
      }
    ]
  },
  {
    id: "litigation",
    name: "Litigation Support",
    slug: "litigation-support",
    description: "Technical and strategic support for IP litigation and dispute resolution",
    icon: "Gavel",
    services: [
      {
        id: "infringement-analysis",
        name: "Infringement Analysis",
        description: "Detailed claim charts and infringement opinions to evaluate patent, trademark, or design violations.",
        slug: "infringement-analysis"
      },
      {
        id: "litigation-strategy",
        name: "Litigation Strategy Consulting",
        description: "Support for IP litigation including technical evidence preparation, expert witness coordination, and case strategy.",
        slug: "litigation-strategy"
      },
      {
        id: "opposition-proceedings",
        name: "Opposition & IPR Proceedings",
        description: "Strategic handling of patent oppositions, inter partes reviews (IPR), and post-grant proceedings.",
        slug: "opposition-proceedings"
      }
    ]
  },
  {
    id: "intelligence",
    name: "Competitive Intelligence",
    slug: "competitive-intelligence",
    description: "Real-time monitoring of IP landscape and competitor activity",
    icon: "Activity",
    services: [
      {
        id: "competitor-monitoring",
        name: "Competitor IP Monitoring",
        description: "Continuous tracking of competitor patent filings, trademarks, and IP strategy to stay ahead in the market.",
        slug: "competitor-monitoring"
      },
      {
        id: "technology-trends",
        name: "Technology Trend Analysis",
        description: "Identify emerging technologies, innovation hotspots, and market dynamics through patent analytics.",
        slug: "technology-trends"
      },
      {
        id: "watch-services",
        name: "IP Watch Services",
        description: "Automated alerts for new filings in your technology domain or trademark class to track market developments.",
        slug: "watch-services"
      }
    ]
  }
];
