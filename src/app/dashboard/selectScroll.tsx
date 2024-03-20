"use client"
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface selectProp {
  setOpen: React.Dispatch<React.SetStateAction<Boolean>>;
}

export function SelectScrollable({setOpen} : selectProp) {

  const handleTriggerClick = () => {
    setOpen((open) => !open);
    console.log("hello")
  };

  return (
    <Select>
      <SelectTrigger
        className='w-158'
        onClick={handleTriggerClick}
      >
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* ... (your existing code) ... */}
        </SelectGroup>
        {/* ... (more SelectGroup components) ... */}
      </SelectContent>
    </Select>
  );
}
