import { myProductOrderApi } from '@client/api/myOrder';
import cache from '@client/utils/cache';
import { useState, useEffect } from 'react';
import { useRouter } from '../router/router';

export const useOrderProduct = () => {
  const {
    router: { params },
  } = useRouter();

  const [orderedProduct, setOrderdProduct] = useState(null);
  const [error, setError] = useState(null);

  const getOrderedProduct = async () => {
    const token = cache.get('token');
    if (!token) return;

    const { status, data, error } = await myProductOrderApi(+params, token);
    if (status !== 200) return setError(error);
    setOrderdProduct(data[0]);
  };

  useEffect(() => {
    getOrderedProduct();
  }, []);

  return { orderedProduct, error };
};
