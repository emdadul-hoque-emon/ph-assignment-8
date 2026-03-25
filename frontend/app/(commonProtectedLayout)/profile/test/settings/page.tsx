import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  BadgeCheck,
  ShieldCheck,
  Lock,
  Smartphone,
  Compass,
  HelpingHand,
  Edit,
  Trash2Icon,
  HeartPulse,
  PlusCircle,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <main className="flex-1 lg:ml-64 pb-12 px-8 lg:px-16 max-w-7xl mx-auto w-full">
      {/* Header Section */}
      <header className="mb-16">
        <h1 className="text-6xl font-black tracking-tighter text-on-surface mb-2 font-headline">
          Account Settings
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Manage your personal information, security preferences, and how you
          experience your digital travel journal.
        </p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
        {/* Personal Information & Security */}
        <div className="xl:col-span-8 flex flex-col gap-12">
          {/* Personal Info Card */}
          <section className="bg-surface-container-low rounded-4xl ">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold font-headline text-on-surface">
                  Personal Information
                </h2>
              </div>

              <div className="flex gap-2 items-center">
                <Button
                  variant="outline"
                  size={"icon"}
                  className="rounded-full p-1 tooltip"
                  title="Edit Personal Information"
                >
                  <Edit size={16} />
                </Button>
                <BadgeCheck className="text-blue-700" size={32} />
              </div>
            </div>

            <Card className="gap-0 py-4">
              <CardContent className="py-0 ">
                <div className="grid grid-cols-3 items-center gap-1">
                  <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Full Name
                  </div>
                  <h1 className="col-span-2">Emdadul Hoque Emon</h1>
                </div>
                <div className="grid grid-cols-3 items-center gap-1">
                  <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Email
                  </div>
                  <h1 className="col-span-2">emdadul2580@gmail.com</h1>
                </div>
                <div className="grid grid-cols-3 items-center gap-1">
                  <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Phone
                  </div>
                  <h1 className="col-span-2">+1 (555) 0123-4567</h1>
                </div>
                <div className="grid grid-cols-3 items-center gap-1">
                  <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Date of Birth
                  </div>
                  <h1 className="col-span-2">January 15, 1990</h1>
                </div>
                <div className="grid grid-cols-3 items-center gap-1">
                  <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Blood Group
                  </div>
                  <h1 className="col-span-2">O+</h1>
                </div>
                <div className="grid grid-cols-3 items-center gap-1">
                  <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    City
                  </div>
                  <h1 className="col-span-2">Dhaka</h1>
                </div>
                <div className="grid grid-cols-3 items-center gap-1">
                  <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Country
                  </div>
                  <h1 className="col-span-2">Bangladesh</h1>
                </div>
              </CardContent>
            </Card>
          </section>
          <section className="bg-surface-container-low rounded-4xl ">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold font-headline text-on-surface">
                  Emergency Contact
                </h2>
              </div>
              <div className="flex gap-2 items-center">
                <Button
                  variant="outline"
                  size={"icon"}
                  className="rounded-full p-1 tooltip"
                  data-tooltip-content="Add Emergency Contact"
                  title="Add Emergency Contact"
                >
                  <PlusCircle size={16} />
                </Button>
                <HeartPulse className="text-blue-700" size={32} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Card className="py-4 gap-0">
                <CardHeader className="py-0">
                  <div className="flex justify-between items-center">
                    <div
                      title="Edit Emergency Contact"
                      className="cursor-pointer hover:text-primary justify-start"
                    >
                      <Edit size={16} />
                    </div>
                    <div
                      title="Delete Emergency Contact"
                      className="cursor-pointer hover:text-destructive justify-end"
                    >
                      <Trash2Icon size={16} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 items-center gap-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      Relation
                    </div>
                    <h1 className="col-span-2">Father</h1>
                  </div>
                  <div className="grid grid-cols-3 items-center gap-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      Email
                    </div>
                    <h1 className="col-span-2">emdadul2580@gmail.com</h1>
                  </div>
                  <div className="grid grid-cols-3 items-center gap-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      Number
                    </div>
                    <h1 className="col-span-2">+1 (555) 0123-4567</h1>
                  </div>
                </CardContent>
              </Card>
              <Card className="py-4 gap-0">
                <CardHeader className="py-0">
                  <div className="flex justify-between items-center">
                    <div
                      title="Edit Emergency Contact"
                      className="cursor-pointer hover:text-primary justify-start"
                    >
                      <Edit size={16} />
                    </div>
                    <div
                      title="Delete Emergency Contact"
                      className="cursor-pointer hover:text-destructive justify-end"
                    >
                      <Trash2Icon size={16} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 items-center gap-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      Relation
                    </div>
                    <h1 className="col-span-2">Father</h1>
                  </div>
                  <div className="grid grid-cols-3 items-center gap-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      Email
                    </div>
                    <h1 className="col-span-2">emdadul2580@gmail.com</h1>
                  </div>
                  <div className="grid grid-cols-3 items-center gap-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      Number
                    </div>
                    <h1 className="col-span-2">+1 (555) 0123-4567</h1>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Security Card */}
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
                <div className="px-4 py-3 border hover:bg-background/50 rounded-t-2xl transition-all cursor-pointer">
                  Change password
                </div>
                <div className="px-4 py-3 border hover:bg-background/50 transition-all cursor-pointer">
                  Two-factor authentication
                </div>
                <div className="px-4 py-3 border hover:bg-background/50 rounded-b-2xl transition-all cursor-pointer">
                  Where you&apos;re logged in
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Secondary Column: Notifications & Region */}
        <div className="xl:col-span-4 flex flex-col gap-12">
          {/* Membership Badge Bento */}
          <div className="bg-linear-to-br from-blue-900 to-primary p-8 rounded-4xl text-white overflow-hidden relative group">
            <Compass
              className="absolute -right-4 -bottom-4 text-white/10 group-hover:scale-110 transition-transform duration-700"
              size={96}
            />
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">
              Membership Status
            </h4>
            <div className="text-3xl font-black mb-4">Platinum Voyager</div>
            <p className="text-sm text-blue-100/80 mb-6 leading-relaxed">
              You have unlocked 14% exclusive discounts on all boutique stays.
            </p>
            <button className="w-full py-3 bg-white/10 backdrop-blur-md rounded-xl font-bold text-sm border border-white/20 hover:bg-white/20 transition-all">
              View Benefits
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
