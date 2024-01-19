import Link from "next/link";
import React from "react";
import ModeToggleButton from "../ModeToggleButton";

const NaveBarMobile = () => {
  return (
    <header className="flex h-16 w-11/12 items-center justify-between fixed bottom-8 right-[4.3%]  z-50 rounded-2xl border border-primary/20 bg-background/50 px-4 backdrop-blur-lg md:hidden">
      <nav className="w-full">
        <ul className="flex items-center justify-between gap-4">
          <li className="flex items-center justify-center flex-1 bg-transparent rounded-md group text-light-gray hover:bg-black/30 dark:hover:bg-white/10">
            <Link
              className="flex items-center justify-center w-full py-2"
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .62.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                ></path>
              </svg>
            </Link>
          </li>
          <li className="flex items-center justify-center flex-1 bg-transparent rounded-md group text-light-gray hover:bg-black/30 dark:hover:bg-white/10">
            <Link
              className="flex items-center justify-center w-full py-2"
              href="/Aboute"
              prefetch={false}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                ></path>
              </svg>
            </Link>
          </li>

          <li className="flex items-center justify-center flex-1 bg-transparent rounded-md group hover:bg-black/30 dark:hover:bg-white/10">
            <Link
              className="flex items-center justify-center w-full py-2"
              href="/Contact"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                ></path>
              </svg>
            </Link>
          </li>
          <li className="flex items-center justify-center flex-1 bg-transparent rounded-md group text-light-gray hover:bg-black/30 dark:hover:bg-white/10">
            <Link
              className="flex items-center justify-center w-full py-2"
              href="/TechStack"
              prefetch={false}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 19 19"
              >
                <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
              </svg>
            </Link>
          </li>
          <li className="flex items-center justify-center flex-1 py-2 bg-transparent rounded-md group text-light-gray hover:bg-black/30 dark:hover:bg-white/10">
            <ModeToggleButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NaveBarMobile;
