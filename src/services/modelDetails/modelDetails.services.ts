import axios, { AxiosError } from 'axios';
import { getUserTokenServer } from 'utils/getSessionData';

export class ModelDetailsService {
  static getModelDetails = async (id: number) => {
    try {
      const token = await getUserTokenServer();

      const res = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/details/${id}`, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data || { error_message: error.message };
    }
  };
}
