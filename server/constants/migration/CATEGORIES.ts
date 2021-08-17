import { ICategory } from '@server/models/Category';

type ICategoryConstants = ICategory[];

export const CATEGORIES: ICategoryConstants = [
  {
    id: 1,
    title: '문구',
  },
  {
    id: 2,
    title: '리빙',
  },
  {
    id: 3,
    title: '책',
  },
  {
    id: 4,
    title: '배민그린',
  },
  {
    id: 5,
    title: 'ㅋㅋ에디션',
  },
  {
    id: 6,
    title: '을지로에디션',
  },
  {
    id: 7,
    title: '배달이친구들',
  },
  {
    id: 8,
    title: '선물세트',
  },
  {
    id: 9,
    title: '콜라보레이션',
  },
  {
    id: 10,
    title: '기타',
  },
];
