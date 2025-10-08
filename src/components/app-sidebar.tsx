"use client";

import { cn } from "@/lib/utils";
import { BuildingIcon, StoreIcon, UsersIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";

const menuItems: { title: string; url: string; icon?: typeof UsersIcon }[] = [
  {
    title: "Overview",
    url: "/",
    icon: BuildingIcon,
  },
  {
    title: "Users",
    url: "/users",
    icon: UsersIcon,
  },
  {
    title: "Business",
    url: "/business",
    icon: StoreIcon,
  },
];

export const AppSidebar: FC = () => {
  const pathname = usePathname();
  const sidebarContext = useSidebar();
  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b">
        <div className="h-10 w-full overflow-hidden">
          <Image
            src={"/full-logo.png"}
            alt="Salesunit Logo"
            width={200}
            height={200}
            className="size-full object-contain"
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="space-y-2 p-4">
          {menuItems.map((item, index) => (
            <SidebarMenuItem
              key={index}
              onClick={() => sidebarContext.setOpenMobile(false)}
            >
              <Link
                href={item.url}
                className={cn(
                  "flex items-center gap-4 p-2 hover:bg-gray-100 rounded",
                  pathname === item.url && "bg-primary text-white font-medium"
                )}
              >
                {item.icon && <item.icon size={18} />}
                <span className="text-sm">{item.title}</span>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t text-sm text-gray-500">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Salesunit. All rights reserved.
        </p>
      </SidebarFooter>
    </Sidebar>
  );
};
