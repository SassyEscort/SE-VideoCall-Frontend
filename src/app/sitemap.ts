import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://flirtbate.com/sitemap/sitemap.xml',
      lastModified: new Date(),
      priority: 1
    }
  ];
}
