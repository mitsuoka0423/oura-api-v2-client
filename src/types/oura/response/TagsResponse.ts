export type TagsResponse = {
  data: Array<{
    day: string;
    text: string;
    timestamp: string;
    tags: string[];
  }>;
  next_token: string;
};
