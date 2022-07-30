/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkoutModel } from './WorkoutModel';

export type WorkoutResponse = {
    data: Array<WorkoutModel>;
    /**
     * Pagination token
     */
    next_token?: string;
};

