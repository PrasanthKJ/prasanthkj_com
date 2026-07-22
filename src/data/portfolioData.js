// Portfolio Content & Data Definitions for Prasanth KJ

export const HERO_DATA = {
  name: "Prasanth KJ",
  role: "WordPress CMS & Shopify Specialist | Web Developer",
  tagline: "Building High-Converting Websites & Custom Web Solutions for Global Businesses & Growing Agencies",
  location: "Global Freelancer | Serving US, UK & Worldwide Clients",
  email: "hello@prasanthkj.com",
  calendlyUrl: "https://calendly.com/prasanthkj/15min",
  socials: {
    facebook: "https://facebook.com/theprasanthkj",
    x: "https://x.com/theprasanthkj",
    linkedin: "https://linkedin.com/in/theprasanthkj",
  },
  blogUrl: "https://prasanthkj.com/blog",
  techBlogUrl: "https://hash.prasanthkj.com",
  upworkStatus: {
    title: "Upwork Top Rated Freelancer",
    successRate: "100% Job Success",
    rating: "5.0 ★★★★★",
    totalJobs: "50+ Projects Completed",
  }
};

export const HIGHLIGHTS = [
  {
    id: 1,
    badge: "Top Rated Badge",
    title: "Upwork Top Rated Developer",
    description: "Awarded top status for exceptional work quality, 100% client satisfaction, and rapid project delivery.",
    icon: "Award",
    color: "gold"
  },
  {
    id: 2,
    badge: "WordPress & Shopify CMS",
    title: "10+ Years CMS Mastery",
    description: "Custom WordPress themes, WooCommerce stores, custom Shopify Liquid templates, speed optimization, and headless setups.",
    icon: "Code",
    color: "emerald"
  },
  {
    id: 3,
    badge: "Local Business Growth",
    title: "Service Business Specialist",
    description: "High-ROI lead generation sites for local service businesses (lawn care, carpet cleaning, HVAC, trade contractors).",
    icon: "Target",
    color: "purple"
  },
  {
    id: 4,
    badge: "Agency Standard",
    title: "Agency Workflow Model",
    description: "Structured 5-step process from discovery & UI architecture to QA, PageSpeed 90+ optimization & deployment.",
    icon: "CheckCircle",
    color: "cyan"
  }
];

export const US_SMALL_BIZ_SOLUTIONS = [
  {
    id: "lawn-mowing",
    title: "Lawn Mowing & Landscaping",
    subtitle: "Turn Local Searchers into Monthly Retainer Customers",
    features: [
      "Instant Online Quote & Service Booking Form",
      "Localized Google Map SEO & City-Page Targeting",
      "Before/After Photo Gallery & Customer Reviews",
      "Mobile Click-to-Call & Click-to-Text Buttons"
    ],
    tag: "High Lead Conversion",
    impact: "+210% Booking Rate"
  },
  {
    id: "carpet-cleaning",
    title: "Carpet & Commercial Cleaning",
    subtitle: "High-Converting Websites for Residential & Commercial Cleaners",
    features: [
      "Room/Square Foot Price Calculator Integration",
      "Automatic SMS & Email Appointment Confirmations",
      "Stripe / Square Instant Online Payments",
      "SEO Engineered for High Intent Keywords (e.g. 'Carpet Cleaner Near Me')"
    ],
    tag: "Instant Quote Engine",
    impact: "+180% Inquiries"
  },
  {
    id: "local-contractors",
    title: "HVAC, Plumbing & Home Services",
    subtitle: "Build 100% Trust with Local Homeowners & Property Owners",
    features: [
      "Emergency 24/7 Dispatch Contact Bar",
      "License, Insurance & Verified Badges Showcase",
      "Financing Options & Estimate Request Forms",
      "Speed Optimized (Loads in under 1.2s on 4G)"
    ],
    tag: "Local Service SEO",
    impact: "+250% Phone Leads"
  }
];

export const FEATURED_PROJECTS = [
  {
    id: "florida-hotel-booking",
    title: "Florida Hotel & Vacation Rental System",
    category: "Hospitality & Short-Term Rental Platform",
    url: "#contact",
    displayUrl: "Florida Vacation Rental Platform",
    description: "Custom hotel reservation system and short-term rental booking engine built for a Florida hospitality property. Features 2-way real-time calendar synchronization with Airbnb & VRBO, automated dynamic rate management via PriceLabs API, and a frictionless direct booking checkout flow.",
    techStack: ["WordPress / Custom CMS", "Airbnb & VRBO 2-Way Sync", "PriceLabs Dynamic Pricing API", "Stripe / Booking Funnel"],
    metrics: {
      rating: "5.0 ★★★★★",
      result: "Zero Direct Booking Fees",
      speed: "98/100 PageSpeed"
    },
    badgeColor: "gold",
    accentGlow: "rgba(245, 158, 11, 0.15)"
  },
  {
    id: "sparktreat",
    title: "Sparktreat",
    category: "E-Commerce & Retail Brand Platform",
    url: "https://www.sparktreat.com",
    displayUrl: "www.sparktreat.com",
    description: "High-converting e-commerce web application featuring frictionless product search, custom checkout funnel, automated inventory sync, and conversion rate optimized product pages.",
    techStack: ["Shopify CMS / WooCommerce", "Custom Theme Development", "Stripe Integration", "Conversion Optimization"],
    metrics: {
      rating: "5.0 ★★★★★",
      result: "2.8x Sales Growth",
      speed: "0.9s Load Time"
    },
    badgeColor: "emerald",
    accentGlow: "rgba(16, 185, 129, 0.15)"
  },
  {
    id: "urbanrater",
    title: "Urbanrater",
    category: "Affiliate Marketing & Review Portal",
    url: "https://www.urbanrater.com",
    displayUrl: "www.urbanrater.com",
    description: "SEO-driven affiliate content portal with structured review schema, fast-loading comparison tables, high CTR affiliate link placements, and headless content architecture.",
    techStack: ["WordPress CMS", "Custom Affiliate Schema", "AdSense & Affiliate API", "Core Web Vitals Optimized"],
    metrics: {
      rating: "5.0 ★★★★★",
      result: "100% Core Web Vitals Pass",
      speed: "99/100 PageSpeed"
    },
    badgeColor: "purple",
    accentGlow: "rgba(44, 94, 173, 0.15)"
  }
];

export const AGENCY_WORKFLOW = [
  {
    step: "01",
    title: "Discovery & Goal Mapping",
    description: "We analyze your business model, target audience, local search competitors, and key conversion metrics before writing a single line of code.",
    deliverables: ["Project Scope Blueprint", "Competitor SEO Analysis", "Wireframe Skeleton"]
  },
  {
    step: "02",
    title: "UI/UX & Brand Architecture",
    description: "We craft stunning, modern UI designs inspired by world-class web standards (clean typography, responsive layout, intuitive visual hierarchy).",
    deliverables: ["Interactive Prototype", "High-Converting Landing Pages", "Design Tokens System"]
  },
  {
    step: "03",
    title: "Clean Code & CMS Build",
    description: "Developing robust WordPress CMS / Shopify themes or custom React solutions with clean code, modular components, and scalable database schemas.",
    deliverables: ["Custom WordPress/Shopify Theme", "Mobile Responsive Build", "HubSpot & Kit Integration"]
  },
  {
    step: "04",
    title: "PageSpeed, SEO & Security Audit",
    description: "Every build undergoes a 30-point audit for 90+ Google PageSpeed, SSL security, Schema.org local SEO, and multi-device cross browser compatibility.",
    deliverables: ["90+ PageSpeed Guarantee", "Local Schema Markup", "Security Hardening"]
  },
  {
    step: "05",
    title: "Launch & Continuous Support",
    description: "Zero-downtime deployment to your hosting server with step-by-step video training for your team and dedicated post-launch support.",
    deliverables: ["Zero-Downtime Launch", "Video Management Guide", "30 Days Free Maintenance"]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    client: "Website Client",
    location: "United States",
    project: "WordPress & Custom Web Development",
    rating: 5,
    quote: "Outstanding experience from start to finish. The website turned out exactly as I had hoped, and the quality of work was top-notch. Throughout the project, he was responsive, professional, and willing to work through any issues or changes that came up along the way.",
    verified: "Verified Upwork Review"
  },
  {
    id: 2,
    client: "E-Commerce Client",
    location: "United States",
    project: "Custom E-Commerce & Optimization",
    rating: 5,
    quote: "Prasanth is very knowledgeable and easy to work with. He fixed our website bugs quickly and optimized performance. Excellent work quality and great communication throughout!",
    verified: "Verified Upwork Review"
  },
  {
    id: 3,
    client: "Agency Partner",
    location: "United States",
    project: "Custom Web Application",
    rating: 5,
    quote: "Highly skilled web developer with exceptional problem-solving skills. Delivered our custom features smoothly and promptly. Will definitely hire Prasanth again!",
    verified: "Verified Upwork Review"
  }
];

export const TECHNICAL_ARTICLES = {
  blogUrl: "https://hash.prasanthkj.com",
  subtitle: "Engineering Notes & Technical Insights on Hashnode",
  description: "Beyond CMS page builders, I write about custom React JS development, custom WordPress plugin architecture, database optimization, and high-performance frontend engineering.",
  articles: [
    {
      title: "Optimizing WordPress Core Web Vitals for 99+ PageSpeed Scores",
      tag: "WordPress Engineering",
      readTime: "5 min read",
      summary: "How to strip bloat, optimize asset loading, defer scripts, and implement server-level caching without breaking site functionality."
    },
    {
      title: "Building Custom Shopify Liquid Components & Headless React Integrations",
      tag: "E-Commerce",
      readTime: "7 min read",
      summary: "A deep dive into combining Shopify's Storefront API with modern JavaScript frameworks for lightning-fast shopping experiences."
    },
    {
      title: "Local Business Schema.org & Lead Funnel Architecture for Search Ranking",
      tag: "SEO & Conversion",
      readTime: "4 min read",
      summary: "Structuring microdata schemas and click-to-call conversion flows to dominate local search engine results."
    }
  ]
};
