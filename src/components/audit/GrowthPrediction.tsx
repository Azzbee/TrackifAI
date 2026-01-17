import { motion } from "framer-motion";
import { TrendingUp, Calendar, Target } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Area, AreaChart } from "recharts";

interface GrowthPredictionProps {
  currentScore: number;
  predictedScore: number;
  delay?: number;
}

export function GrowthPrediction({ currentScore, predictedScore, delay = 0 }: GrowthPredictionProps) {
  // Generate growth trajectory data
  const data = [
    { day: "Day 1", score: currentScore, predicted: currentScore },
    { day: "Day 7", score: currentScore + 2, predicted: currentScore + Math.round((predictedScore - currentScore) * 0.15) },
    { day: "Day 14", score: currentScore + 5, predicted: currentScore + Math.round((predictedScore - currentScore) * 0.35) },
    { day: "Day 21", score: currentScore + 8, predicted: currentScore + Math.round((predictedScore - currentScore) * 0.6) },
    { day: "Day 30", score: currentScore + 12, predicted: predictedScore },
  ];

  const improvement = predictedScore - currentScore;
  const percentageIncrease = Math.round((improvement / currentScore) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="card-editorial p-6"
    >
      <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-6 font-sans flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-primary" />
        30-Day Growth Prediction
      </h3>

      {/* Key Metrics */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-3 rounded-xl bg-muted/30">
          <p className="text-2xl font-serif font-semibold text-foreground">{currentScore}</p>
          <p className="text-xs text-muted-foreground font-sans">Current</p>
        </div>
        <div className="text-center p-3 rounded-xl bg-sage-light border border-primary/20">
          <p className="text-2xl font-serif font-semibold text-primary">{predictedScore}</p>
          <p className="text-xs text-muted-foreground font-sans">Predicted</p>
        </div>
        <div className="text-center p-3 rounded-xl bg-primary/10">
          <p className="text-2xl font-serif font-semibold text-primary">+{percentageIncrease}%</p>
          <p className="text-xs text-muted-foreground font-sans">Growth</p>
        </div>
      </div>

      {/* Chart */}
      <div className="h-48 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(159 30% 59%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(159 30% 59%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
            />
            <YAxis 
              domain={[currentScore - 10, predictedScore + 10]} 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                fontSize: '12px',
              }}
            />
            <Area
              type="monotone"
              dataKey="predicted"
              stroke="hsl(159 30% 59%)"
              strokeWidth={2}
              fill="url(#scoreGradient)"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Timeline Milestones */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground font-sans">Week 1:</span>
          <span className="text-foreground font-sans">Foundation fixes (+{Math.round(improvement * 0.15)} pts)</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground font-sans">Week 2:</span>
          <span className="text-foreground font-sans">Trust building (+{Math.round(improvement * 0.2)} pts)</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground font-sans">Week 3:</span>
          <span className="text-foreground font-sans">Conversion optimization (+{Math.round(improvement * 0.25)} pts)</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Target className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground font-sans">Week 4:</span>
          <span className="text-foreground font-sans">Content momentum (+{Math.round(improvement * 0.4)} pts)</span>
        </div>
      </div>
    </motion.div>
  );
}

export default GrowthPrediction;
