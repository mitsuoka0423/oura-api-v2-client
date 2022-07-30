/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TagModel } from './TagModel';

export type TagResponse = {
    data: Array<TagModel>;
    /**
     * Pagination token
     */
    next_token?: string;
};

