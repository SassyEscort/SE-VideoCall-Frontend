import axios from 'axios';
import { ErrorMessage } from 'constants/common.constants';

export type withdrawParams = {
  withdrawal_amt: string;
};

export type withdrawresponse = {
  data: string | null;
  code: number;
  error: string | null;
  message: string;
};

export class withdrawMinAmountServices {
  static withdrawMinAmount = async (params: withdrawParams): Promise<withdrawresponse | string> => {
    try {
      const res = await axios.post<withdrawresponse>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/admin/model/withdrawal-amount`, params, {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6ImFkbWluMSIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE4MTczODk3LCJleHAiOjE3MTgyNjAyOTd9.zjaWWPX5bzmPuZec7tu7eaDXYBB22IJE9Sya4I1QON4'
        }
      });
      return res.data;
    } catch (error) {
      return ErrorMessage;
    }
  };
}
