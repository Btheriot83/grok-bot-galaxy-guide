import type { Metadata } from "next";
import { day3 } from "../../../content/day3";
import { DayView } from "../../components/DayView";

export const metadata: Metadata = {
  title: "Day 3",
  description: day3.subtitle,
};

export default function Page() {
  return <DayView day={day3} />;
}
