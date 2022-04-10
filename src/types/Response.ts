export default class Response {
  statusCode;
  body;

  constructor(statusCode, body) {
    this.statusCode = statusCode;
    this.body = body;
  }
}
