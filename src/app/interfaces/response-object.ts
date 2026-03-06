export interface IResponseObject<T> {
  payload: T | null;
  message: string | null;
  success: boolean;
}