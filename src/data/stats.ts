export interface Stat {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  numericValue?: number;
}

export const stats: Stat[] = [
  { value: "5.0", label: "on Google", numericValue: 5.0 },
  { value: "10+", label: "years serving owners", numericValue: 10, suffix: "+" },
  { value: "50+", label: "rentals supported", numericValue: 50, suffix: "+" },
  { value: "Erie & surrounding", label: "Service area" },
  { value: "Same business day", label: "Response window" },
];
