import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  async function getModels() {
    let models = [];
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/model/listing?offset=1&limit=10000000`, {
        next: { revalidate: 10 }
      });

      const modelsData = await res.json();
      if (modelsData?.code === 200 && modelsData.data?.model_details?.length) {
        models = modelsData.data.model_details;
      }
    } catch {
      /* empty */
    }

    return models;
  }

  const models = await getModels();
  return [
    ...models.map((x: any) => ({
      url: `https://flirtbate.com/details/${x.user_name}`,
      lastModified: new Date(),
      priority: 0.8
    }))
  ];
}
