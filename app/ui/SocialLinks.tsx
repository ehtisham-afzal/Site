import React from "react";

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 my-16 text-dark-gray ">
      <a
        target="_blank"
        className="block relative p-4 transition hover:text-primary duration-300 before:content-[''] before:rounded-xl hover:block before:absolute before:inset-0 before:opacity-0 before:scale-0 before:-z-[-10] hover:before:opacity-100 before:bg-secondary/50 before:border hover:before:scale-100 before:transition-all"
        aria-label="ReadCV"
        href="https://read.cv/ehtisham"
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
        className="block relative p-4 transition hover:text-primary duration-300 before:content-[''] before:rounded-xl hover:block before:absolute before:inset-0 before:opacity-0 before:scale-0 before:-z-[-10] hover:before:opacity-100 before:bg-secondary/50 before:border hover:before:scale-100 before:transition-all"
        href="https://www.linkedin.com/in/ehtisham-afzal/"
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
        className="block relative p-4 transition hover:text-primary duration-300 before:content-[''] before:rounded-xl hover:block before:absolute before:inset-0 before:opacity-0 before:scale-0 before:-z-[-10] hover:before:opacity-100 before:bg-secondary/50 before:border hover:before:scale-100 before:transition-all"
        href="https://github.com/EHTISHAM-Afzal"
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
        className="block relative p-4 transition hover:text-primary duration-300 before:content-[''] before:rounded-xl hover:block before:absolute before:inset-0 before:opacity-0 before:scale-0 before:-z-[-10] hover:before:opacity-100 before:bg-secondary/50 before:border hover:before:scale-100 before:transition-all"
        href="https://twitter.com/ehtisham_dev"
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
  );
};

export default SocialLinks;
