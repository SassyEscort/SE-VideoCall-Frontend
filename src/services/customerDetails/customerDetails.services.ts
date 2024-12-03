import axios from 'axios';
import { GenericRes } from 'services/guestAuth/authuser.services';
import { GenericResponse } from 'types/commonApiTypes';

export type CustomerDetails = {
  customer_email: string;
  customer_id: number;
  customer_name: string;
  customer_user_name: string;
  customer_phone_number: string;
  email_verified: number;
  phone_verified: number;
  free_credits_claimed: number;
};

export type CustomerDetailsRes = {
  data: CustomerDetails;
};

export type FavouriteRes = {
  customer_id: number;
  model_id: number;
  is_active: number;
};

export interface FavouriteDetailsRes extends GenericRes {
  data: FavouriteRes;
}

export type banCustomerParams = {
  email: string;
};

export type BanCustomerDetails = {
  id: number;
  customer_id: number;
  email: string;
  ip_address: string;
  device_signature: string;
  is_active: boolean;
  createdDate: string;
  modifiedDate: string;
};

export type aggregate = {
  total_rows: number;
  page_size: number;
  offset: number;
};

export type BanCustomerData = {
  aggregate: aggregate;
  ban_customers: BanCustomerDetails[];
};

export interface BanCustomerDetailsRes extends GenericRes {
  data: BanCustomerData;
}

export type BanCustomerParams = {
  sort_order: string;
  sort_field: string;
  customer_id: number;
  email: string;
  is_active: number;
  limit: number;
  offset: number;
};

export class CustomerDetailsService {
  static customerModelDetails = async (token: string): Promise<CustomerDetailsRes> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/customer/details`;

      const res = await axios.get<CustomerDetailsRes>(url, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (error) {
      return error as CustomerDetailsRes;
    }
  };

  static favouritePutId = async (model_id: number, token: string): Promise<FavouriteDetailsRes> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/customer/favourite/${model_id}`;

      const res = await axios.put<FavouriteDetailsRes>(
        url,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token
          }
        }
      );

      return res.data;
    } catch (error) {
      return error as FavouriteDetailsRes;
    }
  };

  static banCustomer = async (token: string, params: banCustomerParams): Promise<GenericRes> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/customer/ban-customer`;

      const res = await axios.post<GenericRes>(url, params, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (error) {
      return error as GenericRes;
    }
  };

  static banCustomerDetails = async (params: BanCustomerParams, token: string): Promise<BanCustomerDetailsRes> => {
    let query = '';

    if (params.sort_order) {
      query += `&sort_order=${params.sort_order}`;
    }
    if (params.sort_field) {
      query += `&sort_field=${params.sort_field}`;
    }
    if (params.is_active) {
      query += `&is_active=${params.is_active}`;
    }
    if (params.customer_id) {
      query += `&customer_id=${params.customer_id}`;
    }
    if (params.email) {
      query += `&email=${params.email}`;
    }

    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/customer/ban-customer?${query}`;

      const res = await axios.get<BanCustomerDetailsRes>(url, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (error) {
      return error as BanCustomerDetailsRes;
    }
  };

  static deleteBanCustomer = async (id: number, token: string): Promise<GenericResponse> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/customer/ban-customer/${id}`;

      const res = await axios.delete<GenericResponse>(url, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (error) {
      return error as GenericResponse;
    }
  };
}
