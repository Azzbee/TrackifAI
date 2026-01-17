import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ContentPlan, DayPlan } from "@/data/chromoryAuditData";

interface ContentCalendarProps {
  plan: ContentPlan;
}

// Platform configurations
const platformConfig = {
  Instagram: {
    color: "bg-gradient-to-br from-pink-500 to-rose-500",
    lightColor: "bg-pink-500/10",
    textColor: "text-pink-600",
    borderColor: "border-pink-500/30",
    hoverBorder: "hover:border-pink-500/60",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  LinkedIn: {
    color: "bg-gradient-to-br from-blue-600 to-blue-700",
    lightColor: "bg-blue-500/10",
    textColor: "text-blue-600",
    borderColor: "border-blue-500/30",
    hoverBorder: "hover:border-blue-500/60",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  Twitter: {
    color: "bg-gradient-to-br from-sky-400 to-sky-500",
    lightColor: "bg-sky-500/10",
    textColor: "text-sky-600",
    borderColor: "border-sky-500/30",
    hoverBorder: "hover:border-sky-500/60",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  TikTok: {
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    lightColor: "bg-purple-500/10",
    textColor: "text-purple-600",
    borderColor: "border-purple-500/30",
    hoverBorder: "hover:border-purple-500/60",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ),
  },
};

// Content type icons
const contentTypeIcons: Record<DayPlan['contentType'], JSX.Element> = {
  Carousel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
      <rect x="2" y="6" width="8" height="12" rx="1" />
      <rect x="14" y="6" width="8" height="12" rx="1" opacity="0.5" />
    </svg>
  ),
  'Single Image': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  ),
  Reel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  ),
  Story: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
    </svg>
  ),
  'Text Post': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
      <path d="M4 7V4h16v3" />
      <path d="M9 20h6" />
      <path d="M12 4v16" />
    </svg>
  ),
  Thread: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 9h8" />
      <path d="M8 13h6" />
    </svg>
  ),
};

// Pillar color mapping
const pillarColors = [
  { bg: "bg-primary", light: "bg-primary/20", text: "text-primary" },
  { bg: "bg-amber-500", light: "bg-amber-500/20", text: "text-amber-600" },
  { bg: "bg-violet-500", light: "bg-violet-500/20", text: "text-violet-600" },
  { bg: "bg-cyan-500", light: "bg-cyan-500/20", text: "text-cyan-600" },
  { bg: "bg-rose-500", light: "bg-rose-500/20", text: "text-rose-600" },
];

export default function ContentCalendar({ plan }: ContentCalendarProps) {
  const [selectedDay, setSelectedDay] = useState<DayPlan | null>(null);
  const [copied, setCopied] = useState(false);

  // Create pillar color map
  const pillarColorMap = plan.pillars.reduce((acc, pillar, index) => {
    acc[pillar.name] = pillarColors[index % pillarColors.length];
    return acc;
  }, {} as Record<string, typeof pillarColors[0]>);

  // Copy caption to clipboard
  const handleCopyCaption = async () => {
    if (!selectedDay) return;
    const fullCaption = `${selectedDay.caption}\n\n${selectedDay.hashtags.map(h => `#${h}`).join(' ')}`;
    await navigator.clipboard.writeText(fullCaption);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Group days into weeks (6 days per row to fit 30 days in 5 rows)
  const weeks: DayPlan[][] = [];
  for (let i = 0; i < plan.calendar.length; i += 6) {
    weeks.push(plan.calendar.slice(i, i + 6));
  }

  return (
    <div className="space-y-8">
      {/* Header Section - Positioning & Target Audience */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card-editorial overflow-hidden"
      >
        <div className="relative p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
          <div className="relative space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-primary">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h2 className="text-xl font-serif font-medium text-foreground">Content Strategy</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wide font-medium font-sans">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  Positioning
                </div>
                <p className="text-sm text-foreground font-sans leading-relaxed">{plan.positioning}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wide font-medium font-sans">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Target Audience
                </div>
                <p className="text-sm text-foreground font-sans leading-relaxed">{plan.targetAudience}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content Pillars */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="card-editorial p-6"
      >
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground font-sans flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-primary">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              Content Pillars
            </h3>
            <span className="text-xs text-muted-foreground font-sans">Distribution breakdown</span>
          </div>

          {/* Visual bar chart */}
          <div className="space-y-4">
            {plan.pillars.map((pillar, index) => {
              const colors = pillarColors[index % pillarColors.length];
              return (
                <motion.div
                  key={pillar.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${colors.bg}`} />
                      <span className="font-medium text-foreground font-sans text-sm">{pillar.name}</span>
                    </div>
                    <span className={`text-sm font-semibold ${colors.text}`}>{pillar.percentage}%</span>
                  </div>
                  <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pillar.percentage}%` }}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                      className={`absolute inset-y-0 left-0 ${colors.bg} rounded-full`}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground pl-6 font-sans">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Calendar Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-4"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground font-sans flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-primary">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            30-Day Content Calendar
          </h3>
          <div className="flex items-center gap-4 text-xs">
            {Object.entries(platformConfig).map(([platform, config]) => (
              <div key={platform} className="flex items-center gap-1.5">
                <div className={`w-2.5 h-2.5 rounded-full ${config.color}`} />
                <span className="text-muted-foreground font-sans">{platform}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-editorial p-4 overflow-hidden">
          <div className="space-y-3">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-cols-6 gap-2">
                {week.map((day, dayIndex) => {
                  const platform = platformConfig[day.platform];
                  const pillarColor = pillarColorMap[day.pillar];
                  const isSelected = selectedDay?.day === day.day;

                  return (
                    <motion.div
                      key={day.day}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + (weekIndex * 6 + dayIndex) * 0.02 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedDay(isSelected ? null : day)}
                      className={`
                        relative p-3 rounded-xl cursor-pointer transition-all duration-200
                        border ${platform.borderColor} ${platform.hoverBorder}
                        ${platform.lightColor}
                        ${isSelected ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''}
                        hover:shadow-lg hover:shadow-primary/5
                      `}
                    >
                      {/* Day number */}
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-[10px] font-bold text-muted-foreground font-sans">Day {day.day}</span>
                        <div className={`w-5 h-5 rounded-md ${platform.color} flex items-center justify-center text-white shadow-sm`}>
                          {platform.icon}
                        </div>
                      </div>

                      {/* Content type */}
                      <div className="flex items-center gap-1 mb-2">
                        <span className={platform.textColor}>{contentTypeIcons[day.contentType]}</span>
                        <span className="text-[10px] font-medium truncate font-sans">{day.contentType}</span>
                      </div>

                      {/* Pillar indicator */}
                      <div className={`text-[9px] px-1.5 py-0.5 rounded-full ${pillarColor?.light} ${pillarColor?.text} font-medium truncate font-sans`}>
                        {day.pillar}
                      </div>

                      {/* Selected indicator */}
                      {isSelected && (
                        <motion.div
                          layoutId="selected-indicator"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full"
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Expanded Day Detail Panel */}
      <AnimatePresence>
        {selectedDay && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="card-editorial overflow-hidden">
              {/* Header */}
              <div className={`p-6 ${platformConfig[selectedDay.platform].color}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    >
                      <span className="text-xl font-bold text-white font-serif">{selectedDay.day}</span>
                    </motion.div>
                    <div className="text-white">
                      <h4 className="text-lg font-serif font-medium">Day {selectedDay.day}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="bg-white/20 text-white border-0 hover:bg-white/30 text-xs">
                          {selectedDay.platform}
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-0 hover:bg-white/30 text-xs">
                          {selectedDay.contentType}
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-0 hover:bg-white/30 text-xs">
                          {selectedDay.pillar}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedDay(null)}
                    className="text-white hover:bg-white/20"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Hook */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-amber-500">
                        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                      </svg>
                    </div>
                    <h5 className="font-semibold text-amber-600 font-sans text-sm">Hook</h5>
                  </div>
                  <p className="text-base font-medium pl-10 leading-relaxed font-sans">{selectedDay.hook}</p>
                </motion.div>

                {/* Outline */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-blue-500">
                        <line x1="8" y1="6" x2="21" y2="6" />
                        <line x1="8" y1="12" x2="21" y2="12" />
                        <line x1="8" y1="18" x2="21" y2="18" />
                        <line x1="3" y1="6" x2="3.01" y2="6" />
                        <line x1="3" y1="12" x2="3.01" y2="12" />
                        <line x1="3" y1="18" x2="3.01" y2="18" />
                      </svg>
                    </div>
                    <h5 className="font-semibold text-blue-600 font-sans text-sm">Content Outline</h5>
                  </div>
                  <ul className="pl-10 space-y-2">
                    {selectedDay.outline.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <span className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center text-[10px] font-medium text-blue-600 shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground text-sm font-sans">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-primary">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <h5 className="font-semibold text-primary font-sans text-sm">Call to Action</h5>
                  </div>
                  <p className="pl-10 text-muted-foreground text-sm font-sans">{selectedDay.cta}</p>
                </motion.div>

                {/* Caption */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-violet-500">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      </div>
                      <h5 className="font-semibold text-violet-600 font-sans text-sm">Caption</h5>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopyCaption}
                      className="gap-2 text-xs"
                    >
                      <AnimatePresence mode="wait">
                        {copied ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="flex items-center gap-2"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-primary">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            Copied!
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="flex items-center gap-2"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                            Copy Caption
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Button>
                  </div>
                  <div className="pl-10">
                    <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
                      <p className="text-sm leading-relaxed whitespace-pre-line font-sans">{selectedDay.caption}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Hashtags */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-pink-500">
                        <line x1="4" y1="9" x2="20" y2="9" />
                        <line x1="4" y1="15" x2="20" y2="15" />
                        <line x1="10" y1="3" x2="8" y2="21" />
                        <line x1="16" y1="3" x2="14" y2="21" />
                      </svg>
                    </div>
                    <h5 className="font-semibold text-pink-600 font-sans text-sm">Hashtags</h5>
                  </div>
                  <div className="pl-10 flex flex-wrap gap-2">
                    {selectedDay.hashtags.map((tag, index) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.03 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-pink-500/10 text-pink-600 border-pink-500/20 hover:bg-pink-500/20 cursor-default text-xs"
                        >
                          #{tag}
                        </Badge>
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
