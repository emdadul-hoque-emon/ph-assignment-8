import GuideProfileModal from "@/components/module/profile/GuideProfileModal";
import TravelerProfileModal from "@/components/module/profile/TravelerProfileModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IGuide } from "@/interfaces/guide.interface";
import { ITourist, IUser, UserRole } from "@/interfaces/user.interface";
import { auth } from "@/lib/session";
import { BadgeCheck, Edit } from "lucide-react";
import { redirect } from "next/navigation";

const PersonalInfoPage = async () => {
  const session = await auth<ITourist | IGuide>();

  if (!session) {
    redirect("/login?redirect=/profile/settings");
  }

  return (
    <section className="bg-surface-container-low rounded-4xl ">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold font-headline text-on-surface">
            Personal Information
          </h2>
        </div>

        <div className="flex gap-2 items-center">
          {session?.role === UserRole.TOURIST && (
            <TravelerProfileModal user={session as IUser<ITourist>}>
              <Button
                variant="outline"
                size={"icon"}
                className="rounded-full p-1 tooltip"
                title="Edit Personal Information"
              >
                <Edit size={16} />
              </Button>
            </TravelerProfileModal>
          )}
          {session?.role === UserRole.GUIDE && (
            <GuideProfileModal user={session as IUser<IGuide>}>
              <Button
                variant="outline"
                size={"icon"}
                className="rounded-full p-1 tooltip"
                title="Edit Personal Information"
              >
                <Edit size={16} />
              </Button>
            </GuideProfileModal>
          )}
          <BadgeCheck className="text-blue-700" size={32} />
        </div>
      </div>

      <Card className="gap-0 py-4">
        <CardContent className="py-0 ">
          <div className="grid grid-cols-3 items-center gap-1">
            <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              Full Name
            </div>
            <h1 className="col-span-2">{session.name}</h1>
          </div>
          <div className="grid grid-cols-3 items-center gap-1">
            <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              Email
            </div>
            <h1 className="col-span-2">{session.email}</h1>
          </div>
          <div className="grid grid-cols-3 items-center gap-1">
            <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              Phone
            </div>
            <h1 className="col-span-2">{session.phone}</h1>
          </div>
          <div className="grid grid-cols-3 items-center gap-1">
            <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              Date of Birth
            </div>
            <h1 className="col-span-2">
              {session?.profile?.dateOfBirth
                ? new Date(session?.profile?.dateOfBirth).toLocaleDateString(
                    "en-US",
                    {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    },
                  )
                : ""}
            </h1>
          </div>
          <div className="grid grid-cols-3 items-center gap-1">
            <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              Blood Group
            </div>
            <h1 className="col-span-2">{session?.profile?.bloodGroup}</h1>
          </div>
          <div className="grid grid-cols-3 items-center gap-1">
            <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              City
            </div>
            <h1 className="col-span-2">{session?.city}</h1>
          </div>
          <div className="grid grid-cols-3 items-center gap-1">
            <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              Country
            </div>
            <h1 className="col-span-2">{session?.country}</h1>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default PersonalInfoPage;
