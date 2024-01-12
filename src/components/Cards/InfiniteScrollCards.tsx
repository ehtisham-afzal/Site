"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import styles from "@/Styles/infinitScroll.module.css";
import ProjectCard from "./ProjectCard";

const InfiniteScrollCards = () => {
  const NumberOfCards = 5;
  return (
    <div className="w-full h-full min-h-screen overflow-hidden">
      {/* // Moving cards Container */}
      <div className={`grid grid-flow-col-dense gap-4 ${styles.scrollBg} `}>
        {Array(NumberOfCards)
          .fill(1)
          .map((_, index) => (
            <Card key={index} className="w-44">
              <CardHeader>
                <CardTitle>Card {index}</CardTitle>
                <CardDescription> Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Contents</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard
          ImgageUrl="/LettleLemonHero700px.jpg"
          title="Moonbeam"
          description="Never write from scratch again. Kickstart your next great writing piece with Moonbeam. Your long-form writing AI assistant."
          href="https://gomoonbeam.com"
          tags={[
            "Front-end",
            "GPT-3",
            "Next.js",
            "React",
            "TailwindCSS",
            "Chrome Extension",
          ]}
        />

<div className="w-80 h-72 px-6 pt-24 pb-6 bg-neutral-900 rounded-3xl border flex-col justify-end items-center gap-10 inline-flex">
    <div className="w-28 h-28 justify-center items-center inline-flex">
        <div className="w-28 h-28 relative">
            <div className="w-28 h-28 left-0 top-0 absolute bg-zinc-300 rounded-3xl" />
            {/* <span className="w-36 h-36 left-[-13.33px] top-[-13px] absolute opacity-5"  /> */}
        </div>
    </div>
    <div className="w-72 justify-between items-end inline-flex">
        <div className="grow shrink basis-0 h-6 text-text-primar text-xl font-semibold font-['Inter']">Figma</div>
        <div className="px-3 py-1.5 bg-neutral-900 rounded-3xl border border-neutral-800 justify-center items-center gap-2.5 flex">
            <div className="text-primary text-sm font-normal font-['Inter']">Design</div>
        </div>
    </div>
</div>
      </div>
    </div>
  );
};

export default InfiniteScrollCards;
