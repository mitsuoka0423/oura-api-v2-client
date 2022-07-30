/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HRTSample } from './HRTSample';
import type { HRVSample } from './HRVSample';
import type { Sample } from './Sample';
import type { SessionMood } from './SessionMood';
import type { SessionType } from './SessionType';

export type SessionModel = {
    /**
     * The date when the session occurred
     */
    day: string;
    /**
     * The start datetime when the session occurred
     */
    start_datetime: string;
    /**
     * The end datetime when the session occurred
     */
    end_datetime: string;
    type: SessionType;
    heart_rate?: HRTSample;
    heart_rate_variability?: HRVSample;
    mood?: SessionMood;
    motion_count?: Sample;
};

