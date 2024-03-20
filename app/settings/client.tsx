"use client";

import DashboardLayout from "../_components/dashboard-layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/seperator";
import { SettingsForm } from "../_components/settingsform";

export default function SettingsPage() {
  const [profile, setProfile] = useState(true);
  const [password, setPassword] = useState(false);
  const [courses, setCourses] = useState(false);
  return (
    <DashboardLayout activePage="settings">
      <div className="pl-[56px] ">
        <h1 className="font-bold text-4xl">Account settings</h1>
        <div className="flex mt-[24px]">
          <Button
            onClick={() => {
              setProfile(true);
              setPassword(false);
              setCourses(false);
            }}
            className="ml-0 pl-0"
          >
            Profile
          </Button>
          <Button
            onClick={() => {
              setProfile(false);
              setPassword(true);
              setCourses(false);
            }}
          >
            Password
          </Button>
          <Button
            onClick={() => {
              setProfile(false);
              setPassword(false);
              setCourses(true);
            }}
          >
            Courses
          </Button>
        </div>
        <div className="flex">
          <Separator
            orientation="horizontal"
            className={`my-4 w-[46px] ${
              profile ? "bg-primary" : "bg-[#CFCFCF]"
            }`}
          />
          <Separator
            orientation="horizontal"
            className="w-[28px] my-4 bg-[#CFCFCF]"
          />
          <Separator
            orientation="horizontal"
            className={`my-4 w-[68px] ${
              password ? "bg-primary" : "bg-[#CFCFCF]"
            }`}
          />
          <Separator
            orientation="horizontal"
            className="w-[30px] my-4 bg-[#CFCFCF]"
          />
          <Separator
            orientation="horizontal"
            className={`my-4 w-[58px] ${
              courses ? "bg-primary" : "bg-[#CFCFCF]"
            }`}
          />
          <Separator
            orientation="horizontal"
            className="my-4 bg-[#CFCFCF] w-[77%]"
          />
        </div>
        {profile && <SettingsForm page={1} />}
        {password && <SettingsForm page={2} />}
        {courses && <SettingsForm page={3} />}
      </div>
    </DashboardLayout>
  );
}
