export type AddressData = {
  addressId: number;
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
