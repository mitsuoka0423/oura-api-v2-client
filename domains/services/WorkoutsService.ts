/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkoutResponse } from '../models/WorkoutResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WorkoutsService {

    /**
     * Get Workouts
     * Returns available Oura workout data for the specified Oura user within a given timeframe
     * @param startDate
     * @param endDate
     * @param nextToken
     * @returns WorkoutResponse OK
     * @throws ApiError
     */
    public static workoutsRouteWorkoutGet(
        startDate?: string,
        endDate?: string,
        nextToken?: string,
    ): CancelablePromise<WorkoutResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/usercollection/workout',
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
