import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { KPI } from "@/data/chromoryAuditData";

interface ScoreCardProps {
  title: string;
  score: number;
  predictedScore?: number;
  kpis?: KPI[];
  delay?: number;
}

export function ScoreCard({ title, score, predictedScore, kpis, delay = 0 }: ScoreCardProps) {
  const getScoreColor = (s: number) => {
    if (s >= 70) return "text-primary";
    if (s >= 40) return "text-amber-500";
    return "text-red-500";
  };

  const getScoreLabel = (s: number) => {
    if (s >= 80) return "Excellent";
    if (s >= 70) return "Good";
    if (s >= 50) return "Needs Work";
    return "Critical";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="card-editorial p-6"
    >
      <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4 font-sans">
        {title}
      </h3>

      <div className="flex items-end gap-3 mb-2">
        <div className={`text-5xl font-serif font-semibold ${getScoreColor(score)}`}>
          {score}
        </div>
        <span className="text-muted-foreground font-sans text-sm mb-2">/100</span>
      </div>

      <p className={`text-sm font-medium ${getScoreColor(score)} mb-4`}>
        {getScoreLabel(score)}
      </p>

      {predictedScore && (
        <div className="flex items-center gap-2 p-3 rounded-xl bg-sage-light/50 border border-primary/20 mb-4">
          <TrendingUp className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground font-sans">
            Potential: <span className="text-primary font-medium">{predictedScore}</span>
          </span>
          <span className="text-xs text-primary ml-auto font-medium">
            +{predictedScore - score} pts
          </span>
        </div>
      )}

      {kpis && kpis.length > 0 && (
        <div className="space-y-2 pt-4 border-t border-border">
          {kpis.map((kpi, i) => (
            <div key={i} className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground font-sans">{kpi.label}</span>
              <div className="flex items-center gap-2">
                <span className="font-medium font-sans">{kpi.value}</span>
                <span className={`flex items-center text-xs ${
                  kpi.trend === 'up' ? 'text-primary' : 
                  kpi.trend === 'down' ? 'text-red-500' : 
                  'text-muted-foreground'
                }`}>
                  {kpi.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : 
                   kpi.trend === 'down' ? <TrendingDown className="w-3 h-3" /> : 
                   <Minus className="w-3 h-3" />}
                  {kpi.change !== 0 && `${kpi.change > 0 ? '+' : ''}${kpi.change}%`}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default ScoreCard;
