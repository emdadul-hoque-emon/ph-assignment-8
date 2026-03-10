import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Star,
  Clock,
  Users,
  Calendar,
  CheckCircle,
  CalendarDays,
  Languages,
} from "lucide-react";
import { mockTours, mockGuides, mockTrips } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import { getSingleTour } from "@/action/tour";

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // const paramsObj = await params;
  // const tour = await getSingleTour(paramsObj.id);

  // if (!tour) {
  //   notFound();
  // }

  // if (!tour) {
  //   notFound();
  // }

  return (
    <main className="flex-1">
      {/* <!-- Hero Section --> */}
      <div className="relative h-[450px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-alt="High quality aerial view of Tokyo city skyline at sunset"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTYXZ7nazeGowWvUljEcAi2s-f0SFc-p7kGVq9JvEbnnS9hhsVj5MWumZI9BKI9u6uNxKTgTAF1yOS_OxUc_M_sHR5y-accGv_Eby57EFDGtI8fuffCVU4TWvNS8P2GwCorl6pT5xbi9Wa3Gj7R9xbGv5XGn8W4gjCVBXiC2-5g-fTUAVd3czXonByopFSFiBLz7f_lV4DvqVhk74cknmPBEfHtxAT_ZHsKSPSC1hHIyvuzYASI7h7HzJsjmEBCkRd_jSqYCJwux8');",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="relative h-full max-w-[1200px] mx-auto px-6 flex flex-col justify-end pb-12">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 inline-block max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-primary px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white">
                History
              </span>
              <div className="flex items-center text-yellow-400">
                <span className="material-symbols-outlined text-[16px] fill-current">
                  star
                </span>
                <span className="text-white text-sm font-bold ml-1">
                  4.8 (1,200 Reviews)
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Historic City Walking Tour
            </h1>
            <div className="flex items-center gap-2 text-white/90">
              <span className="material-symbols-outlined text-[18px]">
                location_on
              </span>
              <span className="text-lg font-medium">Tokyo, Japan</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Content Grid --> */}
      <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* <!-- Left Column: Details --> */}
        <div className="lg:col-span-2 space-y-12">
          {/* <!-- Quick Info Tabs --> */}
          <div className="border-b border-slate-200 dark:border-slate-800 sticky top-[64px] bg-background-light dark:bg-background-dark z-40 py-2">
            <div className="flex gap-8 overflow-x-auto no-scrollbar">
              <a
                className="text-primary font-bold border-b-2 border-primary pb-2 whitespace-nowrap"
                href="#about"
              >
                About
              </a>
              <a
                className="text-slate-500 hover:text-primary pb-2 whitespace-nowrap transition-colors"
                href="#included"
              >
                What's Included
              </a>
              <a
                className="text-slate-500 hover:text-primary pb-2 whitespace-nowrap transition-colors"
                href="#expect"
              >
                Expectations
              </a>
              <a
                className="text-slate-500 hover:text-primary pb-2 whitespace-nowrap transition-colors"
                href="#reviews"
              >
                Reviews
              </a>
            </div>
          </div>
          {/* <!-- About Section --> */}
          <section className="scroll-mt-24" id="about">
            <h2 className="text-2xl font-bold mb-4">About This Tour</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Experience the soul of Tokyo on this immersive 4-hour walking
              journey through the historic Yanaka district. Unlike the neon-lit
              skyscrapers of Shinjuku, Yanaka offers a preserved glimpse into
              "Old Tokyo" (Shitamachi). You'll wander through narrow alleys,
              visit centuries-old temples, and discover local artisans keeping
              traditional crafts alive.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-primary mb-2">
                  schedule
                </span>
                <p className="text-xs text-slate-500 uppercase font-bold">
                  Duration
                </p>
                <p className="font-semibold">4 Hours</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-primary mb-2">
                  group
                </span>
                <p className="text-xs text-slate-500 uppercase font-bold">
                  Max Size
                </p>
                <p className="font-semibold">12 People</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-primary mb-2">
                  translate
                </span>
                <p className="text-xs text-slate-500 uppercase font-bold">
                  Languages
                </p>
                <p className="font-semibold">EN, JP</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-primary mb-2">
                  potted_plant
                </span>
                <p className="text-xs text-slate-500 uppercase font-bold">
                  Theme
                </p>
                <p className="font-semibold">Culture</p>
              </div>
            </div>
          </section>
          {/* <!-- What's Included --> */}
          <section className="scroll-mt-24" id="included">
            <h2 className="text-2xl font-bold mb-6">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-primary">
                    person_check
                  </span>
                </div>
                <div>
                  <h4 className="font-bold">Professional guide</h4>
                  <p className="text-sm text-slate-500">
                    Certified local historian with deep district knowledge.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-primary">
                    water_drop
                  </span>
                </div>
                <div>
                  <h4 className="font-bold">Bottled water</h4>
                  <p className="text-sm text-slate-500">
                    Complimentary hydration throughout the walk.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-primary">
                    restaurant
                  </span>
                </div>
                <div>
                  <h4 className="font-bold">Local Snacks</h4>
                  <p className="text-sm text-slate-500">
                    Traditional Senbei crackers and Mochi tasting.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-primary">
                    confirmation_number
                  </span>
                </div>
                <div>
                  <h4 className="font-bold">Entrance Fees</h4>
                  <p className="text-sm text-slate-500">
                    All temple and museum entrance costs included.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Reviews Section --> */}
          <section className="scroll-mt-24" id="reviews">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Reviews</h2>
              <button className="text-primary font-bold text-sm hover:underline">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {/* <!-- Review Card 1 --> */}
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="size-12 rounded-full bg-cover"
                      data-alt="Portrait of a female traveler smiling"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDmlNe73hDjw9uJs1eFOwwif_54VTUUxXkGuol-8_F4muMx7pmYgZ9p7uYwofzCx3tJ_b_BIqdY7SpZYMpEFFKKXe4Z9gA6_Qmt5sTHPVWkXUylmsBUjUsEVk4L3dcKQLo6jR_iPWboaRCUKh4ViboqZvn_rHO6gkRFSm1dD9zRR1N5qee2msNFPL4W5xn4q0AquPYu48euRMUgDDGnK4MycDKMr9cpEd1ESIwedg_LB8PS7myydduMFob0Mt-owXSp31gXUGsRSk')",
                      }}
                    ></div>
                    <div>
                      <h5 className="font-bold">Sarah Jenkins</h5>
                      <p className="text-xs text-slate-500">
                        London, UK • June 2023
                      </p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400">
                    <span className="material-symbols-outlined fill-current text-[18px]">
                      star
                    </span>
                    <span className="material-symbols-outlined fill-current text-[18px]">
                      star
                    </span>
                    <span className="material-symbols-outlined fill-current text-[18px]">
                      star
                    </span>
                    <span className="material-symbols-outlined fill-current text-[18px]">
                      star
                    </span>
                    <span className="material-symbols-outlined fill-current text-[18px]">
                      star
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  "The best tour I've ever taken in Tokyo. Our guide Kenji was
                  incredibly knowledgeable and showed us hidden gems we would
                  never have found on our own. The snacks were delicious!"
                </p>
              </div>
              {/* <!-- Review Card 2 --> */}
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="size-12 rounded-full bg-cover"
                      data-alt="Portrait of a male traveler with glasses"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCTbu3p27FjAnB_OBLttpnMZ7zrBdKsnx3x2V0QhyV8Hb-fO-5VTWo_VeEXamKs_KLRGWQkJAeNCbJTWxj4hu_dY-CYwm8TtPH4K0f6rbd3XHBRM-uitLmI95yMkQIzN5sMUwH_SOJmyH9fjtmcuJvGPWlpzVaOLtFM4VO_YoXibbpPxZKO-boFcMM4x9LXJuOkk4buQT8srgtPtXD0H6cOU8J7msnrE9WyzLcgq4PiZtAIz7DWxX9E2pXiuaAF1b-QpaKuqVMkjEU');",
                      }}
                    ></div>
                    <div>
                      <h5 className="font-bold">Mark Thompson</h5>
                      <p className="text-xs text-slate-500">
                        Sydney, AU • May 2023
                      </p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400">
                    <span className="material-symbols-outlined fill-current text-[18px]">
                      star
                    </span>
                    <span className="material-symbols-outlined fill-current text-[18px]">
                      star
                    </span>
                    <span className="material-symbols-outlined fill-current text-[18px]">
                      star
                    </span>
                    <span className="material-symbols-outlined fill-current text-[18px]">
                      star
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      star
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  "Very well paced and informative. I loved the balance between
                  history and modern life in the neighborhood. Highly recommend
                  for history buffs."
                </p>
              </div>
            </div>
          </section>
        </div>
        {/* <!-- Right Column: Booking Widget --> */}
        <div className="lg:col-span-1">
          <div className="sticky top-[100px] bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 p-6">
            <div className="flex items-end gap-1 mb-6">
              <span className="text-3xl font-bold text-primary">$45</span>
              <span className="text-slate-500 mb-1">/ person</span>
            </div>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                  Select Date
                </label>
                <div className="relative">
                  <input
                    className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary"
                    type="date"
                    value="2023-10-25"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                  Guests
                </label>
                <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary">
                  <option>2 Adults</option>
                  <option>1 Adult</option>
                  <option>3+ Adults</option>
                </select>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  $45 x 2 Adults
                </span>
                <span className="font-semibold">$90</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  Service Fee
                </span>
                <span className="font-semibold">$8</span>
              </div>
              <div className="border-t border-slate-100 dark:border-slate-800 pt-3 flex justify-between">
                <span className="font-bold">Total</span>
                <span className="font-bold text-xl text-primary">$98</span>
              </div>
            </div>
            <button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mb-4">
              Book Now
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </button>
            <p className="text-center text-xs text-slate-400">
              <span className="material-symbols-outlined text-[14px] align-middle">
                lock
              </span>
              Secure Booking • No extra fees
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
