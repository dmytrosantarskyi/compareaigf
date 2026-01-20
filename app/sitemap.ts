import { MetadataRoute } from 'next';
import { apps } from '@/data/apps';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://compareaigf.com';
  const currentDate = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Generate comparison pages for popular apps
  // Create comparisons for top 10 apps with each other
  const popularApps = apps.slice(0, 10);
  const comparisonPages: MetadataRoute.Sitemap = [];

  for (let i = 0; i < popularApps.length; i++) {
    for (let j = i + 1; j < popularApps.length; j++) {
      const app1 = popularApps[i];
      const app2 = popularApps[j];
      // Normalize order: smaller slug first
      const slug1 = app1.slug < app2.slug ? app1.slug : app2.slug;
      const slug2 = app1.slug < app2.slug ? app2.slug : app1.slug;
      
      comparisonPages.push({
        url: `${baseUrl}/compare/${slug1}-vs-${slug2}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }
  }

  // Generate additional comparisons for all apps with top 5 most popular
  const top5Apps = apps.slice(0, 5);
  const additionalComparisons: MetadataRoute.Sitemap = [];

  for (let i = 5; i < apps.length; i++) {
    for (const topApp of top5Apps) {
      const app1 = apps[i];
      const app2 = topApp;
      const slug1 = app1.slug < app2.slug ? app1.slug : app2.slug;
      const slug2 = app1.slug < app2.slug ? app2.slug : app1.slug;
      
      additionalComparisons.push({
        url: `${baseUrl}/compare/${slug1}-vs-${slug2}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }
  }

  // Combine all pages
  return [...staticPages, ...comparisonPages, ...additionalComparisons];
}
