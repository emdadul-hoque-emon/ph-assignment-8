"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { INavItem, INavSection } from "@/interfaces/dashboard.interface";
import { IUser } from "@/interfaces/user.interface";
import { getIconComponent } from "@/lib/icon-mappers";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IDashboardSidebarContentProps {
  userInfo: IUser<null>;
  navItems: INavSection[];
  dashboardHome: string;
}

const DashboardSidebarContent = ({
  userInfo,
  dashboardHome,
  navItems,
}: IDashboardSidebarContentProps) => {
  const pathname = usePathname();

  const isRouteActive = (pathname: string, item: INavItem): boolean => {
    // root safe
    if (item.href === "/admin/dashboard")
      return pathname === "/admin/dashboard";

    // prefix match (for parent menus)
    if (item.matchPrefix) {
      return pathname === item.href;
    } else {
      return pathname === item.href || pathname.startsWith(item.href + "/");
    }

    // exact match (for child routes)
    return pathname === item.href;
  };
  return (
    <div className="relative flex h-full max-w-64 flex-col border-r bg-card">
      {/* Logo */}
      <div className="flex items-center border-b px-6 py-4.5">
        <Link
          href={dashboardHome}
          className="flex items-center space-y-2 relative w-full py-2"
        >
          <h1 className="font-bold text-lg ">Admin Dashboard</h1>
        </Link>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3 py-4 h-full pb-30">
        <nav className="space-y-6">
          {navItems.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              {section.title && (
                <h4 className="mb-2 px-3 text-xs font-bold upp tracking-wider">
                  {section.title}
                </h4>
              )}
              <div className="space-y-1">
                {section.items.map((item) => {
                  const isActive = isRouteActive(pathname, item);
                  const Icon = getIconComponent(item.icon);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : " text-muted-foreground hover:bg-primary/10 hover:text-primary/10-foreground",
                      )}
                    >
                      <Icon className="size-4" />
                      <span className="flex-1">{item.title}</span>
                      {item.badge && (
                        <Badge
                          variant={isActive ? "secondary" : "default"}
                          className="ml-auto"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </ScrollArea>

      {/* User info */}
      <div className="absolute bottom-0 left-0 z-10 border-t p-4 w-full bg-card">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-full bg-primary/10 flex justify-center items-center">
            <span className="text-sm text-primary font-semibold">
              {userInfo.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium truncate">{userInfo.name}</p>
            <p className="text-xs text-muted-foreground capitalize">
              {userInfo.role.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebarContent;
