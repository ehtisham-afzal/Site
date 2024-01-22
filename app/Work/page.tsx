import ProjectCard from "@/components/Cards/ProjectCard";
import PageHeader from "@/components/PageHeader";
import { Projects } from "@/lib/Data";
import { SparklesIcon } from "@heroicons/react/24/outline";
import React from "react";

const page = () => {
  return (
    <>
      <PageHeader
        Title="Work"
        Description="Projects and Ideas I've Worked on"
      />
      <main>
        <div className="w-full space-y-4 md:space-y-8">
          {Projects.map((project) => (
            <ProjectCard
              key={project.Name}
              Name={project.Name}
              Description={project.Description}
              ProjectIconUrl={project.ProjectIconUrl}
              ProjectUrl={project.ProjectUrl}
              ProjectImageUrl={project.ProjectImageUrl}
            />
          ))}

          {/* Youre Project Goes Here Card */}

          <div className="relative border bg-card flex flex-col items-center justify-center gap-4 rounded-3xl p-6 py-10 md:h-[565px] md:p-16 border-dashed">
            <SparklesIcon className="mb-6 h-12 w-12 text-light-gray md:mb-10 md:h-24 md:w-24" />
            <p className="text-xl font-extrabold uppercase text-onyx dark:text-white md:text-3xl">
              Your project goes here
            </p>
            <p className="mb-10 text-medium-gray">
              Let’s turn your idea into a visual reality
            </p>
            <a
              className="cursor-pointer rounded-lg w-full md:w-fit min-h-[60px] px-8 py-4 font-medium flex  items-center justify-center gap-2 bg-primary text-primary-foreground shadow hover:bg-primary/90"
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
    </>
  );
};

export default page;
