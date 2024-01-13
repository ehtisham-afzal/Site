import React from "react";
import { ModeToggle } from "../ModeToggle";

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
                <a
                  className="block py-2 text-onyx/70 transition-colors hover:text-onyx dark:text-light-gray dark:hover:text-white"
                  href="/about"
                  data-radix-collection-item=""
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="block py-2 text-onyx/70 transition-colors hover:text-onyx dark:text-light-gray dark:hover:text-white"
                  href="/work"
                  data-radix-collection-item=""
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  className="block py-2 text-onyx/70 transition-colors hover:text-onyx dark:text-light-gray dark:hover:text-white"
                  href="/notebook"
                  data-radix-collection-item=""
                >
                  Notebook
                </a>
              </li>
              <li>
                <a
                  className="block py-2 text-onyx/70 transition-colors hover:text-onyx dark:text-light-gray dark:hover:text-white"
                  href="/contact"
                  data-radix-collection-item=""
                >
                  Contact
                </a>
              </li>
              <li>
                <button
                  id="radix-:R15mla:-trigger-radix-:R2n5mla:"
                  data-state="closed"
                  aria-expanded="false"
                  aria-controls="radix-:R15mla:-content-radix-:R2n5mla:"
                  className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] py-2 text-[15px] leading-none text-onyx/70 outline-none transition-colors hover:text-onyx dark:text-light-gray dark:hover:text-white"
                  data-radix-collection-item=""
                ></button>
              </li>
            </ul>
          </div>
          <div className="absolute right-0 top-full flex w-[150px] justify-center perspective-[2000px]"></div>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex gap-6 text-onyx/70 dark:text-white/70">
          <a
            className="group transition hover:text-onyx dark:hover:text-white"
            target="_blank"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/eihab-khan/"
          ></a>
        </div>
        <div className="h-6 w-[1px] bg-primary/50"></div>
        <ModeToggle/>
      </div>
    </div>
    </div>
  );
};

export default NaveBarDesktop;
