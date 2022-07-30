/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HeartRateModel } from './HeartRateModel';

export type HeartRateResponse = {
    /**
     * Heart Rate Model
     */
    data: Array<HeartRateModel>;
    /**
     * Pagination token
     */
    next_token?: string;
};

