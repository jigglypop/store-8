export interface IQuestionRes {
  id: number;
  title: string;
  contents: string;
  isSecret: boolean;
  date: string;
  answer: string | null;
  answerDate: string | null;
  isOwned: boolean;
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
