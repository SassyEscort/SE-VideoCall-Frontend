import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  async function getCountry() {
    let country = [];
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/catalog/country`, {
        next: { revalidate: 10 }
      });

      const countryData = await res.json();
      if (countryData?.code === 200 && countryData.data?.length) country = countryData.data;
    } catch {
      /* empty */
    }
    return country;
  }

  const country = await getCountry();

  return [
    ...country.map((x: any) => ({
      url: `https://flirtbate.com/${x.name}`,
      lastModified: new Date(),
      priority: 0.8
    }))
  ];
}
