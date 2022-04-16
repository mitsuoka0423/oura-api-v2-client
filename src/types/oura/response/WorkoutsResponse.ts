export type WorkoutsResponse = {
  data: Array<{
    activity: string;
    calories: number;
    day: string;
    start_datetime: string;
    end_datetime: string;
    intensity: "easy" | "moderate" | "hard";
    label?: string;
    source: string;
  }>;
  next_token: string;
};
