import axios, { AxiosError } from 'axios';
import { VerificationStep1Type } from 'views/protectedModelViews/verification/verificationTypes';

export class ModelVerificationService {
  static verificationStepOne = async (values: VerificationStep1Type, token: string) => {
    try {
      const res = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/basic-details`, values, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });

      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data || { error_message: error.message };
    }
  };
}
