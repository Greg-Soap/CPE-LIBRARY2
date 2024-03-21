"use client";
import Image from "next/image";
import { GearIcon, BellIcon, HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import book from "@/assets/images/bookIcon.png";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  console.log(pathname);
  const links = [
    {
      name: "Home",
      icon: <HomeIcon />,
      link: "/home",
    },
    {
      name: "Settings",
      icon: <GearIcon />,
      link: "/settings",
    },
  ];

  return (
    <div className="w-[200px] min-h-screen h-full bg-black">
      <div id="logo" className="flex p-5 pt-6 ">
        <Image className="" src={book} alt="logo" />
        <h6 className=" mt-2 ml-[4px] font-light text-white">
          <span className="font-medium text-primary ">CPE </span>
          E-Library
        </h6>
      </div>

      <div className="p-5 h-[75%]  mt-[65px] flex flex-col justify-between gap-2">
        <div className="flex flex-col gap-2">
          {links.map((link, index) => {
            const isActive = pathname === link.link;
            return (
              <Link href={link.link} key={index}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={`w-full justify-start flex gap-[12px] flex-wrap rounded-xl  px-4 py-3 text-white `}
                >
                  {link.icon}
                  {link.name}
                </Button>
              </Link>
            );
          })}
        </div>

        {/* <div>
          <SelectScrollable />
        </div> */}
        <Button className=" justify-start flex gap-[12px] rounded-xl px-4 py-3 text-white">
          <BellIcon width="20" height="20" />
          Log out
        </Button>
      </div>
    </div>
  );
}
