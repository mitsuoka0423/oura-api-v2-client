import ApiClient from "./apiClient";
import { DailyActivity, PersonalInfo } from "./types/oura";

export default class OuraApiV2Client {
  api: ApiClient;

  constructor(accessToken: string) {
    this.api = new ApiClient(accessToken);
  }

  async dailyActivity(): Promise<DailyActivity> {
    // TODO: build query string using startDate endDate

    const response = await this.api.fetch<DailyActivity>(
      "/v2/usercollection/daily_activity"
    );

    return new DailyActivity(response.body);
  }

  async personalInfo(): Promise<PersonalInfo> {
    // TODO: build query string using startDate endDate

    const response = await this.api.fetch<PersonalInfo>(
      "/v2/usercollection/personal_info"
    );

    const age = response.body.age;
    const weight = response.body.weight;
    const height = response.body.height;
    const biological_sex = response.body.biological_sex;
    const email = response.body.email;

    return new PersonalInfo(age, weight, height, biological_sex, email);
  }
}
