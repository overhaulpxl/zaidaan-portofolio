export type TestimonialItem = {
  id: string;
  category?: "domestic" | "international";
  highValue?: boolean;
  amount?: number;
  thumb: string;
  full: string;
  w?: number;
  h?: number;
  month: string;
  date?: string;
  year?: string;
  ts?: number;
};

export type TestimonialsManifest = {
  generatedAt: string;
  count: number;
  items: TestimonialItem[];
};
