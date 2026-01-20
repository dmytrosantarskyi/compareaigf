import { getAppBySlug } from '@/data/apps';

/**
 * Parses a comparison string like "candy-ai-vs-lovescape" into two slugs
 * Handles both "slug1-vs-slug2" and "slug2-vs-slug1" formats
 */
export function parseComparisonSlugs(comparison: string): { slug1: string; slug2: string } | null {
  const parts = comparison.split('-vs-');
  
  if (parts.length !== 2) {
    return null;
  }
  
  const slug1 = parts[0].trim();
  const slug2 = parts[1].trim();
  
  // Validate that both slugs exist
  const app1 = getAppBySlug(slug1);
  const app2 = getAppBySlug(slug2);
  
  if (!app1 || !app2) {
    return null;
  }
  
  return { slug1, slug2 };
}

/**
 * Normalizes comparison order - always returns slugs in alphabetical order
 * This ensures "candy-ai-vs-lovescape" and "lovescape-vs-candy-ai" are treated the same
 */
export function normalizeComparisonSlugs(slug1: string, slug2: string): { slug1: string; slug2: string } {
  return slug1 < slug2 ? { slug1, slug2 } : { slug1: slug2, slug2: slug1 };
}
