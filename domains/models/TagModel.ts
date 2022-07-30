/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TagModel = {
    /**
     * The ```YYYY-MM-DD``` formatted local date indicating when the tag was collected
     */
    day: string;
    /**
     * Custom annotations associated with the tag, as provided by the user
     */
    text?: string;
    /**
     * ISO 8601 formatted local timestamp indicating when the tag was collected
     */
    timestamp: string;
    /**
     * A list of tags selected by the user. A translation of tag values can be found [here](https://cloud.ouraring.com/edu/tag-translations).
     */
    tags: Array<string>;
};

