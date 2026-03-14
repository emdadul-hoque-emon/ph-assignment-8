import { Star } from "lucide-react";
import React from "react";

type Props = {};

const TourReviews = ({}: Props) => {
  return (
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
                <p className="text-xs text-slate-500">London, UK • June 2023</p>
              </div>
            </div>
            <div className="flex text-yellow-400 gap-1">
              <Star className="w-4.5 h-4.5 fill-current" />
              <Star className="w-4.5 h-4.5 fill-current" />
              <Star className="w-4.5 h-4.5 fill-current" />
              <Star className="w-4.5 h-4.5 fill-current" />
              <Star className="w-4.5 h-4.5 fill-current" />
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            "The best tour I've ever taken in Tokyo. Our guide Kenji was
            incredibly knowledgeable and showed us hidden gems we would never
            have found on our own. The snacks were delicious!"
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
                <p className="text-xs text-slate-500">Sydney, AU • May 2023</p>
              </div>
            </div>
            <div className="flex text-yellow-400 gap-1">
              <Star className="w-4.5 h-4.5 fill-current" />
              <Star className="w-4.5 h-4.5 fill-current" />
              <Star className="w-4.5 h-4.5 fill-current" />
              <Star className="w-4.5 h-4.5 fill-current" />
              <Star className="w-4.5 h-4.5" />
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-smou">
            "Very well paced and informative. I loved the balance between
            history and modern life in the neighborhood. Highly recommend for
            history buffs."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TourReviews;
