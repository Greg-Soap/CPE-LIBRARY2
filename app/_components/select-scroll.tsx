"use client"
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react";

interface selectProp {
  open: boolean;
}


  
export function SelectScrollable() {
  
  return (
    <div >
    <Select bg-black>
      <SelectTrigger
        className="w-[158px] text-white border-none"
      >
        <SelectValue placeholder="Course" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="text-white border-none">First Semester</SelectLabel>
          <SelectItem className='text-white border-none'  value="CPE515">CPE515</SelectItem>
          <SelectItem className='text-white border-none' value="CPE513">CP3513</SelectItem>
          <SelectItem className='text-white border-none' value="CPE557">CPE557</SelectItem>
          <SelectItem className='text-white border-none' value="CPE575">CPE575</SelectItem>
          <SelectItem className='text-white border-none' value="CPE503">CPE503</SelectItem>
          <SelectItem className='text-white border-none' value="CPE519">CPE519</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel className="text-white border-none">Second Semester</SelectLabel>
          <SelectItem className='text-white border-none' value="CPE522">CPE522</SelectItem>
          <SelectItem className='text-white border-none' value="CPE516">CPE516</SelectItem>
          <SelectItem className='text-white border-none' value="CPE514">CPE514</SelectItem>
          <SelectItem className='text-white border-none' value="CPE524">
            CPE524
          </SelectItem>
          <SelectItem className='text-white border-none' value="CPE512">CPE512</SelectItem>
          <SelectItem className='text-white border-none' value="CPE574">CPE574</SelectItem>
        </SelectGroup>
        
      </SelectContent>
    </Select>
    </div>

  )
}
