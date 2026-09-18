export type Fact = {
  text: string;
  day: string;
  sources?: string[];
};

export type TableRow = {
  cells: string[];
};

export type Section = {
  id: string;
  title: string;
  intro?: string;
  bullets?: Fact[];
  numbered?: Fact[];
  table?: { headers: string[]; rows: TableRow[] };
  notes?: string[];
};

export type DayPage = {
  slug: string;
  title: string;
  date: string;
  subtitle: string;
  honesty: string;
  schedule: { time: string; session: string; host?: string }[];
  sections: Section[];
  demos?: Fact[];
  gaps?: string[];
};

export type Steal = {
  title: string;
  detail: string;
  days: string[];
};

export type SourceLink = {
  label: string;
  url: string;
  day: string;
  notes: string;
};
