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
          platform: 'TikTok',
          pillar: 'Coloring Timelapses',
          hook: "Watch this blank page become a masterpiece in 60 seconds",
          outline: ["Start with blank coloring page", "Timelapse of coloring process", "Satisfying color reveals", "Final result showcase"],
          cta: "Follow for more satisfying coloring content",
          caption: "There's something so satisfying about watching colors come to life. 🎨\n\nThis is from our custom pet portrait coloring book—imagine coloring YOUR pet!\n\n#coloringbook #satisfying #asmr #coloring #arttherapy",
          hashtags: ["coloringbook", "satisfying", "asmr", "coloring", "arttherapy"]
        },
        {
          day: 2,
          contentType: 'Reel',
          platform: 'Instagram',
          pillar: 'Personalization Magic',
          hook: "POV: You just got a coloring book of YOUR dog",
          outline: ["Unboxing moment", "Flip through custom pages", "Reaction shot", "Start coloring"],
          cta: "Tag someone who needs this for their pet",
          caption: "The moment you realize your fur baby is now a coloring book. 🐕\n\nWe turn your photos into custom coloring pages—pets, family, memories, anything.\n\nLink in bio to create yours!",
          hashtags: ["customcoloringbook", "petportrait", "personalizedgift", "dogmom", "coloringforadults"]
        },
        {
          day: 3,
          contentType: 'Carousel',
          platform: 'Instagram',
          pillar: 'Personalization Magic',
          hook: "From photo to coloring page: The magic revealed",
          outline: ["Original photo", "Our conversion process", "Line art result", "Colored final version"],
          cta: "Save this and send us your photo to get started",
          caption: "Ever wondered how we turn your photos into coloring pages? ✨\n\nSwipe to see the transformation →\n\n1. You send us your favorite photo\n2. Our artists create detailed line art\n3. You receive a one-of-a-kind coloring book\n4. You create your own masterpiece\n\nWhat photo would you turn into a coloring book?",
          hashtags: ["behindthescenes", "customart", "coloringbook", "photoart", "personalized"]
        },
        {
          day: 4,
          contentType: 'Reel',
          platform: 'TikTok',
          pillar: 'Coloring Timelapses',
          hook: "ASMR coloring with no talking, just vibes",
          outline: ["Close-up of coloring", "Pencil sounds", "Color blending", "Relaxing music"],
          cta: "Save this for when you need to relax",
          caption: "Your sign to take a coloring break today. 🌿\n\nNo thoughts, just colors.\n\n#asmr #coloringasmr #relaxing #stressrelief #coloringbook",
          hashtags: ["asmr", "coloringasmr", "relaxing", "stressrelief", "adultcoloring"]
        },
        {
          day: 5,
          contentType: 'Reel',
          platform: 'Instagram',
          pillar: 'Customer Creations',
          hook: "Our customers are ARTISTS (look what they made)",
          outline: ["Customer submission 1", "Customer submission 2", "Customer submission 3", "Call for submissions"],
          cta: "Tag us in your creations for a feature",
          caption: "We're constantly blown away by what our customers create. 😍\n\nThese are all from the same coloring book—same lines, totally different masterpieces.\n\nTag @chromory in your finished pages for a chance to be featured!",
          hashtags: ["customerart", "coloringcommunity", "adultcoloring", "artshare", "coloringbook"]
        },
        {
          day: 6,
          contentType: 'Reel',
          platform: 'TikTok',
          pillar: 'Coloring Timelapses',
          hook: "The most satisfying gradient you'll see today",
          outline: ["Start with light colors", "Build up layers", "Blend transition", "Final gradient reveal"],
          cta: "What colors should I blend next?",
          caption: "When the gradient hits just right. 🌈\n\nComment your favorite color combo!\n\n#gradient #satisfying #coloringbook #arttherapy #coloring",
          hashtags: ["gradient", "satisfying", "coloring", "arttherapy", "colorblending"]
        },
        {
          day: 7,
          contentType: 'Single Image',
          platform: 'Instagram',
          pillar: 'Customer Creations',
          hook: "Sunday coloring corner inspo",
          outline: ["Aesthetic flat lay of coloring setup", "Coffee, pencils, open book"],
          cta: "Show us your coloring setup",
          caption: "Sunday plans: sorted. ☕🎨\n\nThere's nothing quite like a quiet morning with colors and coffee.\n\nWhat does your coloring setup look like? Share below!",
          hashtags: ["sundayvibes", "coloringtime", "selfcare", "relaxation", "coloringforadults"]
        },
        {
          day: 8,
          contentType: 'Reel',
          platform: 'TikTok',
          pillar: 'Personalization Magic',
          hook: "Turning this couple's wedding photo into a coloring book",
          outline: ["Show wedding photo", "Transform to line art", "Print and bind", "Gift wrapping"],
          cta: "Perfect anniversary gift idea—save this",
          caption: "Best anniversary gift ever? We think so. 💕\n\nImagine coloring your own wedding photos!\n\n#weddinganniversary #uniquegift #customgift #coloringbook #couplegoals",
          hashtags: ["weddinggift", "anniversarygift", "customcoloringbook", "uniquegifts", "couplegoals"]
        },
        {
          day: 9,
          contentType: 'Carousel',
          platform: 'Instagram',
          pillar: 'Coloring Tips & Relaxation',
          hook: "5 coloring techniques that will change your art",
          outline: ["Technique 1: Layering", "Technique 2: Blending", "Technique 3: Pressure control", "Technique 4: Direction", "Technique 5: Highlights"],
          cta: "Save this for your next coloring session",
          caption: "Level up your coloring game with these pro techniques. 🎨\n\nSwipe through to learn:\n\n1️⃣ Layering for depth\n2️⃣ Blending without blenders\n3️⃣ Pressure control secrets\n4️⃣ Stroke direction matters\n5️⃣ Leave highlights white\n\nWhich technique are you trying first?",
          hashtags: ["coloringtips", "arttutuorial", "coloringtechniques", "adultcoloring", "arttips"]
        },
        {
          day: 10,
          contentType: 'Reel',
          platform: 'Instagram',
          pillar: 'Coloring Timelapses',
          hook: "3 hours of coloring in 30 seconds",
          outline: ["Clock showing time start", "Timelapse coloring", "Clock showing end", "Before/after split"],
          cta: "Worth every minute. Would you spend 3 hours coloring?",
          caption: "3 hours of pure therapy. 🧘‍♀️\n\nNo phone. No stress. Just me and my colors.\n\nThis is what self-care looks like.",
          hashtags: ["timelapse", "coloringtherapy", "selfcare", "arttherapy", "coloringbook"]
        },
        {
          day: 11,
          contentType: 'Reel',
          platform: 'TikTok',
          pillar: 'Customer Creations',
          hook: "Customer unboxing their custom family coloring book",
          outline: ["Package arrival", "Unboxing reaction", "Flipping through pages", "Emotional moment seeing family"],
          cta: "The perfect family gift—link in bio",
          caption: "Her reaction when she saw her grandkids in coloring book form. 🥹\n\nThis is why we do what we do.\n\n#unboxing #familygift #customgift #grandma #emotional",
          hashtags: ["unboxing", "familyportrait", "customgift", "emotionalmoment", "grandparents"]
        },
        {
          day: 12,
          contentType: 'Reel',
          platform: 'Instagram',
          pillar: 'Personalization Magic',
          hook: "Behind the scenes: How we print your custom books",
          outline: ["Design on screen", "Printing process", "Binding", "Quality check", "Packaging"],
          cta: "Quality you can feel. Link in bio to order",
          caption: "Ever wondered how your custom coloring book is made? 📖\n\nFrom digital design to your doorstep:\n\n✅ Premium 120gsm paper\n✅ Professional spiral binding\n✅ Vibrant, crisp line art\n✅ Careful quality control\n\nMade with love, shipped with care.",
          hashtags: ["behindthescenes", "makingof", "smallbusiness", "qualitymatters", "customprinting"]
        },
        {
          day: 13,
          contentType: 'Reel',
          platform: 'TikTok',
          pillar: 'Coloring Timelapses',
          hook: "The way these colors blend is illegal",
          outline: ["Start with base color", "Add second color", "Blend together", "Mind-blowing result"],
          cta: "What colors should I blend next?",
          caption: "Tell me that's not the most satisfying thing ever. 😮‍💨\n\nPrismacolor pencils hitting different.\n\n#colorblending #satisfying #prismacolor #coloring #arttherapy",
          hashtags: ["colorblending", "satisfying", "prismacolor", "coloringbook", "oddlysatisfying"]
        },
        {
          day: 14,
          contentType: 'Carousel',
          platform: 'Instagram',
          pillar: 'Customer Creations',
          hook: "Same coloring page, 10 different artists",
          outline: ["Original line art", "Version 1-5", "Version 6-10", "All together"],
          cta: "Which style is your favorite? Comment the number",
          caption: "Proof that there's no wrong way to color. 🎨\n\nWe sent the same page to 10 different customers and WOW—every single one is a masterpiece.\n\nSwipe to see all 10 and vote for your favorite!",
          hashtags: ["coloringcommunity", "artcomparison", "everyoneisanartist", "coloringbook", "artistsoninstagram"]
        },
        {
          day: 15,
          contentType: 'Reel',
          platform: 'TikTok',
          pillar: 'Coloring Tips & Relaxation',
          hook: "5 signs you need a coloring break RIGHT NOW",
          outline: ["Sign 1: Doom scrolling", "Sign 2: Stressed", "Sign 3: Can't focus", "Sign 4: Anxious", "Sign 5: Need creative outlet"],
          cta: "This is your sign. Go color something",
          caption: "If you're seeing this, it's a sign. 🎨\n\nPut down the phone. Pick up the pencils.\n\n#selfcare #mentalhealth #stressrelief #coloringtherapy #anxietyrelief",
          hashtags: ["selfcare", "mentalhealth", "stressrelief", "coloringtherapy", "anxietyrelief"]
        },
        {
          day: 16,
          contentType: 'Reel',
          platform: 'Instagram',
          pillar: 'Personalization Magic',
          hook: "Turning childhood photos into a coloring book for Mom",
          outline: ["Old childhood photos", "Conversion process", "Finished book", "Mom's reaction"],
          cta: "Mother's Day gift idea—save this now",
          caption: "The gift that made Mom cry happy tears. 😭💕\n\nWe turned her kids' childhood photos into a custom coloring book for Mother's Day.\n\nShe said it's the most thoughtful gift she's ever received.\n\nWhat photos would you include for your mom?",
          hashtags: ["mothersdaygift", "giftidea", "customgift", "momgift", "thoughtfulgift"]
        },
        {
          day: 17,
          contentType: 'Reel',
          platform: 'TikTok',
          pillar: 'Coloring Timelapses',
          hook: "Coloring my cat for 2 hours straight (no regrets)",
          outline: ["Custom cat coloring page", "Detailed fur coloring", "Eye details", "Final reveal vs real cat"],
          cta: "Get your pet turned into a coloring book",
          caption: "2 hours well spent if you ask me. 🐱\n\nSide by side: the real floof vs the colored floof.\n\n#catart #petportrait #coloringbook #catlover #satisfying",
          hashtags: ["catart", "petportrait", "coloringbook", "catlover", "timelapse"]
        },
        {
          day: 18,
          contentType: 'Story',
          platform: 'Instagram',
          pillar: 'Customer Creations',
          hook: "Customer spotlight Sunday",
          outline: ["Feature 3-4 customer submissions", "Before/after of their work", "Thank you message"],
          cta: "Tag us to be featured next week",
          caption: "You all are SO talented! 🌟",
          hashtags: ["customerspotlight", "featured", "coloringcommunity"]
        },
        {
          day: 19,
          contentType: 'Reel',
          platform: 'TikTok',
          pillar: 'Coloring Timelapses',
          hook: "POV: You finally have time to color",
          outline: ["Cozy setup", "Opening coloring book", "Peaceful coloring montage", "Satisfied sigh"],
          cta: "Tag someone who needs this energy",
          caption: "This is self-care. 🧘‍♀️\n\nNo notifications. No stress. Just colors.\n\n#selfcare #peacefulmoments #coloringtime #relaxation #metime",
          hashtags: ["selfcare", "peaceful", "coloringtime", "relaxation", "cozy"]
        },
        {
          day: 20,
          contentType: 'Carousel',
          platform: 'Instagram',
          pillar: 'Coloring Tips & Relaxation',
          hook: "The best colored pencils at every price point",
          outline: ["Budget: $10-20", "Mid-range: $30-50", "Premium: $80+", "Our recommendation"],
          cta: "Save this before your next art supply run",
          caption: "The ultimate colored pencil guide. ✏️\n\nWhether you're just starting or ready to invest, we've got recommendations:\n\n💚 Budget-friendly: Crayola Signature\n💛 Mid-range: Faber-Castell Polychromos\n❤️ Premium: Prismacolor Premier\n\nWhat pencils do you use? Drop your faves below!",
          hashtags: ["coloredpencils", "artsupplies", "coloringrecommendations", "artisttools", "coloringbook"]
        },
        {
          day: 21,
          contentType: 'Reel',
          platform: 'Instagram',
          pillar: 'Personalization Magic',
          hook: "This dad got his kids' drawings turned into a coloring book",
          outline: ["Kids' original drawings", "Our professional line art versions", "Dad's reaction", "Family coloring together"],
          cta: "Best. Dad. Gift. Ever. Link in bio",
          caption: "He turned his kids' artwork into something the whole family can color together. 🖼️👨‍👧‍👦\n\nWe take your children's drawings and transform them into professional coloring pages.\n\nImagine coloring your kid's imagination!",
          hashtags: ["dadlife", "kidsart", "familyactivity", "uniquegift", "coloringwithkids"]
        },
        {
          day: 22,
          contentType: 'Reel',
          platform: 'TikTok',
          pillar: 'Coloring Timelapses',
          hook: "This sunset took me 4 hours and it was worth every second",
          outline: ["Blank sunset scene", "Yellow/orange layers", "Pink/purple blend", "Final dramatic reveal"],
          cta: "Would you color this? Comment YES",
          caption: "4 hours of my life I'll never get back (and I'd do it again). 🌅\n\n#sunset #coloringbook #satisfying #arttherapy #timelapse",
          hashtags: ["sunset", "coloringtimelapse", "satisfying", "arttherapy", "colorblending"]
        },
        {
          day: 23,
          contentType: 'Reel',
          platform: 'Instagram',
          pillar: 'Customer Creations',
          hook: "Grandma's reaction to her custom coloring book",
          outline: ["Setup the gift", "Grandma opens it", "Sees family photos as coloring pages", "Emotional reaction"],
          cta: "Tag a grandparent who would love this",
          caption: "We're not crying, you're crying. 😭\n\nHer granddaughter surprised her with a coloring book featuring photos from throughout her life.\n\n'I can color my memories' - yes you can, grandma. Yes you can.",
          hashtags: ["grandparents", "emotionalgift", "familymemories", "customgift", "reaction"]
        },
        {
          day: 24,
          contentType: 'Reel',
          platform: 'TikTok',
          pillar: 'Coloring Tips & Relaxation',
          hook: "Coloring hack that changed my life",
          outline: ["Problem: Colors look flat", "Solution: Add shadows", "Demonstration", "Before/after"],
          cta: "Try this on your next page",
          caption: "Why did no one tell me this sooner?! 🤯\n\nAdd a tiny bit of complementary color as shadow and BOOM—instant depth.\n\n#coloringhack #arttip #coloringbook #mindblown",
          hashtags: ["coloringhack", "arttip", "coloringtechnique", "levelup", "arttherapy"]
        },
        {
          day: 25,
          contentType: 'Carousel',
          platform: 'Instagram',
          pillar: 'Personalization Magic',
          hook: "5 custom coloring book ideas you haven't thought of",
          outline: ["Idea 1: Pet portraits", "Idea 2: Travel memories", "Idea 3: Baby's first year", "Idea 4: Couple's journey", "Idea 5: Memorial tribute"],
          cta: "Which one would you create? Comment below",
          caption: "Not just for kids anymore. 📖\n\nCustom coloring book ideas that make perfect gifts:\n\n1. Your pet in different poses\n2. Your travel photos from a trip\n3. Baby's first year memories\n4. Your relationship timeline\n5. Memorial tribute to a loved one\n\nWhich idea speaks to you?",
          hashtags: ["giftideas", "customgift", "personalizedgift", "coloringbook", "uniquegifts"]
        },
        {
          day: 26,
          contentType: 'Reel',
          platform: 'TikTok',
          pillar: 'Coloring Timelapses',
          hook: "Coloring with only 3 colors challenge",
          outline: ["Show the 3 colors", "Start coloring", "Creative problem-solving", "Surprisingly good result"],
          cta: "What 3 colors would you pick?",
          caption: "Limited palette, unlimited creativity. 🎨\n\nI only used red, blue, and yellow—and honestly? Not mad about it.\n\n#coloringchallenge #limitedpalette #colortheory #coloringbook",
          hashtags: ["coloringchallenge", "limitedpalette", "creative", "coloringbook", "arttok"]
        },
        {
          day: 27,
          contentType: 'Reel',
          platform: 'Instagram',
          pillar: 'Customer Creations',
          hook: "Our community colored the same page (the results are incredible)",
          outline: ["Original page", "Submission montage", "Variety showcase", "Community celebration"],
          cta: "Join our coloring community—link in bio",
          caption: "50 people. 1 coloring page. 50 masterpieces. 🎨\n\nThis is what happens when we send free pages to our community.\n\nEvery single interpretation is valid. Every single one is art.\n\nWant to join our next community coloring challenge?",
          hashtags: ["coloringcommunity", "communityart", "coloringchallenge", "everyoneisanartist", "coloringbook"]
        },
        {
          day: 28,
          contentType: 'Reel',
          platform: 'TikTok',
          pillar: 'Personalization Magic',
          hook: "Making a coloring book from someone's Instagram photos",
          outline: ["Scrolling their Instagram", "Selecting best photos", "Converting to line art", "Final book reveal"],
          cta: "Tag someone whose IG would make a great coloring book",
          caption: "New gift idea unlocked. 🔓\n\nTurn their Instagram highlights into a coloring book.\n\n#giftidea #instagram #customgift #coloringbook #creative",
          hashtags: ["giftidea", "instagramphotos", "customgift", "coloringbook", "creativegift"]
        },
        {
          day: 29,
          contentType: 'Carousel',
          platform: 'Instagram',
          pillar: 'Coloring Tips & Relaxation',
          hook: "Why coloring is better than meditation (hear me out)",
          outline: ["Point 1: Active vs passive", "Point 2: Tangible result", "Point 3: No 'right' way", "Point 4: Social option", "Conclusion: Both are great"],
          cta: "Do you prefer coloring or meditation? Tell us",
          caption: "Hot take incoming. 🔥\n\nColoring might be better than meditation for some people, and here's why:\n\n✅ Your mind stays engaged (no wandering)\n✅ You create something tangible\n✅ There's no 'you're doing it wrong'\n✅ You can do it with others\n\nNot saying meditation isn't amazing—just saying coloring deserves more credit as a mindfulness practice.\n\nThoughts?",
          hashtags: ["mindfulness", "mentalhealth", "coloringtherapy", "meditation", "selfcare"]
        },
        {
          day: 30,
          contentType: 'Reel',
          platform: 'TikTok',
          pillar: 'Coloring Timelapses',
          hook: "30 days of coloring: My transformation",
          outline: ["Day 1 coloring (rough)", "Day 15 improvement", "Day 30 masterpiece", "Side by side comparison"],
          cta: "Follow for 30 more days of coloring content",
          caption: "30 days ago I could barely stay in the lines. 📈\n\nLook at me now.\n\nConsistency > talent. Every single time.\n\n#transformation #30daychallenge #coloringbook #progress #artjourney",
          hashtags: ["transformation", "30daychallenge", "progress", "coloringbook", "artimprovement"]
        }
      ]
    }
  }
};
