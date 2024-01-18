import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="">
      <header className=" mb-16 mt-52">
        <div className="container max-w-[1024px]">
          <h1 className="break-words text-5xl font-bold leading-none text-onyx dark:text-white md:text-[80px]">
            A little bit about me
          </h1>
          <p className="mb-16 mt-4 text-base text-medium-gray md:text-2xl">
            Who I am and what I do.
          </p>
        </div>
        <div className="h-[1px] w-full bg-black/10 dark:bg-white/10"></div>
      </header>
      <div className="container max-w-[1024px]">
        <div className="grid w-full grid-cols-1 md:grid-cols-12">
          <div className="col-span-12 flex flex-col gap-12 md:col-span-8 md:pr-12">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold uppercase text-light-gray/50 dark:text-medium-gray">
                Who I am
              </h3>
              <p className="text-[18px] leading-[160%] text-dark-gray">
                I’m <span className="text-onyx dark:text-white">Eihab</span>{" "}
                (Pronounced “Ee-hab”) a multidisciplinary front-end engineer and
                UI/UX designer based in Rabat, Morocco 🇲🇦.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold uppercase text-light-gray/50 dark:text-medium-gray">
                What I do
              </h3>
              <p className="text-[18px] leading-[160%] text-dark-gray">
                Currently Im working as a Software Engineer at a cool startup in
                Rabat called{" "}
                <a
                  target="_blank"
                  className="text-onyx underline underline-offset-4 dark:text-white"
                  href="https://youcan.shop"
                >
                  YouCan
                </a>
                , helping local merchants and entrepreneurs set up their online
                stores with ease.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold uppercase text-light-gray/50 dark:text-medium-gray">
                What I Did
              </h3>
              <p className="text-[18px] leading-[160%] text-dark-gray">
                With two years of invaluable experience in my role at Harmony
                Technology –– a tech company based here in Rabat, I have honed
                my skills in React.js, Next.js, TailwindCSS, and TypeScript,
                allowing me to craft seamless and interactive user experiences.
                During my time at Harmony Technology, I had the privilege of
                collaborating on projects for esteemed clients such as the
                Ministry of Health, Ministry of Education, and Ministry of
                Justice. It was an incredibly rewarding experience to develop
                applications that directly impact the lives of Moroccan
                citizens.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold uppercase text-light-gray/50 dark:text-medium-gray"></p>
              <p className="text-[18px] leading-[160%] text-dark-gray">
                Feel free to reach out via{" "}
                <a
                  className="cursor-pointer rounded-lg justify-center items-center inline-flex font-medium transition text-onyx underline underline-offset-4 dark:text-white"
                  href="mailto:eihabkhan1@gmail.com"
                >
                  e-mail
                </a>
                , or follow me on{" "}
                <a
                  className="cursor-pointer rounded-lg justify-center items-center inline-flex font-medium transition text-onyx underline underline-offset-4 dark:text-white"
                  target="_blank"
                  href="https://twitter.com/eihab_khan"
                >
                  Twitter
                </a>
                . Want to see where I’ve worked? Check out my{" "}
                <a
                  className="cursor-pointer rounded-lg justify-center items-center inline-flex font-medium transition text-onyx underline underline-offset-4 dark:text-white"
                  target="_blank"
                  href="https://read.cv/eihab"
                >
                  Resume
                </a>
                , or connect with me on{" "}
                <a
                  className="cursor-pointer rounded-lg justify-center items-center inline-flex font-medium transition text-onyx underline underline-offset-4 dark:text-white"
                  target="_blank"
                  href="https://www.linkedin.com/in/eihab-khan/"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold uppercase text-light-gray/50 dark:text-medium-gray"></p>
              <h3 className="text-[18px] leading-[160%] text-dark-gray">
                Let’s build something great,
              </h3>
            </div>
            <a
              className="cursor-pointer rounded-lg  min-h-[60px] px-8 py-4 font-medium w-full border inline-flex justify-center items-center gap-2 md:hidden"
              href="/contact"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.934 12 3.09 5.732c-.481-1.635 1.05-3.147 2.665-2.628a53.872 53.872 0 0 1 12.64 5.963C19.525 9.793 21 10.442 21 12c0 1.558-1.474 2.207-2.605 2.933a53.87 53.87 0 0 1-12.64 5.963c-1.614.519-3.146-.993-2.665-2.628L4.934 12Zm0 0h4.9"
                ></path>
              </svg>
              Get in Touch
            </a>
          </div>
          <div className="-order-1 col-span-12 md:order-2 md:col-span-4">
            <div className="group relative mb-20 flex justify-center">
              <Image className="relative z-20 block w-fit overflow-hidden rounded-2xl border-[1px] border-card-border"
                  alt="Portrait of Eihab Khan"
                  width="344"
                  height="443"
                  src="/sham2.png"/>
            </div>
            <a
              className="cursor-pointer rounded-lg  min-h-[60px] px-8 py-4 font-medium transition duration-300 mx-auto hidden w-full border items-center justify-center gap-2 md:flex"
              href="/contact"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.934 12 3.09 5.732c-.481-1.635 1.05-3.147 2.665-2.628a53.872 53.872 0 0 1 12.64 5.963C19.525 9.793 21 10.442 21 12c0 1.558-1.474 2.207-2.605 2.933a53.87 53.87 0 0 1-12.64 5.963c-1.614.519-3.146-.993-2.665-2.628L4.934 12Zm0 0h4.9"
                ></path>
              </svg>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
