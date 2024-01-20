import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="">
      <PageHeader
        Title="A little bit about me"
        Description="Who I am and what I do."
      />

      {/* section */}
      <div className="grid w-full grid-cols-1 md:container md:grid-cols-12">
        <div className="flex flex-col col-span-full gap-y-12 md:col-span-8 md:pr-12">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold uppercase dark:text-medium-gray">
              Who I am
            </h3>
            <p className="text-[18px] leading-[160%] text-muted-foreground">
              I’m <span className="text-primary">Ehtisham Afzal</span> A junior
              web developer with a passion for creating engaging and
              user-friendly web. I have experience in HTML, CSS, JavaScript, and
              React, and I am always eager to learn new technologies and
              frameworks. I enjoy working in a team and collaborating with other
              developers, designers, and clients. I have completed several
              projects, such as a personal portfolio website, a FullStack
              Ecommerce WebApp called{" "}
              <a
                className="text-primary"
                target="__blank"
                href="https://littlelemon-sham.vercel.app/"
              >
                LittleLemon
              </a>
              , which you can see on my{" "}
              <a
                className="text-primary"
                target="__blank"
                href="https://github.com/EHTISHAM-Afzal"
              >
                GitHub profile
              </a>
              . I am looking for opportunities to grow my skills and contribute
              to meaningful web development projects.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold uppercase dark:text-medium-gray">
              What I do
            </h3>
            <p className="text-[18px] leading-[160%] text-muted-foreground">
              As a junior web developer, I love to create web applications that
              are engaging and user-friendly. I have skills in HTML, CSS,
              JavaScript, and React, and I am always open to learning new
              technologies and frameworks. I enjoy working in a team and
              collaborating with other developers, designers, and clients. I
              have completed several projects, such as a personal portfolio
              website, a FullStack Ecommerce WebApp called LittleLemon, which
              you can see on my{" "}
              <a
                className="text-primary"
                target="__blank"
                href="https://github.com/EHTISHAM-Afzal"
              >
                GitHub profile
              </a>
              . I am looking for opportunities to grow my skills and contribute
              to meaningful web development projects.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold uppercase dark:text-medium-gray"></p>
            <p className="text-[18px] leading-[160%] text-muted-foreground">
              Feel free to reach out via{" "}
              <a className="text-primary" href="mailto:khaj3172@gmail.com">
                e-mail
              </a>
              , or follow me on{" "}
              <a
                className="text-primary"
                target="_blank"
                href="https://twitter.com/ehtisham_OO7"
              >
                Twitter
              </a>
              . Want to see where I’ve worked? Check out my{" "}
              <a
                className="text-primary"
                target="_blank"
                href="https://read.cv/ehtisham"
              >
                Resume
              </a>
              , or connect with me on{" "}
              <a
                className="text-primary"
                target="_blank"
                href="https://www.linkedin.com/in/ehtisham-afzal"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold uppercase dark:text-medium-gray"></p>
            <h3 className="text-[18px] leading-[160%] text-muted-foreground">
              Let’s build something great,
            </h3>
          </div>
          <a
            className="cursor-pointer rounded-lg bg-primary text-secondary min-h-[60px] px-8 py-4 font-medium w-full border inline-flex justify-center items-center gap-2 md:hidden"
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
        </div>
        <div className="col-span-12 -order-1 md:order-2 md:col-span-4">
          <div className="relative flex justify-center mb-20 group">
            <Image
              className="relative z-20 block w-full overflow-hidden rounded-2xl border-[1px] border-card-border backdrop-blur-sm bg-secondary/50"
              alt="Portrait of Ehtisham Afzal"
              width="344"
              height="443"
              src="/sham2.png"
            />
          </div>
          <a
            className="cursor-pointer bg-primary text-secondary rounded-lg primary min-h-[60px] px-8 py-4 font-medium transition duration-300 mx-auto hidden w-full border items-center justify-center gap-2 md:flex"
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
        </div>
      </div>
    </main>
  );
};

export default page;
