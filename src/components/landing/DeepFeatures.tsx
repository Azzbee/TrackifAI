import { motion } from "framer-motion";
import { Activity, Target, CheckCircle2, Calendar, ArrowUpRight, ArrowDownRight } from "lucide-react";

const DeepFeatures = () => {
  return (
    <section className="py-24 px-6 section-divider">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 tracking-tight text-foreground">
            The Dashboard
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            Everything you need to understand and improve your marketing
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-12 gap-6">
          {/* Marketing Score */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="md:col-span-4 card-editorial p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Activity className="w-4 h-4 text-primary" strokeWidth={1.5} />
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider font-sans">Marketing Score</span>
            </div>
            
            <div className="relative w-32 h-32 mx-auto mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-muted"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={264}
                  strokeDashoffset={264 * 0.24}
                  strokeLinecap="round"
                  className="text-primary"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-serif font-semibold text-foreground">76</span>
              </div>
            </div>
            
            <p className="text-center text-sm text-muted-foreground font-sans">
              Above average. <span className="text-primary">+8 potential</span>
            </p>
          </motion.div>

          {/* Radar Chart - Brand Health */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="md:col-span-4 card-editorial p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Target className="w-4 h-4 text-primary" strokeWidth={1.5} />
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider font-sans">Brand Health</span>
            </div>
            
            <div className="relative h-40 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Radar background */}
                {[1, 0.75, 0.5, 0.25].map((scale, i) => (
                  <polygon
                    key={i}
                    points="100,20 180,80 155,170 45,170 20,80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-border"
                    transform={`scale(${scale}) translate(${(1-scale) * 100}, ${(1-scale) * 100})`}
                  />
                ))}
                {/* Radar data */}
                <polygon
                  points="100,35 165,75 140,150 60,150 35,75"
                  fill="hsl(159 30% 59% / 0.2)"
                  stroke="hsl(159 30% 59%)"
                  strokeWidth="2"
                />
              </svg>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mt-4 text-xs text-muted-foreground font-sans">
              <div>Positioning <span className="text-primary">92%</span></div>
              <div>Trust <span className="text-primary">78%</span></div>
              <div>Content <span className="text-primary">65%</span></div>
              <div>Funnel <span className="text-primary">71%</span></div>
            </div>
          </motion.div>

          {/* Top 3 Fixes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="md:col-span-4 card-editorial p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle2 className="w-4 h-4 text-primary" strokeWidth={1.5} />
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider font-sans">Top 3 Fixes</span>
            </div>
            
            <div className="space-y-4">
              {[
                { task: "Rewrite hero headline", impact: "High" },
                { task: "Add customer logos", impact: "High" },
                { task: "Simplify CTA copy", impact: "Medium" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-sage-light/50">
                  <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center text-xs font-medium text-primary font-sans">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground font-sans">{item.task}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full font-sans ${
                    item.impact === "High" 
                      ? "bg-primary/10 text-primary" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {item.impact}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Before & After Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="md:col-span-8 card-editorial p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider font-sans">Copy Rewrite Preview</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-muted/50 border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <ArrowDownRight className="w-4 h-4 text-destructive" />
                  <span className="text-xs font-medium text-muted-foreground font-sans">Before</span>
                </div>
                <p className="text-foreground font-sans leading-relaxed">
                  "We help businesses grow with our innovative solutions and cutting-edge technology platform."
                </p>
              </div>
              
              <div className="p-5 rounded-2xl bg-sage-light border border-primary/20">
                <div className="flex items-center gap-2 mb-3">
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-primary font-sans">After</span>
                </div>
                <p className="text-foreground font-sans leading-relaxed">
                  "Turn cold traffic into paying customers with AI-powered landing pages that convert 3x better."
                </p>
              </div>
            </div>
          </motion.div>

          {/* 30-Day Calendar Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="md:col-span-4 card-editorial p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-4 h-4 text-primary" strokeWidth={1.5} />
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider font-sans">30-Day Plan</span>
            </div>
            
            <div className="grid grid-cols-7 gap-1 mb-4">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                <div key={i} className="text-center text-xs text-muted-foreground font-sans">
                  {day}
                </div>
              ))}
              {Array.from({ length: 30 }, (_, i) => (
                <div
                  key={i}
                  className={`aspect-square flex items-center justify-center text-xs rounded-lg font-sans ${
                    [2, 5, 9, 14, 18, 22, 27].includes(i)
                      ? "bg-primary text-primary-foreground"
                      : [4, 8, 11, 16, 20, 25, 29].includes(i)
                      ? "bg-sage-light text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-sans">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Social
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-sage-light border border-primary" />
                Email
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeepFeatures;