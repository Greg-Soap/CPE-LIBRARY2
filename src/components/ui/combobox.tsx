"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Check, ChevronsUpDown } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"

const levels = [
  { label: "100", value: "100" },
  { label: "200", value: "200" },
  { label: "300", value: "300" },
  { label: "400", value: "400" },
  { label: "500", value: "500" }
] as const

const FormSchema = z.object({
  level: z.string({
    required_error: "Please select a level.",
  }),
})

export function ComboboxForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="level"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>level</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? levels.find(
                            (level) => level.value === field.value
                          )?.label
                        : "Select level"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search level..." />
                    <CommandEmpty>No level found.</CommandEmpty>
                    <CommandGroup>
                      {levels.map((level) => (
                        <CommandItem
                          value={level.label}
                          key={level.value}
                          onSelect={() => {
                            form.setValue("level", level.value)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              level.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {level.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                This is the level that will be used in the dashboard.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
