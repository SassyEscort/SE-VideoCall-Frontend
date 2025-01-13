export type ExperimentRes = {
  experiment_id: number;
  experiment_name: string;
  experiment_description: string;
  variation_id: number;
  variation_name: string;
  variation_description: string;
};

export type CarousalModelImageRes = {
  id: number;
  link: string;
};

export class ABTestServices {
  static fetchPageExperiment = async (token: string, page_url: string): Promise<ExperimentRes[]> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/abtest/experiment?page_url=${page_url}`;

      const res = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });
      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      return data.data;
    } catch (err: any) {
      return [] as ExperimentRes[];
    }
  };

  static fetchGuestPageExperiment = async (): Promise<ExperimentRes[]> => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/abtest/guest-experiment`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      return data.data;
    } catch (err: any) {
      return [] as ExperimentRes[];
    }
  };

  static fetchcarouselModelImages = async (): Promise<CarousalModelImageRes[]> => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/catalog/carousel-models`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      return data.data;
    } catch (err: any) {
      return [] as CarousalModelImageRes[];
    }
  };
}
