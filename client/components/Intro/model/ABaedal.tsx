import { useEffect } from 'react';
import { useGltf } from '@client/components/StoreUtils/model/gltf';
import { IStoreOuter } from '@client/components/StoreUtils/Progress/type';

export const ABaedal = ({ setProgress }: IStoreOuter) => {
  const { model, progress } = useGltf('/asset/baedalee.glb');
  useEffect(() => {
    setProgress(progress);
  }, [progress]);
  return <group>{model && <primitive object={model.scene} />}</group>;
};
