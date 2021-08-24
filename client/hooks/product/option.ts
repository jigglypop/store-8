import { useEffect, useState } from 'react';
import { RootState } from '@client/store';
import { getProduct } from '@client/store/product/product';

import { getOptionApi } from '@api/product';

type IOptions = {
  title: string;
  amount: number;
  options: string[];
  optionIds: number[];
};

export function useOption() {
  const [options, setOptions] = useState<IOptions>({
    title: '',
    amount: 0,
    options: [],
    optionIds: [],
  });

  const getOptions = async (productId: number) => {
    const optionData = await getOptionApi(productId);
    setOptions(optionData);
  };

  return { getOptions, options };
}
