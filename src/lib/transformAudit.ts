// Transform backend response to frontend AuditData format

import type { BackendAuditResponse } from './api';
import type { AuditData, CategoryScore, WeakPoint, Improvement, KPI, CompetitorData, ExtendedCompetitorData, TikTokMetrics } from '@/data/chromoryAuditData';

function extractDomain(url: string): string {
  try {
    const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
    return urlObj.hostname.replace('www.', '');
  } catch {
    return url;
  }
}

function extractBrandName(url: string): string {
  const domain = extractDomain(url);
  const parts = domain.split('.');
  const name = parts[0];
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function mapLabelToCategory(label: string): 'Strong' | 'Needs Work' | 'Critical' {
  if (label === 'Strong') return 'Strong';
  if (label === 'Critical' || label === 'Not Found') return 'Critical';
  return 'Needs Work';
}

function convertScores(scores: BackendAuditResponse['result']['scores']): {
  positioning: CategoryScore;
  messaging: CategoryScore;
  trustSignals: CategoryScore;
  callToAction: CategoryScore;
  contentClarity: CategoryScore;
} {
  return {
    positioning: {
      score: scores.positioning?.score || 50,
      label: mapLabelToCategory(scores.positioning?.label || 'Needs Work'),
      reasoning: scores.positioning?.reasoning || 'No analysis available',
    },
    messaging: {
      score: scores.messaging?.score || 50,
      label: mapLabelToCategory(scores.messaging?.label || 'Needs Work'),
      reasoning: scores.messaging?.reasoning || 'No analysis available',
    },
    trustSignals: {
      score: scores.trustSignals?.score || 50,
      label: mapLabelToCategory(scores.trustSignals?.label || 'Needs Work'),
      reasoning: scores.trustSignals?.reasoning || 'No analysis available',
    },
    callToAction: {
      score: scores.callToAction?.score || 50,
      label: mapLabelToCategory(scores.callToAction?.label || 'Needs Work'),
      reasoning: scores.callToAction?.reasoning || 'No analysis available',
    },
    contentClarity: {
      score: scores.contentClarity?.score || 50,
      label: mapLabelToCategory(scores.contentClarity?.label || 'Needs Work'),
      reasoning: scores.contentClarity?.reasoning || 'No analysis available',
    },
  };
}

function convertPriorityFixesToWeakPoints(fixes: BackendAuditResponse['result']['priorityFixes']): WeakPoint[] {
  return (fixes || []).slice(0, 4).map(fix => ({
    title: fix.title,
    description: fix.problem,
    impact: fix.impact,
  }));
}

function convertPriorityFixesToImprovements(fixes: BackendAuditResponse['result']['priorityFixes']): Improvement[] {
  return (fixes || []).slice(0, 4).map(fix => ({
    title: fix.title,
    description: fix.solution,
    effort: fix.impact === 'High' ? 'Medium' : 'Easy',
    impact: fix.impact,
  }));
}

// Only generate KPIs from actual score data
function generateWebsiteKPIs(scores: BackendAuditResponse['result']['scores']): KPI[] {
  return [
    { label: 'Positioning', value: `${scores.positioning?.score || 0}%`, change: 0, trend: 'stable' as const },
    { label: 'Messaging', value: `${scores.messaging?.score || 0}%`, change: 0, trend: 'stable' as const },
    { label: 'Trust Signals', value: `${scores.trustSignals?.score || 0}%`, change: 0, trend: 'stable' as const },
    { label: 'CTA Strength', value: `${scores.callToAction?.score || 0}%`, change: 0, trend: 'stable' as const },
  ];
}

// Only show real overall KPIs based on what we have
function generateOverallKPIs(overallScore: number, predictedScore: number): KPI[] {
  return [
    { label: 'Overall Score', value: `${overallScore}%`, change: 0, trend: 'stable' as const },
    { label: 'Growth Potential', value: `+${predictedScore - overallScore} pts`, change: predictedScore - overallScore, trend: 'up' as const },
  ];
}

function generateTikTokScores(tiktokPresence?: { score: number; label: string; reasoning: string }): {
  positioning: CategoryScore;
  messaging: CategoryScore;
  trustSignals: CategoryScore;
  callToAction: CategoryScore;
  contentClarity: CategoryScore;
} {
  const score = tiktokPresence?.score || 0;
  const label = mapLabelToCategory(tiktokPresence?.label || 'Critical');

  return {
    positioning: { score, label, reasoning: tiktokPresence?.reasoning || 'No TikTok presence found' },
    messaging: { score, label, reasoning: 'No TikTok content to analyze' },
    trustSignals: { score: Math.max(0, score - 10), label: 'Critical', reasoning: 'No social proof available' },
    callToAction: { score: Math.max(0, score - 5), label, reasoning: 'No TikTok CTAs to analyze' },
    contentClarity: { score: Math.min(100, score + 10), label: 'Critical', reasoning: 'No content strategy visible' },
  };
}

function generateTikTokMetrics(audit?: BackendAuditResponse['result']['socialAudit']): TikTokMetrics | null {
  const tiktokAudit = audit?.audits?.find(a => a.platform === 'tiktok');

  if (!tiktokAudit?.performance) {
    return null; // Return null if no TikTok data
  }

  return {
    totalViews: tiktokAudit.performance.averageViews ? tiktokAudit.performance.averageViews * (tiktokAudit.performance.posts || 10) : 0,
    viewsChange: 0,
    totalLikes: tiktokAudit.performance.totalLikes || 0,
    likesChange: 0,
    totalComments: 0,
    commentsChange: 0,
    totalShares: 0,
    sharesChange: 0,
    totalSaves: 0,
    savesChange: 0,
    avgWatchTime: 0,
    watchTimeChange: 0,
    topVideos: [],
  };
}

function generateCompetitors(socialAudit?: BackendAuditResponse['result']['socialAudit']): CompetitorData[] {
  if (!socialAudit?.competitors || socialAudit.competitors.length === 0) {
    return []; // Return empty if no competitor data
  }

  return socialAudit.competitors.map((comp) => ({
    name: comp.name,
    score: comp.tiktokMetrics?.followers ? Math.min(90, 50 + Math.floor(comp.tiktokMetrics.followers / 1000)) : 50,
    strengths: comp.tiktokMetrics?.followers ? [`${(comp.tiktokMetrics.followers / 1000).toFixed(1)}K TikTok followers`] : [],
    weaknesses: [],
  }));
}

function generateExtendedCompetitors(socialAudit?: BackendAuditResponse['result']['socialAudit']): ExtendedCompetitorData[] {
  if (!socialAudit?.competitors || socialAudit.competitors.length === 0) {
    return [];
  }

  return socialAudit.competitors.map((comp) => ({
    name: comp.name,
    url: comp.url,
    score: comp.tiktokMetrics?.followers ? Math.min(90, 50 + Math.floor(comp.tiktokMetrics.followers / 1000)) : 55,
    whatTheyDoBetter: comp.tiktokMetrics?.followers
      ? [`${(comp.tiktokMetrics.followers / 1000).toFixed(1)}K TikTok followers`]
      : [],
    howToMatch: ['Increase posting frequency', 'Improve content quality'],
    metrics: comp.tiktokMetrics ? [
      {
        label: 'TikTok Followers',
        theirValue: `${(comp.tiktokMetrics.followers || 0 / 1000).toFixed(1)}K`,
        yourValue: 'N/A',
        comparison: 'worse' as const,
      },
    ] : [],
  }));
}

export function transformBackendToAuditData(response: BackendAuditResponse): AuditData {
  const result = response.result;
  const plan = response.plan;

  if (!result) {
    throw new Error('Audit result not available');
  }

  const brandUrl = extractDomain(response.url);
  const brandName = extractBrandName(response.url);
  const predictedScore = Math.min(100, result.overallScore + 15);

  // Check if we have TikTok data
  const hasTikTokData = result.socialAudit?.audits?.some(a => a.platform === 'tiktok') || false;
  const hasTikTokPresence = result.scores.tiktokPresence && result.scores.tiktokPresence.score > 0;

  // Check if we have competitor data
  const hasCompetitorData = result.socialAudit?.competitors && result.socialAudit.competitors.length > 0;

  return {
    brandName,
    brandUrl,
    overallScore: result.overallScore,
    predictedScore,
    auditDate: response.createdAt,
    overallKpis: generateOverallKPIs(result.overallScore, predictedScore),

    websiteAudit: {
      scores: convertScores(result.scores),
      summary: result.summary,
      weakPoints: convertPriorityFixesToWeakPoints(result.priorityFixes),
      improvements: convertPriorityFixesToImprovements(result.priorityFixes),
      kpis: generateWebsiteKPIs(result.scores),
      keywords: [], // We don't have keyword data from backend
    },

    tiktokAudit: {
      scores: generateTikTokScores(result.scores.tiktokPresence),
      summary: hasTikTokPresence
        ? result.scores.tiktokPresence?.reasoning || 'TikTok analysis complete.'
        : 'No TikTok presence discovered. This represents a significant growth opportunity for your brand.',
      weakPoints: !hasTikTokPresence
        ? [{ title: 'No TikTok Presence', description: 'Your brand has no TikTok account or it could not be found.', impact: 'High' as const }]
        : [],
      improvements: !hasTikTokPresence
        ? [
            { title: 'Create TikTok Account', description: 'Establish your brand presence on TikTok to reach a younger audience.', effort: 'Easy' as const, impact: 'High' as const },
            { title: 'Post Viral Content', description: 'Create engaging short-form videos showcasing your product/service.', effort: 'Medium' as const, impact: 'High' as const },
          ]
        : [],
      kpis: [], // Empty - we'll hide this section if empty
      metrics: generateTikTokMetrics(result.socialAudit),
    },

    competitors: generateCompetitors(result.socialAudit),
    extendedCompetitors: generateExtendedCompetitors(result.socialAudit),
    brandRoast: result.brandRoast,

    growthStrategy: {
      summary: `Based on your audit score of ${result.overallScore}, we've identified key opportunities to improve your brand positioning and drive growth. Focus on the priority fixes to see the biggest impact.`,
      contentPlan: plan || {
        positioning: 'Establish your brand as a trusted leader in your industry',
        targetAudience: 'Business owners and decision-makers looking for growth solutions',
        pillars: [
          { name: 'Education', description: 'Share valuable insights', percentage: 40 },
          { name: 'Social Proof', description: 'Showcase results', percentage: 30 },
          { name: 'Behind the Scenes', description: 'Build authenticity', percentage: 20 },
          { name: 'Engagement', description: 'Community interaction', percentage: 10 },
        ],
        calendar: [],
      },
    },
  };
}
