import PageHeader from "../ui/PageHeader";
import CTAButton from "../../src/components/ui/CTAButton";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Aboute Ehtisham",
};

const page = () => {
  return (
    <main className="">
      <PageHeader
        Title="A little bit about me"
        Description="My name is Ehtisham Afzal a junior web developer with a passion for creating engaging and
        user-friendly web. I have experience in HTML, CSS, JavaScript, and
        React, and I am always eager to learn new technologies and
        frameworks. I enjoy working in a team and collaborating with other
        developers, designers, and clients."
      />

      {/* section */}
      <div className="grid w-full grid-cols-1 md:container md:grid-cols-12">
        <div className="flex flex-col col-span-full gap-y-12 md:col-span-8 md:pr-12">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold uppercase dark:text-medium-gray">
              Who I am
            </h3>
            <p className="text-lg text-muted-foreground">
              I’m <span className="text-foreground/90">Ehtisham Afzal</span> A
              junior web developer with a passion for creating engaging and
              user-friendly web. I have experience in HTML, CSS, JavaScript, and
              React, and I am always eager to learn new technologies and
              frameworks. I enjoy working in a team and collaborating with other
              developers, designers, and clients. I have completed several
              projects, such as a personal portfolio website, a FullStack
              Ecommerce WebApp called{" "}
              <a
                className="text-foreground/90"
                target="__blank"
                href="https://littlelemon-sham.vercel.app/"
              >
                LittleLemon
              </a>
              , which you can see on my{" "}
              <a
                className="text-foreground/90"
                target="__blank"
                href="https://github.com/ehtisham-afzal"
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
            <p className="text-lg text-muted-foreground">
              As a junior web developer, I love to create web applications that
              are engaging and user-friendly. I have skills in HTML, CSS,
              JavaScript, and React, and I am always open to learning new
              technologies and frameworks. I enjoy working in a team and
              collaborating with other developers, designers, and clients. I
              have completed several projects, such as a personal portfolio
              website, a FullStack Ecommerce WebApp called LittleLemon, which
              you can see on my{" "}
              <a
                className="text-foreground/90"
                target="__blank"
                href="https://github.com/ehtisham-afzal"
              >
                GitHub profile
              </a>
              . I am looking for opportunities to grow my skills and contribute
              to meaningful web development projects.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold uppercase dark:text-medium-gray"></p>
            <p className="text-[18px] text-base text-muted-foreground">
              Feel free to reach out via{" "}
              <a
                className="text-foreground/90"
                href="mailto:shaminterprise@gmail.com"
              >
                e-mail
              </a>
              , or follow me on{" "}
              <a
                className="text-foreground/90"
                target="_blank"
                href="https://twitter.com/ehtisham_dev"
              >
                Twitter
              </a>
              . Want to see where I’ve worked? Check out my{" "}
              <a
                className="text-foreground/90"
                target="_blank"
                href="https://cv.ehtisham.dev"
              >
                Resume
              </a>
              , or connect with me on{" "}
              <a
                className="text-foreground/90"
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
            <h3 className="text-[18px] text-base text-muted-foreground">
              Let’s build something great,
            </h3>
          </div>
          <CTAButton className="w-full md:hidden" />
        </div>
        <div className="col-span-12 -order-1 md:order-2 md:col-span-4">
          <div className="relative flex justify-center mb-20 group">
            <Image
              className="relative z-20 block w-full overflow-hidden rounded-2xl border-[1px] border-card-border backdrop-blur-sm bg-secondary/50"
              alt="Portrait of Ehtisham Afzal"
              width="320"
              height="400"
              src="/ehtisham.jpg"
            />
          </div>
          <CTAButton className="hidden md:w-full md:flex" />
        </div>
      </div>
    </main>
  );
};

export default page;
