import { motion } from "framer-motion";
import { Users, TrendingUp, TrendingDown } from "lucide-react";
import type { CompetitorData } from "@/data/chromoryAuditData";

interface CompetitorAnalysisProps {
  competitors: CompetitorData[];
  yourScore: number;
  delay?: number;
}

export function CompetitorAnalysis({ competitors, yourScore, delay = 0 }: CompetitorAnalysisProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="card-editorial p-6"
    >
      <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-6 font-sans flex items-center gap-2">
        <Users className="w-4 h-4 text-primary" />
        Competitor Landscape
      </h3>

      {/* Your Position */}
      <div className="mb-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium text-foreground font-sans">Your Brand</span>
          <span className="text-2xl font-serif font-semibold text-primary">{yourScore}</span>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${yourScore}%` }}
            transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
            className="h-full bg-primary rounded-full"
          />
        </div>
      </div>

      {/* Competitors */}
      <div className="space-y-4">
        {competitors.map((competitor, i) => (
          <motion.div
            key={competitor.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.3 + i * 0.1, duration: 0.4 }}
            className="p-4 rounded-xl bg-muted/30 border border-border"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="font-medium text-foreground font-sans">{competitor.name}</span>
                {competitor.score > yourScore ? (
                  <TrendingUp className="w-4 h-4 text-red-500" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-primary" />
                )}
              </div>
              <span className={`text-xl font-serif font-semibold ${
                competitor.score > yourScore ? 'text-red-500' : 'text-muted-foreground'
              }`}>
                {competitor.score}
              </span>
            </div>

            <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden mb-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${competitor.score}%` }}
                transition={{ duration: 1, delay: delay + 0.4 + i * 0.1, ease: "easeOut" }}
                className={`h-full rounded-full ${
                  competitor.score > yourScore ? 'bg-red-500' : 'bg-muted-foreground'
                }`}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <p className="text-muted-foreground mb-1 font-sans">Strengths</p>
                <ul className="space-y-0.5">
                  {competitor.strengths.map((s, j) => (
                    <li key={j} className="text-foreground font-sans flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-muted-foreground mb-1 font-sans">Weaknesses</p>
                <ul className="space-y-0.5">
                  {competitor.weaknesses.map((w, j) => (
                    <li key={j} className="text-foreground font-sans flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-red-500" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default CompetitorAnalysis;
