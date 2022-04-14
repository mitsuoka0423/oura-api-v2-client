export default class Sleep_V1 {
  sleep: SleepData[];

  constructor(input: Sleep_V1) {
    this.sleep = input.sleep.map((data) => new SleepData(data));
  }
}

class SleepData {
  summary_date: string;
  period_id: number;
  is_longest: number;
  timezone: number;
  bedtime_start: string;
  bedtime_end: string;
  score: number;
  score_total: number;
  score_disturbances: number;
  score_efficiency: number;
  score_latency: number;
  score_rem: number;
  score_deep: number;
  score_alignment: number;
  total: number;
  duration: number;
  awake: number;
  light: number;
  rem: number;
  deep: number;
  onset_latency: number;
  restless: number;
  efficiency: number;
  midpoint_time: number;
  hr_lowest: number;
  hr_average: number;
  rmssd: number;
  breath_average: number;
  temperature_delta: number;
  hypnogram_5min: string;
  hr_5min: number[];
  rmssd_5min: number[];

  constructor(input: SleepData) {
    this.summary_date = input.summary_date;
    this.period_id = input.period_id;
    this.is_longest = input.is_longest;
    this.timezone = input.timezone;
    this.bedtime_start = input.bedtime_start;
    this.bedtime_end = input.bedtime_end;
    this.score = input.score;
    this.score_total = input.score_total;
    this.score_disturbances = input.score_disturbances;
    this.score_efficiency = input.score_efficiency;
    this.score_latency = input.score_latency;
    this.score_rem = input.score_rem;
    this.score_deep = input.score_deep;
    this.score_alignment = input.score_alignment;
    this.total = input.total;
    this.duration = input.duration;
    this.awake = input.awake;
    this.light = input.light;
    this.rem = input.rem;
    this.deep = input.deep;
    this.onset_latency = input.onset_latency;
    this.restless = input.restless;
    this.efficiency = input.efficiency;
    this.midpoint_time = input.midpoint_time;
    this.hr_lowest = input.hr_lowest;
    this.hr_average = input.hr_average;
    this.rmssd = input.rmssd;
    this.breath_average = input.breath_average;
    this.temperature_delta = input.temperature_delta;
    this.hypnogram_5min = input.hypnogram_5min;
    this.hr_5min = input.hr_5min;
    this.rmssd_5min = input.rmssd_5min;
  }
}
