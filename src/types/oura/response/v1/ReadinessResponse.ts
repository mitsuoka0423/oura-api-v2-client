export type ReadinessResponse_V1 = {
  readiness: Array<{
    summary_date: string;
    period_id: number;
    score: number;
    score_previous_night: number;
    score_sleep_balance: number;
    score_previous_day: number;
    score_activity_balance: number;
    score_resting_hr: number;
    score_hrv_balance: number;
    score_recovery_index: number;
    score_temperature: number;
    rest_mode_state: number;
  }>;
};
