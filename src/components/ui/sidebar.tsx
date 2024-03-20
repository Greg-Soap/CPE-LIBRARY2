"use client"
import book from '@/assets/images/bookIcon.png'
import Image from 'next/image';
import home from '@/assets/images/Home.png'
import { Button } from './button';
import SelectOption from '@/app/dashboard/selectItem';
import { GearIcon } from '@radix-ui/react-icons';
import {BellIcon} from '@radix-ui/react-icons';
import lightBook from '@/assets/images/lightBook.png'
import { SelectScrollable } from './selectScroll';
import { useState } from 'react';
import { Bell } from 'lucide-react';


export default function Sidebar() {
    const [open, setOpen] = useState(false)

  return (
      <div className="w-[198px] h-[100VH] bg-black">
        <div id="Dashboardlogo" className="">
            <div id='logo' className="flex mt-[26px] ml-[29px]">
                <Image className="" src={book} alt="logo" />
                <h6 className=" mt-2 ml-[4px] font-light text-white text-[16px]"><span className="font-medium text-[#820B8A] text-[16px]">CPE</span> E-Library</h6>
              </div>
          </div>
          <div className='ml-[19px] mt-[65px] flex flex-col gap-2'>
              <Button
                  className='justify-start flex gap-[12px] flex-wrap rounded-3xl w-[158px] h-[40px]  text-white'>
                  <Image className=''alt='home' src={home}  width="20" height="20" />Home
              </Button>
              <div>
                  <SelectScrollable />
              </div>
              <Button
                  className='pl-2 justify-start flex gap-[12px] flex-wrap rounded-3xl w-[158px] h-[40px]  bg-[] text-white'>
                  <GearIcon  width="20" height="20" />Settings
              </Button>
              <Button
                  className=' pl-2 justify-start flex gap-[12px]  flex-wrap rounded-3xl w-[158px] h-[40px]  bg-[] text-white'>
                  <div>
                    <BellIcon width="20" height="20"/>
                  </div>
                  Notifications
              </Button>

          </div>
         

        </div>
  );
}
