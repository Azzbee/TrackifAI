import {
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts';
import { motion } from "framer-motion";
import type { CategoryScore } from "@/data/chromoryAuditData";

interface AuditRadarChartProps {
  scores: {
    positioning: CategoryScore;
    messaging: CategoryScore;
    trustSignals: CategoryScore;
    callToAction: CategoryScore;
    contentClarity: CategoryScore;
  };
}

const categoryLabels: Record<string, string> = {
  positioning: "Positioning",
  messaging: "Messaging",
  trustSignals: "Trust Signals",
  callToAction: "Call To Action",
  contentClarity: "Content Clarity",
};

function getLabelColor(label: 'Strong' | 'Needs Work' | 'Critical'): string {
  switch (label) {
    case 'Strong':
      return 'hsl(159 30% 59%)'; // primary sage
    case 'Needs Work':
      return 'hsl(38 92% 50%)'; // warm amber
    case 'Critical':
      return 'hsl(0 84% 60%)'; // red
  }
}

function getOverallColor(scores: AuditRadarChartProps['scores']): string {
  const values = Object.values(scores);
  const avgScore = values.reduce((sum, cat) => sum + cat.score, 0) / values.length;
  if (avgScore >= 70) return 'hsl(159 30% 59%)';
  if (avgScore >= 40) return 'hsl(38 92% 50%)';
  return 'hsl(0 84% 60%)';
}

export function AuditRadarChart({ scores }: AuditRadarChartProps) {
  const data = Object.entries(scores).map(([key, value]) => ({
    category: categoryLabels[key] || key,
    score: value.score,
    fullMark: 100,
    label: value.label,
  }));

  const primaryColor = getOverallColor(scores);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative w-full h-[320px]"
    >
      {/* Background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute inset-0 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)`,
        }}
      />

      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
          {/* Custom polar grid */}
          <PolarGrid
            stroke="hsl(var(--border))"
            strokeWidth={1}
            gridType="polygon"
          />

          {/* Axis labels */}
          <PolarAngleAxis
            dataKey="category"
            tick={({ payload, x, y, textAnchor }) => {
              const item = data.find(d => d.category === payload.value);
              const color = item ? getLabelColor(item.label) : 'hsl(var(--muted-foreground))';
              return (
                <g transform={`translate(${x},${y})`}>
                  <text
                    textAnchor={textAnchor}
                    fill="hsl(var(--foreground))"
                    fontSize={11}
                    fontWeight={500}
                    dy={4}
                    className="font-sans"
                  >
                    {payload.value}
                  </text>
                  <text
                    textAnchor={textAnchor}
                    fill={color}
                    fontSize={10}
                    fontWeight={600}
                    dy={18}
                    className="font-sans"
                  >
                    {item?.score}
                  </text>
                </g>
              );
            }}
            stroke="hsl(var(--border))"
          />

          {/* Radius axis */}
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 9 }}
            tickCount={5}
            stroke="hsl(var(--border))"
            axisLine={false}
          />

          {/* Main radar area */}
          <defs>
            <linearGradient id="radarGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={primaryColor} stopOpacity={0.7} />
              <stop offset="100%" stopColor={primaryColor} stopOpacity={0.1} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <Radar
            name="Score"
            dataKey="score"
            stroke={primaryColor}
            strokeWidth={2}
            fill="url(#radarGradient)"
            fillOpacity={0.6}
            filter="url(#glow)"
            animationBegin={200}
            animationDuration={1500}
            animationEasing="ease-out"
          />
        </RechartsRadarChart>
      </ResponsiveContainer>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4 text-xs"
      >
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-muted-foreground font-sans">Strong (70+)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="text-muted-foreground font-sans">Needs Work</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          <span className="text-muted-foreground font-sans">Critical</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AuditRadarChart;
