"use client";
import book from "@/assets/images/bookIcon.png";
import Image from "next/image";
import { HomeIcon } from "@radix-ui/react-icons";
import { Button } from "../../components/ui/button";
import SelectOption from "@/app/_components/selectItem";
import { GearIcon } from "@radix-ui/react-icons";
import { BellIcon } from "@radix-ui/react-icons";
import { Book } from "lucide-react";
import { SelectScrollable } from "./select-scroll";
import { useState } from "react";
import { Bell } from "lucide-react";
import Link from "next/link";

interface sidebarProp {
  activePage: string;
}

export default function Sidebar({ activePage }: sidebarProp) {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Home",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      name: "Settings",
      icon: <GearIcon />,
      link: "/settings",
    },
  ];

  return (
    <div className="w-[14%] h-[100VH] bg-black">
      <div id="Dashboardlogo" className="">
        <div id="logo" className="flex mt-[26px] ml-[29px]">
          <Image className="" src={book} alt="logo" />
          <h6 className=" mt-2 ml-[4px] font-light text-white text-[16px]">
            <span className="font-medium text-[#820B8A] text-[16px]">CPE</span>{" "}
            E-Library
          </h6>
        </div>
      </div>
      <div className="ml-[19px] mt-[65px] flex flex-col gap-2">
        <div>
          {links.map((link, index) => (
            <Link href={link.link} key={index}>
              <Button
                className={`pl-2 justify-start flex gap-[12px] flex-wrap rounded-3xl w-[158px] h-[40px] text-white `}
              >
                {link.icon}
                {link.name}
              </Button>
            </Link>
          ))}
        </div>

        {/* <div>
          <SelectScrollable />
        </div> */}
        <Button className="mt-[170%] pl-2 justify-start flex gap-[12px] flex-wrap rounded-3xl w-[158px] h-[40px]   text-white">
          <div>
            <BellIcon width="20" height="20" />
          </div>
          Log out
        </Button>
      </div>
    </div>
  );
}
