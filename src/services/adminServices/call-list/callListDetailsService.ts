import axios, { AxiosError } from 'axios';

export type callLogDataResponse = {
  id: number;
  model_id: number;
  customer_id: number;
  comet_chat_session_id: string;
  status: string;
  start_time: string;
  end_time: string;
  duration: string;
  is_active: boolean;
  call_type: string;
  engagement: string;
  credits_used: number;
  end_call: number;
  amount_earned: number;
  rate_per_minute: number;
  credits_per_minute: number;
  customer_name: string;
  customer_email: string;
  model_name: string;
  model_email: string;
  created_at: string;
  updated_at: string;
};
export type PaginationAggregation = {
  offset: number;
  page_size: number;
  total_rows: number;
  filter_text?: string;
  sort_order?: string;
  sort_field?: string;
};
export type data = {
  call_logs: callLogDataResponse[];
  aggregate: PaginationAggregation;
};
export type callLogsResponse = {
  data: data;
  code: number;
  error: string | null;
  message: string;
};
export class callLogsDetailsService {
  static getCallLogsDetails = async (
    token: string,
    limit: number,
    offset: number,
    search_field?: string,
    from_date?: string,
    to_date?: string
  ): Promise<callLogsResponse> => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_BASE_URL +
          `/v1/admin/analytics/call-logs?limit=${limit}&offset=${offset}&search_field=${search_field}&from_date=${from_date}&to_date=${to_date}`,
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
      return error.response?.data as callLogsResponse;
    }
  };
}
