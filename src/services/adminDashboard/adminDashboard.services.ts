import axios, { AxiosError } from 'axios';

export type DashboardModelDetails = {
  startDate: string;
  endDate: string;
};

export type DashboardParams = {
  filter: string;
  dateRange: DashboardModelDetails[];
};

export type DashboardModelDetailsRes = {
  data: string | null;
  code: number;
  error: string | null;
  message: string;
};

export class adminDashboardServices {
  static adminDashboard = async (params: DashboardParams, token: string): Promise<DashboardModelDetailsRes> => {
    try {
      const res = await axios.post<DashboardModelDetailsRes>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/analytics/dashboard-analytics`,
        params,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token
          }
        }
      );

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as DashboardModelDetailsRes;
    }
  };
}
