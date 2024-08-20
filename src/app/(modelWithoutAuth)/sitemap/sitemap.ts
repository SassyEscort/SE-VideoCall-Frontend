import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://flirtbate.com/',
      lastModified: new Date(),
      priority: 1
    },
    {
      url: 'https://flirtbate.com/faq',
      lastModified: new Date(),
      priority: 0.8
    },
    {
      url: 'https://flirtbate.com/privacy-statement',
      lastModified: new Date(),
      priority: 0.8
    },
    {
      url: 'https://flirtbate.com/cookie-statement',
      lastModified: new Date(),
      priority: 0.8
    },
    {
      url: 'https://flirtbate.com/terms-and-condition',
      lastModified: new Date(),
      priority: 0.8
    }
  ];
}
