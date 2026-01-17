import { motion } from "framer-motion";
import { Eye, Heart, MessageCircle, Share2, Bookmark, Clock, TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { TikTokMetrics as TikTokMetricsType } from "@/data/chromoryAuditData";

interface TikTokMetricsProps {
  metrics: TikTokMetricsType;
  delay?: number;
}

export function TikTokMetrics({ metrics, delay = 0 }: TikTokMetricsProps) {
  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const metricCards = [
    { icon: Eye, label: "Total Views", value: metrics.totalViews, change: metrics.viewsChange, color: "text-blue-500", bg: "bg-blue-500/10" },
    { icon: Heart, label: "Total Likes", value: metrics.totalLikes, change: metrics.likesChange, color: "text-red-500", bg: "bg-red-500/10" },
    { icon: MessageCircle, label: "Comments", value: metrics.totalComments, change: metrics.commentsChange, color: "text-amber-500", bg: "bg-amber-500/10" },
    { icon: Share2, label: "Shares", value: metrics.totalShares, change: metrics.sharesChange, color: "text-primary", bg: "bg-primary/10" },
    { icon: Bookmark, label: "Saves", value: metrics.totalSaves, change: metrics.savesChange, color: "text-violet-500", bg: "bg-violet-500/10" },
    { icon: Clock, label: "Avg Watch Time", value: metrics.avgWatchTime, isPercentage: true, change: metrics.watchTimeChange, color: "text-cyan-500", bg: "bg-cyan-500/10" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="card-editorial p-6"
    >
      <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-6 font-sans flex items-center gap-2">
        <Eye className="w-4 h-4 text-primary" />
        Performance Metrics
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {metricCards.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + 0.1 + i * 0.05, duration: 0.4 }}
            className="p-4 rounded-xl bg-muted/30 border border-border"
          >
            <div className={`w-8 h-8 rounded-lg ${metric.bg} flex items-center justify-center mb-3`}>
              <metric.icon className={`w-4 h-4 ${metric.color}`} />
            </div>
            <p className="text-xs text-muted-foreground font-sans mb-1">{metric.label}</p>
            <div className="flex items-end justify-between">
              <span className="text-xl font-serif font-semibold text-foreground">
                {metric.isPercentage ? `${metric.value}%` : formatNumber(metric.value)}
              </span>
              <span className={`flex items-center text-xs font-medium ${
                metric.change > 0 ? 'text-primary' : 
                metric.change < 0 ? 'text-red-500' : 
                'text-muted-foreground'
              }`}>
                {metric.change > 0 ? <TrendingUp className="w-3 h-3 mr-0.5" /> : 
                 metric.change < 0 ? <TrendingDown className="w-3 h-3 mr-0.5" /> : 
                 <Minus className="w-3 h-3 mr-0.5" />}
                {metric.change > 0 ? '+' : ''}{metric.change}%
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Top Performing Content */}
      <div className="mt-6 pt-6 border-t border-border">
        <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4 font-sans">
          Top Performing Videos
        </h4>
        <div className="space-y-3">
          {metrics.topVideos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.3 + i * 0.05, duration: 0.4 }}
              className="flex items-center gap-4 p-3 rounded-xl bg-muted/20 border border-border"
            >
              <span className="text-lg font-serif font-semibold text-primary w-6">#{i + 1}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground font-sans truncate">{video.title}</p>
                <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground font-sans">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" /> {formatNumber(video.views)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3" /> {formatNumber(video.likes)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bookmark className="w-3 h-3" /> {formatNumber(video.saves)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default TikTokMetrics;
