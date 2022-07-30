/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DailyActivityModel } from './DailyActivityModel';

export type DailyActivityResponse = {
    data: Array<DailyActivityModel>;
    /**
     * Pagination token
     */
    next_token?: string;
};

