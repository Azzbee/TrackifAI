import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Globe, Video, Users, Flame, TrendingUp, Calendar, Target, Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { chromoryAuditData, DEMO_AUDIT_ID, type AuditData } from "@/data/chromoryAuditData";
import AuditRadarChart from "@/components/audit/AuditRadarChart";
import BrandRoast from "@/components/audit/BrandRoast";
import ScoreCard from "@/components/audit/ScoreCard";
import WeakPointsCard from "@/components/audit/WeakPointsCard";
import ImprovementsCard from "@/components/audit/ImprovementsCard";
import CompetitorAnalysis from "@/components/audit/CompetitorAnalysis";
import GrowthPrediction from "@/components/audit/GrowthPrediction";
import KeywordAnalysis from "@/components/audit/KeywordAnalysis";
import TikTokMetrics from "@/components/audit/TikTokMetrics";
import ExtendedCompetitorCard from "@/components/audit/ExtendedCompetitorCard";
import ContentCalendar from "@/components/audit/ContentCalendar";
import Navigation from "@/components/landing/Navigation";
import { getAudit } from "@/lib/api";
import { transformBackendToAuditData } from "@/lib/transformAudit";

const AuditDashboard = () => {
  const { id } = useParams();
  const [data, setData] = useState<AuditData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAudit = async () => {
      if (!id) return;

      // Use demo data for demo ID
      if (id === DEMO_AUDIT_ID) {
        setData(chromoryAuditData);
        setLoading(false);
        return;
      }

      try {
        const response = await getAudit(id);

        if (response.status === 'processing') {
          setError('Audit is still processing. Please wait...');
          setLoading(false);
          return;
        }

        if (response.status === 'failed') {
          setError('Audit failed. Please try again.');
          setLoading(false);
          return;
        }

        // Transform backend response to frontend format
        const auditData = transformBackendToAuditData(response);
        setData(auditData);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch audit:', err);
        setError('Failed to load audit. Please try again.');
        setLoading(false);
      }
    };

    fetchAudit();
  }, [id]);

  const handleExportPDF = () => {
    alert("PDF export coming soon! This feature is in development.");
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-16 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="card-editorial p-12">
              <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
              <p className="text-muted-foreground font-sans">Loading audit results...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Error state
  if (error || !data) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-16 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="card-editorial p-12">
              <p className="text-red-500 font-sans mb-4">{error || 'Audit data not available'}</p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-sage font-sans text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 font-sans text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-2">
                  Marketing Audit: <span className="text-primary">{data.brandName}</span>
                </h1>
                <p className="text-muted-foreground font-sans">
                  {data.brandUrl} • Analyzed {new Date(data.auditDate).toLocaleDateString()}
                </p>
              </div>

              <Button onClick={handleExportPDF} className="btn-sage gap-2">
                <Download className="w-4 h-4" />
                Export PDF
              </Button>
            </div>
          </motion.div>

          {/* Key Performance Indicators - Score + KPIs merged */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <div className="card-editorial p-6">
              <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-6 font-sans flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Key Performance Indicators
              </h3>
              <div className={`grid ${data.overallKpis.length > 2 ? 'lg:grid-cols-[240px_1fr]' : 'lg:grid-cols-[240px_auto]'} gap-6 items-center`}>
                {/* Score on left */}
                <div className="flex flex-col items-center lg:items-start">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-7xl font-serif font-bold text-primary">{data.overallScore}</span>
                    <span className="text-xl text-muted-foreground font-sans">/100</span>
                  </div>
                  <p className={`text-sm font-medium font-sans mb-4 ${data.overallScore >= 80 ? 'text-primary' : data.overallScore >= 60 ? 'text-amber-500' : 'text-red-500'}`}>
                    {data.overallScore >= 80 ? 'Excellent' : data.overallScore >= 60 ? 'Needs Work' : 'Critical'}
                  </p>
                  <div className="w-full p-3 rounded-lg bg-muted/30 border border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="text-xs text-muted-foreground font-sans">Potential:</span>
                        <span className="text-sm font-medium text-primary font-sans">{data.predictedScore}</span>
                      </div>
                      <span className="text-xs font-medium text-primary">+{data.predictedScore - data.overallScore} pts</span>
                    </div>
                  </div>
                </div>

                {/* KPIs on right - only show if we have more than the score-related ones */}
                {data.overallKpis.length > 0 && (
                  <div className={`grid ${data.overallKpis.length >= 4 ? 'grid-cols-3' : data.overallKpis.length >= 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-3`}>
                    {data.overallKpis.map((kpi, i) => (
                      <motion.div
                        key={kpi.label}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.05, duration: 0.3 }}
                        className="p-3 rounded-lg bg-muted/30 border border-border"
                      >
                        <p className="text-xs text-muted-foreground font-sans mb-1">{kpi.label}</p>
                        <span className="text-xl font-serif font-bold text-foreground mb-1">{kpi.value}</span>
                        {kpi.change !== 0 && (
                          <span
                            className={`text-xs font-medium ml-2 ${
                              kpi.trend === "up"
                                ? "text-primary"
                                : kpi.trend === "down"
                                  ? "text-red-500"
                                  : "text-muted-foreground"
                            }`}
                          >
                            {kpi.trend === "up" ? "↑" : kpi.trend === "down" ? "↓" : ""} {Math.abs(kpi.change)}%
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Brand Roast */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-8"
          >
            <div className="card-editorial p-6">
              <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4 font-sans flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-500" />
                Brand Roast
              </h3>
              <BrandRoast roast={data.brandRoast} />
            </div>
          </motion.div>

          {/* Tabs */}
          <Tabs defaultValue="website" className="space-y-6">
            <div className="flex justify-center">
              <TabsList className="bg-card border border-border p-1.5 h-auto inline-flex">
                <TabsTrigger
                  value="website"
                  className="gap-2 px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Globe className="w-4 h-4" />
                  Website
                </TabsTrigger>
                <TabsTrigger
                  value="tiktok"
                  className="gap-2 px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Video className="w-4 h-4" />
                  TikTok
                </TabsTrigger>
                <TabsTrigger
                  value="competitors"
                  className="gap-2 px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Users className="w-4 h-4" />
                  Competitors
                </TabsTrigger>
                <TabsTrigger
                  value="strategy"
                  className="gap-2 px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Calendar className="w-4 h-4" />
                  30-Day Plan
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Website Tab */}
            <TabsContent value="website" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-editorial p-6">
                  <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4 font-sans">
                    Website Health
                  </h3>
                  <AuditRadarChart scores={data.websiteAudit.scores} />
                </div>
                <div className="card-editorial p-6">
                  <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4 font-sans flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Summary
                  </h3>
                  <p className="text-foreground font-sans leading-relaxed mb-6">{data.websiteAudit.summary}</p>

                  {/* Website KPIs */}
                  <div className="grid grid-cols-2 gap-3">
                    {data.websiteAudit.kpis.map((kpi, i) => (
                      <div key={kpi.label} className="p-3 rounded-lg bg-muted/30 border border-border">
                        <p className="text-xs text-muted-foreground font-sans mb-1">{kpi.label}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">{kpi.value}</span>
                          <span
                            className={`text-xs ${
                              kpi.trend === "up"
                                ? "text-primary"
                                : kpi.trend === "down"
                                  ? "text-red-500"
                                  : "text-muted-foreground"
                            }`}
                          >
                            {kpi.trend === "up" ? "↑" : kpi.trend === "down" ? "↓" : "→"} {Math.abs(kpi.change)}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Keyword Analysis */}

              <div className="grid md:grid-cols-2 gap-6">
                <WeakPointsCard weakPoints={data.websiteAudit.weakPoints} />
                <ImprovementsCard improvements={data.websiteAudit.improvements} />
              </div>

              {/* Only show keyword analysis if we have keywords */}
              {data.websiteAudit.keywords && data.websiteAudit.keywords.length > 0 && (
                <KeywordAnalysis keywords={data.websiteAudit.keywords} delay={0.2} />
              )}
            </TabsContent>

            {/* TikTok Tab */}
            <TabsContent value="tiktok" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-editorial p-6">
                  <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4 font-sans">
                    TikTok Health
                  </h3>
                  <AuditRadarChart scores={data.tiktokAudit.scores} />
                </div>
                <div className="card-editorial p-6">
                  <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4 font-sans flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Summary
                  </h3>
                  <p className="text-foreground font-sans leading-relaxed mb-6">{data.tiktokAudit.summary}</p>

                  {/* TikTok KPIs - only show if we have data */}
                  {data.tiktokAudit.kpis && data.tiktokAudit.kpis.length > 0 && (
                    <div className="grid grid-cols-2 gap-3">
                      {data.tiktokAudit.kpis.map((kpi, i) => (
                        <div key={kpi.label} className="p-3 rounded-lg bg-muted/30 border border-border">
                          <p className="text-xs text-muted-foreground font-sans mb-1">{kpi.label}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-foreground">{kpi.value}</span>
                            {kpi.change !== 0 && (
                              <span
                                className={`text-xs ${
                                  kpi.trend === "up"
                                    ? "text-primary"
                                    : kpi.trend === "down"
                                      ? "text-red-500"
                                      : "text-muted-foreground"
                                }`}
                              >
                                {kpi.trend === "up" ? "↑" : kpi.trend === "down" ? "↓" : ""} {Math.abs(kpi.change)}%
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Extended TikTok Metrics - only show if we have data */}
              {data.tiktokAudit.metrics && (
                <TikTokMetrics metrics={data.tiktokAudit.metrics} delay={0.2} />
              )}

              {/* Weak points and improvements - only show if we have data */}
              {((data.tiktokAudit.weakPoints && data.tiktokAudit.weakPoints.length > 0) ||
                (data.tiktokAudit.improvements && data.tiktokAudit.improvements.length > 0)) && (
                <div className="grid md:grid-cols-2 gap-6">
                  {data.tiktokAudit.weakPoints && data.tiktokAudit.weakPoints.length > 0 && (
                    <WeakPointsCard weakPoints={data.tiktokAudit.weakPoints} />
                  )}
                  {data.tiktokAudit.improvements && data.tiktokAudit.improvements.length > 0 && (
                    <ImprovementsCard improvements={data.tiktokAudit.improvements} />
                  )}
                </div>
              )}
            </TabsContent>

            {/* Competitors Tab */}
            <TabsContent value="competitors" className="space-y-6">
              {/* Check if we have competitor data */}
              {data.competitors && data.competitors.length > 0 ? (
                <>
                  {/* Overview */}
                  <CompetitorAnalysis competitors={data.competitors} yourScore={data.overallScore} />

                  {/* Extended Competitor Cards */}
                  {data.extendedCompetitors && data.extendedCompetitors.length > 0 && (
                    <div className="grid lg:grid-cols-3 gap-6">
                      {data.extendedCompetitors.map((competitor, i) => (
                        <ExtendedCompetitorCard
                          key={competitor.name}
                          competitor={competitor}
                          yourScore={data.overallScore}
                          index={i}
                          delay={0.3}
                        />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="card-editorial p-8 text-center">
                  <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-serif font-medium text-foreground mb-2">No Competitor Data Available</h3>
                  <p className="text-muted-foreground font-sans max-w-md mx-auto">
                    We couldn't find competitor information for this brand. Competitor analysis requires TikTok profiles to compare against.
                  </p>
                </div>
              )}
            </TabsContent>

            {/* Strategy Tab */}
            <TabsContent value="strategy" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <GrowthPrediction currentScore={data.overallScore} predictedScore={data.predictedScore} />
                <div className="card-editorial p-6">
                  <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4 font-sans flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    Strategy Overview
                  </h3>
                  <p className="text-foreground font-sans leading-relaxed mb-4">{data.growthStrategy.summary}</p>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 mb-4">
                    <p className="text-sm font-medium text-foreground font-sans mb-2">Positioning:</p>
                    <p className="text-sm text-muted-foreground font-sans">
                      {data.growthStrategy.contentPlan.positioning}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/30 border border-border">
                    <p className="text-sm font-medium text-foreground font-sans mb-2">Target Audience:</p>
                    <p className="text-sm text-muted-foreground font-sans">
                      {data.growthStrategy.contentPlan.targetAudience}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Pillars */}
              <div className="card-editorial p-6">
                <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4 font-sans flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  Content Pillars
                </h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {data.growthStrategy.contentPlan.pillars.map((pillar, i) => (
                    <motion.div
                      key={pillar.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                      className="p-4 rounded-xl bg-muted/30 border border-border text-center"
                    >
                      <div className="text-2xl font-serif font-semibold text-primary mb-2">{pillar.percentage}%</div>
                      <p className="font-medium text-foreground font-sans text-sm mb-1">{pillar.name}</p>
                      <p className="text-xs text-muted-foreground font-sans">{pillar.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Content Calendar */}
              <ContentCalendar plan={data.growthStrategy.contentPlan} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default AuditDashboard;
