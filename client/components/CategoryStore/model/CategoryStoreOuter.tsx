import { useGltf } from '@client/components/StoreUtils/model/gltf';
import { IStoreOuter } from '@client/components/StoreUtils/Progress/type';
import { a } from '@react-spring/three';
import { useEffect, useRef } from 'react';

export default function CategoryStoreOuter({ setProgress }: IStoreOuter) {
  const { model, progress } = useGltf('/store/category.glb');
  useEffect(() => {
    setProgress(progress);
  }, [progress]);
  const mesh = useRef<THREE.Mesh>();
  return (
    <>
      <group>
        <a.mesh ref={mesh} receiveShadow castShadow>
          {model && <primitive object={model.scene} />}
        </a.mesh>
      </group>
    </>
  );
}
