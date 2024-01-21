import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ArrowRightIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

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
    <Card
      aria-label={Name}
      className="group relative flex items-center justify-center gap-4 rounded-2xl md:rounded-3xl bg-card p-4 transition duration-300 md:h-[300px] md:p-6  hover:bg-card-foreground/10"
    >
      {/* Side glow Effect */}
      <span className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />
      <span className="absolute w-[40%] -top-px right-4 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />

      <div className="relative block h-[60px] w-[60px] origin-bottom transition duration-300 md:h-[100px] md:w-[100px] md:group-hover:-translate-y-1 md:group-hover:scale-[101%] backdrop-blur-sm rounded-xl bg-foreground/5 group-hover:bg-foreground/10 p-2">
        <Image
          alt={`${Name} Image/Svg`}
          src={ImageURL}
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>
      <a
        target="_blank"
        href={href}
        className="absolute right-6 top-6 hidden -translate-x-2 translate-y-2 rotate-45 opacity-0 transition duration-300 hover:rotate-[405deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white md:inline-block"
      >
        <ArrowUpIcon className="w-6" />
      </a>
      <div className="relative flex items-center justify-between flex-1 md:absolute md:inset-x-6 md:bottom-6">
        <p className="text-base font-semibold md:text-xl">{Name}</p>
        <span
          data-glow
          className="inline-block rounded-full border-[1px] px-3 py-[6px] text-xs md:text-sm"
        >
          {Tage}
        </span>
      </div>
    </Card>
  );
};

export default TechCard;
