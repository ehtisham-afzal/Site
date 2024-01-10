import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import React from "react";

const MainPageNav = () => {
  return (
    <div className="flex w-full h-10 p-1 items-center justify-between gap-5 mt-8">
      <div className="w-full h-0.5 border border-white/50 bg-black mt-4"></div>
      <a
        className="w-10 h-full flex items-center"
        target="_blank"
        href="https://www.linkedin.com/in/ehtisham-afzal"
      >
        <LinkedInLogoIcon className="w-full h-full hover:text-blue-500" />
      </a>
      <a
        className="w-10 h-full flex items-center"
        target="_blank"
        href="https://github.com/EHTISHAM-Afzal"
      >
        <GitHubLogoIcon className="w-full h-full hover:text-gray-500" />
      </a>
      <a
        className="w-10 h-full flex items-center"
        target="_blank"
        href="https://twitter.com/EHTISHAMoo7"
      >
        <TwitterLogoIcon className="w-full h-full hover:text-blue-500" />
      </a>
    </div>
  );
};

export default MainPageNav;
