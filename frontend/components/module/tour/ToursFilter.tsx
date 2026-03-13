"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition, useState, useMemo } from "react";
import {
  Map,
  MapPin,
  DollarSign,
  ChartBarStacked,
  Globe,
  Filter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

const countries = [
  { label: "Turkey", value: "turkey" },
  { label: "Indonesia", value: "indonesia" },
  { label: "New Zealand", value: "new zealand" },
  { label: "Italy", value: "italy" },
  { label: "UAE", value: "uae" },
  { label: "China", value: "china" },
  { label: "Czech Republic", value: "czech republic" },
  { label: "USA", value: "usa" },
  { label: "Netherlands", value: "netherlands" },
  { label: "Brazil", value: "brazil" },
  { label: "Austria", value: "austria" },
  { label: "UK", value: "uk" },
  { label: "Australia", value: "australia" },
  { label: "Singapore", value: "singapore" },
  { label: "Canada", value: "canada" },
  { label: "South Korea", value: "south korea" },
  { label: "Argentina", value: "argentina" },
  { label: "Spain", value: "spain" },
  { label: "Egypt", value: "egypt" },
  { label: "Greece", value: "greece" },
  { label: "Morocco", value: "morocco" },
  { label: "French Polynesia", value: "french polynesia" },
  { label: "France", value: "france" },
  { label: "Vietnam", value: "vietnam" },
  { label: "Maldives", value: "maldives" },
  { label: "South Africa", value: "south africa" },
  { label: "Peru", value: "peru" },
  { label: "Taiwan", value: "taiwan" },
  { label: "Iceland", value: "iceland" },
  { label: "Japan", value: "japan" },
  { label: "Thailand", value: "thailand" },
];

const cities = [
  { label: "Marrakech", value: "marrakech" },
  { label: "Vaitape", value: "vaitape" },
  { label: "Miami", value: "miami" },
  { label: "Rio de Janeiro", value: "rio de janeiro" },
  { label: "Dubai", value: "dubai" },
  { label: "Taipei", value: "taipei" },
  { label: "Queenstown", value: "queenstown" },
  { label: "Las Vegas", value: "las vegas" },
  { label: "Banff", value: "banff" },
  { label: "London", value: "london" },
  { label: "Paris", value: "paris" },
  { label: "Shanghai", value: "shanghai" },
  { label: "Sydney", value: "sydney" },
  { label: "New York", value: "new york" },
  { label: "Prague", value: "prague" },
  { label: "Tokyo", value: "tokyo" },
  { label: "San Francisco", value: "san francisco" },
  { label: "Vienna", value: "vienna" },
  { label: "Cairo", value: "cairo" },
  { label: "Santorini", value: "santorini" },
  { label: "Rome", value: "rome" },
  { label: "Reykjavik", value: "reykjavik" },
  { label: "Singapore", value: "singapore" },
  { label: "Bangkok", value: "bangkok" },
  { label: "Hanoi", value: "hanoi" },
  { label: "Amsterdam", value: "amsterdam" },
  { label: "Cape Town", value: "cape town" },
  { label: "Denpasar", value: "denpasar" },
  { label: "Barcelona", value: "barcelona" },
  { label: "Cusco", value: "cusco" },
  { label: "Honolulu", value: "honolulu" },
  { label: "Istanbul", value: "istanbul" },
  { label: "Male", value: "male" },
  { label: "Vancouver", value: "vancouver" },
  { label: "Kyoto", value: "kyoto" },
  { label: "Buenos Aires", value: "buenos aires" },
  { label: "Seoul", value: "seoul" },
  { label: "Phuket", value: "phuket" },
  { label: "Hong Kong", value: "hong kong" },
  { label: "Venice", value: "venice" },
];

export default function ToursFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const [price, setPrice] = useState<number[]>([
    Number(searchParams.get("minPrice")) || 0,
    Number(searchParams.get("maxPrice")) || 5000,
  ]);

  const [categories, setCategories] = useState<string[]>(
    searchParams.getAll("category") || [],
  );

  const [country, setCountry] = useState(searchParams.get("country") || "");
  const [city, setCity] = useState(searchParams.get("city") || "");
  const [language, setLanguage] = useState(searchParams.get("language") || "");

  const updateQuery = (params: URLSearchParams) => {
    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  };

  // COUNTRY / CITY / LANGUAGE
  const handleSingleFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value) params.delete(key);
    else params.set(key, value);

    updateQuery(params);
  };

  // PRICE RANGE
  const handlePriceChange = (value: number[]) => {
    setPrice(value);

    const params = new URLSearchParams(searchParams.toString());
    params.set("minPrice", value[0].toString());
    params.set("maxPrice", value[1].toString());

    updateQuery(params);
  };

  // CATEGORY MULTI SELECT
  const handleCategoryChange = (value: string, checked: boolean) => {
    let updated = [...categories];

    if (checked) updated.push(value);
    else updated = updated.filter((c) => c !== value);

    setCategories(updated);

    const params = new URLSearchParams(searchParams.toString());
    params.delete("category");

    updated.forEach((cat) => params.append("category", cat));

    updateQuery(params);
  };

  // CLEAR ALL
  const clearAll = () => {
    setPrice([0, 5000]);
    setCategories([]);
    setCountry("");
    setCity("");
    setLanguage("");

    const params = new URLSearchParams(searchParams.toString());
    params.delete("country");
    params.delete("city");
    params.delete("category");
    params.delete("language");
    params.delete("minPrice");
    params.delete("maxPrice");

    startTransition(() => {
      router.push("?" + params.toString());
    });
  };

  const filtersCount = useMemo(() => {
    return [
      categories.length > 0,
      country,
      city,
      language,
      price[0] !== 0 || price[1] !== 5000,
    ].filter(Boolean).length;
  }, [categories, country, city, language, price]);

  return (
    <div className="md:rounded-xl bg-white dark:bg-slate-900 md:border p-0 md:p-6 md:shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold relative">
          Filters{" "}
          <Badge
            className={`${filtersCount > 0 ? "absolute top-0 -right-5 w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center" : "hidden"} `}
          >
            {filtersCount}
          </Badge>
        </h3>

        <Button
          variant="ghost"
          onClick={clearAll}
          className="text-xs font-bold uppercase"
        >
          Clear All
        </Button>
      </div>

      <div className="space-y-6">
        {/* COUNTRY */}
        <div>
          <Label className="flex items-center gap-2 mb-3">
            <Map size={15} />
            Country
          </Label>

          <Select
            value={country}
            onValueChange={(v) => {
              handleSingleFilter("country", v);
              setCountry(v);
            }}
          >
            <SelectTrigger className="w-full cursor-pointer">
              <SelectValue placeholder="All Countries" />
            </SelectTrigger>

            <SelectContent>
              {countries.map((country) => (
                <SelectItem
                  key={country.value}
                  value={country.value}
                  className="hover:bg-primary hover:text-primary-foreground"
                >
                  {country.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* CITY */}
        <div>
          <Label className="flex items-center gap-2 mb-3">
            <MapPin size={15} />
            City
          </Label>

          <Select
            value={city}
            onValueChange={(v) => {
              handleSingleFilter("city", v);
              setCity(v);
            }}
          >
            <SelectTrigger className="w-full cursor-pointer">
              <SelectValue placeholder="All Cities" />
            </SelectTrigger>

            <SelectContent>
              {cities.map((city) => (
                <SelectItem
                  key={city.value}
                  value={city.value}
                  className="hover:bg-primary hover:text-primary-foreground"
                >
                  {city.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* PRICE RANGE */}
        <div>
          <Label className="flex items-center gap-2 mb-3">
            <DollarSign size={15} />
            Price Range
          </Label>

          {/* @ts-ignore */}
          <Slider
            value={price}
            min={0}
            max={5000}
            step={100}
            onValueChange={(v) => setPrice(v as number[])}
            onValueCommitted={(v) => handlePriceChange(v as number[])}
            className={"cursor-pointer"}
          />

          <div className="flex justify-between text-xs mt-3 text-muted-foreground">
            <span>$0</span>
            <span>$2.5k</span>
            <span>$5k</span>
          </div>
        </div>

        {/* CATEGORY */}
        <div>
          <Label className="flex items-center gap-2 mb-3">
            <ChartBarStacked size={15} />
            Category
          </Label>

          <div className="grid gap-2">
            {[
              { value: "adventure", label: "Adventure" },
              { value: "cultural", label: "Cultural" },
              { value: "sightseeing", label: "Sightseeing" },
              { value: "food-drink", label: "Food & Drink" },
            ].map((c) => (
              <div
                key={c.value}
                className="flex items-center gap-3 cursor-pointer"
              >
                <Checkbox
                  checked={categories.includes(c.value)}
                  onCheckedChange={(checked) =>
                    handleCategoryChange(c.value, Boolean(checked))
                  }
                  id={c.value}
                />
                <Label htmlFor={c.value}>{c.label}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* LANGUAGE */}
        <div>
          <Label className="flex items-center gap-2 mb-3">
            <Globe size={15} />
            Language
          </Label>

          <RadioGroup
            value={language}
            onValueChange={(v) => {
              handleSingleFilter("language", v);
              setLanguage(v);
            }}
          >
            {[
              { value: "english", label: "English" },
              { value: "spanish", label: "Spanish" },
              { value: "french", label: "French" },
            ].map((l) => (
              <div key={l.value} className="flex items-center gap-3">
                <RadioGroupItem id={l.value} value={l.value} />
                <Label htmlFor={l.value}>{l.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}

export function SheetFilters() {
  const searchParams = useSearchParams();

  const filtersCount = useMemo(() => {
    const categories = searchParams.getAll("category");
    const country = searchParams.get("country");
    const city = searchParams.get("city");
    const language = searchParams.get("language");
    const minPrice = Number(searchParams.get("minPrice") || 0);
    const maxPrice = Number(searchParams.get("maxPrice") || 5000);

    let count = 0;

    if (categories.length > 0) count++;
    if (country) count++;
    if (city) count++;
    if (language) count++;
    if (minPrice !== 0 || maxPrice !== 5000) count++;

    return count;
  }, [searchParams]);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-6">
          <div className=" relative">
            {filtersCount > 0 && (
              <Badge className="absolute -top-1 -right-4 w-4 h-4 p-0 flex items-center justify-center">
                {filtersCount}
              </Badge>
            )}
            Filters
          </div>
          <Filter />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-85 px-4 py-8 z-50">
        <ToursFilter />
        <div className="md:hidden relative overflow-hidden rounded-xl bg-primary p-6 text-white">
          <div className="relative z-10">
            <h4 className="text-xl font-bold mb-2">Get 20% Off</h4>
            <p className="text-primary-20 text-sm mb-4">
              Book your first tour today and save big on your next adventure.
            </p>
            <button className="w-full rounded-lg bg-white py-2 text-sm font-bold text-primary">
              Use Code: TOUR20
            </button>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-20">
            <span className="material-symbols-outlined text-9xl">
              confirmation_number
            </span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
