import axios, { AxiosError } from 'axios';
import { getUserTokenClient } from 'utils/getSessionData';
import { VerificationPayload, VerificationStepSecond } from './types';
export class VerificationStepService {
  static verificationtepSecond = async (params: VerificationStepSecond) => {
    try {
      const payload: VerificationPayload = {
        id: '1',
        is_document: true,
        photos: [
          {
            url: 'url',
            type: 'image',
            id: 'string',
            cords: 'string',
            is_favourite: 0,
            is_document: 1,
            document_type: params.idType,
            document_number: params.idNumber
          }
        ]
      };
      const token = await getUserTokenClient();
      const res = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/model/photos`, payload, {
        headers: { 'Content-Type': 'application/json', Authorization: token }
      });
      return res.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data || { error_message: error.message };
    }
  };
}
