import { IProduct } from '@server/models/Product';
import ProductItem from './ProductItem';
import { IRouterReq } from '@client/store/router/router';
import { MainBoxGroup } from '@client/components/StoreUtils/size/BoxSize';

interface IProducts {
  products: IProduct[];
  picker: string;
  onChangeRouterAll: (payload: IRouterReq) => void;
  group?: number;
}

export default function Products({ products, picker, onChangeRouterAll, group }: IProducts) {
  return (
    <group>
      {products.map((product: IProduct, index: number) => (
        <ProductItem
          productId={product.id}
          productImgSrc={product.productImgSrc}
          title={product.title}
          index={index}
          group={group ? group : 1}
          picker={picker}
          key={index}
          onChangeRouterAll={onChangeRouterAll}
          BoxGroup={MainBoxGroup}
        />
      ))}
    </group>
  );
}
