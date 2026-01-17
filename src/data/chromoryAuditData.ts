// Fixed demo audit data for chromory.com
export const DEMO_AUDIT_ID = "d4f8a2b1-9c3e-4f5a-8b7d-6e1f2a3b4c5d";

export interface CategoryScore {
  score: number;
  label: 'Strong' | 'Needs Work' | 'Critical';
  reasoning: string;
}

export interface WeakPoint {
  title: string;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
}

export interface Improvement {
  title: string;
  description: string;
  effort: 'Easy' | 'Medium' | 'Hard';
  impact: 'High' | 'Medium' | 'Low';
}

export interface KPI {
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down' | 'stable';
}

export interface CompetitorData {
  name: string;
  score: number;
  strengths: string[];
  weaknesses: string[];
}

export interface KeywordData {
  keyword: string;
  volume: number;
  difficulty: number;
  currentRank: number | null;
  trend: 'up' | 'down' | 'stable';
  opportunity: 'High' | 'Medium' | 'Low';
}

export interface TikTokMetrics {
  totalViews: number;
  viewsChange: number;
  totalLikes: number;
  likesChange: number;
  totalComments: number;
  commentsChange: number;
  totalShares: number;
  sharesChange: number;
  totalSaves: number;
  savesChange: number;
  avgWatchTime: number;
  watchTimeChange: number;
  topVideos: { title: string; views: number; likes: number; saves: number }[];
}

export interface ExtendedCompetitorData {
  name: string;
  url: string;
  score: number;
  whatTheyDoBetter: string[];
  howToMatch: string[];
  metrics: { label: string; theirValue: string; yourValue: string; comparison: 'better' | 'worse' | 'same' }[];
}

export interface ContentPillar {
  name: string;
  description: string;
  percentage: number;
}

export interface DayPlan {
  day: number;
  contentType: 'Carousel' | 'Single Image' | 'Reel' | 'Story' | 'Text Post' | 'Thread';
  platform: 'Instagram' | 'LinkedIn' | 'Twitter' | 'TikTok';
  pillar: string;
  hook: string;
  outline: string[];
  cta: string;
  caption: string;
  hashtags: string[];
}

export interface ContentPlan {
  positioning: string;
  targetAudience: string;
  pillars: ContentPillar[];
  calendar: DayPlan[];
}

export interface AuditData {
  brandName: string;
  brandUrl: string;
  overallScore: number;
  predictedScore: number;
  auditDate: string;
  overallKpis: KPI[];
  
  websiteAudit: {
    scores: { positioning: CategoryScore; messaging: CategoryScore; trustSignals: CategoryScore; callToAction: CategoryScore; contentClarity: CategoryScore; };
    summary: string;
    weakPoints: WeakPoint[];
    improvements: Improvement[];
    kpis: KPI[];
    keywords: KeywordData[];
  };
  
  tiktokAudit: {
    scores: { positioning: CategoryScore; messaging: CategoryScore; trustSignals: CategoryScore; callToAction: CategoryScore; contentClarity: CategoryScore; };
    summary: string;
    weakPoints: WeakPoint[];
    improvements: Improvement[];
    kpis: KPI[];
    metrics: TikTokMetrics | null;
  };
  
  competitors: CompetitorData[];
  extendedCompetitors: ExtendedCompetitorData[];
  brandRoast: string;
  
  growthStrategy: {
    summary: string;
    contentPlan: ContentPlan;
  };
}

export const chromoryAuditData: AuditData = {
  brandName: "Chromory",
  brandUrl: "chromory.com",
  overallScore: 42,
  predictedScore: 78,
  auditDate: new Date().toISOString(),
  overallKpis: [
    { label: "Overall Score", value: "42%", change: 0, trend: 'stable' },
    { label: "Growth Potential", value: "+36 pts", change: 36, trend: 'up' },
  ],
  
  websiteAudit: {
    scores: {
      positioning: {
        score: 52,
        label: 'Needs Work',
        reasoning: "Custom coloring books are a unique product, but the site doesn't clearly communicate what makes Chromory different from other coloring book sellers."
      },
      messaging: {
        score: 45,
        label: 'Needs Work',
        reasoning: "The messaging relies heavily on Shopify defaults. No compelling story about the personalization magic or emotional value of custom coloring books."
      },
      trustSignals: {
        score: 68,
        label: 'Needs Work',
        reasoning: "Judge.me reviews are a strong foundation, but missing product-in-use photos, creator story, and before/after customization examples."
      },
      callToAction: {
        score: 55,
        label: 'Needs Work',
        reasoning: "Standard Shopify 'Add to Cart' buttons. Missing urgency triggers, bundle offers, or personalization CTAs."
      },
      contentClarity: {
        score: 48,
        label: 'Needs Work',
        reasoning: "Product pages lack detail about the customization process. Visitors don't understand how to personalize or what to expect."
      }
    },
    summary: "Chromory's Shopify store sells a genuinely unique product—custom coloring books—but the website doesn't do the product justice. The site feels like a template with products plugged in rather than a destination that celebrates creativity and personalization. Reviews are carrying the trust burden while the brand voice stays silent.",
    weakPoints: [
      {
        title: "Generic Shopify Template",
        description: "The site uses default theme styling with minimal customization, making it feel impersonal for a personalization brand.",
        impact: 'High'
      },
      {
        title: "No Brand Story",
        description: "Missing founder story, mission, or 'why' behind custom coloring books. People buy from brands they connect with.",
        impact: 'High'
      },
      {
        title: "Unclear Customization Process",
        description: "Visitors don't understand how the personalization works, what options exist, or how long it takes.",
        impact: 'High'
      },
      {
        title: "No Visual Content Strategy",
        description: "Missing product-in-use photos, customer creations, or coloring progress images that show the joy of the product.",
        impact: 'Medium'
      }
    ],
    improvements: [
      {
        title: "Add How It Works Section",
        description: "Create a simple 3-step visual guide showing the customization process: Choose → Personalize → Receive.",
        effort: 'Easy',
        impact: 'High'
      },
      {
        title: "Feature Customer Creations",
        description: "Add a gallery of completed coloring pages from real customers. This is powerful social proof and shows the product value.",
        effort: 'Easy',
        impact: 'High'
      },
      {
        title: "Tell Your Brand Story",
        description: "Add an About page with the founder story, why custom coloring books matter, and the mission behind Chromory.",
        effort: 'Medium',
        impact: 'High'
      },
      {
        title: "Create Bundle Offers",
        description: "Offer family bundles, gift sets, or themed collections to increase average order value.",
        effort: 'Medium',
        impact: 'Medium'
      }
    ],
    kpis: [
      { label: "Positioning", value: "52%", change: 0, trend: 'stable' },
      { label: "Messaging", value: "45%", change: 0, trend: 'stable' },
      { label: "Trust Signals", value: "68%", change: 0, trend: 'stable' },
      { label: "CTA Strength", value: "55%", change: 0, trend: 'stable' }
    ],
    keywords: []
  },
  
  tiktokAudit: {
    scores: {
      positioning: {
        score: 0,
        label: 'Critical',
        reasoning: "No TikTok presence found. This is a massive missed opportunity for a creative product brand."
      },
      messaging: {
        score: 0,
        label: 'Critical',
        reasoning: "No TikTok content to analyze. Your target audience is actively searching for coloring content."
      },
      trustSignals: {
        score: 0,
        label: 'Critical',
        reasoning: "Zero social proof on the platform where your customers spend the most time."
      },
      callToAction: {
        score: 0,
        label: 'Critical',
        reasoning: "No opportunity to drive traffic without a presence on the platform."
      },
      contentClarity: {
        score: 0,
        label: 'Critical',
        reasoning: "No content strategy visible. Coloring book content performs exceptionally well on TikTok."
      }
    },
    summary: "Chromory has no TikTok presence—a critical gap for a personalized coloring book brand. TikTok's coloring and art community is massive, with #coloringbook having billions of views. This represents your biggest untapped growth channel. Competitors are building engaged audiences while you're invisible to an entire generation of potential customers.",
    weakPoints: [
      {
        title: "No TikTok Presence",
        description: "Your brand doesn't exist on the platform where coloring content goes viral daily.",
        impact: 'High'
      },
      {
        title: "Missing Viral Opportunity",
        description: "Coloring timelapses, ASMR coloring, and custom book reveals consistently get millions of views.",
        impact: 'High'
      },
      {
        title: "Invisible to Gen Z",
        description: "An entire generation of potential customers will never discover your brand.",
        impact: 'High'
      },
      {
        title: "No UGC Engine",
        description: "You're missing out on free content from customers sharing their coloring experiences.",
        impact: 'Medium'
      }
    ],
    improvements: [
      {
        title: "Create TikTok Account",
        description: "Set up a branded TikTok profile with link to shop and clear bio describing your custom coloring books.",
        effort: 'Easy',
        impact: 'High'
      },
      {
        title: "Start with Coloring Timelapses",
        description: "Film satisfying timelapse videos of your coloring books being completed. This content format is proven to go viral.",
        effort: 'Easy',
        impact: 'High'
      },
      {
        title: "Show Personalization Process",
        description: "Create behind-the-scenes content showing how custom coloring books are made. People love seeing the magic.",
        effort: 'Medium',
        impact: 'High'
      },
      {
        title: "Encourage Customer Content",
        description: "Create a hashtag and incentivize customers to share their coloring progress for UGC goldmine.",
        effort: 'Medium',
        impact: 'High'
      }
    ],
    kpis: [],
    metrics: null
  },
  
  competitors: [
    {
      name: "ColorIt",
      score: 76,
      strengths: ["Strong TikTok presence (50K+)", "Active coloring community", "UGC content strategy"],
      weaknesses: ["Higher prices", "Less personalization options"]
    },
    {
      name: "I Create Art",
      score: 72,
      strengths: ["Beautiful product photos", "Clear customization process", "Email marketing"],
      weaknesses: ["Slower shipping", "Limited designs"]
    },
    {
      name: "Colorful Expressions",
      score: 68,
      strengths: ["Wide variety of themes", "Wholesale options", "SEO optimized"],
      weaknesses: ["Generic branding", "Poor mobile experience"]
    }
  ],

  extendedCompetitors: [
    {
      name: "ColorIt",
      url: "colorit.com",
      score: 76,
      whatTheyDoBetter: [
        "50K+ TikTok followers with consistent coloring content that drives massive awareness",
        "Active Facebook community group with 15K members sharing their creations",
        "User-generated content strategy turns customers into brand ambassadors",
        "Clear value proposition: 'Premium coloring books for adults who take coloring seriously'"
      ],
      howToMatch: [
        "Start TikTok immediately with coloring timelapses and behind-the-scenes content",
        "Create a Facebook group for Chromory customers to share their creations",
        "Launch a hashtag campaign encouraging customers to share their work",
        "Develop a clear brand positioning statement for your unique customization angle"
      ],
      metrics: [
        { label: "TikTok Followers", theirValue: "52K", yourValue: "0", comparison: 'better' as const },
        { label: "Monthly Traffic", theirValue: "45K", yourValue: "8K", comparison: 'better' as const },
        { label: "Instagram Following", theirValue: "28K", yourValue: "2K", comparison: 'better' as const },
        { label: "Review Count", theirValue: "1,200+", yourValue: "85", comparison: 'better' as const }
      ]
    },
    {
      name: "I Create Art",
      url: "icreateart.com",
      score: 72,
      whatTheyDoBetter: [
        "Professional product photography shows books in lifestyle settings",
        "Step-by-step customization wizard makes personalization feel easy",
        "Email sequences nurture leads with coloring tips and inspiration",
        "Clear shipping timelines and expectations reduce purchase anxiety"
      ],
      howToMatch: [
        "Invest in lifestyle product photography showing people enjoying coloring",
        "Build a visual customization tool that guides customers through options",
        "Create an email welcome sequence with coloring tips and product highlights",
        "Add clear shipping estimates and production timelines on product pages"
      ],
      metrics: [
        { label: "Avg. Time on Site", theirValue: "4:12", yourValue: "1:45", comparison: 'better' as const },
        { label: "Email List Size", theirValue: "25K", yourValue: "Unknown", comparison: 'better' as const },
        { label: "Conversion Rate", theirValue: "3.2%", yourValue: "1.8%", comparison: 'better' as const },
        { label: "Avg. Order Value", theirValue: "$48", yourValue: "$32", comparison: 'better' as const }
      ]
    },
    {
      name: "Colorful Expressions",
      url: "colorfulexpressions.com",
      score: 68,
      whatTheyDoBetter: [
        "Strong SEO with rankings for 'custom coloring books' and 'personalized coloring'",
        "Wholesale and bulk order options for businesses and events",
        "Wide variety of themes from nature to pop culture",
        "Gift-ready packaging options increase perceived value"
      ],
      howToMatch: [
        "Optimize product pages for SEO with keyword-rich descriptions",
        "Consider adding bulk/wholesale options for parties and corporate gifts",
        "Expand your theme library based on trending search terms",
        "Offer premium gift packaging as an upsell option"
      ],
      metrics: [
        { label: "Organic Keywords", theirValue: "2,400", yourValue: "120", comparison: 'better' as const },
        { label: "Domain Authority", theirValue: "35", yourValue: "18", comparison: 'better' as const },
        { label: "Product Variety", theirValue: "200+", yourValue: "45", comparison: 'better' as const },
        { label: "Google Reviews", theirValue: "340", yourValue: "28", comparison: 'better' as const }
      ]
    }
  ],
  
  brandRoast: "Chromory, you're selling personalized coloring books but your website has all the personality of a blank page waiting to be colored in. Your Shopify store is technically functional but emotionally flatlined. You've got Judge.me reviews doing the heavy lifting while your brand voice takes a permanent nap. You're in the business of creativity and self-expression, yet your site screams 'we used the default theme and called it a day.' Meanwhile, your competitors are out here building communities around coloring while you're hoping customers somehow stumble into your checkout. No TikTok presence in 2025? That's like selling art supplies and refusing to show anyone making art. Get some personality, show the magic of your product, and stop letting your reviews be the only interesting thing on your site.",
  
  growthStrategy: {
    summary: "The 30-day turnaround focuses on three pillars: launching a TikTok presence with coloring content, improving website conversion with clearer messaging, and building a community around custom coloring books. Chromory has a unique product that's perfect for viral content—time to show it off.",
    contentPlan: {
      positioning: "The custom coloring book brand that turns your memories, pets, and special moments into relaxing, personalized art therapy.",
      targetAudience: "Creative adults (25-55) who use coloring for relaxation, parents wanting personalized activities for kids, and gift-givers looking for unique, meaningful presents.",
      pillars: [
        {
          name: "Coloring Timelapses",
          description: "Satisfying videos of coloring books being completed—ASMR-worthy content that stops the scroll.",
          percentage: 35
        },
        {
          name: "Personalization Magic",
          description: "Behind-the-scenes of how custom books are made, before/after reveals, and customization showcases.",
          percentage: 30
        },
        {
          name: "Customer Creations",
          description: "Featuring customer work, unboxing reactions, and user-generated content that builds social proof.",
          percentage: 25
        },
        {
          name: "Coloring Tips & Relaxation",
          description: "Coloring techniques, supply recommendations, and the mental health benefits of coloring.",
          percentage: 10
        }
      ],
      calendar: [
        {
          day: 1,
          contentType: 'Reel',
          platform: 'Instagram',
          pillar: 'Behind the Scenes',
          hook: "The reason your rebrand keeps getting rejected (it's not what you think)",
          outline: ["Pattern interrupt with common frustration", "Reveal the real issue: lack of strategy", "Show your process difference", "Results transformation"],
          cta: "Save this for your next rebrand project",
          caption: "Every failed rebrand has the same problem.\n\nIt's not the design. It's not the colors. It's not even the logo.\n\nIt's starting with visuals before strategy.\n\nAt Chromory, we spend the first week just asking questions. No Figma. No mood boards. Just deep strategic work.\n\nThat's why our rebrands stick. 🎯",
          hashtags: ["rebranding", "brandstrategy", "designprocess", "creativestudio", "brandidentity"]
        },
        {
          day: 2,
          contentType: 'Carousel',
          platform: 'LinkedIn',
          pillar: 'Client Wins',
          hook: "How we helped a fintech startup 3x their demo bookings with one design change",
          outline: ["The challenge: high traffic, low conversions", "The insight: trust gap", "The solution: strategic redesign", "The results: 312% increase"],
          cta: "DM 'CASE STUDY' for the full breakdown",
          caption: "We just wrapped a project that blew our minds.\n\nA fintech startup came to us with a problem: 50K monthly visitors, but barely any demo bookings.\n\nThe design looked fine. The copy was decent. So what was wrong?\n\nAfter our audit, we found it: a massive trust gap.\n\nSwipe to see what we changed → and how it led to 312% more demo bookings in 30 days.",
          hashtags: ["casestudy", "conversionrate", "webdesign", "fintech", "startupgrowth"]
        },
        {
          day: 3,
          contentType: 'Reel',
          platform: 'TikTok',
          pillar: 'Industry Education',
          hook: "POV: You're a designer and the client says 'make it pop'",
          outline: ["Relatable setup with trending audio", "Quick cut to actual meaning", "Professional translation", "Call to action"],
          cta: "Follow for more design reality checks",
          caption: "'Make it pop' = 'I don't know what I want but I'll know when I see it'\n\nHere's what it actually means (and how to handle it) 🎨\n\n#designertiktok #graphicdesign #creativestudio #clientwork",
          hashtags: ["designertok", "clientfeedback", "graphicdesign", "creativestudio", "designhumor"]
        },
        {
          day: 4,
          contentType: 'Single Image',
          platform: 'Instagram',
          pillar: 'Culture & Values',
          hook: "Studio vibes: Friday design review ☕",
          outline: ["Aesthetic shot of team collaboration", "Warm, inviting atmosphere", "Professional yet approachable"],
          cta: "What's your Friday work ritual?",
          caption: "Friday design reviews hit different.\n\nNo screens. No Slack. Just printed work on the wall, honest feedback, and too much coffee.\n\nThis is where the magic happens. ✨",
          hashtags: ["studiolife", "designstudio", "creativeteam", "agencylife", "fridayvibes"]
        },
        {
          day: 5,
          contentType: 'Thread',
          platform: 'Twitter',
          pillar: 'Industry Education',
          hook: "I've reviewed 100+ startup websites this year. Here are the 7 mistakes I see every single time:",
          outline: ["Mistake 1: Generic hero headlines", "Mistake 2: Missing social proof", "Mistake 3: Weak CTAs", "Mistake 4-7: continue pattern", "Summary and offer"],
          cta: "Bookmark this and audit your own site",
          caption: "I've reviewed 100+ startup websites this year.\n\nHere are the 7 mistakes I see every single time:\n\n🧵 (Bookmark this one)",
          hashtags: ["startups", "webdesign", "conversion", "uxdesign", "marketing"]
        },
        // Days 6-30 would continue with similar structure...
        {
          day: 6,
          contentType: 'Reel',
          platform: 'Instagram',
          pillar: 'Behind the Scenes',
          hook: "Watch us design a homepage in 60 seconds",
          outline: ["Timelapse of design process", "Key decision points", "Final reveal"],
          cta: "Save this for design inspo",
          caption: "From blank canvas to homepage hero in 60 seconds. ⚡\n\nThe real process takes 2-3 weeks, but here's a taste of the magic.\n\nWhat would you want to see designed next?",
          hashtags: ["designprocess", "webdesign", "uiux", "creativestudio", "designinspo"]
        },
        {
          day: 7,
          contentType: 'Carousel',
          platform: 'Instagram',
          pillar: 'Client Wins',
          hook: "Before & After: E-commerce brand transformation",
          outline: ["Before screenshot", "Strategy explanation", "After reveal", "Results metrics"],
          cta: "Ready for your transformation? Link in bio",
          caption: "Swipe for the glow up 👀\n\nThis e-commerce brand came to us with a 'meh' website and left with a conversion machine.\n\n• 2.4x increase in add-to-cart\n• 47% lower bounce rate\n• 89% increase in time on site\n\nThe secret? Strategy before pixels.",
          hashtags: ["beforeandafter", "ecommerce", "webdesign", "conversionrate", "brandtransformation"]
        },
        {
          day: 8,
          contentType: 'Reel',
          platform: 'TikTok',
          pillar: 'Industry Education',
          hook: "Stop using these 3 fonts in 2025",
          outline: ["Font 1: Why it's overused", "Font 2: The problem", "Font 3: Just don't", "Alternatives to try"],
          cta: "Comment your font hot takes",
          caption: "These fonts need to retire in 2025 📝\n\n(Don't @ me, Poppins fans)\n\n#typography #graphicdesign #designtips",
          hashtags: ["typography", "fonts", "designtips", "graphicdesign", "designtrends"]
        },
        {
          day: 9,
          contentType: 'Text Post',
          platform: 'LinkedIn',
          pillar: 'Industry Education',
          hook: "The best design I've ever done took 3 weeks to concept and 2 hours to execute.",
          outline: ["The counterintuitive truth about creative work", "Why strategy time matters", "How to sell this to clients"],
          cta: "Agree or disagree? Tell me in the comments",
          caption: "The best design I've ever done took 3 weeks to concept and 2 hours to execute.\n\nThis is the part clients don't see.\n\nThey see the final Figma file and think, \"That took 2 hours?\"\n\nNo. It took 3 weeks of:\n• Research\n• Strategy sessions\n• Competitive analysis\n• User interviews\n• Mood boarding\n• Typography exploration\n• Color theory deep-dives\n\nThe 2-hour execution was just the final step.\n\nThis is why we don't charge by the hour. We charge for the thinking.\n\nWhat's your take?",
          hashtags: ["designthinking", "creativestrategy", "agencylife", "designprocess"]
        },
        {
          day: 10,
          contentType: 'Story',
          platform: 'Instagram',
          pillar: 'Culture & Values',
          hook: "A day in the life at Chromory",
          outline: ["Morning coffee ritual", "Design review peek", "Lunch break", "Afternoon client call", "End of day wind-down"],
          cta: "Reply with your favorite work ritual",
          caption: "Monday vibes at the studio ☀️",
          hashtags: ["dayinthelife", "studiolife", "creativestudio"]
        },
        // Continuing with varied content...
        {
          day: 11,
          contentType: 'Reel',
          platform: 'Instagram',
          pillar: 'Client Wins',
          hook: "Client reaction to seeing their new brand for the first time",
          outline: ["Build anticipation", "The reveal moment", "Genuine reaction", "Emotional payoff"],
          cta: "Tag someone who deserves this feeling",
          caption: "This is why we do what we do. 🥹\n\nThe moment a client sees their vision come to life for the first time—there's nothing like it.\n\nThis is more than design. It's giving brands the identity they deserve.",
          hashtags: ["clientreaction", "brandreveal", "designstudio", "emotionalmoment", "brandidentity"]
        },
        {
          day: 12,
          contentType: 'Carousel',
          platform: 'LinkedIn',
          pillar: 'Industry Education',
          hook: "The anatomy of a high-converting hero section",
          outline: ["Component 1: Clear value prop", "Component 2: Social proof", "Component 3: Strong CTA", "Component 4: Visual hierarchy", "Real examples"],
          cta: "Save this for your next redesign",
          caption: "Your hero section is doing the heavy lifting for your entire website.\n\nGet it wrong, and visitors bounce.\nGet it right, and you've got their attention.\n\nHere's exactly what separates heroes that convert from heroes that don't:\n\n[Swipe through for the breakdown →]",
          hashtags: ["herosection", "webdesign", "conversion", "uxdesign", "landingpage"]
        },
        {
          day: 13,
          contentType: 'Reel',
          platform: 'TikTok',
          pillar: 'Behind the Scenes',
          hook: "What $10K of design work actually looks like",
          outline: ["Expectation vs reality", "All the deliverables", "The strategy behind it", "Why it's worth it"],
          cta: "Worth it? Comment below",
          caption: "What you get when you invest in premium design 💎\n\n(It's way more than pretty pictures)\n\n#designstudio #branding #investindesign",
          hashtags: ["premiumdesign", "brandingagency", "worthit", "designinvestment"]
        },
        {
          day: 14,
          contentType: 'Single Image',
          platform: 'Instagram',
          pillar: 'Culture & Values',
          hook: "Weekend reading list 📚",
          outline: ["3-4 book recommendations", "Why each matters for creatives"],
          cta: "What's on your reading list?",
          caption: "Currently on rotation at the Chromory studio:\n\n📖 'Logo Design Love' by David Airey\n📖 'The Brand Gap' by Marty Neumeier\n📖 'Hooked' by Nir Eyal\n\nGood design starts with good thinking. 🧠",
          hashtags: ["designbooks", "bookrecommendations", "creativereading", "designeducation"]
        },
        // Days 15-30...
        {
          day: 15,
          contentType: 'Thread',
          platform: 'Twitter',
          pillar: 'Client Wins',
          hook: "A startup paid us $15K for a rebrand. Here's what they got (and why they'd do it again):",
          outline: ["The deliverables breakdown", "The strategy work", "The results 6 months later", "ROI calculation"],
          cta: "RT if this changes how you think about design investment",
          caption: "A startup paid us $15K for a rebrand.\n\nHere's what they got (and why they'd do it again):\n\n🧵",
          hashtags: ["rebrand", "designROI", "startups", "branding"]
        },
        {
          day: 16,
          contentType: 'Reel',
          platform: 'Instagram',
          pillar: 'Industry Education',
          hook: "3 Figma plugins that save us 10+ hours per week",
          outline: ["Plugin 1 demo", "Plugin 2 demo", "Plugin 3 demo", "Bonus tip"],
          cta: "Save for later and follow for more tips",
          caption: "Our secret weapons for faster design work 🔥\n\n1. Unsplash - instant stock photos\n2. Content Reel - realistic placeholder data\n3. Stark - accessibility checking\n\nWhich plugins can't you live without?",
          hashtags: ["figma", "designtools", "productivitytips", "designerhacks", "figmaplugins"]
        },
        {
          day: 17,
          contentType: 'Carousel',
          platform: 'Instagram',
          pillar: 'Behind the Scenes',
          hook: "How we organize design files (so we never lose anything)",
          outline: ["Folder structure", "Naming conventions", "Version control", "Handoff process"],
          cta: "Steal our system - it's in the comments",
          caption: "File organization is not sexy, but it's essential.\n\nAfter 5 years and 200+ projects, here's the exact system we use:\n\n[Swipe for the breakdown →]\n\nComment 'SYSTEM' and I'll send you our template.",
          hashtags: ["designorganization", "filemanagement", "designworkflow", "productivity", "designtips"]
        },
        {
          day: 18,
          contentType: 'Reel',
          platform: 'TikTok',
          pillar: 'Client Wins',
          hook: "Same brand, 10x different energy",
          outline: ["Quick before/after cuts", "Highlight key changes", "Show results"],
          cta: "Follow for more transformations",
          caption: "The power of strategic design 🚀\n\nSame brand. Same products. Completely different perception.\n\n#branding #beforeandafter #designtransformation",
          hashtags: ["brandtransformation", "beforeafter", "rebranding", "designstudio"]
        },
        {
          day: 19,
          contentType: 'Text Post',
          platform: 'LinkedIn',
          pillar: 'Industry Education',
          hook: "Unpopular opinion: Most 'brand guidelines' are useless.",
          outline: ["Why most fail", "What makes them valuable", "How to create ones that actually get used"],
          cta: "Agree or disagree? Let's discuss",
          caption: "Unpopular opinion: Most 'brand guidelines' are useless.\n\nThey get created, shared once, then live in a forgotten Google Drive folder forever.\n\nHere's why:\n\n❌ Too long (nobody reads 60 pages)\n❌ Too vague (\"use colors appropriately\")\n❌ No real examples\n❌ Not accessible to non-designers\n\nGreat brand guidelines should be:\n\n✅ Scannable (10-15 pages max)\n✅ Specific (exact hex codes, spacing, etc.)\n✅ Full of do's AND don'ts\n✅ Written for everyone, not just designers\n\nWe create living brand systems, not PDF graveyards.\n\nWhat's the worst brand guideline you've ever seen?",
          hashtags: ["brandguidelines", "branding", "designsystems", "brandidentity"]
        },
        {
          day: 20,
          contentType: 'Story',
          platform: 'Instagram',
          pillar: 'Culture & Values',
          hook: "Team wins this week 🏆",
          outline: ["Project completion", "Team shoutout", "Celebration moment"],
          cta: "Swipe up to see our latest work",
          caption: "Big week energy at Chromory ⚡",
          hashtags: ["teamwins", "agencylife", "celebration"]
        },
        {
          day: 21,
          contentType: 'Reel',
          platform: 'Instagram',
          pillar: 'Behind the Scenes',
          hook: "Our feedback process in 60 seconds",
          outline: ["How we collect feedback", "How we process it", "How we implement it", "Client reaction"],
          cta: "This is why revisions are smooth with us",
          caption: "Revisions don't have to be painful. 🙌\n\nHere's how we handle feedback to keep projects on track:\n\n1. Structured feedback forms\n2. Live review sessions\n3. Clear next steps\n4. Version documentation\n\nSmooth process = happy clients.",
          hashtags: ["designprocess", "clientfeedback", "agencyworkflow", "revisions"]
        },
        {
          day: 22,
          contentType: 'Carousel',
          platform: 'LinkedIn',
          pillar: 'Client Wins',
          hook: "Case Study: How we helped a SaaS company reduce churn by redesigning their onboarding",
          outline: ["The problem", "Our research", "The solution", "The results"],
          cta: "DM 'SAAS' for our onboarding audit checklist",
          caption: "Design isn't just about looks—it's about business results.\n\nThis SaaS company was losing users in the first week. Their product was great, but the onboarding was confusing.\n\nWe redesigned the entire first-time user experience:\n\n📉 Churn reduced by 34%\n📈 Activation rate up 56%\n💰 $2.1M additional ARR\n\nSwipe for the full breakdown →",
          hashtags: ["saas", "uxdesign", "onboarding", "productdesign", "casestudy"]
        },
        {
          day: 23,
          contentType: 'Reel',
          platform: 'TikTok',
          pillar: 'Industry Education',
          hook: "Why your portfolio isn't getting you clients",
          outline: ["Common mistakes", "What clients actually look for", "Quick fixes"],
          cta: "Tag a designer who needs this",
          caption: "Your portfolio is probably scaring away clients 😬\n\nHere's why (and how to fix it):\n\n#designerportfolio #freelancedesigner #designtips",
          hashtags: ["portfolio", "freelancedesign", "designcareer", "designtips"]
        },
        {
          day: 24,
          contentType: 'Single Image',
          platform: 'Instagram',
          pillar: 'Culture & Values',
          hook: "New studio setup tour 🏠",
          outline: ["Wide shot of space", "Key elements highlighted"],
          cta: "What would you add to your dream studio?",
          caption: "Where the magic happens. ✨\n\nAfter months of planning, our new studio space is finally complete.\n\n• Natural light\n• Dedicated focus zones\n• Collaboration spaces\n• The all-important coffee station ☕",
          hashtags: ["studiotour", "officespace", "creativestudio", "workspace", "designstudio"]
        },
        {
          day: 25,
          contentType: 'Thread',
          platform: 'Twitter',
          pillar: 'Behind the Scenes',
          hook: "I've run a design studio for 5 years. Here are 12 lessons I wish I knew on day 1:",
          outline: ["Business lessons", "Client lessons", "Creative lessons", "Personal lessons"],
          cta: "Bookmark this if you're starting your own studio",
          caption: "I've run a design studio for 5 years.\n\nHere are 12 lessons I wish I knew on day 1:\n\n🧵",
          hashtags: ["designbusiness", "studiolife", "entrepreneurship", "creativebusiness"]
        },
        {
          day: 26,
          contentType: 'Reel',
          platform: 'Instagram',
          pillar: 'Client Wins',
          hook: "Client just hit $1M in sales with this website we designed",
          outline: ["The goal", "The design approach", "The launch", "The results"],
          cta: "Ready for your million-dollar website? Link in bio",
          caption: "We designed this website 6 months ago.\n\nLast week, the client called to tell us they just crossed $1M in sales. 🤯\n\nThis is why we obsess over conversion, not just aesthetics.\n\nBeautiful design that doesn't convert is just art.\nBeautiful design that converts is business.",
          hashtags: ["milliondollarwebsite", "conversiondesign", "webdesign", "ecommerce", "success"]
        },
        {
          day: 27,
          contentType: 'Carousel',
          platform: 'Instagram',
          pillar: 'Industry Education',
          hook: "The color psychology cheat sheet every designer needs",
          outline: ["Color meanings", "Industry examples", "How to apply it", "Common mistakes"],
          cta: "Save this for your next project",
          caption: "Colors aren't just pretty—they're psychological triggers. 🧠\n\nHere's what each color communicates (and when to use them):\n\n[Swipe for the full breakdown →]\n\nSave this for your next branding project.",
          hashtags: ["colorpsychology", "designtips", "branding", "colortheory", "graphicdesign"]
        },
        {
          day: 28,
          contentType: 'Reel',
          platform: 'TikTok',
          pillar: 'Behind the Scenes',
          hook: "Recreating a viral brand design in our style",
          outline: ["Show original", "Our interpretation", "Key differences", "Which is better?"],
          cta: "Which version do you prefer? Comment below",
          caption: "Taking viral designs and making them Chromory ✨\n\n#designchallenge #branding #designstudio",
          hashtags: ["designchallenge", "brandredesign", "creativestudio", "designreaction"]
        },
        {
          day: 29,
          contentType: 'Text Post',
          platform: 'LinkedIn',
          pillar: 'Culture & Values',
          hook: "We just turned down a $50K project. Here's why:",
          outline: ["The opportunity", "The red flags", "The decision", "The lesson"],
          cta: "Have you ever walked away from money? Share below",
          caption: "We just turned down a $50K project.\n\nHere's why:\n\nThe client wanted us to 'make something viral' with no strategy, no goals, and no understanding of their audience.\n\nThey wanted lottery ticket design, not strategic design.\n\nWe don't do lottery tickets.\n\nOur work is built on:\n• Deep research\n• Clear objectives\n• Measurable outcomes\n\nSaying no to the wrong projects means saying yes to the right ones.\n\nHas your business ever walked away from money for the right reasons?",
          hashtags: ["businessdecisions", "agency", "clientwork", "values"]
        },
        {
          day: 30,
          contentType: 'Reel',
          platform: 'Instagram',
          pillar: 'Client Wins',
          hook: "30 days of transformation: Our client's journey",
          outline: ["Day 1 kickoff", "Mid-project progress", "Final reveal", "Results celebration"],
          cta: "Ready to start your transformation? Link in bio",
          caption: "30 days ago, this brand didn't exist.\n\nToday, it's ready to take on the world. 🌍\n\nThis is what happens when strategy meets creativity:\n\n✅ Complete brand identity\n✅ Website design & development\n✅ Social media templates\n✅ Brand guidelines\n\nFrom concept to launch in 30 days.\n\nReady to transform your brand? Let's talk. 🚀",
          hashtags: ["brandlaunch", "30daytransformation", "branddesign", "creativestudio", "branding"]
        }
      ]
    }
  }
};
