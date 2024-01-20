import PageHeader from "@/components/PageHeader";
import React from "react";

const page = () => {
  return (
    <>
      <PageHeader
        Title="Get in touch"
        Description="Let's build something awesome."
      />

      <main>
        <div className="container max-w-[1024px]">
          <div className="relative backdrop-blur-sm bg-secondary/50 min-h-[565px] overflow-hidden rounded-2xl border-[1px] border-light-card-border bg-light-card-bg pb-3 dark:border-card-border dark:bg-onyx">
            <div className="relative flex flex-col items-center justify-center py-4">
              <div className="absolute left-4 top-[22px] flex gap-2">
                <div className="h-3 w-3 rounded-full border-[1px] border-[#F63636] bg-[#FF6057] "></div>
                <div className="h-3 w-3 rounded-full border-[1px] border-[#F6C136] bg-[#FDBC2E] "></div>
                <div className="h-3 w-3 rounded-full border-[1px] border-[#53CC28] bg-[#27C840] "></div>
              </div>
              <p className="mb-4 font-medium text-onyx dark:text-white">
                New Message
              </p>
              <div className="h-[1px] w-full bg-black/10 dark:bg-white/10"></div>
            </div>
            <form className="px-6 mb-4">
              <label htmlFor="email" className="flex items-center gap-2 my-4">
                <span className="font-medium text-onyx dark:text-white">
                  E-mail:
                </span>
                <input
                  type="email"
                  className="flex-1 caret-fuchsia-400 focus:outline-none focus:ring-0 "
                  placeholder="Enter your email"
                  id="email"
                  name="email"
                />
              </label>
              <div className="h-[1px] w-full bg-black/10 dark:bg-white/10"></div>
              <label htmlFor="name" className="flex items-center gap-2 my-4">
                <span className="font-medium text-onyx dark:text-white">
                  Name:
                </span>
                <input
                  className="flex-1 caret-fuchsia-400 focus:outline-none focus:ring-0 "
                  placeholder="Enter your name"
                  id="name"
                  name="name"
                />
              </label>
              <div className="h-[1px] w-full bg-black/10 dark:bg-white/10"></div>
              <label htmlFor="subject" className="flex items-center gap-2 my-4">
                <span className="font-medium text-onyx dark:text-white">
                  Subject:
                </span>
                <input
                  className="flex-1 caret-fuchsia-400 focus:outline-none focus:ring-0 "
                  placeholder="Enter subject"
                  id="subject"
                  name="subject"
                />
              </label>
              <div className="h-[1px] w-full bg-black/10 dark:bg-white/10"></div>
              <div className="flex flex-col my-4">
                <div className="relative">
                  <textarea
                    className="min-h-[200px] md:min-h-[320px] w-full resize-none rounded-lg bg-faint-white dark:bg-black/50 p-4 text-onyx dark:text-light-gray caret-fuchsia-400 dark:placeholder:text-medium-gray placeholder:text-dark-gray focus:outline-none focus:ring-0 border-[1px] border-transparent"
                    name="message"
                    placeholder="Write your message here"
                  ></textarea>
                </div>
                <div className="flex items-center justify-end">
                  <span className="block pr-2 text-xs text-medium-gray"></span>
                </div>
              </div>
              <div id="captcha"></div>
              <button
                className="cursor-pointer rounded-lg bg-dark-gradient min-h-[60px] py-4 primary-button hover:translate-y-[-1px] dark:text-light-gray hover:text-white active:translate-y-[1px] font-medium transition duration-300 my-2 ms-auto flex w-full items-center justify-center gap-2 px-16 text-white md:w-fit"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 my-16 text-dark-gray ">
            <a
              target="_blank"
              className="block relative p-4 transition hover:text-onyx dark:hover:text-white duration-300 before:content-[''] before:rounded-xl hover:block before:absolute before:inset-0 before:opacity-0 before:scale-0 before:-z-[-10] hover:before:opacity-100 before:bg-light-gray/10 hover:before:scale-100 before:transition-all"
              aria-label="ReadCV"
              href="https://read.cv/eihab"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M6.842.912A3.162 3.162 0 0 0 6.19 1.96L1.117 15.408a3.162 3.162 0 0 0 1.842 4.075l10.757 4.06a3.164 3.164 0 0 0 4.075-1.844l5.074-13.448a3.161 3.161 0 0 0-1.84-4.076L10.265.116a3.162 3.162 0 0 0-3.423.796Zm2.139 4.25a.862.862 0 0 1 1.112-.501l8.065 3.042a.862.862 0 1 1-.608 1.614L9.483 6.275a.862.862 0 0 1-.502-1.112ZM7.662 8.66a.862.862 0 0 1 1.11-.503l8.067 3.042a.861.861 0 0 1 .326 1.398.865.865 0 0 1-.934.218L8.164 9.77a.862.862 0 0 1-.502-1.11Zm-1.319 3.497a.863.863 0 0 1 1.11-.503l5.38 2.029a.862.862 0 0 1-.276 1.67.862.862 0 0 1-.332-.055l-5.38-2.03a.863.863 0 0 1-.502-1.111Z"
                    clipRule="evenodd"
                  ></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h24v24H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              aria-label="LinkedIn"
              target="_blank"
              className="block relative p-4 transition hover:text-onyx dark:hover:text-white duration-300 before:content-[''] before:rounded-xl hover:block before:absolute before:inset-0 before:opacity-0 before:scale-0 before:-z-[-10] hover:before:opacity-100 before:bg-light-gray/10 hover:before:scale-100 before:transition-all"
              href="https://www.linkedin.com/in/eihab-khan/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <g clipPath="url(#LinkedIn_svg__a)">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M21.335 24H2.67a2.667 2.667 0 0 1-2.667-2.667V2.667A2.667 2.667 0 0 1 2.669 0h18.666a2.667 2.667 0 0 1 2.667 2.667v18.666A2.667 2.667 0 0 1 21.335 24Zm-4.23-3.333h3.562V13.35c0-3.095-1.755-4.592-4.206-4.592-2.452 0-3.484 1.91-3.484 1.91V9.11H9.545v11.556h3.432V14.6c0-1.626.748-2.593 2.18-2.593 1.317 0 1.949.93 1.949 2.593v6.066ZM3.335 5.466c0 1.177.947 2.132 2.116 2.132 1.17 0 2.116-.955 2.116-2.132A2.124 2.124 0 0 0 5.45 3.333c-1.169 0-2.116.955-2.116 2.133Zm3.923 15.2H3.678V9.112h3.58v11.556Z"
                    clipRule="evenodd"
                  ></path>
                </g>
                <defs>
                  <clipPath id="LinkedIn_svg__a">
                    <path fill="#fff" d="M0 0h24v24H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              aria-label="GitHub"
              target="_blank"
              className="block relative p-4 transition hover:text-onyx dark:hover:text-white duration-300 before:content-[''] before:rounded-xl hover:block before:absolute before:inset-0 before:opacity-0 before:scale-0 before:-z-[-10] hover:before:opacity-100 before:bg-light-gray/10 hover:before:scale-100 before:transition-all"
              href="https://github.com/eihabkhan"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <g clipPath="url(#a)">
                  <g clipPath="url(#b)">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M11.964 0C5.348 0 0 5.388 0 12.053c0 5.328 3.427 9.838 8.18 11.434.595.12.813-.259.813-.578 0-.28-.02-1.237-.02-2.235-3.328.718-4.02-1.437-4.02-1.437-.536-1.397-1.328-1.756-1.328-1.756-1.09-.738.08-.738.08-.738 1.207.08 1.841 1.237 1.841 1.237 1.07 1.836 2.793 1.317 3.487.998.099-.779.416-1.317.752-1.617-2.654-.28-5.447-1.317-5.447-5.947 0-1.317.475-2.394 1.228-3.232-.119-.3-.535-1.537.12-3.193 0 0 1.01-.32 3.287 1.237.975-.264 1.981-.398 2.991-.4 1.01 0 2.04.14 2.991.4 2.278-1.557 3.288-1.237 3.288-1.237.654 1.656.238 2.894.12 3.193.772.838 1.227 1.915 1.227 3.232 0 4.63-2.792 5.648-5.467 5.947.436.38.812 1.098.812 2.235 0 1.617-.02 2.914-.02 3.313 0 .32.219.698.813.579a12.044 12.044 0 0 0 8.18-11.435C23.929 5.388 18.56 0 11.965 0Z"
                      clipRule="evenodd"
                    ></path>
                  </g>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h24v24H0z"></path>
                  </clipPath>
                  <clipPath id="b">
                    <path fill="#fff" d="M0 0h24v23.51H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              aria-label="X (Twitter)"
              target="_blank"
              className="block relative p-4 transition hover:text-onyx dark:hover:text-white duration-300 before:content-[''] before:rounded-xl hover:block before:absolute before:inset-0 before:opacity-0 before:scale-0 before:-z-[-10] hover:before:opacity-100 before:bg-light-gray/10 hover:before:scale-100 before:transition-all"
              href="https://twitter.com/eihab_khan"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="currentColor"
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="transparent" d="M0 0h24v24H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
