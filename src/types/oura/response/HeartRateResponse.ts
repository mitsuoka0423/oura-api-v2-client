export type HeartRateResponse = {
  data: Array<{
    bpm: number;
    source: string;
    timestamp: string;
  }>;
  next_token: string;
};
