/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DailyActivityResponse } from '../models/DailyActivityResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DailyActivityService {

    /**
     * Get Daily Activity
     * Returns Oura Daily Activity data for the specified Oura user within a given timeframe
     * @param startDate
     * @param endDate
     * @param nextToken
     * @returns DailyActivityResponse OK
     * @throws ApiError
     */
    public static dailyActivityRouteDailyActivityGet(
        startDate?: string,
        endDate?: string,
        nextToken?: string,
    ): CancelablePromise<DailyActivityResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/usercollection/daily_activity',
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'next_token': nextToken,
            },
            errors: {
                400: `Query Parameter Validation Error`,
                426: `Minimum App Version Error`,
            },
        });
    }

}
