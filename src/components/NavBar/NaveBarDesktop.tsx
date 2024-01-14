import React from "react";
import { ModeToggle } from "../ModeToggle";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const NaveBarDesktop = () => {
  return (
    <div className="absolute top-8 left-0 right-0 animate-nav-down px-4">
      <div className="container mx-auto flex h-16 w-full max-w-[1024px] items-center justify-between rounded-xl bg-secondary/50 px-4 backdrop-blur-md border ">
        <div className="flex items-center gap-10">
          <nav
            aria-label="Main"
            data-orientation="horizontal"
            dir="ltr"
            className="relative flex justify-center"
          >
            <div style={{ position: "relative" }}>
              <ul
                data-orientation="horizontal"
                className="m-0 flex list-none items-center gap-10 rounded-[6px] p-1"
                dir="ltr"
              >
                <li>
                  <Link
                    prefetch={false}
                    className="block py-2 transition-colors text-primary hover:text-primary/50"
                    href="/"
                    data-radix-collection-item=""
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    prefetch={false}
                    className="block py-2 transition-colors text-primary hover:text-primary/50"
                    href="/aboute"
                  >
                    Aboute
                  </Link>
                </li>
                <li>
                  <Link
                    prefetch={false}
                    className="block py-2 transition-colors text-primary hover:text-primary/50"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    prefetch={false}
                    className="block py-2 transition-colors text-primary hover:text-primary/50"
                    href="/techStack"
                  >
                    TechStack
                  </Link>
                </li>
              </ul>
            </div>
            <div className="absolute right-0 top-full flex w-[150px] justify-center perspective-[2000px]"></div>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-6 text-primary">
            <a
              className="w-7 flex items-center"
              target="_blank"
              href="https://www.linkedin.com/in/ehtisham-afzal"
            >
              <LinkedInLogoIcon className="w-full h-full hover:text-blue-500" />
              <p className="sr-only">LinkedIn</p>
            </a>
            <a
              className="w-7 flex items-center"
              target="_blank"
              href="https://github.com/EHTISHAM-Afzal"
            >
              <GitHubLogoIcon className="w-full h-full hover:text-gray-500" />
              <p className="sr-only">Github</p>
            </a>
            <a
              className="w-7 flex items-center"
              target="_blank"
              href="https://twitter.com/EHTISHAMoo7"
            >
              <TwitterLogoIcon className="w-full h-full hover:text-blue-500" />
              <p className="sr-only">TwitterX</p>
            </a>
          </div>
          <div className="h-6 w-[1px] bg-primary/50"></div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default NaveBarDesktop;
