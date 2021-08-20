export interface IQuestionRes {
  id: number;
  title: string;
  contents: string;
  isSecret: boolean;
  date: string;
  answer: string | null;
  answerDate: string | null;
}

export interface IQuestionPostReq {
  title: string;
  contents: string;
  isSecret: string;
}

export interface IQuestionPostRes {
  success: boolean;
}
