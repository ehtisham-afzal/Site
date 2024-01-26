import ProjectCard from "@/components/Cards/ProjectCard";
import PageHeader from "@/components/PageHeader";
import CTAButton from "@/components/ui/CTAButton";
import { Projects } from "../../lib/Data";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

const page = () => {
  return (
    <>
      <PageHeader
        Title="Projects"
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
              path={project.path}
            />
          ))}

          {/* Youre Project Goes Here Card */}

          <div className="relative border bg-card border-dashed shadow-md flex flex-col items-center justify-center gap-4 rounded-3xl p-6 py-10 md:h-[565px] md:p-16">
            <SparklesIcon className="mb-6 h-12 w-12 text-light-gray md:mb-10 md:h-24 md:w-24" />
            <p className="text-xl font-extrabold uppercase md:text-3xl">
              Your project goes here
            </p>
            <p className="mb-10 text-secondary-foreground/50">
              Let’s turn your idea into a visual reality
            </p>
            <CTAButton />
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
