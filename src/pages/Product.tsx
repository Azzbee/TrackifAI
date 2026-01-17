import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, MessageSquare, Calendar, Target, Zap, FileText } from "lucide-react";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";

const Product = () => {
  const features = [
    {
      icon: Search,
      title: "Website Audit",
      subtitle: "Messaging & Positioning Clarity",
      description: "Our AI scans every page of your website, evaluating headline effectiveness, value proposition clarity, and overall messaging coherence. Receive a clarity score with specific recommendations for improvement.",
      highlights: ["Homepage headline analysis", "Value proposition scoring", "CTA effectiveness review", "Competitor positioning gaps"]
    },
    {
      icon: Target,
      title: "Messaging Analysis",
      subtitle: "ICP Alignment & Brutal Roast",
      description: "We analyze how well your messaging resonates with your ideal customer profile. Our 'Brutal Roast' feature delivers honest, actionable feedback on what's working and what's falling flat.",
      highlights: ["ICP alignment score", "Pain point coverage analysis", "Tone consistency check", "Brutal Roast highlights"]
    },
    {
      icon: FileText,
      title: "Copy Rewrites",
      subtitle: "Ready-to-Use Alternatives",
      description: "Don't just get feedback — get solutions. We provide rewritten headlines, taglines, and body copy that you can implement immediately. Every suggestion is crafted for conversion.",
      highlights: ["Headline alternatives", "Tagline variations", "Body copy suggestions", "A/B testing recommendations"]
    },
    {
      icon: Zap,
      title: "Priority Fixes",
      subtitle: "Quick Wins for Immediate Impact",
      description: "Not all fixes are created equal. We identify the highest-impact changes you can make today — the low-hanging fruit that will move the needle on conversions this week.",
      highlights: ["Impact vs effort matrix", "One-click implementation tips", "Before/after examples", "Conversion lift estimates"]
    },
    {
      icon: Calendar,
      title: "30-Day Execution Calendar",
      subtitle: "Your Marketing Roadmap",
      description: "Transform insights into action with a structured 30-day plan. Each day includes specific tasks, from quick copy tweaks to strategic content initiatives, all prioritized for maximum impact.",
      highlights: ["Daily action items", "Weekly milestones", "Resource allocation guide", "Progress tracking metrics"]
    },
    {
      icon: MessageSquare,
      title: "Continuous Refinement",
      subtitle: "Iterate and Improve",
      description: "Marketing is never done. Re-run audits as you implement changes to track improvement and uncover new opportunities. Watch your clarity scores climb over time.",
      highlights: ["Progress tracking", "Historical comparisons", "New opportunity alerts", "Benchmark reports"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-48 pb-24">
        {/* Hero Section */}
        <section className="px-6 mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground tracking-tight mb-6">
                The Marketing Brain <span className="italic text-gradient-sage">for Founders.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl mx-auto mb-10">
                A complete platform that audits your messaging, identifies gaps, and delivers 
                an actionable roadmap — all in under a minute.
              </p>
              <Link to="/">
                <Button className="btn-sage px-8 py-6 text-base rounded-2xl">
                  Start Your Free Audit
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="px-6">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
                >
                  {/* Icon Card */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-card border border-border flex items-center justify-center shadow-sm">
                      <feature.icon className="w-12 h-12 md:w-16 md:h-16 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2 font-sans">
                      {feature.subtitle}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-3">
                      {feature.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground tracking-tight mb-6">
              Ready to transform your marketing?
            </h2>
            <p className="text-lg text-muted-foreground font-sans mb-10">
              Get your comprehensive audit in under 45 seconds. No credit card required.
            </p>
            <Link to="/">
              <Button className="btn-sage px-10 py-6 text-base rounded-2xl">
                Start Free Audit →
              </Button>
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
