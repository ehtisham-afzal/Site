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
      </div>
    </div>
  );
};

export default InfiniteScrollCards;
