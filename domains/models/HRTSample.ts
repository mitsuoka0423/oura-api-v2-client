/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Timeseries data represented by an array of numbers; this data is available for sessions longer than 5 minutes
 */
export type HRTSample = {
    /**
     * The number of seconds between records
     */
    interval: number;
    /**
     * The recorded values
     */
    items: Array<number>;
    /**
     * ISO 8601 formatted local timestamp indicating the start datetime of when the data was collected
     */
    timestamp: string;
};

