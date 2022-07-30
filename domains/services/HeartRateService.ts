/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HeartRateResponse } from '../models/HeartRateResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HeartRateService {

    /**
     * Get Heart Rate
     * Returns available heart rate data for a specified Oura user within a given timeframe
     * @param startDatetime
     * @param endDatetime
     * @param nextToken
     * @returns HeartRateResponse OK
     * @throws ApiError
     */
    public static heartrateRouteHeartrateGet(
        startDatetime?: string,
        endDatetime?: string,
        nextToken?: string,
    ): CancelablePromise<HeartRateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/usercollection/heartrate',
            query: {
                'start_datetime': startDatetime,
                'end_datetime': endDatetime,
                'next_token': nextToken,
            },
            errors: {
                400: `Query Parameter Validation Error`,
                426: `Minimum App Version Error`,
            },
        });
    }

}
