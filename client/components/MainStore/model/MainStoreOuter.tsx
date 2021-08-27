import { useEffect, useRef } from 'react';
import { a } from '@react-spring/three';
import { useGltf } from '@client/components/StoreUtils/model/gltf';
import { IStoreOuter } from '@client/components/StoreUtils/Progress/type';

export default function MainStoreOuter({ setProgress }: IStoreOuter) {
  const { model, progress } = useGltf('/store/mainstore.glb');
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
