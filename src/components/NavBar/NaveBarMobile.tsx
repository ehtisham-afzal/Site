"use client";
import Link from "next/link";
import React from "react";
import ModeToggleButton from "../ModeToggleButton";
import {
  EnvelopeIcon as EnvelopeIconOutline,
  HomeIcon as HomeIconOutline,
  UserIcon as UserIconOutline,
  BriefcaseIcon as BriefCaseIconOuline,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import {
  BriefcaseIcon,
  EnvelopeIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";

const NaveBarMobile = () => {
  const pathName = usePathname();
  return (
    <header className="flex h-16 w-11/12 items-center justify-between fixed bottom-8 right-[4.3%]  z-50 rounded-2xl border border-primary/20 bg-background/50 px-4 backdrop-blur-sm md:hidden">
      <nav className="w-full">
        <div className="flex items-center justify-between gap-4">
          <Link
            className={cn(
              "flex items-center justify-center w-full py-2 flex-1 rounded-md group text-light-gray",
              pathName == "/" ? "bg-secondary-foreground/10" : null
            )}
            href="/"
          >
            {pathName == "/" ? (
              <HomeIcon className="h-6" />
            ) : (
              <HomeIconOutline className="h-6" />
            )}
          </Link>
          <Link
            className={cn(
              "flex items-center justify-center w-full py-2 flex-1 rounded-md group text-light-gray",
              pathName == "/Aboute" ? "bg-secondary-foreground/10" : null
            )}
            href="/Aboute"
          >
            {pathName == "/Aboute" ? (
              <UserIcon className="h-6" />
            ) : (
              <UserIconOutline className="h-6" />
            )}
          </Link>
          <Link
            className={cn(
              "flex items-center justify-center w-full py-2 flex-1 rounded-md group text-light-gray",
              pathName == "/Projects" ? "bg-secondary-foreground/10" : null
            )}
            href="/Projects"
          >
            {pathName == "/Projects" ? (
              <BriefcaseIcon className="h-6" />
            ) : (
              <BriefCaseIconOuline className="h-6" />
            )}
          </Link>

          <Link
            className={cn(
              "flex items-center justify-center w-full py-2 flex-1 rounded-md group text-light-gray",
              pathName == "/Contact" ? "bg-secondary-foreground/10" : null
            )}
            href="/Contact"
          >
            {pathName == "/Contact" ? (
              <EnvelopeIcon className="h-6" />
            ) : (
              <EnvelopeIconOutline className="h-6" />
            )}
          </Link>
          <Link
            className={cn(
              "flex items-center justify-center w-full py-2 flex-1 rounded-md group text-light-gray",
              pathName == "/TechStack" ? "bg-secondary-foreground/10" : null
            )}
            href="/TechStack"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 19 19"
            >
              <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
            </svg>
          </Link>
          <span className="flex items-center justify-center flex-1 py-2 bg-transparent rounded-md group text-light-gray hover:bg-black/30 dark:hover:bg-white/10">
            <ModeToggleButton />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default NaveBarMobile;
