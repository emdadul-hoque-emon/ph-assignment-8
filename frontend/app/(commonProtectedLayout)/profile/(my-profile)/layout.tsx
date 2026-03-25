import GuideLayout from "@/components/module/profile/GuideLayout";
import TravelerLayout from "@/components/module/profile/TravelerLayout";
import { Footer } from "@/components/shared/footer";
import { IGuide } from "@/interfaces/guide.interface";
import { ITourist, IUser, UserRole } from "@/interfaces/user.interface";
import { auth } from "@/lib/session";
import { redirect } from "next/navigation";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth<ITourist | IGuide>();

  if (!session) {
    redirect("/login?callback=/my-profile");
  }

  if (session.role === UserRole.TOURIST) {
    return (
      <TravelerLayout user={session as IUser<ITourist>} pathname={"/profile"}>
        {children}
        <Footer />
      </TravelerLayout>
    );
  }
  if (session.role === UserRole.GUIDE) {
    return (
      <GuideLayout user={session as IUser<IGuide>} pathname={"/profile"}>
        {children}
        <Footer />
      </GuideLayout>
    );
  }

  return <div>{children}</div>;
};

export default layout;
