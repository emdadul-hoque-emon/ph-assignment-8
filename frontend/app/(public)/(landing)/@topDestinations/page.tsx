import FeaturedCities from "@/components/module/home/FeaturedCities";
import { IDestination } from "@/interfaces/destination.interface";
import { serverFetch } from "@/lib/server-fetch";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedCitiesPage = async () => {
  const destinations = [
    {
      id: 1,
      location: "Bali, Indonesia",
      experiences: 120,
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCr0sTPaDajmy9CjjSLDRk1r0CH2ujv572ryTLNSeRzw_TaJM64mUXJpzqmqF5ZZ9JuEEZ9p5KgMRYg7nEcHsdvVUdFH9xdGZvQUF6g4UQaRXXgZovv1XaDirCtG6ZEjCNbtR-695qEuaCGhPlcDq4lO7N5YVZu3pycbQTpom6wZRtX44aVrIM4GAwS-w-PbfSNu-vaKH0lzpF5ddH5TZ1C2XYUAroECVOtGR5ioDDYEWntvuzIIj2jgV34qQ8u_KqOEajFzUb1b-s",
    },
    {
      id: 2,
      location: "Kyoto, Japan",
      experiences: 85,
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDCFxNAxum9AxwZiTPATLoL3226xC4wK-Z8vVCfkJY1XpakZMmL68mfYYeNY6DUpnJ8g9aQnApZhe4_QVd5Emo-iywXB5iT7kOKaHLBIjUFwE9W8_-_SqdFEDcHCBVUIvCwP-iVX0Z3V-SsAspzsmmXl8uVaCMo7i4fs1QtMi5d0uCwWgLl_xgTohobgNoyMZlCYkzECgRxC2fE0QydLy9-vLtRR8nls0xOrpoczrH0nF14956yZ1pWK1WVsqmeonmqxELH68PWDBA",
    },
    {
      id: 3,
      location: "Santorini, Greece",
      experiences: 65,
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCYM-SuOIsbXhAfZopfrRwM-YIWmGuecEavgnS167XV0uueXEtlEn7aRqLBOZymGSTpq_o7oq3RXIV7yjUGXLWAMIAxDxgSNWGWZLX4LgsDPu4VtkW0hxxrXb5wgIdI2tmHu25fsZfqcV3kyJUKQ4qrMqhnJSRfN4MqAe_BLPQ0kkXVoqHk3fCw7fEcHQFoBM4i4bcyPE0NAYNgCV1VeVjycRg8ZJzZKqk1lAAHnCFRs2ATdqH30N3zOovNLjZn5FN6yKmFNFtgOuI",
    },
    {
      id: 4,
      location: "Venice, Italy",
      experiences: 110,
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC57e2dUCfNHjsaC7cUmxlAXf3pNvoFOu-b7Jn5_dJb5ewUTFed60tmuMwUBji0zCe_P9oHi0GC0aD2f2KgxfyYFz-54yFJygqtmPOwl41BEVZvh156Ruq87h1ZGfGsvxDU_T9naOi6W9fb8qX-fwxLadoWtDiZtgWQd9QMrbu51PJV8T5o7U7t9LcHYeaFWa1VwD64AezORS0LxrR3u_fdPFRfsV62lRkWlPLzPdmMMVwSv18KLaozoSZcspr8CyjzerCTyVUW0fw",
    },
  ];
  const res = await serverFetch.get("/v2/destinations?popular=true&limit=4");
  const data: { data: IDestination[] } = await res.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.data.map((d) => (
        <div
          key={d.id}
          className="group cursor-pointer relative overflow-hidden rounded-2xl aspect-3/4 shadow-lg"
        >
          <Image
            fill
            alt="Bali"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            src={d.image}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6">
            <p className="text-white text-xl font-bold">
              {d.city}, {d.country}
            </p>
            <p className="text-slate-200 text-sm">{d.tourCount}+ Tours</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCitiesPage;
