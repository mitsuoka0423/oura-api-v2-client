/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HeartRateSource } from './HeartRateSource';

export type HeartRateModel = {
    /**
     * Beats per minute
     */
    bpm: number;
    source: HeartRateSource;
    /**
     * ISO 8601 formatted local timestamp indicating when the heart rate data was collected
     */
    timestamp: string;
};

