import { Heart, MapPin, Star } from "lucide-react";
import { serverFetch } from "@/lib/server-fetch";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IResponse } from "@/interfaces";
import { ITour } from "@/interfaces/tour.interface";

const FeatureToursPage = async () => {
  const res = await serverFetch.get("/v2/tours?limit=3");
  const data: IResponse<ITour[]> = await res.json();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Experience Card */}
      {data.data.map((e) => (
        <div
          key={e.title}
          className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow group"
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              fill
              alt={e.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src={e.image}
            />
            <Button
              variant={"ghost"}
              className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors"
            >
              <Heart
                fill={false ? "currentColor" : "none"}
                className="text-pink-500"
              />
            </Button>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-1 text-slate-500 text-sm mb-2">
              <MapPin className="w-4 h-4 " />
              <span>
                {e.destination.city}, {e.destination.country}
              </span>
            </div>
            <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-3">
              {e.title}
            </h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center text-amber-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="ml-1 font-bold text-slate-900 dark:text-white">
                  {e.rating}
                </span>
                <span className="ml-1 text-slate-400 font-normal">
                  ({e.reviewCount || 0})
                </span>
              </div>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500 text-sm">
                {e.durationDays} day
              </span>
            </div>
            <div className="flex justify-between items-center border-t border-slate-50 dark:border-slate-800 pt-4">
              <p className="text-slate-900 dark:text-white font-black text-xl">
                From ${e.priceFrom}{" "}
                <span className="text-sm font-normal text-slate-400">
                  / person
                </span>
              </p>
              <button className="bg-primary/10 text-primary font-bold py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureToursPage;
