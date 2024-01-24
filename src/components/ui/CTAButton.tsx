import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const CTAButton = ({ className }: { className?: string | undefined }) => {
  return (
    <Link
      className={cn(
        "flex gap-3 cursor-pointer text-primary transition-colors duration-300 font-semibold dark:text-white bg-gradient-to-tr from-[hsl(var(--background))] via-[hsl(var(--primary))]/30 to-[hsl(var(--background))] px-7 py-3 rounded-xl border hover:from-black hover:to-gray-900 w-full md:w-fit min-h-[60px] items-center justify-center hover:text-white  shadow border-secondary-foreground",
        className
      )}
      href="/Contact"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.934 12 3.09 5.732c-.481-1.635 1.05-3.147 2.665-2.628a53.872 53.872 0 0 1 12.64 5.963C19.525 9.793 21 10.442 21 12c0 1.558-1.474 2.207-2.605 2.933a53.87 53.87 0 0 1-12.64 5.963c-1.614.519-3.146-.993-2.665-2.628L4.934 12Zm0 0h4.9"
        ></path>
      </svg>
      Get in Touch
    </Link>
  );
};

export default CTAButton;
