import { Metadata } from "next";
import DashHome from "./client";

export const metadata: Metadata = {
  title: "Home",
  openGraph: { title: "Home" },
  twitter: { title: "Home" },
};

export default function Dashboard() {
  return <DashHome />;
}
