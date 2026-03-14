import { IUser } from "@/interfaces/user.interface";
import { Sofa, Users } from "lucide-react";
import React from "react";

interface ITrip {
  id: string;
  guide: IUser;
  startDate: Date;
  endDate: Date;
  maxGuests: number;
  bookedSeats: number;
  price: number;
  status: string;
  includes: {
    category: string;
    title: string;
    description: string;
  }[];
}
[];
type Props = {
  trips: ITrip[];
};

const TourTrips = ({ trips }: Props) => {
  return (
    <section className="scroll-mt-24 mt-12" id="available-trips">
      <h2 className="text-2xl font-bold mb-8">Available Trips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Trip Card 1 */}
        {trips.map((trip) => (
          <div
            key={trip.id}
            className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm flex flex-col"
          >
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs font-bold uppercase text-primary mb-1">
                    {trip.status}
                  </p>
                  <h3 className="text-xl font-bold">
                    {new Date(trip.startDate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                    })}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">
                    ${trip.price}
                  </p>
                  <p className="text-[10px] text-slate-500 uppercase">
                    per person
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <Users className="w-4.5 h-4.5 text-slate-400" />
                  <span>Max {trip.maxGuests}Guests</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <Sofa className="w-4.5 h-4.5 text-slate-400" />
                  <span>{trip.maxGuests - trip.bookedSeats} Seats Left</span>
                </div>
              </div>
              <div className="mb-6">
                <p className="text-xs font-bold uppercase text-slate-500 mb-2">
                  What's Included
                </p>
                <div className="flex flex-wrap gap-2">
                  {trip.includes.map((i) => (
                    <span
                      key={i.title}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs"
                    >
                      {i.title}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div
                    className="size-8 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${trip.guide.avatar})`,
                    }}
                  ></div>
                  <div>
                    <p className="text-xs text-slate-500">Lead Guide</p>
                    <p className="text-sm font-bold">{trip.guide.name}</p>
                  </div>
                </div>
                <button className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TourTrips;
