import TechCard from "@/components/Cards/TechCard";
import { Separator } from "@/components/ui/separator";
import { AppLogos } from "@/lib/Data";
import React from "react";

const page = () => {
  return (
    <div>
      {/* Header */}
      <header className=" mb-16 mt-52">
        <h1 className=" break-words text-primary m-1 text-3xl font-bold leading-tight tracking-tight md:text-6xl lg:leading-[1.1]">
          Tech Stack
        </h1>
        <p className="mb-16 mt-4 md:text-2xl pl-2 text-lg text-muted-foreground sm:text-xl">
          The dev tools, Softwares, I use
        </p>
      </header>

      <Separator className="my-6" />

      <h2 className=" text-primary md:text-4xl scroll-m-20 text-2xl font-bold tracking-tight">
        Dev & Design
      </h2>
      <div className="w-full my-5 grid grid-cols-1 gap-4 md:my-8 md:grid-cols-3">
        {AppLogos.map((logo) => (
          <TechCard
            key={logo.Name}
            ImageURL={logo.ImageURL}
            href={logo.href}
            Name={logo.Name}
            Tage={logo.Tage}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
