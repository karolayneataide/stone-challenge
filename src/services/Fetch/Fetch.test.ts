import fetchService, { axiosInstance } from './Fetch.service';
import { IDelete, IGet, IPath, IPost, IPut } from './Fetch.types';

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: jest.fn(() => Promise.resolve({ data: 'get' })),
    put: jest.fn(() => Promise.resolve({ data: 'put' })),
    post: jest.fn(() => Promise.resolve({ data: 'post' })),
    patch: jest.fn(() => Promise.resolve({ data: 'patch' })),
    delete: jest.fn(() => Promise.resolve({ data: 'delete' })),
    interceptors: {
      request: {
        use: jest.fn(),
      },
      response: {
        use: jest.fn(),
      },
    },
  })),
}));

describe('Fetch Service', () => {
  describe('get', () => {
    it('Should make a GET request and return the data', async () => {
      const props: IGet = {
        url: '/get',
        config: {},
      };

      const result = await fetchService.get<string>(props);
      expect(axiosInstance.get).toHaveBeenCalledWith(props.url, props.config);
      expect(result.data).toBe('get');
    });
  });

  describe('put', () => {
    it('Should make a PUT request and return the data', async () => {
      const props: IPut = {
        url: '/put',
        data: {},
        config: {},
      };

      const result = await fetchService.put<string>(props);
      expect(axiosInstance.put).toHaveBeenCalledWith(
        props.url,
        props.data,
        props.config
      );
      expect(result.data).toBe('put');
    });
  });

  describe('post', () => {
    it('Should make a POST request and return the data', async () => {
      const props: IPost = {
        url: '/post',
        data: {},
        config: {},
      };

      const result = await fetchService.post<string>(props);
      expect(axiosInstance.post).toHaveBeenCalledWith(
        props.url,
        props.data,
        props.config
      );
      expect(result.data).toBe('post');
    });
  });

  describe('patch', () => {
    it('Should make a PATCH request and return the data', async () => {
      const props: IPath = {
        url: '/patch',
        data: {},
        config: {},
      };

      const result = await fetchService.patch<string>(props);
      expect(axiosInstance.patch).toHaveBeenCalledWith(
        props.url,
        props.data,
        props.config
      );
      expect(result.data).toBe('patch');
    });
  });

  describe('delete', () => {
    it('Should make a delete request and return the data', async () => {
      const props: IDelete = {
        url: '/delete',
        config: {},
      };

      const result = await fetchService.delete<string>(props);
      expect(axiosInstance.delete).toHaveBeenCalledWith(
        props.url,
        props.config
      );
      expect(result.data).toBe('delete');
    });
  });
});
