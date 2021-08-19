export interface IQuestionRes {
  id: number;
  title: string;
  contents: string;
  isSecret: boolean;
  date: string;
  answer: string | null;
  answerDate: string | null;
}
