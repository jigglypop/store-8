export type AddressData = {
  address: string;
  extraAddress: string;
  zonecode: string;
  call: string;
  name: string;
  email: string;
};

export type AddressGetReq = {
  userId: number;
};

export type AddressRes = {
  data: AddressData[];
};
