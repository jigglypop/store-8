import { IProduct } from '@server/models/Product';
import ProductItem from './ProductItem';
import { IRouterReq } from '@client/store/router/router';

interface IProducts {
  products: IProduct[];
  picker: string;
  onChangeRouterAll: (payload: IRouterReq) => void;
}

export function Products({ products, picker, onChangeRouterAll }: IProducts) {
  return (
    <group>
      {products.map((product: IProduct, index: number) => (
        <ProductItem
          productId={product.id}
          productImgSrc={product.productImgSrc}
          title={product.title}
          index={index}
          picker={picker}
          key={index}
          onChangeRouterAll={onChangeRouterAll}
        />
      ))}
    </group>
  );
}
