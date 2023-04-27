import { API_URL } from '@env';
import axios, { AxiosResponse } from 'axios';
import { IDelete, IGet, IPath, IPost, IPut } from './Fetch.types';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'User-Agent': 'react-native',
  },
});

const fetchService = {
  get: function get<T>(props: IGet): Promise<AxiosResponse<T>> {
    return axiosInstance.get<T>(props.url, props.config);
  },
  put: function put<T, D = any>(props: IPut<D>): Promise<AxiosResponse<T>> {
    return axiosInstance.put<T>(props.url, props.data, props.config);
  },
  post: function post<T, D = any>(props: IPost<D>): Promise<AxiosResponse<T>> {
    return axiosInstance.post<T>(props.url, props.data, props.config);
  },
  patch: function patch<T, D = any>(
    props: IPath<D>
  ): Promise<AxiosResponse<T>> {
    return axiosInstance.patch<T>(props.url, props.data, props.config);
  },
  delete: function deletes<T>(props: IDelete): Promise<AxiosResponse<T>> {
    return axiosInstance.delete<T>(props.url, props.config);
  },
};

export default fetchService;
