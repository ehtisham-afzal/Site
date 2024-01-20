import TechCard from "@/components/Cards/TechCard";
import PageHeader from "@/components/PageHeader";
import { AppLogos, CategorizedAppLogos } from "@/lib/Data";
import React from "react";

const page = () => {
  return (
    <>
      {/* Header */}
      <PageHeader
        Title="Tech Stack"
        Description="The dev tools, Softwares, I use"
      />

      <h2 className="pl-2 text-2xl font-bold tracking-tight md:pl-8 text-foreground md:text-4xl scroll-m-20">
        Dev & Design
      </h2>
      <div className="grid w-full grid-cols-1 gap-4 px-2 my-5 md:px-8 md:my-8 md:grid-cols-3">
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
    </>
  );
};

export default page;
