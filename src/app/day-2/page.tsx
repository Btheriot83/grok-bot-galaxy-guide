import type { Metadata } from "next";
import { day2 } from "../../../content/day2";
import { DayView } from "../../components/DayView";

export const metadata: Metadata = {
  title: "Day 2",
  description: day2.subtitle,
};

export default function Page() {
  return <DayView day={day2} />;
}
