export const boxSize: [number, number, number] = [16, 20, 2];
export const boxOuterSize: [number, number, number] = [18, 22, 5];

export interface IObjItem {
  start: [number, number, number];
  dx: number;
  dz: number;
  gapx: number;
  gapz: number;
}

export interface IObj {
  [key: number]: IObjItem;
}

export const MainBoxGroup = (index: number, groupId: number) => {
  const obj: IObj = {
    0: {
      start: [-80, 30, -20],
      dx: index % 5,
      dz: Math.floor(index / 5),
      gapx: 10 * (index % 5),
      gapz: 0,
    },
    1: {
      start: [270, 30, -150],
      dx: Math.floor(index / 4),
      dz: index % 4,
      gapx: 0,
      gapz: 20 * index,
    },
    2: {
      start: [-200, 30, -160],
      dx: Math.floor(index / 8),
      dz: index % 8,
      gapx: 0,
      gapz: 30 * index,
    },
    3: {
      start: [index >= 4 ? -90 : -150, 50, 100],
      dx: index % 8,
      dz: Math.floor(index / 8),
      gapx: 20 * index,
      gapz: 0,
    },
  };
  return obj[groupId];
};

export const CategoryBoxGroup = (index: number, groupId: number) => {
  const obj: IObj = {
    0: {
      start: [-80, 30, -20],
      dx: index % 5,
      dz: Math.floor(index / 5),
      gapx: 10 * (index % 5),
      gapz: 0,
    },
    1: {
      start: [-220, 30, -100],
      dx: Math.floor(index / 5),
      dz: index % 5,
      gapx: 0,
      gapz: 50 * (index % 5),
    },
    2: {
      start: [80, 30, -100],
      dx: Math.floor(index / 5),
      dz: index % 5,
      gapx: 0,
      gapz: 50 * (index % 5),
    },
    3: {
      start: [-80, 80, 100],
      dx: index % 5,
      dz: Math.floor(index / 5),
      gapx: 10 * (index % 5),
      gapz: 0,
    },
  };
  return obj[groupId];
};
