import { Footer } from "@/components/shared/footer";
import {
  Compass,
  LayoutDashboard,
  Settings,
  Users,
  BookOpen,
  HelpCircle,
  LogOut,
  Menu,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CustomLink from "@/components/shared/CustomLink";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/profile/test" },
    { name: "Expeditions", icon: Compass, href: "#" },
    { name: "Journal", icon: BookOpen, href: "#" },
    { name: "Settings", icon: Settings, href: "/profile/test/settings" },
    { name: "Community", icon: Users, href: "#" },
  ];

  const bottomNavItems = [
    { name: "Support", icon: HelpCircle, href: "#" },
    { name: "Logout", icon: LogOut, href: "#", isError: true },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen bg-surface relative pt-6">
        {/* SideNavBar (Shared Component) - Desktop Only */}
        <aside className="hidden lg:flex flex-col h-screen w-64 fixed left-0 top-0 pt-24 p-6 z-40 border-r">
          <div className="flex gap-3 mb-4 items-center">
            <div className="w-12 h-12 rounded-xl bg-primary mb-2 overflow-hidden">
              <Image
                alt="Traveler's profile picture"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTrDMs9-LQEXjBnlOqWi305MXgd52w5h9_DLzu2rXP4VNXyLys08dglpV1dRcM2S_PLloVSKoEMw9PhCTnjugZsUz-jZM1fObsn6mII5O_0i2cp8M8IEO8-g9n7LyGwOy7EBlbhdv1zr8MGaaP11nA1zqQ3XC-DV5byFr_vfQFXh0NBMrgvL15iwFti15-yQWOWNs8kMLUs9rZpmTjY9NpO-M_NptiosMHtZ35cUfvYNuuWNs634h52uFnJuL0k1_twDorma67m-Q"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-on-surface">Alex Rivers</h3>
              <p className="text-xs font-medium tracking-tight text-blue-700">
                Elite Wayfarer
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 grow">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.name === "Dashboard";
              return (
                <CustomLink
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm "text-slate-500 hover:bg-slate-200/50
              `}
                  matchStyle="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Icon size={20} />
                  {item.name}
                </CustomLink>
              );
            })}
          </nav>

          {/* Bottom Navigation Items */}
          <div className="mt-auto flex flex-col gap-2 border-t border-slate-200/50 pt-6">
            {bottomNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all text-sm ${
                    item.isError
                      ? "text-error hover:bg-error-container/20"
                      : "text-slate-500 hover:bg-slate-200/50"
                  }`}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </aside>
        <div className="mb-14">{children}</div>
        <nav className="fixed bottom-0 left-0 w-full shadow-2xl bg-background flex items-center justify-between md:hidden z-40 border-t px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <div className="py-2" key={item.name}>
                <CustomLink
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-200/50 dark:hover:bg-slate-800 rounded-xl transition-all font-medium text-sm"
                  matchStyle="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Icon size={20} />
                </CustomLink>
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default ProfileLayout;
