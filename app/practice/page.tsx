import { AppLogos } from "../../lib/Data";
import TechCard from "../../components/Cards/TechCard";
import React from "react";
import GlowingCardsProvider from "../../components/Cards/GlowingCardsProvider";

const page = () => {
  return (
    <div className="w-full flex flex-col">
      <h1>This is Practice Page</h1>
      {/* <InfiniteScrollCards /> */}
      {/* <div className="relative w-40 h-40 border">
          <div className="absolute left-0 -right-12 top-0 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
           <div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
          <div className="absolute left-0 -right-12 bottom-14 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
          <div className="absolute right-0 -top-2 -bottom-8 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"/>
          <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
            <div className="flex -mb-px h-[2px] w-40 -scale-x-100">
              <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
              <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
            </div>
          </div>
        </div> */}

      {/* <ProjectBigCard/> */}

      {/* <GlowingCardsProvider> */}
        <div className="w-full my-5 grid grid-cols-1 gap-4 md:my-8 md:grid-cols-3">
          {AppLogos.map((logo) => (
            <TechCard
              key={logo.Name}
              ImageURL={logo.ImageURL}
              href="https://nextjs.org/"
              Name={logo.Name}
              Tage={logo.Tage}
            />
          ))}
        </div>
      {/* </GlowingCardsProvider> */}
    </div>
  );
};

export default page;
