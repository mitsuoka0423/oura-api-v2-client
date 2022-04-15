export type SessionsResponse = {
  data: Array<{
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
    heart_rate: {
      interval: number;
      items: number[];
      timestamp: string;
    };
    heart_rate_variability: {
      interval: number;
      items: number[];
      timestamp: string;
    };
    mood: "bad" | "worse" | "same" | "good" | "great";
    motion_count: {
      interval: number;
      items: number[];
      timestamp: string;
    };
  }>;
  next_token: string;
};
