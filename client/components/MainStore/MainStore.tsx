import { Canvas } from '@react-three/fiber';
import * as S from './style';
import MainStoreOuter from './model/MainStoreOuter';
import { OrbitControls } from '@react-three/drei';
import { IMain } from '../Main/common/type';
import { useRouter } from '@client/hooks/router/router';
import { useMode } from '@client/hooks/mode/router';
import Products from './model/Products';
import Progress from '../StoreUtils/Progress/Progress';
import { useState } from 'react';
import MainStoreTitle from './MainTitle/MainStoreTitle';

export default function MainStore({ main }: IMain) {
  const [progress, setProgress] = useState(0);
  const { vals } = useMode();
  const { onChangeRouterAll } = useRouter();

  return (
    <>
      <S.ThreeWrapper>
        <MainStoreTitle />
        <Canvas
          camera={{
            position: [0, 50, -150],
            fov: 70,
          }}
          style={{ backgroundColor: 'black' }}
        >
          <OrbitControls
            minDistance={40}
            maxDistance={330}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
            maxAzimuthAngle={-Math.PI / 1.5}
            minAzimuthAngle={Math.PI / 1.5}
          />
          <MainStoreOuter setProgress={setProgress} />
          <Products
            products={main ? main.best : []}
            picker={vals['--text-picker']}
            onChangeRouterAll={onChangeRouterAll}
            group={1}
          />
          <Products
            products={main ? main.sale : []}
            picker={vals['--text-picker']}
            onChangeRouterAll={onChangeRouterAll}
            group={2}
          />
          <Products
            products={main ? main.new : []}
            picker={vals['--text-picker']}
            onChangeRouterAll={onChangeRouterAll}
            group={3}
          />
        </Canvas>
      </S.ThreeWrapper>

      <Progress progress={progress} />
    </>
  );
}
