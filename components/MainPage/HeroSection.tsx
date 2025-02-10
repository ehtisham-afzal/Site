import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-end w-full py-2 md:min-h-96 h-fit">
      <div className="relative top-0 left-0 z-10 flex flex-col gap-6 md:absolute md:w-7/12 text-pretty">
        <div>
          <Image
            className="object-cover w-24 h-24 mb-3 p-1 bg-foreground/15 rounded-full md:hidden"
            width={96}
            height={96}
            src="/ehtisham.webp"
            alt="Ehtisham"
          />
          <Badge
            variant="outline"
            className="gap-1.5 sm:hidden rounded-full mb-1.5"
          >
            <span
              className="size-1.5 rounded-full bg-amber-500"
              aria-hidden="true"
            ></span>
            Open to work
          </Badge>
          <Badge
            variant="secondary"
            className="gap-1.5 hidden sm:flex text-sm w-fit rounded-full absolute -top-8 border border-foreground/10"
          >
            <span
              className="size-2 rounded-full bg-amber-500"
              aria-hidden="true"
            ></span>
            Open to work
          </Badge>
          <h1 className="text-[46px] font-bold leading-[120%] text-foreground/50 md:text-left md:text-[80px]">
            I&apos;m <span className="text-foreground">Ehtisham</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-left md:text-2xl text-pretty">
            A front-end developer. specializing in full-stack web applications
            using JavaScript, TypeScript, React, Next.js, and Node.js. I love
            building Web-Applications that are user-friendly, simple and
            delightful. ✨
          </p>
        </div>
        <div className="flex flex-col items-center w-full gap-4 mt-10 md:flex-row">
          <Button
            size="lg"
            variant="default"
            className="w-full text-xl md:w-44 h-14"
          >
            <a target="_blank" href="https://cv-ehtisham.vercel.app">
              See my resume
            </a>
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="w-full text-xl md:w-44 h-14"
          >
            <Link href="/Contact">Get in touch</Link>
          </Button>
        </div>
      </div>
      <Image
        src="/ehtisham.webp"
        alt="Ehtisham Afzal"
        width="340"
        height="385"
        className="absolute right-0 hidden object-cover w-4/12 h-full p-0 border backdrop-blur-sm bg-secondary/50 rounded-2xl md:block"
      />
    </section>
  );
};

export default HeroSection;
