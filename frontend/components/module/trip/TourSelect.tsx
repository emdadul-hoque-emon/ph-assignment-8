"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
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
import { getSingleTour, getTours } from "@/action/tour";
import { ITour } from "@/interfaces/tour.interface";
import Image from "next/image";
import { serverFetch } from "@/lib/server-fetch";

export interface Tour {
  id: string;
  title: string;
}

interface TourSearchSelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  className?: string;
  disabled?: boolean;
  id?: string;
}

export function TourSearchSelect({
  value,
  onValueChange,
  placeholder = "Select a tour...",
  searchPlaceholder = "Search tours...",
  className,
  disabled = false,
  id,
}: TourSearchSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [tours, setTours] = React.useState<ITour[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  React.useEffect(() => {
    const fetchTour = async () => {
      const res = await serverFetch.get(`/v2/tours/${value}`);
      const data = await res.json();
      if (!data?.success) {
        setTours([]);
        return;
      }
      setTours([data.data]); // Adjust based on your API response structure
    };
    if (value && !tours.some((tour) => tour.id === value)) {
      fetchTour();
    }
  }, [value]);

  // Fetch tours based on search query
  React.useEffect(() => {
    const fetchTours = async () => {
      if (!open) return;

      setIsLoading(true);
      try {
        const res = await serverFetch.get(
          `/v2/tours?searchTerm=${debouncedSearchQuery}`,
        );
        const data = await res.json();
        if (!data?.success) {
          setTours([]);
          return;
        }
        setTours(data.data as ITour[]); // Adjust based on your API response structure
      } catch (error) {
        console.error("Error fetching tours:", error);
        setTours([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTours();
  }, [debouncedSearchQuery, open]);

  // Load initial tours when popover opens
  React.useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 0);
    } else {
      setSearchQuery("");
    }
  }, [open]);

  const selectedTour = tours.find((tour) => tour.id === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild id={id}>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between", className)}
          disabled={disabled}
        >
          <span className="truncate">
            {selectedTour ? selectedTour.title : placeholder}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[--radix-popover-trigger-width] p-0"
        align="start"
        sideOffset={5}
        style={{ zIndex: 9999 }}
        onOpenAutoFocus={(e) => {
          e.preventDefault();
          inputRef.current?.focus();
        }}
      >
        <Command shouldFilter={false}>
          <CommandInput
            ref={inputRef}
            placeholder={searchPlaceholder}
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          <CommandList className="max-h-75 overflow-y-auto">
            {isLoading ? (
              <div className="flex items-center justify-center py-6">
                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
              </div>
            ) : tours.length === 0 ? (
              <CommandEmpty>
                {searchQuery
                  ? "No tours found."
                  : "Start typing to search tours..."}
              </CommandEmpty>
            ) : (
              <CommandGroup>
                {tours.map((tour) => (
                  <CommandItem
                    key={tour.id}
                    value={tour.id}
                    onSelect={(currentValue) => {
                      onValueChange?.(
                        currentValue === value ? "" : currentValue,
                      );
                      setOpen(false);
                    }}
                    className="cursor-pointer justify-start"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === tour.id ? "opacity-100" : "opacity-0",
                      )}
                    />
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      width={32}
                      height={32}
                    />
                    {tour.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
