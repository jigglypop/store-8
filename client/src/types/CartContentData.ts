type CartContentData = {
  isCoupon: boolean;
  isChecked: boolean;
  imgLink: string;
  title: string;
  option: string;
  count: number;
  amount: number /* TODO : 금액을 number 로 할지, Big Int 로 할지? */;
};

export type { CartContentData };
