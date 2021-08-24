export type AddressData = {
  addressId: number;
  address: string;
  extraAddress: string;
  zonecode: string;
  call: string;
  name: string;
  email: string;
  isBase: boolean;
  title: string;
};

export type AddressGetReq = {
  userId: number;
};

export type AddressRes = {
  data: AddressData[];
};

export type AddressSetBaseReq = {
  userId: number;
  addressId: number;
};

export type AddressSetBaseRes = {
  data: string;
};

export type AddressAddReq = {
  userId: number;
  location: string;
  extraLocation: string;
  zonecode: string;
  call: string;
  receiver: string;
  email: string;
};

export type AddressAddRes = {
  addressId: number;
};
