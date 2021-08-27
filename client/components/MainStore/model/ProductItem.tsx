import { useEffect, useState } from 'react';
import { Html } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';
import * as S from '../style';
import { IRouterReq } from '@client/store/router/router';
import { getRouterObj } from '@client/utils/pathname';
import { boxOuterSize, IObjItem, boxSize } from '@client/components/StoreUtils/size/BoxSize';
import useTexture from '@client/components/StoreUtils/hook/texture';

interface IProductItem {
  productId: number;
  productImgSrc: string;
  index: number;
  picker: string;
  title: string;
  group: number;
  onChangeRouterAll: (payload: IRouterReq) => void;
  BoxGroup: (index: number, groupId: number) => IObjItem;
}

export default function ProductItem({
  productId,
  productImgSrc,
  index,
  picker,
  title,
  group,
  BoxGroup,
  onChangeRouterAll,
}: IProductItem) {
  const texture = useTexture(productImgSrc);
  const positionSet = BoxGroup(index, group);
  const [active, setActive] = useState(0);
  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });
  useEffect(() => {
    document.body.style.cursor = active ? 'pointer' : 'auto';
  }, [active]);
  const scale = spring.to([0, 1], [1, 1.5]);
  const onClick = () => {
    const RouterObj: IRouterReq = getRouterObj(`/product/${productId}`);
    onChangeRouterAll(RouterObj);
    history.pushState(
      { path: `/product/${productId}` },
      `/product/${productId}`,
      `/product/${productId}`
    );
  };
  const onPointHover = () => {
    setActive(1);
  };
  const onPointOut = () => {
    setActive(0);
  };
  return (
    <group>
      <a.mesh
        position={[
          positionSet.start[0] + boxSize[0] * positionSet.dx + positionSet.gapx,
          positionSet.start[1],
          positionSet.start[2] + boxSize[2] * positionSet.dz + positionSet.gapz + 5,
        ]}
        onClick={() => onClick()}
        onPointerOver={() => onPointHover()}
        onPointerOut={() => onPointOut()}
        scale-x={scale}
        scale-y={scale}
        scale-z={scale}
        castShadow
        receiveShadow
      >
        <Html zIndexRange={[1, 0]}>
          <S.Tag isUp={index % 2 ? false : true}>
            <h6>{title}</h6>
          </S.Tag>
        </Html>
        <boxBufferGeometry attach="geometry" args={boxOuterSize} />
        <meshBasicMaterial attach="material" color={picker} />
      </a.mesh>
      <a.mesh
        position={[
          positionSet.start[0] + boxSize[0] * positionSet.dx + positionSet.gapx,
          positionSet.start[1],
          positionSet.start[2] + boxSize[2] * positionSet.dz + positionSet.gapz,
        ]}
        onClick={() => onClick()}
        onPointerOver={() => onPointHover()}
        onPointerOut={() => onPointOut()}
        scale-x={scale}
        scale-y={scale}
        scale-z={scale}
        castShadow
        receiveShadow
      >
        <boxBufferGeometry attach="geometry" args={boxSize} />
        <meshBasicMaterial attach="material" map={texture} />
      </a.mesh>
    </group>
  );
}
