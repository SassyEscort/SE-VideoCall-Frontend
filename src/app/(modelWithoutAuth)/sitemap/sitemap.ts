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
      url: 'https://flirtbate.com/cam-to-cam',
      lastModified: new Date(),
      priority: 0.8
    },
    {
      url: 'https://flirtbate.com/sex-chat',
      lastModified: new Date(),
      priority: 0.8
    },
    {
      url: 'https://flirtbate.com/chat-with-girls',
      lastModified: new Date(),
      priority: 0.8
    },
    {
      url: 'https://flirtbate.com/dirty-talks',
      lastModified: new Date(),
      priority: 0.8
    }
  ];
}
