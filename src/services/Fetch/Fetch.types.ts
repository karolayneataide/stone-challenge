import { AxiosRequestConfig } from 'axios';

export interface IGet {
  url: string;
  config?: AxiosRequestConfig;
}

export interface IPut<D = any> {
  url: string;
  data: D;
  config?: AxiosRequestConfig;
}

export interface IPost<D = any> {
  url: string;
  data: D;
  config?: AxiosRequestConfig;
}

export interface IPath<D = any> {
  url: string;
  data: D;
  config?: AxiosRequestConfig;
}

export interface IDelete {
  url: string;
  config?: AxiosRequestConfig;
}
