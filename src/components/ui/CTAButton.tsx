import React from "react";

const CTAButton = () => {
  return (
    <a
      className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-xl border border-gray-600 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 w-full md:w-fit min-h-[60px] items-center justify-center bg-primary text-primary-foreground shadow hover:bg-primary/90"
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
          strokeWidth="2"
          d="M4.934 12 3.09 5.732c-.481-1.635 1.05-3.147 2.665-2.628a53.872 53.872 0 0 1 12.64 5.963C19.525 9.793 21 10.442 21 12c0 1.558-1.474 2.207-2.605 2.933a53.87 53.87 0 0 1-12.64 5.963c-1.614.519-3.146-.993-2.665-2.628L4.934 12Zm0 0h4.9"
        ></path>
      </svg>
      Get in Touch
    </a>
  );
};

export default CTAButton;
