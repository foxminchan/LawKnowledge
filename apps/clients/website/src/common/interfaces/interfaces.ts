import { JwtPayload } from 'jwt-decode';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface IHttpService {
  get<T>(
    url: string,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<T>>;

  post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<T>>;

  put(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<unknown, unknown>>;

  patch<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<T>>;

  delete<T>(
    url: string,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<T>>;

  setHttpConfigs(config?: Partial<AxiosRequestConfig>): void;
}

export interface ITokenService {
  decodeToken(token: string): JwtPayload;
}
