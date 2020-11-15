export interface BaseResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
}

export interface PaginationOptions {
  offset: number;
  limit: number;
  total: number;
  count: number;
}
