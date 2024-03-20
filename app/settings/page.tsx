import { Metadata } from "next";
import SettingsPage from "./client";

export const metadata: Metadata = {
  title: "Settings",
  openGraph: { title: "Settings" },
  twitter: { title: "Settings" },
};

export default function Settings() {
  return <SettingsPage />;
}
