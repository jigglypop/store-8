export interface IQuestion {
  id: string;
  title: string;
  contents: string;
  userId: string;
  isSecret: boolean;
  date: string;
  status: string;
  answer?: string;
}
