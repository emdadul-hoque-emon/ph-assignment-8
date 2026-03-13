import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const TestimonialsPage = () => {
  const testimonials = [
    {
      user: {
        name: "Sarah Miller",
        avatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAknQqj0t51FPmblDWYuWxneYpsRojBUKKyNIGlg0LZjWRWb2J0EZGN3yu_n70Dl_fZSRwYLsWHXUrt_3sAWRhnH2dR2DbC6F-kEPVFE-E7oIyRG-hm2avws03E__yZkeemqbKyLAOXgKQL7vOgzT9mmFy3q0_IJYi6mUrQijlIMB-DW69U8Wl5-SWN58naWV8kbBoJ8VmN3Enu9DshqaqgycfEZxiYbhuI8iIAFCwps_uOTjjHEKuyAjhnE6Djy1RraZr4JybBUa4",
        country: "USA",
      },
      comment:
        "The street food tour in Tokyo was the highlight of our trip. Our guide Yuki took us to places we would never have found on our own. Truly authentic!",
      rating: 5,
    },
    {
      user: {
        name: "James Thompson",
        avatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC00eVU5dVHHgqRqrJ2y_2EDmTavkfrVrwAocuZtzT58zpH8MoIYVRGo6VnHo-FtSV2IlSrJnVC3CfYIOCtzTp6RsryhEqpKsFXMsl6ukHKWPneLucSLQTS7AsV7UJV52nh_MLlklNpIHbzke7UWtafJQjxTGfAmYHir3ZP_FP_GWmjx5yHYWpcAxhw2x8Ad_Cce4RYh-Rx8kHmsfSRKa-THMUPiYEDsjBqR_5ZljdItoRGUUCK5rawCpeDQq_84-BqfGRRSDwKFeg",
        country: "UK",
      },
      comment:
        "Marco was an incredible guide in Florence. His knowledge of Renaissance art was mind-blowing, and he made the museum visit so engaging even for our kids.",
      rating: 5,
    },
    {
      user: {
        name: "Elena Rodriguez",
        avatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBqM2jXJi5y3PmtkjAIeNgbv2QiucBfEGrnU0HVN_UBMi0HJFlGWkbv8WxXOiSYv5PM--Z_5yrZ6EFGn7uepT1xdIkeYic60Sv8zwALdoSnlKo-8qJr-70eEpmEAiPZJWDGvo7HIO26YsQxGmR6UVk3ViNw2aF86xLi3y-Q2-m1xeofpK_FwEhgUAV6vuPnZNYSM_8kJXmVRcKLLyLspKB58Nu_zY8G4t0l7Jzu8sEQlK_mvNCATDapbwn-hyGhXVinEvDqD1fLp8s",
        country: "Spain",
      },
      comment:
        "Booking through TourBuddy was seamless. The private beach dinner in Bali was perfectly organized and way beyond our expectations. 10/10!",
      rating: 5,
    },
  ];
  return (
    <section className="px-6 md:px-20 py-16">
      <h2 className="text-slate-900 dark:text-white text-3xl font-bold text-center mb-16">
        What Travelers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm"
          >
            {/* Rating */}
            <div className="flex items-center gap-1 text-amber-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`material-symbols-outlined ${i + 1 >= testimonial.rating ? "" : "fill-current"}`}
                >
                  star
                </Star>
              ))}
            </div>

            {/* Comment */}
            <p className="text-slate-600 dark:text-slate-400 italic mb-6 leading-relaxed">
              "{testimonial.comment}"
            </p>

            {/* User */}
            <div className="flex items-center gap-4">
              <Image
                width={48}
                height={48}
                src={testimonial.user.avatar}
                alt={testimonial.user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-bold">{testimonial.user.name}</p>
                <p className="text-slate-400 text-xs">
                  {testimonial.user.country}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsPage;
