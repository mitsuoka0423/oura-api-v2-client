export default class HeartRate {
  data: HeartRateData[];
  next_token: string;

  constructor(input: HeartRate) {
    this.data = input.data as Array<HeartRateData>;
    this.next_token = input.next_token;
  }
}

type HeartRateData = {
  bpm: number;
  source: string;
  timestamp: string;
};
