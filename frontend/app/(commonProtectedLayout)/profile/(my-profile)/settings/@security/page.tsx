import ChangePasswordModal from "@/components/module/settings/ChangePasswordModal";
import TwoFactorModal from "@/components/module/settings/TwoFactorModal";
import WhereAreYouLoggedInModal from "@/components/module/settings/WhereAreYouLoggedInModal";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import React from "react";

const SecurityPage = () => {
  return (
    <section className="bg-surface-container-low rounded-4xl ">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold font-headline text-on-surface">
            Security
          </h2>
        </div>
        <ShieldCheck className="text-blue-700" size={32} />
      </div>

      <Card className="p-0">
        <CardContent className="p-0 font-semibold">
          <ChangePasswordModal>
            <div className="px-4 py-3 border hover:bg-background/50 rounded-t-2xl transition-all cursor-pointer">
              Change password
            </div>
          </ChangePasswordModal>
          <TwoFactorModal>
            <div className="px-4 py-3 border hover:bg-background/50 transition-all cursor-pointer">
              Two-factor authentication
            </div>
          </TwoFactorModal>
          <WhereAreYouLoggedInModal>
            <div className="px-4 py-3 border hover:bg-background/50 rounded-b-2xl transition-all cursor-pointer">
              Where you&apos;re logged in
            </div>
          </WhereAreYouLoggedInModal>
        </CardContent>
      </Card>
    </section>
  );
};

export default SecurityPage;
