"use client";

import Image from "next/image";
import { FC } from "react";
import { SidebarTrigger } from "./ui/sidebar";

export const AppHeader: FC = () => {
  return (
    <header className="w-full bg-white shadow-sm p-4">
      <div className="flex items-center justify-between gap-6 w-full">
        <div className="inline-block">
          <SidebarTrigger className="md:hidden block" />
        </div>

        <div className="inline-block bg-green-500 p-2 rounded-full size-10 overflow-hidden">
          <Image
            src={"/logo.svg"}
            alt="Logo"
            width={100}
            height={100}
            className="size-full object-contain"
          />
        </div>
      </div>
    </header>
  );
};
