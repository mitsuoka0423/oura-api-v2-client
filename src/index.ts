import ApiClient from './apiClient';
import {
  DailyActivityResponse,
  PersonalInfoResponse,
  HeartRateResponse,
  SessionResponse,
  TagResponse,
  WorkoutResponse,
} from '../domains';
import {
  SleepResponse_V1,
  ReadinessResponse_V1,
} from './types/oura/response/v1';
import { URLSearchParams } from 'url';
import Response from './types/Response';

type RequestProps = {
  startDate?: string;
  endDate?: string;
  nextToken?: string;
};

type HeartRateRequestProps = {
  startDate_timestamp?: string;
  endDate_timestamp?: string;
  nextToken?: string;
};

export interface ApiClientInterface {
  fetch<T>(path: string, queryParameters?: string): Promise<Response<T>>;
}

export default class OuraApiV2Client {
  api: ApiClientInterface;

  constructor(accessToken: string, api?: ApiClientInterface) {
    this.api = api ?? new ApiClient(accessToken);
  }

  async dailyActivity(props?: RequestProps): Promise<DailyActivityResponse> {
    const parameters = new URLSearchParams();
    if (props?.startDate) {
      parameters.set('start_date', props.startDate);
    }
    if (props?.endDate) {
      parameters.set('end_date', props.endDate);
    }
    if (props?.nextToken) {
      parameters.set('next_token', props.nextToken);
    }

    const response = await this.api.fetch<DailyActivityResponse>(
      '/v2/usercollection/daily_activity',
      parameters.toString()
    );

    return response.body;
  }

  async personalInfo(): Promise<PersonalInfoResponse> {
    const response = await this.api.fetch<PersonalInfoResponse>(
      '/v2/usercollection/personal_info'
    );

    return response.body;
  }

  async heartRate(props?: HeartRateRequestProps): Promise<HeartRateResponse> {
    const parameters = new URLSearchParams();
    if (props?.startDate_timestamp) {
      parameters.set('start_date', props.startDate_timestamp);
    }
    if (props?.endDate_timestamp) {
      parameters.set('end_date', props.endDate_timestamp);
    }
    if (props?.nextToken) {
      parameters.set('next_token', props.nextToken);
    }

    const response = await this.api.fetch<HeartRateResponse>(
      '/v2/usercollection/heartrate',
      parameters.toString()
    );

    return response.body;
  }

  async sessions(props?: RequestProps): Promise<SessionResponse> {
    const parameters = new URLSearchParams();
    if (props?.startDate) {
      parameters.set('start_date', props.startDate);
    }
    if (props?.endDate) {
      parameters.set('end_date', props.endDate);
    }
    if (props?.nextToken) {
      parameters.set('next_token', props.nextToken);
    }

    const response = await this.api.fetch<SessionResponse>(
      '/v2/usercollection/session',
      parameters.toString()
    );

    return response.body;
  }

  async tags(props?: RequestProps): Promise<TagResponse> {
    const parameters = new URLSearchParams();
    if (props?.startDate) {
      parameters.set('start_date', props.startDate);
    }
    if (props?.endDate) {
      parameters.set('end_date', props.endDate);
    }
    if (props?.nextToken) {
      parameters.set('next_token', props.nextToken);
    }

    const response = await this.api.fetch<TagResponse>(
      '/v2/usercollection/tag',
      parameters.toString()
    );

    return response.body;
  }

  async workouts(props?: RequestProps): Promise<WorkoutResponse> {
    const parameters = new URLSearchParams();
    if (props?.startDate) {
      parameters.set('start_date', props.startDate);
    }
    if (props?.endDate) {
      parameters.set('end_date', props.endDate);
    }
    if (props?.nextToken) {
      parameters.set('next_token', props.nextToken);
    }

    const response = await this.api.fetch<WorkoutResponse>(
      '/v2/usercollection/workout',
      parameters.toString()
    );

    return response.body;
  }

  /**
   * @deprecated
   * @see https://cloud.ouraring.com/docs/
   */
  async sleep_v1(props?: RequestProps): Promise<SleepResponse_V1> {
    const parameters = new URLSearchParams();
    if (props?.startDate) {
      parameters.set('start', props.startDate);
    }
    if (props?.endDate) {
      parameters.set('end', props.endDate);
    }

    const response = await this.api.fetch<SleepResponse_V1>(
      '/v1/sleep',
      parameters.toString()
    );

    return response.body;
  }

  /**
   * @deprecated
   * @see https://cloud.ouraring.com/docs/
   */
  async readiness_v1(props?: RequestProps): Promise<ReadinessResponse_V1> {
    const parameters = new URLSearchParams();
    if (props?.startDate) {
      parameters.set('start', props.startDate);
    }
    if (props?.endDate) {
      parameters.set('end', props.endDate);
    }

    const response = await this.api.fetch<ReadinessResponse_V1>(
      '/v1/readiness',
      parameters.toString()
    );

    return response.body;
  }
}
