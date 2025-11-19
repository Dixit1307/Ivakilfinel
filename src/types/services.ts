export interface Service {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "corporate",
    name: "Corporate Law",
    slug: "corporate-law",
    description: "Complete legal solutions for businesses and startups",
    icon: "Building2",
    services: [
      {
        id: "company-registration",
        name: "Company Registration & Incorporation",
        description: "End-to-end company registration services including Private Limited, LLP, OPC, and Partnership firms",
        slug: "company-registration"
      },
      {
        id: "gst-registration",
        name: "GST Registration & Compliance",
        description: "GST registration, filing, and ongoing compliance support",
        slug: "gst-registration"
      },
      {
        id: "roc-compliance",
        name: "ROC Filing & Annual Compliance",
        description: "ROC filings, annual returns, board meetings, and statutory compliance",
        slug: "roc-compliance"
      },
      {
        id: "trademark-registration",
        name: "Trademark Registration",
        description: "Brand protection through trademark search, filing, and registration",
        slug: "trademark-registration"
      },
      {
        id: "contracts-agreements",
        name: "Contracts & Agreements",
        description: "Drafting and review of business contracts, MOUs, NDAs, and agreements",
        slug: "contracts-agreements"
      }
    ]
  },
  {
    id: "property",
    name: "Property Law",
    slug: "property-law",
    description: "Legal services for real estate and property matters",
    icon: "Home",
    services: [
      {
        id: "property-verification",
        name: "Property Title Verification",
        description: "Complete due diligence and title verification for property transactions",
        slug: "property-verification"
      },
      {
        id: "sale-purchase",
        name: "Sale & Purchase Agreements",
        description: "Drafting and registration of sale deeds and purchase agreements",
        slug: "sale-purchase"
      },
      {
        id: "rental-agreements",
        name: "Rental & Lease Agreements",
        description: "Residential and commercial rental agreements with legal protection",
        slug: "rental-agreements"
      },
      {
        id: "property-disputes",
        name: "Property Dispute Resolution",
        description: "Legal representation for property disputes and litigation",
        slug: "property-disputes"
      }
    ]
  },
  {
    id: "family",
    name: "Family Law",
    slug: "family-law",
    description: "Sensitive legal support for family matters",
    icon: "Users",
    services: [
      {
        id: "divorce-proceedings",
        name: "Divorce & Separation",
        description: "Mutual and contested divorce proceedings with experienced lawyers",
        slug: "divorce-proceedings"
      },
      {
        id: "child-custody",
        name: "Child Custody & Maintenance",
        description: "Legal assistance for child custody and maintenance matters",
        slug: "child-custody"
      },
      {
        id: "succession-planning",
        name: "Will & Succession Planning",
        description: "Will drafting, probate, and succession planning services",
        slug: "succession-planning"
      },
      {
        id: "domestic-violence",
        name: "Domestic Violence Protection",
        description: "Legal protection and support for domestic violence cases",
        slug: "domestic-violence"
      }
    ]
  },
  {
    id: "criminal",
    name: "Criminal Law",
    slug: "criminal-law",
    description: "Expert defense and criminal litigation services",
    icon: "Shield",
    services: [
      {
        id: "bail-applications",
        name: "Bail Applications",
        description: "Regular, anticipatory, and interim bail applications",
        slug: "bail-applications"
      },
      {
        id: "fir-quashing",
        name: "FIR Quashing & Legal Notice",
        description: "FIR quashing petitions and legal notice responses",
        slug: "fir-quashing"
      },
      {
        id: "criminal-defense",
        name: "Criminal Defense & Trial",
        description: "Expert defense in criminal trials and proceedings",
        slug: "criminal-defense"
      },
      {
        id: "cyber-crime",
        name: "Cyber Crime & IT Act",
        description: "Legal support for cyber crime and IT Act violations",
        slug: "cyber-crime"
      }
    ]
  },
  {
    id: "civil",
    name: "Civil Litigation",
    slug: "civil-litigation",
    description: "Comprehensive civil dispute resolution services",
    icon: "Scale",
    services: [
      {
        id: "recovery-suits",
        name: "Money Recovery & Debt",
        description: "Legal action for money recovery, debt collection, and bounced cheques",
        slug: "recovery-suits"
      },
      {
        id: "consumer-disputes",
        name: "Consumer Disputes",
        description: "Consumer court cases and complaint filing",
        slug: "consumer-disputes"
      },
      {
        id: "civil-suits",
        name: "Civil Suits & Appeals",
        description: "General civil litigation and appellate services",
        slug: "civil-suits"
      },
      {
        id: "injunctions",
        name: "Injunctions & Stay Orders",
        description: "Temporary and permanent injunction applications",
        slug: "injunctions"
      }
    ]
  },
  {
    id: "documentation",
    name: "Legal Documentation",
    slug: "legal-documentation",
    description: "Professional legal document drafting services",
    icon: "FileText",
    services: [
      {
        id: "legal-notices",
        name: "Legal Notices",
        description: "Drafting and sending of legal notices for various matters",
        slug: "legal-notices"
      },
      {
        id: "affidavits",
        name: "Affidavits & Declarations",
        description: "Affidavit drafting and notarization services",
        slug: "affidavits"
      },
      {
        id: "poa-documents",
        name: "Power of Attorney",
        description: "General and special power of attorney documents",
        slug: "poa-documents"
      },
      {
        id: "agreement-drafting",
        name: "Agreement Drafting",
        description: "Custom drafting of all types of legal agreements",
        slug: "agreement-drafting"
      }
    ]
  },
  {
    id: "labour",
    name: "Labour & Employment",
    slug: "labour-employment",
    description: "Employment law and labour dispute resolution",
    icon: "Briefcase",
    services: [
      {
        id: "employment-contracts",
        name: "Employment Contracts",
        description: "Drafting and review of employment agreements and offer letters",
        slug: "employment-contracts"
      },
      {
        id: "wrongful-termination",
        name: "Wrongful Termination",
        description: "Legal action for unfair dismissal and wrongful termination",
        slug: "wrongful-termination"
      },
      {
        id: "pf-esi",
        name: "PF, ESI & Labour Compliance",
        description: "Labour law compliance and PF/ESI matters",
        slug: "pf-esi"
      },
      {
        id: "workplace-harassment",
        name: "Workplace Harassment",
        description: "Legal support for workplace harassment and discrimination cases",
        slug: "workplace-harassment"
      }
    ]
  }
];
