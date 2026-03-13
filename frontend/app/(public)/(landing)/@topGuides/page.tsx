import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { mockGuides } from "@/lib/mock-data";
import { getFilteredGuide } from "@/services/guide/guide.service";
import { Star } from "lucide-react";
import Link from "next/link";
import languages from "@/data/iso/languages.json";
import Image from "next/image";
import { serverFetch } from "@/lib/server-fetch";
import { IResponse } from "@/interfaces";
import { IUser } from "@/interfaces/user.interface";
import { IGuide } from "@/interfaces/guide.interface";

const TopGuidesPage = async () => {
  // const topGuides = await getFilteredGuide(
  //   "sortBy=averageRating&sortOrder=desc&limit=3&page=1"
  // );

  const res = await serverFetch.get("/v2/users?topGuides=true&limit=4");
  const data: IResponse<IUser<IGuide>[]> = await res.json();

  const guides = [
    {
      name: "Marco Rossi",
      location: "Florance, Italy",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCpEN_BETXf_uBvWQeXz7dVPLrpHYN6-6m6-HeFk1dXevQsfc_ItvO9G3lyyN8Vlep65aSoQdP349rUzZOmLwhsfXzR6qTD1_SW46kyz2zGjRAvFXzFNf5f7MZBY_Jm20dTy1u7qUKJqryZR71YvIuQsjfPdFJwF4r8bSbXwvGVc7Y9U9XNyZyyGlAZPbuVMehQYH-RMve0hJ15REJuwz7YkauyB99keZSetL75ynUSugjAme3a2DD8PXqRsOqF9iOCY9rex4gzAh8",
      ratting: 4.9,
    },
    {
      name: "Yuki Tanaka",
      location: "Tokyo, Japan",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCQKP0Z7drT2H2O8RbhXs3sZUxY0MokoC_FxTVP7h2sVk56vJGEAXz5CNTIjl5q9kwCTrTix_2kW1q-ZKXIecEp_aSa9H9FaaS3vgPjNLPcqyeYcwjsUouaKVc19C876lOWj9xYS_0cEV5BQBh2dcjzxxy61vHOFBjFHeo4Etstq4p_oIK6bXlvgx_MwfmePrp3fpvvL6V1-IbLKz3XgvaMU0ZIXjTiwfqGgLbncA7gxVK9tEiOo85xBVwdHMqNu-xQ-G5VUbwE7jw",
      ratting: 5,
    },
    {
      name: "Alex Johnson",
      location: "London, UK",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC6LUMln70RRewcsKp29DzqY3mnRKqTfmL5dyTly1ybomDyVryyR4sWE5A1k-xJgAXMAlR0sI8O0VRDdSQrlhLUcToDnKDYq-FLi282jdUZgoxZ8wlM_aFydbq3Yaa114wbd7B-9nMkLhcKerL5Y3fpsmc_wg1WYvzdn5zOlkg4aDF25s9DNvbqCJdxNmrwBB8T2fbRqaOWzE9QBvxdf11DaZznP-5OXbBe0clM0HrsS-2i1PFJKIz_glmWWPFAJhzGr8RAH9FzBIg",
      ratting: 4.9,
    },
    {
      name: "Sofia Garcia",
      location: "Madrid, Spain",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB2SqDHSS57MAKWcubXnGlu3esGqPF8kAPY-lT6b5aTknKTKRo1US9UZ1ZOXQ52RetT3j_ZqLgp_pjCU_X3QJHhupuKwpZuQ5KMXV-28jxWbcD1P46N1Y9mVQ1lo5gzeQMaPThUa27-zuQatHRSYqpwFVcu_PBPbtLYbO6AVZIqtcogqWyd-65sqHY2jgVFy-cDoq_-wEjeKOzKkpuWU0AX9Lgd2sUB-AMCcsIzWbPPVquoke7P738S_hufDHwb9WYQH5zrq4wh6U",
      ratting: 4.9,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {data.data.map((g) => (
        <Link
          href={`/guides/${g.id}`}
          key={g.name}
          className="flex flex-col items-center"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 ring-4 ring-white dark:ring-slate-900 shadow-xl relative">
            <Image
              fill
              alt={g.name}
              className="w-full h-full object-cover"
              src={g?.avatar || "/images/default_avatar.png"}
            />
          </div>
          <h4 className="font-bold text-lg">{g.name}</h4>
          <p className="text-primary text-sm font-semibold">
            {g.city}, {g.country}
          </p>
          <div className="flex items-center mt-2 text-amber-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-bold text-slate-700 ml-1">
              {g.guideProfile.rating}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopGuidesPage;
