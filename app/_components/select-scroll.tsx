"use client";
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
import { usePathname, useRouter } from "next/navigation";

export function SelectScrollable() {
  const router = useRouter();
  const pathname = usePathname();
  const [selected, setSelected] = React.useState("");

  React.useEffect(() => {
    const match = pathname.match(/\/courses\/(\w+)/);
    if (match) {
      setSelected(match[1]);
    }
  }, [pathname]);

  const handleValueChange = (value: string) => {
    setSelected(value);
    router.push(`/courses/${value}`);
  };
  const isCourseActive = pathname.includes("/courses");
  return (
    <Select value={selected} onValueChange={handleValueChange}>
      <SelectTrigger
        className={`${
          isCourseActive ? "bg-primary" : "bg-transparent"
        } text-white border-none`}
      >
        <SelectValue placeholder="Course" />
      </SelectTrigger>
      <SelectContent>
        {data.map((semester) => (
          <SelectGroup key={semester.label}>
            <SelectLabel className="text-white border-none">
              {semester.label}
            </SelectLabel>
            {semester.options.map((course) => (
              <SelectItem
                key={course.value}
                className="text-white border-none"
                value={course.value}
              >
                {course.label}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}

const data = [
  {
    label: "First Semester",
    options: [
      { value: "CPE515", label: "CPE515" },
      { value: "CPE513", label: "CPE513" },
      { value: "CPE557", label: "CPE557" },
      { value: "CPE575", label: "CPE575" },
      { value: "CPE503", label: "CPE503" },
      { value: "CPE519", label: "CPE519" },
    ],
  },
  {
    label: "Second Semester",
    options: [
      { value: "CPE522", label: "CPE522" },
      { value: "CPE516", label: "CPE516" },
      { value: "CPE514", label: "CPE514" },
      { value: "CPE524", label: "CPE524" },
      { value: "CPE512", label: "CPE512" },
      { value: "CPE574", label: "CPE574" },
    ],
  },
];
