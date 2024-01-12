import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const TechCard = ({
  href,
  ImageURL,
  Name,
  Tage,
}: {
  href: string;
  ImageURL: string;
  Name: string;
  Tage: string;
}) => {
  return (
    <a
    data-glow
    aria-label={Name}
    target="_blank"
    className="group relative flex items-center justify-center gap-4 rounded-3xl dark:bg-onyx p-4 transition duration-300 dark:hover:bg-white/10 hover:bg-onyx/5 md:h-[300px] md:p-6 "
    href={href}
    >
      <span data-glow />
      <Image
        alt={`${Name} Image/Svg`}
        src={ImageURL}
        width={100}
        height={100}
        className="relative block h-[60px] w-[60px] origin-bottom transition duration-300 md:h-[100px] md:w-[100px] md:group-hover:-translate-y-1 md:group-hover:scale-[101%]"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute right-6 top-6 hidden -translate-x-2 translate-y-2 rotate-45 text-dark-gray opacity-0 transition duration-300 hover:rotate-[405deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white md:inline-block"
      >
        <path d="m5 12 7-7 7 7"></path>
        <path d="M12 19V5"></path>
      </svg>
      <div className="relative flex flex-1 items-center justify-between md:absolute md:inset-x-6 md:bottom-6">
        <p className="text-base font-semibold dark:text-white md:text-xl">
          {Name}
        </p>
        <span
          data-glow
          className="inline-block rounded-full border-[1px] border-light-card-border bg-white/50 px-3 py-[6px] text-xs text-dark-gray dark:border-[#272525] dark:bg-transparent md:text-sm"
        >
          {Tage}
        </span>
      </div>
    </a>
  );
};

export default TechCard;
