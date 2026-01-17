import { motion } from "framer-motion";
import { AlertTriangle, AlertCircle, Info } from "lucide-react";
import type { WeakPoint } from "@/data/chromoryAuditData";

interface WeakPointsCardProps {
  weakPoints: WeakPoint[];
  delay?: number;
}

export function WeakPointsCard({ weakPoints, delay = 0 }: WeakPointsCardProps) {
  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case 'High':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'Medium':
        return <AlertCircle className="w-4 h-4 text-amber-500" />;
      default:
        return <Info className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High':
        return "bg-red-500/10 text-red-600 border-red-500/20";
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
        <AlertTriangle className="w-4 h-4 text-red-500" />
        Weak Points
      </h3>

      <div className="space-y-3">
        {weakPoints.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.1 + i * 0.1, duration: 0.4 }}
            className="p-4 rounded-xl bg-muted/30 border border-border"
          >
            <div className="flex items-start gap-3">
              {getImpactIcon(point.impact)}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-medium text-foreground font-sans">{point.title}</h4>
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${getImpactColor(point.impact)}`}>
                    {point.impact}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-sans">{point.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default WeakPointsCard;
