interface IErrorItem {
  status: number;
  message: string;
  serverMessage?: string;
}

export default class HttpError extends Error {
  status: number;
  serverMessage: string;

  constructor({ status, message, serverMessage }: IErrorItem) {
    super(message);
    this.status = status;
    this.serverMessage = serverMessage || ""
  }
}
