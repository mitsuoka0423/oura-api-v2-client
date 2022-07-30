/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The data source where the Workout data was collected from:
 * * ```manual``` Workouts which were manually entered by the user
 * * ```autodetected``` Workouts autodetected by Oura
 * * ```confirmed``` Workouts autodetected by Oura and confirmed by the user
 * * ```workout_heart_rate``` Workouts recorded with the Workout HR feature
 */
export type WorkoutSource = string;
