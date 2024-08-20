import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://flirtbate.com/',
      lastModified: new Date(),
      priority: 1
    },
    {
      url: 'https://flirtbate.com/model/sitemap.xml',
      lastModified: new Date(),
      priority: 0.8
    }
  ];
}
