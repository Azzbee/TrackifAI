import { motion } from "framer-motion";
import { Search, TrendingUp, TrendingDown, Minus, Target } from "lucide-react";
import type { KeywordData } from "@/data/chromoryAuditData";

interface KeywordAnalysisProps {
  keywords: KeywordData[];
  delay?: number;
}

export function KeywordAnalysis({ keywords, delay = 0 }: KeywordAnalysisProps) {
  const getDifficultyColor = (difficulty: number) => {
    if (difficulty >= 70) return "text-red-500 bg-red-500/10";
    if (difficulty >= 40) return "text-amber-500 bg-amber-500/10";
    return "text-primary bg-primary/10";
  };

  const getDifficultyLabel = (difficulty: number) => {
    if (difficulty >= 70) return "Hard";
    if (difficulty >= 40) return "Medium";
    return "Easy";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="card-editorial p-6"
    >
      <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-6 font-sans flex items-center gap-2">
        <Search className="w-4 h-4 text-primary" />
        Keyword Opportunities
      </h3>

      <div className="space-y-4">
        {keywords.map((keyword, i) => (
          <motion.div
            key={keyword.keyword}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.1 + i * 0.05, duration: 0.4 }}
            className="p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <span className="font-medium text-foreground font-sans text-sm">{keyword.keyword}</span>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-muted-foreground font-sans">
                    Vol: <span className="text-foreground font-medium">{keyword.volume.toLocaleString()}</span>
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getDifficultyColor(keyword.difficulty)}`}>
                    {getDifficultyLabel(keyword.difficulty)} ({keyword.difficulty})
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {keyword.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4 text-primary" />
                ) : keyword.trend === 'down' ? (
                  <TrendingDown className="w-4 h-4 text-red-500" />
                ) : (
                  <Minus className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Target className="w-3 h-3 text-primary" />
                <span className="text-muted-foreground font-sans">
                  Current Rank: <span className="text-foreground font-medium">
                    {keyword.currentRank ? `#${keyword.currentRank}` : 'Not ranking'}
                  </span>
                </span>
              </div>
              <span className={`font-medium ${
                keyword.opportunity === 'High' ? 'text-primary' :
                keyword.opportunity === 'Medium' ? 'text-amber-500' :
                'text-muted-foreground'
              }`}>
                {keyword.opportunity} Opportunity
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default KeywordAnalysis;
