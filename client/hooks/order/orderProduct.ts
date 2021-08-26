import { myProductOrderApi } from '@client/api/myOrder';
import cache from '@client/utils/cache';
import { IOrder } from '@middle/type/myOrder/myOrder';
import { useState, useEffect } from 'react';
import { useRouter } from '../router/router';

export const useOrderProduct = () => {
  const {
    router: { params },
  } = useRouter();

  const [orderedProduct, setOrderdProduct] = useState<IOrder[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getOrderedProduct = async () => {
    const token = cache.get('token');
    if (!token) return;

    const { status, data, error } = await myProductOrderApi(+params, token);
    if (status !== 200) return setError(error ?? '');
    setOrderdProduct(data ?? []);
  };

  useEffect(() => {
    getOrderedProduct();
  }, []);

  return { orderedProduct, error };
};
