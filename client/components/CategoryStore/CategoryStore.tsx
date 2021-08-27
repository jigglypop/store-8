import { Canvas } from '@react-three/fiber';
import * as S from './style';
import { OrbitControls } from '@react-three/drei';
import CategoryStorePagination from './CategoryStorePagination/CategoryStorePagination';
import CategoryStoreTitle from './CategoryTitle/CategoryTitle';
import { Products } from './model/Products';
import { useCategory } from '@client/hooks/category/category';
import { useMode } from '@client/hooks/mode/router';
import { useRouter } from '@client/hooks/router/router';
import CategoryStoreOuter from './model/CategoryStoreOuter';
import Progress from '../StoreUtils/Progress/Progress';
import { useState } from 'react';

export default function CategoryStore() {
  const [progress, setProgress] = useState(0);
  const { category } = useCategory();
  const { vals } = useMode();
  const { onChangeRouterAll } = useRouter();
  return (
    <>
      <S.ThreeWrapper>
        <CategoryStoreTitle />
        <CategoryStorePagination />
        <Canvas
          camera={{
            position: [0, 50, -140],
            fov: 70,
          }}
        >
          <OrbitControls
            minDistance={40}
            maxDistance={150}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
            maxAzimuthAngle={-Math.PI / 1.5}
            minAzimuthAngle={Math.PI / 1.5}
          />
          <CategoryStoreOuter setProgress={setProgress} />
          <Products
            products={category ? category.rows : []}
            picker={vals['--text-picker']}
            onChangeRouterAll={onChangeRouterAll}
          />
        </Canvas>
      </S.ThreeWrapper>
      <Progress progress={progress} />
    </>
  );
}
