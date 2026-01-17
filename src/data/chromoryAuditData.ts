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
    metrics: TikTokMetrics;
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
  overallScore: 64,
  predictedScore: 82,
  auditDate: new Date().toISOString(),
  overallKpis: [
    { label: "Brand Awareness", value: "62%", change: 8, trend: 'up' },
    { label: "Market Position", value: "#12", change: 3, trend: 'up' },
    { label: "Conversion Rate", value: "2.4%", change: -5, trend: 'down' },
    { label: "Customer LTV", value: "$340", change: 12, trend: 'up' },
    { label: "Social Reach", value: "45K", change: 18, trend: 'up' },
    { label: "Content Velocity", value: "3.2/wk", change: -8, trend: 'down' },
  ],
  
  websiteAudit: {
    scores: {
      positioning: {
        score: 72,
        label: 'Strong',
        reasoning: "Clear positioning as a creative studio, but could differentiate more from competitors."
      },
      messaging: {
        score: 58,
        label: 'Needs Work',
        reasoning: "Core message gets lost in visual elements. Headlines could be more benefit-focused."
      },
      trustSignals: {
        score: 45,
        label: 'Needs Work',
        reasoning: "Missing client logos, testimonials, and case study metrics on homepage."
      },
      callToAction: {
        score: 62,
        label: 'Needs Work',
        reasoning: "CTAs exist but lack urgency and specificity. 'Get in touch' is generic."
      },
      contentClarity: {
        score: 78,
        label: 'Strong',
        reasoning: "Visual hierarchy is good, content is scannable, but service pages need work."
      }
    },
    summary: "Chromory's website showcases strong visual design but struggles with conversion fundamentals. The creative work speaks for itself, yet the messaging doesn't capitalize on the portfolio's impact. Visitors can see the quality but aren't given compelling reasons to act now.",
    weakPoints: [
      {
        title: "Missing Social Proof",
        description: "No visible client testimonials, logos, or success metrics on the homepage.",
        impact: 'High'
      },
      {
        title: "Generic CTAs",
        description: "Calls-to-action don't create urgency or specify the next step clearly.",
        impact: 'High'
      },
      {
        title: "Unclear Pricing/Process",
        description: "Visitors don't know what to expect in terms of process, timeline, or investment.",
        impact: 'Medium'
      },
      {
        title: "Mobile Navigation Issues",
        description: "Menu items are cramped and touch targets are too small on mobile.",
        impact: 'Medium'
      }
    ],
    improvements: [
      {
        title: "Add Client Logo Bar",
        description: "Display 5-8 recognizable client logos above the fold to establish immediate credibility.",
        effort: 'Easy',
        impact: 'High'
      },
      {
        title: "Rewrite Hero CTA",
        description: "Change 'Get in touch' to 'Book Your Free Strategy Call' with a supporting subtitle.",
        effort: 'Easy',
        impact: 'High'
      },
      {
        title: "Add Testimonial Carousel",
        description: "Feature 3-5 client testimonials with photos, names, and specific results.",
        effort: 'Medium',
        impact: 'High'
      },
      {
        title: "Create Pricing Page",
        description: "Add transparent pricing tiers or 'starting from' pricing to qualify leads better.",
        effort: 'Medium',
        impact: 'Medium'
      }
    ],
    kpis: [
      { label: "Page Load Speed", value: "2.4s", change: -12, trend: 'down' },
      { label: "Bounce Rate", value: "58%", change: 5, trend: 'up' },
      { label: "Mobile Score", value: "72/100", change: 0, trend: 'stable' },
      { label: "SEO Score", value: "68/100", change: 8, trend: 'up' }
    ],
    keywords: [
      { keyword: "creative studio branding", volume: 2400, difficulty: 45, currentRank: 18, trend: 'up', opportunity: 'High' },
      { keyword: "brand identity design", volume: 8100, difficulty: 72, currentRank: null, trend: 'stable', opportunity: 'Medium' },
      { keyword: "startup branding agency", volume: 1900, difficulty: 38, currentRank: 24, trend: 'up', opportunity: 'High' },
      { keyword: "visual identity designer", volume: 1200, difficulty: 42, currentRank: 12, trend: 'up', opportunity: 'High' },
      { keyword: "rebranding services", volume: 3600, difficulty: 65, currentRank: null, trend: 'down', opportunity: 'Low' }
    ]
  },
  
  tiktokAudit: {
    scores: {
      positioning: {
        score: 55,
        label: 'Needs Work',
        reasoning: "TikTok presence doesn't clearly communicate unique value proposition."
      },
      messaging: {
        score: 48,
        label: 'Needs Work',
        reasoning: "Content is visually appealing but lacks strong hooks in first 3 seconds."
      },
      trustSignals: {
        score: 35,
        label: 'Critical',
        reasoning: "No social proof, testimonials, or behind-the-scenes credibility content."
      },
      callToAction: {
        score: 42,
        label: 'Needs Work',
        reasoning: "Most videos lack clear CTAs. Bio link could be optimized."
      },
      contentClarity: {
        score: 65,
        label: 'Needs Work',
        reasoning: "Aesthetic is cohesive but content themes are scattered without clear pillars."
      }
    },
    summary: "Chromory's TikTok shows creative potential but isn't optimized for growth. The content is beautiful but doesn't follow platform best practices—hooks are weak, CTAs are missing, and there's no consistent content strategy. The algorithm needs clearer signals.",
    weakPoints: [
      {
        title: "Weak Opening Hooks",
        description: "First 3 seconds don't stop the scroll—missing pattern interrupts.",
        impact: 'High'
      },
      {
        title: "No Trending Audio Usage",
        description: "Original sounds are great, but missing opportunities with trending audio.",
        impact: 'High'
      },
      {
        title: "Inconsistent Posting",
        description: "Posting schedule is erratic—algorithm penalizes inconsistency.",
        impact: 'Medium'
      },
      {
        title: "Missing Captions/Text",
        description: "Many videos lack on-screen text, hurting accessibility and retention.",
        impact: 'Medium'
      }
    ],
    improvements: [
      {
        title: "Hook Framework",
        description: "Start every video with a question, bold statement, or visual pattern interrupt.",
        effort: 'Easy',
        impact: 'High'
      },
      {
        title: "Content Pillars Strategy",
        description: "Define 3-4 content pillars and rotate consistently for algorithm favor.",
        effort: 'Medium',
        impact: 'High'
      },
      {
        title: "Posting Schedule",
        description: "Commit to 5x/week minimum at consistent times based on analytics.",
        effort: 'Medium',
        impact: 'High'
      },
      {
        title: "Add Text Overlays",
        description: "Use CapCut to add engaging text animations to improve retention.",
        effort: 'Easy',
        impact: 'Medium'
      }
    ],
    kpis: [
      { label: "Avg. Views", value: "2.4K", change: -18, trend: 'down' },
      { label: "Engagement Rate", value: "4.2%", change: 12, trend: 'up' },
      { label: "Followers", value: "8.7K", change: 3, trend: 'up' },
      { label: "Watch Time", value: "45%", change: -5, trend: 'down' }
    ],
    metrics: {
      totalViews: 156000, viewsChange: -12,
      totalLikes: 8400, likesChange: 8,
      totalComments: 420, commentsChange: -5,
      totalShares: 890, sharesChange: 15,
      totalSaves: 1200, savesChange: 22,
      avgWatchTime: 45, watchTimeChange: -8,
      topVideos: [
        { title: "How we designed a $1M brand in 48 hours", views: 45000, likes: 2100, saves: 340 },
        { title: "POV: Client says 'make it pop'", views: 32000, likes: 1800, saves: 280 },
        { title: "Brand redesign transformation reveal", views: 28000, likes: 1400, saves: 220 }
      ]
    }
  },
  
  competitors: [
    {
      name: "DesignStudio.co",
      score: 78,
      strengths: ["Strong case studies", "Clear pricing", "Active blog"],
      weaknesses: ["Slow load times", "Generic portfolio"]
    },
    {
      name: "CreativeHouse",
      score: 71,
      strengths: ["Great testimonials", "Video content", "Process page"],
      weaknesses: ["Cluttered homepage", "Weak CTAs"]
    },
    {
      name: "ArtisanDigital",
      score: 69,
      strengths: ["Unique visual style", "Strong social proof"],
      weaknesses: ["No pricing info", "Poor mobile experience"]
    }
  ],
  
  extendedCompetitors: [
    {
      name: "DesignStudio.co",
      url: "designstudio.co",
      score: 78,
      whatTheyDoBetter: [
        "Case studies with specific ROI metrics (3x conversions, 40% more leads)",
        "Transparent pricing tiers on homepage builds trust instantly",
        "Active blog with 2-3 posts/week drives organic traffic",
        "Client testimonial videos with faces and specific results"
      ],
      howToMatch: [
        "Add ROI metrics to your top 3 case studies this week",
        "Create a simple 3-tier pricing page (Starter, Growth, Enterprise)",
        "Commit to 1 blog post per week on branding trends",
        "Record 2-minute video testimonials with 3 best clients"
      ],
      metrics: [
        { label: "Domain Authority", theirValue: "58", yourValue: "42", comparison: 'better' as const },
        { label: "Avg. Time on Site", theirValue: "3:24", yourValue: "2:18", comparison: 'better' as const },
        { label: "Monthly Traffic", theirValue: "45K", yourValue: "28K", comparison: 'better' as const },
        { label: "Social Following", theirValue: "12K", yourValue: "8.7K", comparison: 'better' as const }
      ]
    },
    {
      name: "CreativeHouse",
      url: "creativehouse.io",
      score: 71,
      whatTheyDoBetter: [
        "Video-first portfolio showcases work in action",
        "Detailed process page reduces client anxiety",
        "Email lead magnet captures 15% of visitors",
        "Strong LinkedIn presence with founder thought leadership"
      ],
      howToMatch: [
        "Add 30-second video walkthroughs to each portfolio piece",
        "Create a 'How We Work' page with timeline and expectations",
        "Build a free brand audit tool as lead magnet",
        "Post 3x/week on LinkedIn with design insights"
      ],
      metrics: [
        { label: "Domain Authority", theirValue: "45", yourValue: "42", comparison: 'better' as const },
        { label: "Avg. Time on Site", theirValue: "2:45", yourValue: "2:18", comparison: 'better' as const },
        { label: "Monthly Traffic", theirValue: "32K", yourValue: "28K", comparison: 'better' as const },
        { label: "Social Following", theirValue: "6.2K", yourValue: "8.7K", comparison: 'worse' as const }
      ]
    },
    {
      name: "ArtisanDigital",
      url: "artisandigital.com",
      score: 69,
      whatTheyDoBetter: [
        "Distinctive visual identity is immediately recognizable",
        "Strong social proof with Fortune 500 client logos",
        "Interactive portfolio with hover effects and animations",
        "Awards section builds credibility (Awwwards, CSS Design)"
      ],
      howToMatch: [
        "Develop a signature visual style for your own brand",
        "Secure 2-3 recognizable logos for your homepage",
        "Add subtle animations to portfolio thumbnails",
        "Submit best work to design awards for credibility"
      ],
      metrics: [
        { label: "Domain Authority", theirValue: "52", yourValue: "42", comparison: 'better' as const },
        { label: "Avg. Time on Site", theirValue: "1:58", yourValue: "2:18", comparison: 'worse' as const },
        { label: "Monthly Traffic", theirValue: "22K", yourValue: "28K", comparison: 'worse' as const },
        { label: "Social Following", theirValue: "15K", yourValue: "8.7K", comparison: 'better' as const }
      ]
    }
  ],
  
  brandRoast: "Chromory, you've got the design chops of a Michelin-star chef but you're running a food truck with no menu. Your portfolio screams 'hire me' while your website whispers 'maybe fill out a form sometime, no pressure.' You're basically the person who shows up to a job interview in a $5,000 suit but forgets their resume. Fix those CTAs before someone with half your talent but twice your sales skills eats your lunch.",
  
  growthStrategy: {
    summary: "The 30-day turnaround focuses on three pillars: establishing credibility through social proof, creating urgency with compelling CTAs, and building a content engine that positions Chromory as the go-to creative studio. Each week builds on the previous, creating compound momentum.",
    contentPlan: {
      positioning: "The creative studio that turns bold ideas into unforgettable brand experiences—fast, fearless, and always on strategy.",
      targetAudience: "Ambitious startup founders and marketing directors at scaling companies (Series A-C) who need premium creative work without agency bloat.",
      pillars: [
        {
          name: "Behind the Scenes",
          description: "Process reveals, design decisions, and the 'making of' content that builds trust.",
          percentage: 35
        },
        {
          name: "Client Wins",
          description: "Case studies, testimonials, and before/after transformations.",
          percentage: 25
        },
        {
          name: "Industry Education",
          description: "Tips, trends, and hot takes that position you as a thought leader.",
          percentage: 25
        },
        {
          name: "Culture & Values",
          description: "Team moments, studio vibes, and what makes Chromory different.",
          percentage: 15
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
