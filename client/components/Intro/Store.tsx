import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import * as S from './style';
import { ACamp } from './model/ACamp';
import { useSpring, animated, config } from 'react-spring';
import { MapControls } from '@react-three/drei';
import { useMode } from '@client/hooks/mode/router';
import { BaedalInfo, DreamMoonbangooInfo, NameInfo } from './info/InfoItem';
import Picker from '../Header/Dark/Picker';
import { ABaedal } from './model/ABaedal';
import Progress from '../StoreUtils/Progress/Progress';
import MainStoreTitle from './MainTitle/MainStoreTitle';

interface IMarker {
  position: [number, number, number];
  cameraPos: [number, number, number];
  name: string;
}

export default function Three() {
  const initialCameraPos: [number, number, number] = [12, 14, 12];
  const initialControlsTarget: [number, number, number] = [0, 0, 0];
  const initMarker: IMarker[] = [
    {
      position: [10, 10, 10],
      cameraPos: [0, 0, 0],
      name: '메인',
    },
    {
      position: [10, 10, 20],
      cameraPos: [0, 0, 0],
      name: '팀원 소개',
    },
    {
      position: [-20, -20, -20],
      cameraPos: [0, 0, 0],
      name: '후드 배달이',
    },
    {
      position: [30, 1, 1],
      cameraPos: [0, 0, 0],
      name: '드림 문방구',
    },
  ];
  const [markers] = useState<IMarker[]>(initMarker);
  const [info, setInfo] = useState(0);

  const AnimatedOrbitControls = animated(MapControls);

  const [cameraValues, setCameraValues] = useState({
    pos: initialCameraPos,
    target: initialControlsTarget,
  });

  function onNavClicked(id: number) {
    setCameraValues({
      pos: markers[id].cameraPos,
      target: markers[id].position,
    });
    setInfo(id);
  }
  const spring = useSpring({
    pos: cameraValues.pos,
    target: cameraValues.target,
    config: config.slow,
  });
  const { vals } = useMode();
  const [progress, setProgress] = useState(0);
  return (
    <>
      <S.ThreeWrapper>
        <MainStoreTitle />
        <div className="ui">
          <Picker />
          <div>
            {initMarker.slice(1, 10).map((item: IMarker, index: number) => (
              <div className="ui-item" onClick={() => onNavClicked(index + 1)} key={index}>
                {item.name}
              </div>
            ))}
          </div>
        </div>
        {info === 1 && <NameInfo />}
        {info === 2 && <BaedalInfo />}
        {info === 3 && <DreamMoonbangooInfo />}
        <Canvas
          camera={{
            position: cameraValues.pos,
            far: 5000,
          }}
        >
          <AnimatedOrbitControls
            autoRotateSpeed={0.2}
            minDistance={10}
            maxDistance={50}
            target={spring.target}
            enablePan={false}
            enableZoom={false}
            enableRotate={false}
          />
          <ABaedal setProgress={setProgress} />
          <ACamp setProgress={setProgress} />
          <fog attach="fog" args={[vals['--text-picker'], 0, 100]} />
        </Canvas>
      </S.ThreeWrapper>
      <Progress progress={progress} />
    </>
  );
}
