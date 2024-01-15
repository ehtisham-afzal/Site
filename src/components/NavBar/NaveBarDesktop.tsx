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
          <Link
            prefetch={false}
            className="block h-10 py-2 transition-colors text-foreground hover:text-foreground/50"
            href="/"
          >
            <svg
            className="w-full h-full"
              width="82"
              height="65"
              viewBox="0 0 82 65"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56.8566 0.279995C65.7632 0.279995 70.2166 2.78666 70.2166 7.8C70.2166 9.93333 69.3899 12.3333 67.7366 15C66.0832 17.6133 64.2966 19.7733 62.3766 21.48C60.5099 23.1333 59.1232 23.96 58.2166 23.96C57.8432 23.96 57.4699 23.8 57.0966 23.48C56.7766 23.1067 56.6166 22.6533 56.6166 22.12C56.6166 21.5333 57.1232 20.6533 58.1366 19.48C59.2032 18.3067 59.7366 17.4267 59.7366 16.84C59.7366 16.2533 59.0699 15.96 57.7366 15.96C54.2699 15.96 48.6432 17.4 40.8566 20.28C33.1232 23.1067 29.2299 25.24 29.1766 26.68C29.2299 27.0533 29.9232 27.24 31.2566 27.24C32.6432 27.24 34.1899 27.1067 35.8966 26.84C37.6566 26.5733 38.9899 26.44 39.8966 26.44C42.2966 26.44 43.4966 27.08 43.4966 28.36C43.4966 29.0533 43.0966 29.6133 42.2966 30.04C41.4966 30.4667 40.8032 30.8133 40.2166 31.08C39.6832 31.2933 38.9099 31.6133 37.8966 32.04C36.8832 32.4133 36.0299 32.76 35.3366 33.08C34.6966 33.4 33.7366 33.8533 32.4566 34.44L29.2566 35.8C27.1232 36.7067 25.2566 37.56 23.6566 38.36C22.1099 39.16 20.7766 39.8267 19.6566 40.36C18.5899 40.8933 17.6832 41.3733 16.9366 41.8C16.1899 42.2267 15.4699 42.6533 14.7766 43.08C13.4966 43.9867 12.8566 44.68 12.8566 45.16C12.8566 46.2267 13.7099 46.76 15.4166 46.76C19.0432 46.76 23.0166 46.0933 27.3366 44.76C31.6566 43.4267 35.3099 42.12 38.2966 40.84C41.3366 39.5067 43.0699 38.84 43.4966 38.84C45.3632 38.8933 46.9099 39.8267 48.1366 41.64C49.4166 43.4533 50.0566 45.2667 50.0566 47.08C50.0566 49.64 48.2966 52.3333 44.7766 55.16C41.2566 57.9867 36.8566 60.3067 31.5766 62.12C26.3499 63.9867 21.4432 64.92 16.8566 64.92C12.2699 64.92 8.48323 63.96 5.49656 62.04C2.5099 60.1733 0.723229 57.24 0.136563 53.24C0.136563 50.84 1.4699 48.3067 4.13656 45.64C6.80323 42.9733 9.89656 40.68 13.4166 38.76C16.9366 36.7867 20.1899 35.1333 23.1766 33.8C26.1632 32.4667 28.1899 31.72 29.2566 31.56C29.5766 31.4533 29.7366 31.3467 29.7366 31.24C29.7366 30.8133 29.4166 30.5467 28.7766 30.44C25.3099 30.0667 23.4699 29.8533 23.2566 29.8C20.3766 29.16 18.3499 27.9067 17.1766 26.04C16.0032 24.12 15.4166 22.36 15.4166 20.76C15.4166 17.5067 17.7366 14.2533 22.3766 11C27.0166 7.74666 32.5632 5.16 39.0166 3.24C45.4699 1.26666 51.4166 0.279995 56.8566 0.279995ZM71.5159 57.8C71.5159 58.0667 71.7026 58.2533 72.0759 58.36C72.4493 58.36 73.7293 57.6133 75.9159 56.12C78.1559 54.5733 79.4093 53.72 79.6759 53.56C79.9959 53.4 80.2893 53.32 80.5559 53.32C81.3026 53.32 81.6759 53.6933 81.6759 54.44C81.6759 55.1333 79.7826 56.7067 75.9959 59.16C72.2626 61.6133 69.6226 62.84 68.0759 62.84C67.4359 62.84 66.7426 62.5733 65.9959 62.04C65.3026 61.5067 64.9559 60.8933 64.9559 60.2C64.9559 59.4533 65.1426 58.6533 65.5159 57.8C65.8893 56.9467 66.0759 56.3867 66.0759 56.12C66.0759 55.8 65.9959 55.64 65.8359 55.64C65.6759 55.64 65.5159 55.6933 65.3559 55.8C60.1826 59.6933 56.3693 61.64 53.9159 61.64C52.5293 61.64 51.4359 61.1333 50.6359 60.12C49.8359 59.1067 49.3559 58.0933 49.1959 57.08L49.0359 55.56C49.0359 53.8 49.7026 51.7733 51.0359 49.48C52.4226 47.1333 54.2093 44.92 56.3959 42.84C58.6359 40.7067 61.3559 38.92 64.5559 37.48C67.8093 36.04 71.1159 35.32 74.4759 35.32C76.2893 35.32 77.9693 35.8 79.5159 36.76C81.1159 37.72 81.9159 38.84 81.9159 40.12C81.9159 41.4 80.6626 42.1733 78.1559 42.44C76.2893 42.8667 73.1959 44.4133 68.8759 47.08C64.6093 49.6933 62.4759 51.6933 62.4759 53.08C62.4759 53.6667 62.7693 53.96 63.3559 53.96C64.4226 53.96 66.9293 52.44 70.8759 49.4C74.8759 46.36 77.2759 44.84 78.0759 44.84C78.8759 44.84 79.2759 45.32 79.2759 46.28C79.2759 46.9733 79.0093 47.64 78.4759 48.28C77.9959 48.8667 77.6493 49.2933 77.4359 49.56C77.0093 50.0933 75.9159 51.2933 74.1559 53.16C72.3959 54.9733 71.5159 56.52 71.5159 57.8Z"
                fill="currentColor"
              />
            </svg>
          </Link>
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
                    className="block py-2 transition-colors text-foreground hover:text-foreground/50"
                    href="/aboute"
                  >
                    Aboute
                  </Link>
                </li>
                <li>
                  <Link
                    prefetch={false}
                    className="block py-2 transition-colors text-foreground hover:text-foreground/50"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    prefetch={false}
                    className="block py-2 transition-colors text-foreground hover:text-foreground/50"
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
          <div className="flex gap-6 text-foreground">
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
