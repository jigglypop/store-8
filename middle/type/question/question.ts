export interface IQuestion {
  id: number;
  title: string;
  contents: string;
  isSecret: boolean;
  date: string;
  answer: string | null;
  answerDate: string | null;
  userId: number;
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

export interface IMyQuestion {
  id: number;
  title: string;
  contents: string;
  isSecret: boolean;
  date: string;
  answer: string | null;
  answerDate: string | null;
  productInfo: {
    title: string;
    productImgSrc: string;
  } | void;
}

export interface IMyQuestionRes {
  totalCount: number;
  questions: IMyQuestion[];
}
