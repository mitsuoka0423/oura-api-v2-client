import ApiClient from "./apiClient";
import { PersonalInfo } from "./types/oura";

export default class OuraApiV2Client {
  api;

  constructor(accessToken) {
    this.api = new ApiClient(accessToken);
  }

  async personalInfo() {
    // TODO: build query string using startDate endDate

    const response = await this.api.fetch("/v2/usercollection/personal_info");

    const age = response.body.age;
    const weight = response.body.weight;
    const height = response.body.height;
    const biological_sex = response.body.biological_sex;
    const email = response.body.email;

    return new PersonalInfo(age, weight, height, biological_sex, email);
  }
}
