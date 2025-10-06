import { BuildingIcon, StoreIcon, UsersIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
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

export const AppSidebar = () => {
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
        <SidebarMenu className="space-y-4 p-4">
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.url}>
              <Link href={item.url} className="flex items-center gap-4">
                {item.icon && <item.icon size={18} />}
                <span className="text-sm">{item.title}</span>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t text-sm text-gray-500">
        <p className="text-xs">&copy; {new Date().getFullYear()} Salesunit. All rights reserved.</p>
      </SidebarFooter>
    </Sidebar>
  );
};
