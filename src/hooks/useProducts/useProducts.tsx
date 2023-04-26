import { FetchService } from '@services';
import { Product } from '@types';
import { useEffect, useState } from 'react';

const useProducts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<Product[]>();

  useEffect(() => {
    FetchService.get<Product[]>({ url: '/products ' })
      .then((response) => setData(response.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { loading, data, error };
};

export default useProducts;
