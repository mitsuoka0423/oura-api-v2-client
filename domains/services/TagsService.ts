/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TagResponse } from '../models/TagResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TagsService {

    /**
     * Get Tags
     * Returns Oura tags data for the specified Oura user within a given timeframe
     * @param startDate
     * @param endDate
     * @param nextToken
     * @returns TagResponse OK
     * @throws ApiError
     */
    public static tagsRouteTagGet(
        startDate?: string,
        endDate?: string,
        nextToken?: string,
    ): CancelablePromise<TagResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/usercollection/tag',
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
