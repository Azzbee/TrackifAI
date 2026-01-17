import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Target, Lightbulb, AlertTriangle, CheckCircle } from "lucide-react";
import type { ExtendedCompetitorData } from "@/data/chromoryAuditData";

interface ExtendedCompetitorCardProps {
  competitor: ExtendedCompetitorData;
  yourScore: number;
  index: number;
  delay?: number;
}

export function ExtendedCompetitorCard({ competitor, yourScore, index, delay = 0 }: ExtendedCompetitorCardProps) {
  const isAhead = competitor.score > yourScore;
  const scoreDiff = Math.abs(competitor.score - yourScore);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card-editorial overflow-hidden"
    >
      {/* Header */}
      <div className={`p-4 ${isAhead ? 'bg-red-500/10' : 'bg-primary/10'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${isAhead ? 'bg-red-500/20' : 'bg-primary/20'} flex items-center justify-center`}>
              <span className="text-lg font-serif font-semibold ${isAhead ? 'text-red-600' : 'text-primary'}">
                {index + 1}
              </span>
            </div>
            <div>
              <h4 className="font-medium text-foreground font-sans">{competitor.name}</h4>
              <p className="text-xs text-muted-foreground font-sans">{competitor.url}</p>
            </div>
          </div>
          <div className="text-right">
            <div className={`text-2xl font-serif font-semibold ${isAhead ? 'text-red-500' : 'text-primary'}`}>
              {competitor.score}
            </div>
            <div className={`flex items-center gap-1 text-xs ${isAhead ? 'text-red-500' : 'text-primary'}`}>
              {isAhead ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {isAhead ? '+' : '-'}{scoreDiff} pts vs you
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Score Comparison */}
        <div>
          <div className="flex justify-between text-xs text-muted-foreground font-sans mb-2">
            <span>Marketing Score</span>
            <span>vs Your {yourScore}</span>
          </div>
          <div className="relative h-3 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${competitor.score}%` }}
              transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
              className={`h-full rounded-full ${isAhead ? 'bg-red-500' : 'bg-primary'}`}
            />
            <div 
              className="absolute top-0 bottom-0 w-0.5 bg-foreground"
              style={{ left: `${yourScore}%` }}
            />
          </div>
        </div>

        {/* What They Do Better */}
        <div>
          <h5 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3 font-sans flex items-center gap-2">
            <AlertTriangle className="w-3 h-3 text-amber-500" />
            What They Do Better
          </h5>
          <div className="space-y-2">
            {competitor.whatTheyDoBetter.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 0.3 + i * 0.05, duration: 0.3 }}
                className="flex items-start gap-2 p-2 rounded-lg bg-amber-500/5 border border-amber-500/20"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span className="text-sm text-foreground font-sans">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How to Match & Improve */}
        <div>
          <h5 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3 font-sans flex items-center gap-2">
            <Target className="w-3 h-3 text-primary" />
            How to Match & Improve
          </h5>
          <div className="space-y-2">
            {competitor.howToMatch.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 0.4 + i * 0.05, duration: 0.3 }}
                className="flex items-start gap-2 p-2 rounded-lg bg-primary/5 border border-primary/20"
              >
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground font-sans">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Metrics Comparison */}
        <div>
          <h5 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3 font-sans flex items-center gap-2">
            <Lightbulb className="w-3 h-3 text-violet-500" />
            Key Metrics
          </h5>
          <div className="grid grid-cols-2 gap-3">
            {competitor.metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + 0.5 + i * 0.05, duration: 0.3 }}
                className="p-3 rounded-lg bg-muted/30 border border-border"
              >
                <p className="text-xs text-muted-foreground font-sans mb-1">{metric.label}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground font-sans">{metric.theirValue}</span>
                  <span className={`text-xs ${
                    metric.comparison === 'better' ? 'text-red-500' :
                    metric.comparison === 'worse' ? 'text-primary' :
                    'text-muted-foreground'
                  }`}>
                    vs {metric.yourValue}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ExtendedCompetitorCard;
