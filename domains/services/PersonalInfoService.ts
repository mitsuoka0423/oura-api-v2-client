/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PersonalInfoResponse } from '../models/PersonalInfoResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PersonalInfoService {

    /**
     * Get Personal Info
     * Returns personal info data for the specified Oura user.
     * @returns PersonalInfoResponse OK
     * @throws ApiError
     */
    public static personalInfoRouteGet(): CancelablePromise<PersonalInfoResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/usercollection/personal_info',
        });
    }

}
