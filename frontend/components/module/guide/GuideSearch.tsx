"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const GuideSearch = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const debouncedValue = useDebounce(search, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debouncedValue) {
      params.set("searchTerm", debouncedValue);
    } else {
      params.delete("searchTerm");
    }

    router.push(`?${params.toString()}`);
  }, [debouncedValue]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());

    if (debouncedValue) {
      params.set("searchTerm", debouncedValue);
    } else {
      params.delete("searchTerm");
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center gap-2">
      <Search className="absolute left-4 text-slate-400 w-5 h-5" />
      <div className="w-full flex-1">
        <Input
          className="pl-12 pr-30 h-14 text-base w-full flex-1 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-0"
          placeholder="Search by city or expertise (e.g. History, Foodie, Street Art)"
          type="search"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <Button className="absolute right-2">Find Guides</Button>
    </form>
  );
};

export default GuideSearch;
