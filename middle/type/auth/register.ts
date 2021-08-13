export interface IRegisterReq {
    username: string;
    email: string;
    password: string;
    [key: string]: string;
}

export interface IRegisterRes {
    id: number;
    username: string;
    email: string;
    updatedAt: Date;
    createdAt: Date;
}

export type KeyOfResiter = keyof IRegisterRes