import axios, { AxiosError } from 'axios';

export type CallReviewDataResponse = {
  id: number;
  model_id: number;
  customer_id: number;
  status: string;
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

export type CallLogsData = {
  calls_review: CallReviewDataResponse[];
  aggregate: PaginationAggregation;
};

export type CallLogsResponse = {
  data: CallLogsData;
  code: number;
  error: string | null;
  message: string;
};

export class CallRevieService {
  static getCallLogsDetails = async (
    token: string,
    limit: number,
    offset: number,
    search_field?: string,
    from_date?: string,
    to_date?: string,
    sort_order?: string,
    order_field?: string,
    ended_by?: string,
    call_status?: string
  ): Promise<CallLogsResponse> => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_BASE_URL +
          `/v1/admin/analytics/call-logs?limit=${limit}&offset=${offset}&search_field=${search_field}&from_date=${from_date}&to_date=${to_date}&sort_order=${sort_order}&sort_field=${order_field}&ended_by=${ended_by}&call_status=${call_status}`,
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
      return error.response?.data as CallLogsResponse;
    }
  };
}
