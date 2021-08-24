export interface IElastic {
  _source: {
    title: string;
    id: number;
  };
}

export type IElasticRes = IElastic[];
