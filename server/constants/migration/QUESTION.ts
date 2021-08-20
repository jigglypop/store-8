import { IQuestion } from '@server/models/Question';

export const QUESTION: IQuestion[] = [
  {
    title: '배송은 언제오죠?',
    contents: '배송 보내줘요',
    reply: '금방 보내드리겠습니다.',
    isSecret: false,
    userId: 1,
    productId: 305,
    createdAt: new Date('2021.08.20'),
    replyDate: new Date('2021.08.20'),
  },
];
