// Portfolio Content & Data Definitions for Prasanth KJ

export const HERO_DATA = {
  name: "Prasanth KJ",
  role: "WordPress CMS, Business Automation & DevOps Specialist | Automotive Software Engineer",
  tagline: "Building High-Performing Websites & Automated Business Workflows for Growing Businesses & Agencies",
  location: "Global Freelancer | Serving US, UK & Worldwide Clients",
  email: "hello@prasanthkj.com",
  calendlyUrl: "https://calendly.com/prasanthkj/15min",
  socials: {
    facebook: "https://facebook.com/theprasanthkj",
    x: "https://x.com/theprasanthkj",
    linkedin: "https://linkedin.com/in/theprasanthkj",
  },
  techStack: [
    "WordPress", "WooCommerce", "React", "Shopify", 
    "n8n", "Zapier", "Pabbly", 
    "AWS", "GitHub Actions", "CI/CD", "Docker", 
    "Digital Marketing"
  ],
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
    id: "local-service-biz",
    title: "Local Service Businesses",
    subtitle: "Lawn Care, Cleaning, HVAC, Plumbing & Trade Contractors",
    features: [
      "Instant Online Quote & Service Booking Form",
      "Localized Google Map SEO & City-Page Targeting",
      "Before/After Photo Gallery & Verified Customer Reviews",
      "Mobile Click-to-Call & Emergency Dispatch Bar"
    ],
    tag: "Lead Conversion",
    impact: "Click-To-Call Engine"
  },
  {
    id: "ecommerce-stores",
    title: "E-Commerce Stores",
    subtitle: "High-Converting Shopify & WooCommerce Online Shops",
    features: [
      "Frictionless One-Page Checkout & Multi-Currency Payment Funnel",
      "Multi-Gateway Integration (Stripe, PayPal, Authorize.Net, Square, Razorpay, Apple Pay, Klarna)",
      "Sub-Second Fast Loading Speed (0.9s Core Web Vitals)",
      "Custom Shopify Liquid / WooCommerce Theme Architecture"
    ],
    tag: "Conversion Optimized",
    impact: "Seamless Checkout"
  },
  {
    id: "landing-pages",
    title: "Lead Generation Landing Pages",
    subtitle: "Turn Paid Ad Traffic & Search Visitors into Inquiries",
    features: [
      "Single-Focused Value Proposition & High-CTR CTA Stack",
      "HubSpot CRM Direct Form & Email Autoresponder Integration",
      "A/B Test Ready & Mobile-First Responsive Layout",
      "Zero-Distraction Layout Engineered for Inbound Leads"
    ],
    tag: "High ROI Funnels",
    impact: "Ad Funnel Architecture"
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
      result: "Core Web Vitals Pass",
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
  subtitle: "Engineering Notes & Technical Insights",
  description: "Beyond CMS page builders, I write about CI/CD deployment pipelines, browser extension development, and modern JavaScript web fundamentals.",
  articles: [
    {
      title: "Using Buddy.Works to Automate React Deployment on Shared Hosting",
      tag: "React & CI/CD",
      readTime: "3 min read",
      url: "https://hash.prasanthkj.com/using-buddyworks-to-automate-react-deployment-on-shared-hosting",
      summary: "How to automate React production builds and deploy them seamlessly to traditional shared hosting servers using Buddy.Works pipelines."
    },
    {
      title: "Create An Extension/Plugin For Firefox and Chrome Browser",
      tag: "Browser Extensions",
      readTime: "2 min read",
      url: "https://hash.prasanthkj.com/create-plugin-for-firefox-and-chrome-browser",
      summary: "A step-by-step technical guide to developing cross-browser extensions for Chrome and Firefox using JavaScript and manifest specifications."
    },
    {
      title: "Introduction To Web and HTML",
      tag: "Web Fundamentals",
      readTime: "2 min read",
      url: "https://hash.prasanthkj.com/introduction-to-web-and-html",
      summary: "An introductory technical breakdown of web protocols, document object model structure, semantic HTML elements, and core web architecture."
    }
  ]
};
