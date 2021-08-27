interface ICommonQuestion {
  id: number;
  title: string;
  contents: string;
  isSecret: boolean;
  date: string;
  answer: string | null;
  answerDate: string | null;
  userId: number;
}
export interface IQuestion extends ICommonQuestion {
  questionAuthor: string;
}

export interface IQuestionRes {
  totalCount: number;
  questions: IQuestion[];
}

export interface IQuestionPostReq {
  title: string;
  contents: string;
  isSecret: boolean;
}

export interface IQuestionPostRes {
  success: boolean;
}

export interface IQuestionPutReq {
  questionId: number;
  title: string;
  contents: string;
  isSecret: boolean;
}
export interface IQuestionDeleteReq {
  questionId: number;
}

export interface IMyQuestion extends ICommonQuestion {
  productInfo: {
    id: number;
    title: string | void;
    productImgSrc: string | void;
  };
}

export interface IMyQuestionRes {
  totalCount: number;
  questions: IMyQuestion[];
}
