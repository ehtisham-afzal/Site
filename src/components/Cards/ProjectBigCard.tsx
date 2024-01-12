import Image from "next/image";
import React from "react";

const ProjectBigCard = () => {
  return (
    <div
      className="relative overflow-hidden rounded-3xl border-[1px] border-light-card-border bg-light-card-bg p-6 transition duration-300 dark:border-card-border dark:bg-onyx dark:hover:border-[#383737] lg:h-[565px] lg:p-16 lg:pe-0"
      style={{ opacity: 1 }}
    >
      <div className="flex h-full w-full flex-col gap-4 lg:w-1/2">
        <a className="w-fit" target="_blank" href="https://subbi.app">
          <Image
            alt="App Icon: Subbi –– The free subscriptions manager"
            width="70"
            height="70"
            src="/_next/image?url=%2Fassets%2Flogos%2Fsubbi.png&amp;w=256&amp;q=75"
            style={{ color: "transparent" }}
          />
        </a>
        <p className="text-xl font-extrabold text-onyx dark:text-white lg:text-3xl">
          Subbi –– The free subscriptions manager
        </p>
        <p className="flex-1 text-dark-gray">
          Subbi is a side project that I’ve built to help me keep track of how
          much I spend on subscriptions and also to prevent the “accidental”
          bill after a 14-day trail ends. It helps you keep track of bills like
          Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.
        </p>
        <a
          className="cursor-pointer rounded-lg items-center inline-flex font-medium group mt-6 justify-start gap-2 text-onyx transition dark:text-white lg:mt-0"
          target="_blank"
          href="https://subbi.app"
        >
          Download App{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            className="transition group-hover:translate-x-1"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.17 5a30.23 30.23 0 0 1 5.62 5.406c.14.174.21.384.21.594m-5.83 6a30.232 30.232 0 0 0 5.62-5.406A.949.949 0 0 0 21 11m0 0H3"
            ></path>
          </svg>
        </a>
      </div>
      <a target="_blank" className="hidden lg:block" href="https://subbi.app">
        <Image
          alt="Subbi Icon"
          width="457"
          height="565"
          className="absolute inset-y-0 right-0 transition duration-300 ease-out hover:rotate-[-6.21deg] hover:scale-110"
          src="/_next/image?url=%2Fassets%2Fscreenshots%2Fsubbi.png&amp;w=1080&amp;q=75"
          style={{ color: "transparent" }}
        />
      </a>
    </div>
  );
};

export default ProjectBigCard;
