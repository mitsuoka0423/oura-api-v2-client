/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SessionResponse } from '../models/SessionResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SessionsService {

    /**
     * Get Sessions
     * Returns available Oura session data for the specified Oura user within a given timeframe
     * @param startDate
     * @param endDate
     * @param nextToken
     * @returns SessionResponse OK
     * @throws ApiError
     */
    public static sessionsRouteSessionGet(
        startDate?: string,
        endDate?: string,
        nextToken?: string,
    ): CancelablePromise<SessionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/usercollection/session',
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
