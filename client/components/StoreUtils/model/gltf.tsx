import { useState, useMemo } from 'react';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { AnimationMixer, FrontSide } from 'three';
import { useFrame } from '@react-three/fiber';
// gltf 가져오기 커스컴 훅
export const useGltf = (url: string) => {
  const [model, setModel] = useState<GLTF>();
  const [progress, setProgress] = useState(1);
  const [error, setError] = useState<ErrorEvent>();

  useMemo(() => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(
      'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/'
    );
    const gltf = new GLTFLoader();
    gltf.setDRACOLoader(dracoLoader);
    gltf.load(
      `/public/gltf/${url}`,
      (e: GLTF) => {
        setModel(e);
        setProgress(101);
      },
      (xhr) => {
        setProgress((xhr.loaded / xhr.total) * 100);
      },
      (error) => {
        setError(error);
      }
    );
  }, [url]);
  let mixer: AnimationMixer;
  if (model?.animations.length) {
    mixer = new AnimationMixer(model.scene);
    model.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((_, delta) => {
    mixer?.update(delta);
  });

  model?.scene.traverse((child: any) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = FrontSide;
    }
  });
  return { model, setModel, progress, error };
};
