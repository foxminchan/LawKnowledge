import axios, {
  AxiosInstance,
  AxiosResponse,
  HttpStatusCode,
  AxiosRequestConfig,
} from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import _omitBy from 'lodash/omitBy';
import { injectable } from 'inversify';
import { StorageKeys } from '../constants/keys';
import { axiosConfig } from '../configs/api.config';
import { IHttpService } from '../interfaces/interfaces';

@injectable()
export default class HttpService implements IHttpService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      ...axiosConfig,
    });
    this.instance = this.setupInterceptorsTo(this.instance);
  }

  private setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
    axiosInstance.interceptors.request.use(
      async (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    axiosInstance.interceptors.response.use(
      async (response) => {
        const accessToken = Cookies.get(StorageKeys.ACCESS_TOKEN);

        if (accessToken) {
          response.headers.Authorization = `Bearer ${accessToken}`;
        }

        if (response.headers.isRemoveAuthorization) {
          delete response.headers.Authorization;
          delete response.headers.isRemoveAuthorization;
        }

        return response;
      },
      (error) => {
        const statusCode = error?.response?.status;
        switch (statusCode) {
          case HttpStatusCode.Unauthorized: {
            Cookies.remove(StorageKeys.ACCESS_TOKEN);
            window.location.href = '/dang-nhap';
            break;
          }
          case HttpStatusCode.TooManyRequests: {
            Swal.fire({
              icon: 'error',
              title: 'Lỗi!',
              text: 'Bạn đã gửi quá nhiều yêu cầu, vui lòng thử lại sau',
            });
            break;
          }
        }
        return Promise.reject(error);
      }
    );
    return axiosInstance;
  }

  public async get<T>(
    url: string,
    config: AxiosRequestConfig | undefined = undefined
  ): Promise<AxiosResponse<T>> {
    return await this.instance.get<T, AxiosResponse<T>>(`${url}`, config);
  }

  public async post<T>(
    url: string,
    data: unknown = undefined,
    config: AxiosRequestConfig | undefined = undefined
  ): Promise<AxiosResponse<T>> {
    return await this.instance.post<T, AxiosResponse<T>>(url, data, config);
  }

  public async put(
    url: string,
    data: unknown = undefined,
    config: AxiosRequestConfig | undefined = undefined
  ): Promise<AxiosResponse<unknown, unknown>> {
    return await this.instance.put(url, data, config);
  }

  public async patch<T>(
    url: string,
    data: unknown = undefined,
    config: AxiosRequestConfig | undefined = undefined
  ): Promise<AxiosResponse<T>> {
    return await this.instance.patch<T, AxiosResponse<T>>(url, data, config);
  }

  public async delete<T>(
    url: string,
    config: AxiosRequestConfig | undefined = undefined
  ): Promise<AxiosResponse<T>> {
    return await this.instance.delete<T, AxiosResponse<T>>(url, config);
  }

  public setHttpConfigs(config?: Partial<AxiosRequestConfig>) {
    if (config?.baseURL) this.instance.defaults.baseURL = config.baseURL;
    this.instance.defaults = {
      ...this.instance.defaults,
      ..._omitBy(config, 'BaseURL'),
    };
  }
}
