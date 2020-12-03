export interface IResponse<T = any> {
  code: number;
  msg: string;
  data?: T;
}

export interface QueryParams {
  [key: string]: string | number;
}

export interface Paginator {
  page: number; // start: 1;
  limit: number;
}

export type RequestWithPaginator = Paginator;

export interface ResponseWithPaginator extends Paginator {
  total: number;
}