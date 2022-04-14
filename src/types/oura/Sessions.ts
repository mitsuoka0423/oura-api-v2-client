export default class Sessions {
  data: SessionData[];
  next_token: string;

  constructor(input) {
    this.data = input.data as SessionData[];
    this.next_token = input.next_token;
  }
}

type SessionData = {
  day: string;
  start_datetime: string;
  end_datetime: string;
  type:
    | "breathing"
    | "meditation"
    | "nap"
    | "relaxation"
    | "rest"
    | "body_status";
  heart_rate: SessionDataTimeSeries;
  heart_rate_variability: SessionDataTimeSeries;
  mood: "bad" | "worse" | "same" | "good" | "great";
  motion_count: SessionDataTimeSeries;
};

type SessionDataTimeSeries = {
  interval: number;
  items: number[];
  timestamp: string;
};
