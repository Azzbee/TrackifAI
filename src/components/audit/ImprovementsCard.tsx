import { motion } from "framer-motion";
import { Lightbulb, Zap, Clock, Target } from "lucide-react";
import type { Improvement } from "@/data/chromoryAuditData";

interface ImprovementsCardProps {
  improvements: Improvement[];
  delay?: number;
}

export function ImprovementsCard({ improvements, delay = 0 }: ImprovementsCardProps) {
  const getEffortBadge = (effort: string) => {
    switch (effort) {
      case 'Easy':
        return "bg-primary/10 text-primary border-primary/20";
      case 'Medium':
        return "bg-amber-500/10 text-amber-600 border-amber-500/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case 'High':
        return "bg-primary/10 text-primary border-primary/20";
      case 'Medium':
        return "bg-amber-500/10 text-amber-600 border-amber-500/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="card-editorial p-6"
    >
      <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4 font-sans flex items-center gap-2">
        <Lightbulb className="w-4 h-4 text-primary" />
        Recommended Improvements
      </h3>

      <div className="space-y-3">
        {improvements.map((improvement, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.1 + i * 0.1, duration: 0.4 }}
            className="p-4 rounded-xl bg-sage-light/30 border border-primary/10 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-medium text-primary font-sans">{i + 1}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-foreground font-sans mb-1">{improvement.title}</h4>
                <p className="text-sm text-muted-foreground font-sans mb-2">{improvement.description}</p>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full border flex items-center gap-1 ${getEffortBadge(improvement.effort)}`}>
                    <Clock className="w-3 h-3" />
                    {improvement.effort}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full border flex items-center gap-1 ${getImpactBadge(improvement.impact)}`}>
                    <Target className="w-3 h-3" />
                    {improvement.impact} Impact
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default ImprovementsCard;
