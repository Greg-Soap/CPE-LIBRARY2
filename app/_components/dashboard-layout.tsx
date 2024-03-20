import Sidebar from "@/app/_components/sidebar";
import React from "react";
import { string } from "zod";

interface dashlayProp {
  children: React.ReactNode;
  activePage: string;
}

export default function DashboardLayout({ children, activePage }: dashlayProp) {
  return (
    <div id="dashboard-body" className="flex  w-[100%] ">
      <Sidebar activePage={activePage} />
      <div id="shit" className="h-[100%] ]">
        <div id="dashboard-top" className="h-[120px]">
          topp
        </div>
        {children}
      </div>
    </div>
  );
}
