// API service to connect to the FastAPI backend

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8020';

export interface BackendAuditResponse {
  id: string;
  url: string;
  status: 'processing' | 'completed' | 'failed';
  createdAt: string;
  result?: {
    overallScore: number;
    summary: string;
    brandRoast: string;
    scores: {
      positioning: { score: number; label: string; reasoning: string };
      messaging: { score: number; label: string; reasoning: string };
      trustSignals: { score: number; label: string; reasoning: string };
      callToAction: { score: number; label: string; reasoning: string };
      contentClarity: { score: number; label: string; reasoning: string };
      tiktokPresence?: { score: number; label: string; reasoning: string };
    };
    priorityFixes: Array<{
      rank: number;
      title: string;
      problem: string;
      solution: string;
      impact: 'High' | 'Medium' | 'Low';
    }>;
    findings: {
      whatYouSell: { status: string; current: string; analysis: string };
      whoItsFor: { status: string; current: string; analysis: string };
      whyYou: { status: string; current: string; analysis: string };
      proofElements: { status: string; current: string; analysis: string };
      ctaClarity: { status: string; current: string; analysis: string };
    };
    rewrites: {
      headline: { current: string; suggested: string; reasoning: string };
      subheadline: { current: string; suggested: string; reasoning: string };
      cta: { current: string; suggested: string; reasoning: string };
    };
    socialAudit?: {
      profiles: Array<{ platform: string; url: string; username?: string }>;
      audits: Array<{
        platform: string;
        url: string;
        username?: string;
        performance: {
          followers?: number;
          totalLikes?: number;
          posts?: number;
          engagementRate?: number;
          averageViews?: number;
        };
      }>;
      competitors?: Array<{
        name: string;
        url: string;
        tiktokUrl?: string;
        tiktokMetrics?: {
          followers?: number;
          likes?: number;
          videos?: number;
        };
      }>;
      brandInsights?: {
        targetAudience?: string[];
        brandIdentity?: string;
        brandValues?: string[];
        productCategories?: string[];
      };
    };
  };
  plan?: {
    positioning: string;
    targetAudience: string;
    pillars: Array<{ name: string; description: string; percentage: number }>;
    calendar: Array<{
      day: number;
      contentType: string;
      platform: string;
      pillar: string;
      hook: string;
      outline: string[];
      cta: string;
      caption: string;
      hashtags: string[];
    }>;
  };
}

// Create a new audit
export async function createAudit(url: string): Promise<{ audit_id: string; status: string }> {
  const response = await fetch(`${API_BASE_URL}/api/audit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    throw new Error('Failed to create audit');
  }

  return response.json();
}

// Get audit by ID
export async function getAudit(auditId: string): Promise<BackendAuditResponse> {
  const response = await fetch(`${API_BASE_URL}/api/audit/${auditId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch audit');
  }

  return response.json();
}

// Get sample audit
export async function getSampleAudit(): Promise<BackendAuditResponse> {
  const response = await fetch(`${API_BASE_URL}/api/sample`);

  if (!response.ok) {
    throw new Error('Failed to fetch sample audit');
  }

  return response.json();
}

// Health check
export async function healthCheck(): Promise<{ status: string }> {
  const response = await fetch(`${API_BASE_URL}/health`);
  return response.json();
}
