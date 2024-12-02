import axios from 'axios';
import { GenericResponse } from 'types/commonApiTypes';

export type AdminPackagesRes = {
  id: number;
  amount: number;
  credits: number;
  discount: number;
  is_active: boolean;
  link: string;
  tag?: string;
  label?: string;
};

export type AdminPackageUpdateParams = {
  credits: number;
  amount: number;
  discount: number;
  tag: string;
};

export type AdminPackagesResponse = GenericResponse & {
  data: { plans: AdminPackagesRes[] };
};

export type AdminPackageReportParams = {
  filter: number;
  date_range: {
    start_date: string;
    end_date: string;
  };
};

export type credit_packs = {
  id: number;
  credits: number;
  amount: string;
  total_credits_purchased: number;
};

export type creditsReportData = {
  credit_packs: credit_packs[];
  aggregate: {
    total_rows: number;
    page_size: number;
    offset: number;
  };
};

export type PackageBarChartData = {
  month: string;
  calls: number;
  revenue: number;
};

export type AdminPackageReportResponse = GenericResponse & {
  data: {
    credits_report: creditsReportData;
    bar_chart: PackageBarChartData[];
  };
};

export class adminCustomerPackagesServices {
  static getCustomerPackages = async (token: string): Promise<AdminPackagesResponse> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/credits/credit-package?limit=1000&offset=0`;

      const res = await axios.get<AdminPackagesResponse>(url, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (error) {
      return error as AdminPackagesResponse;
    }
  };

  static deletePackageById = async (id: number, token: string): Promise<GenericResponse> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/credits/credit-package/${id}`;

      const res = await axios.delete<GenericResponse>(url, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (error) {
      return error as GenericResponse;
    }
  };

  static addNewPackage = async (params: AdminPackageUpdateParams, token: string): Promise<GenericResponse> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/credits/credit-package`;

      const res = await axios.post<GenericResponse>(url, params, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (error: any) {
      return error?.response?.data as GenericResponse;
    }
  };

  static updatePackage = async (pack_id: number, params: AdminPackageUpdateParams, token: string): Promise<GenericResponse> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/credits/credit-package/${pack_id}`;

      const res = await axios.patch<GenericResponse>(url, params, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (error) {
      return error as GenericResponse;
    }
  };

  static getPackagesReport = async (
    params: AdminPackageReportParams,
    offset: number,
    limit: number,
    token: string
  ): Promise<AdminPackageReportResponse> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/credits/credits-report?limit=${limit}&offset=${offset}`;

      const res = await axios.post<AdminPackageReportResponse>(url, params, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (error: any) {
      return error?.response?.data as AdminPackageReportResponse;
    }
  };
}
