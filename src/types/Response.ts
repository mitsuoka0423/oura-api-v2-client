export default class Response<T> {
  statusCode: number;
  body: T;

  constructor(statusCode: number, body: T) {
    this.statusCode = statusCode;
    this.body = body;
  }
}
