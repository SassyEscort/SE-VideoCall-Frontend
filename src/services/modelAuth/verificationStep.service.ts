import axios, { AxiosError } from 'axios';
import { getUserTokenClient } from 'utils/getSessionData';
import { VerificationPayload } from './types';
export class VerificationStepService {
  static verificationtepSecond = async (params: VerificationPayload) => {
    try {
      const token = await getUserTokenClient();
      const res = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/photos`, params, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });
      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data || { error_message: error.message };
    }
  };
}
