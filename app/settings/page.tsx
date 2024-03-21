import { Metadata } from "next";
import { SettingsForm } from "../_components/settings-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Settings",
  openGraph: { title: "Settings" },
  twitter: { title: "Settings" },
};

export default function page() {
  return (
    <>
      <h1 className="font-bold text-4xl mb-6">Account settings</h1>
      <Tabs defaultValue="profile" className="w-full">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <SettingsForm page={1} />
        </TabsContent>
        <TabsContent value="password">
          <SettingsForm page={2} />
        </TabsContent>
        <TabsContent value="courses">
          <SettingsForm page={3} />
        </TabsContent>
      </Tabs>
    </>
  );
}
