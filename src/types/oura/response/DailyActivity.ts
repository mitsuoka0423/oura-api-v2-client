export default class DailyActivity {
  data: Array<DailyActivityData>;
  next_token?: string;

  constructor(input: DailyActivity) {
    this.data = input.data as Array<DailyActivityData>;
    this.next_token = input.next_token;
  }
}

type DailyActivityData = {
  class_5_min: string;
  score: number;
  active_calories: number;
  average_met_minutes: number;
  contributors: {
    meet_daily_targets: number;
    move_every_hour: number;
    recovery_time: number;
    stay_active: number;
    training_frequency: number;
    training_volume: number;
  };
  equivalent_walking_distance: number;
  high_activity_met_minutes: number;
  high_activity_time: number;
  inactivity_alerts: number;
  low_activity_met_minutes: number;
  low_activity_time: number;
  medium_activity_met_minutes: number;
  medium_activity_time: number;
  met: {
    interval: number;
    items: [];
    timestamp: string;
  };
  meters_to_target: number;
  non_wear_time: number;
  resting_time: number;
  sedentary_met_minutes: number;
  sedentary_time: number;
  steps: number;
  target_calories: number;
  target_meters: number;
  total_calories: number;
  day: string;
  timestamp: string;
};
