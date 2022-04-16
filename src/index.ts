import ApiClient from "./apiClient";
import {
  DailyActivityResponse,
  PersonalInfoResponse,
  HeartRateResponse,
  SessionsResponse,
  TagsResponse,
  WorkoutsResponse,
} from "./types/oura/response";
import {
  SleepResponse_V1,
  ReadinessResponse_V1,
} from "./types/oura/response/v1";

export default class OuraApiV2Client {
  api: ApiClient;

  constructor(accessToken: string) {
    this.api = new ApiClient(accessToken);
  }

  async dailyActivity(): Promise<DailyActivityResponse> {
    // TODO: build query string using startDate endDate

    const response = await this.api.fetch<DailyActivityResponse>(
      "/v2/usercollection/daily_activity"
    );

    return response.body;
  }

  async heartRate(): Promise<HeartRateResponse> {
    // TODO: build query string using startDate endDate

    const response = await this.api.fetch<HeartRateResponse>(
      "/v2/usercollection/heartrate"
    );

    return response.body;
  }

  async sessions(): Promise<SessionsResponse> {
    // TODO: build query string using startDate endDate

    const response = await this.api.fetch<SessionsResponse>(
      "/v2/usercollection/session"
    );
    return response.body;
  }

  async personalInfo(): Promise<PersonalInfoResponse> {
    // TODO: build query string using startDate endDate

    const response = await this.api.fetch<PersonalInfoResponse>(
      "/v2/usercollection/personal_info"
    );

    return response.body;
  }

  async tags(): Promise<TagsResponse> {
    // TODO: build query string using startDate endDate

    const response = await this.api.fetch<TagsResponse>(
      "/v2/usercollection/tag"
    );

    return response.body;
  }

  async workouts(): Promise<WorkoutsResponse> {
    // TODO: build query string using startDate endDate

    const response = await this.api.fetch<WorkoutsResponse>(
      "/v2/usercollection/workout"
    );

    return response.body;
  }

  /**
   * @deprecated
   * @see https://cloud.ouraring.com/docs/
   */
  async sleep_v1(): Promise<SleepResponse_V1> {
    // TODO: build query string using startDate endDate

    const response = await this.api.fetch<SleepResponse_V1>("/v1/sleep");

    return response.body;
  }

  /**
   * @deprecated
   * @see https://cloud.ouraring.com/docs/
   */
  async readiness_v1(): Promise<ReadinessResponse_V1> {
    // TODO: build query string using startDate endDate

    const response = await this.api.fetch<ReadinessResponse_V1>(
      "/v1/readiness"
    );

    return response.body;
  }
}
