import type { Request } from 'express';

export interface JWTPayload {
  id: number;
  username?: string;
  email?: string;
}

export interface IAuthRequest extends Request {
  body: {
    userId: number;
  };
  user?: JWTPayload;
}
