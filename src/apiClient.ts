import axios from "axios";
import Response from "./types/Response";

export default class ApiClient {
  instance;

  constructor(accessToken: string) {
    if (!accessToken) {
      throw new Error("Required access token");
    }

    this.instance = axios.create({
      baseURL: "https://api.ouraring.com",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
  }

  async fetch<T>(path: string, queryParameters?: string): Promise<Response<T>> {
    const url = !queryParameters ? path : path + queryParameters;
    const response = await this.instance.get(url);
    return new Response(response.status, response.data);
  }
}
