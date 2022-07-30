/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Activity score contributors
 */
export type ActivityContributors = {
    /**
     * Contribution of meeting previous 7-day daily activity targets in range ```[1, 100]```
     */
    meet_daily_targets?: number;
    /**
     * Contribution of previous 24-hour inactivity alerts in range ```[1, 100]```
     */
    move_every_hour?: number;
    /**
     * Contribution of previous 7-day recovery time in range ```[1, 100]```
     */
    recovery_time?: number;
    /**
     * Contribution of previous 24-hour activity in range ```[1, 100]```
     */
    stay_active?: number;
    /**
     * Contribution of previous 7-day exercise frequency in range ```[1, 100]```
     */
    training_frequency?: number;
    /**
     * Contribution of previous 7-day exercise volume in range ```[1, 100]```
     */
    training_volume?: number;
};

