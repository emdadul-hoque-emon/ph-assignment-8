import { Clock, Globe, MapPin, Star, Trees, Users2 } from "lucide-react";
import { serverFetch } from "@/lib/server-fetch";
import { ITour } from "@/interfaces/tour.interface";
import TourReviews from "@/components/module/tour/TourReviews";
import TourItinerary from "@/components/module/tour/TourItinerary";
import TourTrips from "@/components/module/tour/TourTrips";

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await serverFetch.get(`/v2/tours/${id}`);
  const data: { data: ITour } = await res.json();

  return (
    <main className="flex-1">
      <div className="relative h-112.5 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-alt="High quality aerial view of Tokyo city skyline at sunset"
          style={{
            backgroundImage: `url(${data.data.image})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="relative h-full max-w-300 mx-auto px-6 flex flex-col justify-end pb-12">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 inline-block max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-primary px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white">
                {data.data.category}
              </span>
              <div className="flex items-center text-yellow-400">
                <Star className="h-4 w-4" />
                <span className="text-white text-sm font-bold ml-1">
                  {data.data.rating} ({data.data.reviewCount || 0} Reviews)
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {data.data.title}
            </h1>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin size={18} />
              <span className="text-lg font-medium">
                {data.data.destination.city}, {data.data.destination.country}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-300 mx-auto px-6 py-10 grid grid-cols-1  gap-10">
        <div className="lg:col-span-2 space-y-12">
          <section className="scroll-mt-24" id="about">
            <h2 className="text-2xl font-bold mb-4">About This Tour</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              {data.data.description}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm flex flex-col justify-center items-center">
                <Clock className="text-primary mb-2" />
                <p className="text-xs text-slate-500 uppercase font-bold">
                  Duration
                </p>
                <p className="font-semibold">{data.data.durationDays} days</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm flex flex-col justify-center items-center">
                <Users2 className="text-primary mb-2" />
                <p className="text-xs text-slate-500 uppercase font-bold">
                  Max Size
                </p>
                <p className="font-semibold">{data.data.maxGroupSize} People</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm flex flex-col justify-center items-center">
                <Globe className="text-primary mb-2" />
                <p className="text-xs text-slate-500 uppercase font-bold">
                  Languages
                </p>
                <p className="font-semibold">
                  {data.data.destination.languages.join(", ")}
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm flex flex-col justify-center items-center">
                <Trees className="text-primary mb-2" />
                <p className="text-xs text-slate-500 uppercase font-bold">
                  Theme
                </p>
                <p className="font-semibold">{data.data.category}</p>
              </div>
            </div>
          </section>
          <TourTrips trips={data.data.trips} />
          <TourItinerary itineraries={data.data.itineraries} />

          <TourReviews />
        </div>
      </div>
    </main>
  );
}
