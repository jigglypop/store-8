type ICategoryTypeOrder = {
  [key: number]: string[];
};

export const categoryTypeOrder: ICategoryTypeOrder = {
    // 만든 순 정렬방식
  1: ['createdAt', 'ASC'],
  2: ['createdAt', 'DESC'],
};
