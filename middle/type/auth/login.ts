export interface ILoginReq {
    username: string;
    password: string;
    [key: string]: string;
}

export interface ILoginRes {
    id: number;
    username: string;
    email: string;
    updatedAt: Date;
    createdAt: Date;
}
