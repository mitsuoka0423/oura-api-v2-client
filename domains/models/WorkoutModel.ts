/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkoutIntensity } from './WorkoutIntensity';
import type { WorkoutSource } from './WorkoutSource';

export type WorkoutModel = {
    /**
     * The workout activity type
     */
    activity: string;
    /**
     * The number of calories (kcal) burned during the workout
     */
    calories?: number;
    /**
     * The ```YYYY-MM-DD``` formatted local date indicating when the workout was recorded
     */
    day: string;
    /**
     * The distance (measured in meters) traveled during the workout
     */
    distance?: number;
    /**
     * ISO 8601 formatted local timestamp indicating when the workout ended
     */
    end_datetime: string;
    intensity: WorkoutIntensity;
    /**
     * User-defined label for the workout
     */
    label?: string;
    source: WorkoutSource;
    /**
     * ISO 8601 formatted local timestamp indicating when the workout started
     */
    start_datetime: string;
};

