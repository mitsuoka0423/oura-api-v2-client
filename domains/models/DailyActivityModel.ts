/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActivityContributors } from './ActivityContributors';
import type { METSample } from './METSample';

export type DailyActivityModel = {
    /**
     * 5-minute activity classification for the activity period:
     * * ```0```    non wear
     * * ```1``` rest
     * * ```2``` inactive
     * * ```3``` low activity
     * * ```4``` medium activity
     * * ```5``` high activity
     */
    class_5_min?: string;
    /**
     * Activity score in range ```[1, 100]```
     */
    score?: number;
    /**
     * Active calories expended (in kilocalories)
     */
    active_calories: number;
    /**
     * Average metabolic equivalent (MET) in minutes
     */
    average_met_minutes: number;
    contributors: ActivityContributors;
    /**
     * Equivalent walking distance (in meters) of energy expenditure
     */
    equivalent_walking_distance: number;
    /**
     * High activity metabolic equivalent (MET) in minutes
     */
    high_activity_met_minutes: number;
    /**
     * High activity metabolic equivalent (MET) in seconds
     */
    high_activity_time: number;
    /**
     * Number of inactivity alerts received
     */
    inactivity_alerts: number;
    /**
     * Low activity metabolic equivalent (MET) in minutes
     */
    low_activity_met_minutes: number;
    /**
     * Low activity metabolic equivalent (MET) in seconds
     */
    low_activity_time: number;
    /**
     * Medium activity metabolic equivalent (MET) in minutes
     */
    medium_activity_met_minutes: number;
    /**
     * Medium activity metabolic equivalent (MET) in seconds
     */
    medium_activity_time: number;
    met: METSample;
    /**
     * Remaining meters to target (from ```target_meters```)
     */
    meters_to_target: number;
    /**
     * The time (in seconds) in which the ring was not worn
     */
    non_wear_time: number;
    /**
     * Resting time (in seconds)
     */
    resting_time: number;
    /**
     * Sedentary metabolic equivalent (MET) in minutes
     */
    sedentary_met_minutes: number;
    /**
     * Sedentary metabolic equivalent (MET) in seconds
     */
    sedentary_time: number;
    /**
     * Total number of steps taken
     */
    steps: number;
    /**
     * Daily activity target (in kilocalories)
     */
    target_calories: number;
    /**
     * Daily activity target (in meters)
     */
    target_meters: number;
    /**
     * Total calories expended (in kilocalories)
     */
    total_calories: number;
    /**
     * The ```YYYY-MM-DD``` formatted local date indicating when the daily activity occurred
     */
    day: string;
    /**
     * ISO 8601 formatted local timestamp indicating the start datetime of when the daily activity occurred
     */
    timestamp: string;
};

