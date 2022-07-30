/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SessionModel } from './SessionModel';

export type SessionResponse = {
    data: Array<SessionModel>;
    /**
     * Pagination token
     */
    next_token?: string;
};

