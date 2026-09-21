import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const SITE_URL = 'https://remap.excelmec.org';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date('2026-09-19'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
