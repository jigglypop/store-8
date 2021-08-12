export interface IRegisterReq {
    username: string;
    email: string;
    password: string;
}

export interface IRegisterRes {
    id: number;
    username: string;
    email: string;
    updatedAt: Date;
    createdAt: Date;
}

export type KeyOfResiter = keyof IRegisterRes