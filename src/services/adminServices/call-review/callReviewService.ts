import axios, { AxiosError } from 'axios';

export type CallReviewScreenshotData = {
  id: number;
  link: string;
  created_at: string;
};
export type CallReviewDataResponse = {
  id: number;
  model_id: number;
  customer_id: number;
  created_at: string;
  updated_at: string;
  customer_name: string;
  duration: string;
  model_name: string;
  rejected_reason: string;
  review_type: string;
  screenshots_count: number;
  status: string;
  call_id: number;
  review_id: number;
  screenshots: CallReviewScreenshotData[];
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

export type CallReviewResponse = {
  data: CallLogsData;
  code: number;
  error: string | null;
  message: string;
};

export class CallReviewService {
  static getCallReviewDetails = async (
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
  ): Promise<CallReviewResponse> => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_BASE_URL +
          `/v1/admin/call/review-listings?limit=${limit}&offset=${offset}&search_field=${search_field}&from_date=${from_date}&to_date=${to_date}&sort_order=${sort_order}&sort_field=${order_field}&ended_by=${ended_by}&call_status=${call_status}`,
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
      return error.response?.data as CallReviewResponse;
    }
  };

  static reviewAction = async (
    token: string,
    call_log_id: number,
    status: string,
    review_id: number,
    rejection_reason?: string
  ): Promise<CallReviewResponse> => {
    try {
      const res = await axios.put(
        process.env.NEXT_PUBLIC_API_BASE_URL + `/v1/admin/call/review/${review_id}`,
        { status: status, rejected_reason: rejection_reason, call_log_id: call_log_id },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token
          }
        }
      );

      return res.data.data;
    } catch (err: any) {
      const error: AxiosError = err;
      return error.response?.data as CallReviewResponse;
    }
  };
}
