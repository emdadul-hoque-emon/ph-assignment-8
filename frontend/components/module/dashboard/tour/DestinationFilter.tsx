"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDebounce } from "@/hooks/useDebounce";
import { ITour } from "@/interfaces/tour.interface";
import { serverFetch } from "@/lib/server-fetch";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import React, { useEffect, useState } from "react";

interface Destination {
  city: string;
  country: string;
  id: string;
}

export const DestinationSelect = React.memo(
  ({
    selected,
    setSelected,
    defaultValue,
  }: {
    selected: Destination | null;
    setSelected: any;
    defaultValue?: ITour;
  }) => {
    const [open, setOpen] = useState(false);
    const [list, setList] = useState<Destination[]>([]);
    const [search, setSearch] = useState("");

    const debouncedSearch = useDebounce(search, 500);

    useEffect(() => {
      if (!open) return;

      const fetchData = async () => {
        const res = await serverFetch.get(
          `/v2/destinations?searchTerm=${debouncedSearch}&limit=10`,
        );
        const data = await res.json();
        setList(data.data);
      };

      fetchData();
    }, [open, debouncedSearch]);

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline">
            {selected
              ? `${selected.city}, ${selected.country}`
              : defaultValue
                ? `${defaultValue.destination.city}, ${defaultValue.destination.country}`
                : "Select destination"}
            <ChevronsUpDown className="ml-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>

        <PopoverContent>
          <Command>
            <CommandInput
              placeholder="Search..."
              value={search}
              onValueChange={setSearch}
            />
            <CommandList>
              <CommandEmpty>No results</CommandEmpty>
              <CommandGroup>
                {list.map((d) => (
                  <CommandItem
                    key={d.id}
                    onSelect={() => {
                      setSelected(d);
                      setOpen(false);
                    }}
                    value={`${d.city}, ${d.country}`}
                  >
                    <Check
                      className={cn(
                        "mr-2",
                        selected?.id === d.id ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {d.city}, {d.country}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
);

DestinationSelect.displayName = "DestinationSelect";
