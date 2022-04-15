import ApiClient from "./apiClient";
import {
  DailyActivity,
  PersonalInfo,
  HeartRate,
  Sessions,
} from "./types/oura/response";
import { Sleep_V1 } from "./types/oura/response/v1";

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

  async heartRate(): Promise<HeartRate> {
    // TODO: build query string using startDate endDate

    const response = await this.api.fetch<HeartRate>(
      "/v2/usercollection/heartrate"
    );
    return new HeartRate(response.body);
  }

  async sessions(): Promise<Sessions> {
    // TODO: build query string using startDate endDate

    const response = await this.api.fetch<Sessions>(
      "/v2/usercollection/session"
    );
    return new Sessions(response.body);
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

  /**
   * @deprecated
   * @see https://cloud.ouraring.com/docs/
   */
  async sleep_v1(): Promise<Sleep_V1> {
    const response = await this.api.fetch<Sleep_V1>("/v1/sleep");
    return new Sleep_V1(response.body);
  }
}
