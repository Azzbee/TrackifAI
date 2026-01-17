import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, TrendingUp, Target, Zap } from "lucide-react";
import { DEMO_AUDIT_ID } from "@/data/chromoryAuditData";
import { createAudit } from "@/lib/api";

const HeroSection = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleAnalyze = async () => {
    if (!url) return;

    setIsLoading(true);
    setError(null);

    try {
      // Normalize the URL
      let normalizedUrl = url.trim();
      if (!normalizedUrl.startsWith('http://') && !normalizedUrl.startsWith('https://')) {
        normalizedUrl = `https://${normalizedUrl}`;
      }

      // Create audit via API
      const response = await createAudit(normalizedUrl);

      // Navigate to processing page
      navigate(`/audit/processing/${response.audit_id}`);
    } catch (err) {
      console.error('Failed to create audit:', err);
      setError('Failed to start audit. Please try again.');
      setIsLoading(false);
    }
  };

  const handleTrySample = () => {
    setUrl("chromory.com");
    navigate(`/audit/${DEMO_AUDIT_ID}`);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          {/* Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight mb-8 text-foreground leading-[1.1]"
          >
            The AI that tracks performance to fuel your{" "}
            <span className="italic text-gradient-sage">growth</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
          >
            An expert-grade marketing audit and a prioritized 30-day strategy. 
            Delivered in 45 seconds, built for serious founders.
          </motion.p>

          {/* URL Input */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="max-w-xl mx-auto mb-4"
          >
            <div 
              className={`flex items-center gap-2 p-2 rounded-3xl bg-card border transition-all duration-300 ${
                isFocused 
                  ? 'border-primary shadow-[0_0_0_4px_hsl(159_30%_59%/0.12)]' 
                  : 'border-border'
              }`}
            >
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="yourwebsite.com"
                className="flex-1 bg-transparent px-5 py-3.5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none text-base font-sans"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAnalyze}
                disabled={isLoading}
                className="flex items-center gap-2 px-7 py-3.5 rounded-2xl btn-sage text-sm font-medium disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    Run My Audit
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Error Message */}
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-red-500 font-sans mb-2"
            >
              {error}
            </motion.p>
          )}

          {/* Sample Link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm text-muted-foreground font-sans"
          >
            or{" "}
            <button
              onClick={handleTrySample}
              className="text-primary hover:text-sage-dark underline underline-offset-2 transition-colors"
            >
              try a sample brand
            </button>
          </motion.p>
        </div>

        {/* Strategy Report Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-editorial p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-sage-light border border-primary/30" />
              <span className="text-sm text-muted-foreground font-sans">Strategy Report Preview</span>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Score Card */}
              <div className="p-6 rounded-2xl bg-sage-light/50 border border-primary/10">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Growth Score</span>
                </div>
                <div className="text-4xl font-serif font-semibold text-foreground">87</div>
                <div className="text-sm text-primary font-medium mt-1">+12 from last month</div>
              </div>

              {/* Positioning */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Positioning</span>
                </div>
                <div className="space-y-2">
                  {["Clarity", "Differentiation", "Trust"].map((item, i) => (
                    <div key={item} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{item}</span>
                      <div className="w-24 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full" 
                          style={{ width: `${85 - i * 12}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Wins */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Quick Wins</span>
                </div>
                <div className="space-y-2">
                  {["Fix hero CTA", "Add social proof", "Simplify pricing"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;