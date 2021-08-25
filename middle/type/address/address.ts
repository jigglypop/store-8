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

export type AddressRes = {
  data: AddressData[];
};

export type AddressSetBaseReq = {
  addressId: number;
};

export type AddressSetBaseRes = {
  data: string;
};

export type AddressAddReq = {
  location: string;
  extraLocation: string;
  zonecode: string;
  call: string;
  receiver: string;
  email: string;
  title?: string;
};

export type AddressAddRes = {
  addressId: number;
};

export type AddressUpdateReq = {
  id: number;
  location: string;
  extraLocation: string;
  zonecode: string;
  call: string;
  receiver: string;
  email: string;
  title: string;
};

export type AddressRemoveReq = {
  addressId: number;
};
