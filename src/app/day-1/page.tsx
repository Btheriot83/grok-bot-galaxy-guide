import type { Metadata } from "next";
import { day1 } from "../../../content/day1";
import { DayView } from "../../components/DayView";

export const metadata: Metadata = {
  title: "Day 1",
  description: day1.subtitle,
};

export default function Page() {
  return <DayView day={day1} />;
}
