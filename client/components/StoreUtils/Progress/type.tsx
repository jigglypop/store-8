export interface IStoreOuter {
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}

export interface IIntroOuter {
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  _progress: number;
}
