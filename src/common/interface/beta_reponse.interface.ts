export interface BetaResponse<T> {
  statusCode: number;
  message?: string;
  data: T;
}
