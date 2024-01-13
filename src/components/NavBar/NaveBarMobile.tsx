import React from "react";

const NaveBarMobile = () => {
  return (
    <div className="flex h-16 w-[68] items-center justify-between fixed bottom-8 right-4 left-4 z-50 rounded-2xl border-[1px] border-onyx/30 bg-onyx/30 px-4 backdrop-blur-lg dark:border-card-border/60 dark:bg-[#18181D]/30">
      <nav className="w-full">
        <ul className="flex items-center justify-between gap-4">
          <li className="group flex flex-1 items-center justify-center rounded-lg bg-transparent text-light-gray hover:bg-black/30 dark:hover:bg-white/10">
            <a
              className="flex w-full items-center justify-center py-2"
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                className="text-faint-white dark:text-white"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .62.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                ></path>
              </svg>
            </a>
          </li>
          <li className="group flex flex-1 items-center justify-center rounded-lg bg-transparent  text-light-gray hover:bg-black/30 dark:hover:bg-white/10">
            <a
              className="flex w-full items-center justify-center py-2"
              href="/about"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                className="text-faint-white dark:text-white"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                ></path>
              </svg>
            </a>
          </li>
          <li className="group flex flex-1 items-center justify-center rounded-lg bg-transparent text-light-gray hover:bg-black/30 dark:hover:bg-white/10">
            <a
              className="flex w-full items-center justify-center py-2"
              href="/work"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                className="text-faint-white dark:text-white"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.29-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.182 2.182 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.117 48.117 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.98 23.98 0 0 1 12 15.75a24 24 0 0 1-7.577-1.22 2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.11 48.11 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.668 48.668 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                ></path>
              </svg>
            </a>
          </li>
          <li className="group flex flex-1 items-center justify-center rounded-lg bg-transparent text-light-gray hover:bg-black/30 dark:hover:bg-white/10">
            <a
              className="flex w-full items-center justify-center py-2"
              href="/notebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                className="text-faint-white dark:text-white"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 0 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487h-.001Zm0 0L19.5 7.125"
                ></path>
              </svg>
            </a>
          </li>
          <li className="group flex flex-1 items-center justify-center rounded-lg bg-transparent  text-light-gray hover:bg-black/30 dark:hover:bg-white/10">
            <a
              className="flex w-full items-center justify-center py-2"
              href="/contact"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                className="text-faint-white dark:text-white"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                ></path>
              </svg>
            </a>
          </li>
          <li className="group flex flex-1 items-center justify-center rounded-lg bg-transparent text-light-gray">
            <button className="cursor-pointer rounded-lg justify-center items-center inline-flex font-medium transition w-full py-2 text-light-gray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                className="text-faint-white dark:text-white"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 12.5h16.5M4 16.25h16.5M4 20h16.5M5.875 5h12.75a1.875 1.875 0 1 1 0 3.75H5.875a1.875 1.875 0 0 1 0-3.75Z"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NaveBarMobile;
