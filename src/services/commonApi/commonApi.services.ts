import axios, { AxiosError } from 'axios';

export class CommonServices {
  static getCountry = async (token: string) => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/catalog/country?limit=1000`, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data || { error_message: error.message };
    }
  };

  static getNationality = async (token: string) => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/catalog/nationality?limit=1000`, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data || { error_message: error.message };
    }
  };

  static getLanguages = async (token: string) => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/catalog/languages?limit=1000`, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data || { error_message: error.message };
    }
  };
}
