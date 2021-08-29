import { useEffect } from 'react';
import { useGltf } from '@client/components/StoreUtils/model/gltf';
import { IStoreOuter } from '@client/components/StoreUtils/Progress/type';
import { Html } from '@react-three/drei';
import * as S from '../style';

export const ABaedal = ({ setProgress }: IStoreOuter) => {
  const { model, progress } = useGltf('/asset/baedalee.glb');
  useEffect(() => {
    setProgress(progress);
  }, [progress]);
  return (
    <group>
      <Html zIndexRange={[1, 0]}>
        <S.Tag>
          <h6>드림문방구에 어서오세요</h6>
          <h6>모두들 프로젝트 고생많았어요</h6>
        </S.Tag>
      </Html>
      {model && <primitive object={model.scene} />}
    </group>
  );
};
