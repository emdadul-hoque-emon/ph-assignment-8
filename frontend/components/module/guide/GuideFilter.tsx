"use client";
import RefreshButton from "@/components/shared/RefreshButton";
import SearchFilter from "@/components/shared/SearchFilter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GUIDE_SPECIALTIES } from "@/constants/user";
import { useDebounce } from "@/hooks/useDebounce";
import { Gender } from "@/interfaces/user.interface";
import { Check, ChevronsUpDown, Filter, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useTransition } from "react";
import allLanguages from "@/data/iso/languages.json";

const GuideFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [specialties, setSpecialties] = React.useState<string[]>([]);
  const [languages, setLanguages] = React.useState<string[]>([]);
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [gender, setGender] = React.useState<Gender | "all" | string>("");
  const [open, setOpen] = React.useState(false);
  const [languagesModalOpen, setLanguagesModalOpen] = React.useState(false);

  const debouncedName = useDebounce(name, 500);
  const debouncedEmail = useDebounce(email, 500);
  const debouncedPhone = useDebounce(phone, 500);
  const debouncedGender = useDebounce(gender, 500);

  useEffect(() => {
    const params = new URLSearchParams();

    if (debouncedName) {
      params.append("name", debouncedName);
    } else {
      params.delete("name");
    }
    if (debouncedEmail) {
      params.append("email", debouncedEmail);
    } else {
      params.delete("email");
    }
    if (debouncedPhone) {
      params.append("phone", debouncedPhone);
    } else {
      params.delete("phone");
    }
    // if (debouncedSpecialties.length > 0) {
    //   debouncedSpecialties.forEach((s) => params.set("specialties", s));
    // } else {
    //   params.delete("specialties");
    // }
    // if (debouncedLanguages.length > 0) {
    //   debouncedLanguages.forEach((l) => params.append("languages", l));
    // } else {
    //   params.delete("languages");
    // }
    if (debouncedGender) {
      params.append("gender", debouncedGender);
    } else {
      params.delete("gender");
    }

    // params.set("page", "1");
    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  }, [debouncedName, debouncedEmail, debouncedPhone, debouncedGender]);

  const toggleSpecialty = (value: string) => {
    if (specialties.includes(value)) {
      setSpecialties(specialties.filter((s) => s !== value));
    } else {
      setSpecialties([...specialties, value]);
    }
  };
  const toggleLanguage = (value: string) => {
    if (languages.includes(value)) {
      setLanguages(languages.filter((l) => l !== value));
    } else {
      setLanguages([...languages, value]);
    }
  };

  const applyToggleSpecialtyFilter = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("specialties");

    if (specialties.length > 0) {
      specialties.forEach((s) => params.append("specialties", s));
    }

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });

    setOpen(false);
  };
  const applyToggleLanguageFilter = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("languages");

    if (languages.length > 0) {
      languages.forEach((l) => params.append("languages", l));
    }

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });

    setLanguagesModalOpen(false);
  };

  const clearAllFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("specialties");
    params.delete("languages");
    params.delete("name");
    params.delete("email");
    params.delete("phone");
    params.delete("gender");

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });

    setName("");
    setEmail("");
    setPhone("");
    setSpecialties([]);
    setLanguages([]);
    setGender("");
  };

  const activeFiltersCount =
    specialties.length +
    languages.length +
    (gender ? 1 : 0) +
    (email ? 1 : 0) +
    (phone ? 1 : 0);

  return (
    <div className="space-y-3">
      {/* Row 1: Search and Refresh */}
      <div className="flex items-center gap-3">
        <SearchFilter
          paramsName="searchTerm"
          placeholder="Search guide (name, email, phone)..."
        />
        <RefreshButton />
      </div>

      {/* Row 2: Filter Controls */}
      <div className="flex items-center gap-3">
        {/* Expertise Multi-Select */}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-60 justify-between h-10"
            >
              <Filter className="mr-2 h-4 w-4" />
              {specialties.length > 0
                ? `${specialties.length} selected`
                : "Select specialties"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-60 p-0" align="start">
            <Command>
              <CommandInput placeholder="Search specialties..." />
              <CommandList>
                <CommandEmpty>No specialty found.</CommandEmpty>
                <CommandGroup>
                  {GUIDE_SPECIALTIES.map((interest, index) => {
                    const isSelected = specialties.includes(interest);
                    return (
                      <CommandItem
                        key={index}
                        value={interest}
                        onSelect={() => toggleSpecialty(interest)}
                        className={isSelected ? "bg-accent" : ""}
                      >
                        <Checkbox checked={isSelected} className="mr-2" />
                        <span className={isSelected ? "font-medium" : ""}>
                          {interest}
                        </span>
                        {isSelected && (
                          <Check className="ml-auto h-4 w-4 text-primary" />
                        )}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </CommandList>
              <div className="p-2 border-t">
                <Button
                  onClick={applyToggleSpecialtyFilter}
                  className="w-full"
                  size="sm"
                  disabled={isPending}
                >
                  Apply Filter
                </Button>
              </div>
            </Command>
          </PopoverContent>
        </Popover>

        {/* Languages Multi-Select */}
        <Popover open={languagesModalOpen} onOpenChange={setLanguagesModalOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-60 justify-between h-10"
            >
              <Filter className="mr-2 h-4 w-4" />
              {languages.length > 0
                ? `${languages.length} selected`
                : "Select languages"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-60 p-0" align="start">
            <Command>
              <CommandInput placeholder="Search languages..." />
              <CommandList>
                <CommandEmpty>No language found.</CommandEmpty>
                <CommandGroup>
                  {allLanguages.map((l, index) => {
                    const isSelected = languages.includes(l.name);
                    return (
                      <CommandItem
                        key={index}
                        value={l.name}
                        onSelect={() => toggleLanguage(l.name)}
                        className={isSelected ? "bg-accent" : ""}
                      >
                        <Checkbox checked={isSelected} className="mr-2" />
                        <span className={isSelected ? "font-medium" : ""}>
                          {l.name}
                        </span>
                        {isSelected && (
                          <Check className="ml-auto h-4 w-4 text-primary" />
                        )}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </CommandList>
              <div className="p-2 border-t">
                <Button
                  onClick={applyToggleLanguageFilter}
                  className="w-full"
                  size="sm"
                  disabled={isPending}
                >
                  Apply Filter
                </Button>
              </div>
            </Command>
          </PopoverContent>
        </Popover>

        {/* Gender Filter */}
        <Select
          value={gender}
          onValueChange={(value) => setGender(value === "all" ? "" : value)}
          disabled={isPending}
        >
          <SelectTrigger className="w-35 h-10">
            <SelectValue placeholder="Gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Genders</SelectItem>
            <SelectItem value="MALE">Male</SelectItem>
            <SelectItem value="FEMALE">Female</SelectItem>
          </SelectContent>
        </Select>

        {/* Clear Filters */}
        {activeFiltersCount > 0 && (
          <Button
            variant="ghost"
            onClick={clearAllFilters}
            disabled={isPending}
            className="h-10 px-3"
          >
            <X className="h-4 w-4 mr-1" />
            Clear ({activeFiltersCount})
          </Button>
        )}
      </div>

      {/* Row 3: Active Specialty Badges - Fixed Height to Prevent Shift */}

      {specialties.length > 0 && (
        <div className="min-h-8 flex items-center">
          <div className="flex flex-wrap gap-2">
            {specialties.map((s) => (
              <Badge key={s} variant="outline" className="px-2.5 py-1 h-7">
                {s}
                <Button
                  variant="ghost"
                  onClick={() => toggleSpecialty(s)}
                  className="ml-1.5 hover:text-destructive transition-colors"
                  aria-label={`Remove ${s}`}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GuideFilter;
