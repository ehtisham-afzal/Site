import TechCard from "@/components/Cards/TechCard";
import { Separator } from "@/components/ui/separator";
import { AppLogos } from "@/lib/Data";
import React from "react";

const page = () => {
  return (
    <div>
      {/* Header */}
      <header className=" mb-16 mt-52">
        <h1 className=" break-words text-5xl font-bold text-primary md:text-6xl lg:text-6xl m-1">
          Tech Stack
        </h1>
        <p className="mb-16 mt-4 text-base text-foreground md:text-2xl pl-2">
          The dev tools, Softwares, I use
        </p>
      </header>

      <Separator className="my-6" />

      <h2 className="text-3xl font-semibold text-primary md:text-4xl py-6">
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
