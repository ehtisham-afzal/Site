import ProjectCard from "../../components/Cards/ProjectCard";
import PageHeader from "../../components/PageHeader";
import CTAButton from "../../components/ui/CTAButton";
import { Projects } from "../../lib/Data";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects and Ideas I've Worked on",
  openGraph: {
    title: "Projects",
    description: "Projects and Ideas I've Worked on",
  },
};

const page = () => {
  return (
    <>
      <PageHeader
        Title="Projects"
        Description="Explore my portfolio of web applications and software projects"
      />
      <main className="max-w-5xl mx-auto">
        <div className="w-full space-y-4 md:space-y-8">
          {Projects.map((project) => (
            <ProjectCard key={project.Name} Data={project} />
          ))}

          <div className="relative border bg-card/50 border-dashed shadow-md flex flex-col items-center justify-center text-center gap-4 rounded-3xl p-6 py-10 md:h-[565px] md:p-16 transition-colors hover:bg-card/80">
            <SparklesIcon className="mb-6 h-12 w-12 text-primary/50 md:mb-10 md:h-24 md:w-24" />
            <p className="text-xl font-extrabold uppercase md:text-3xl">
              Your project goes here
            </p>
            <p className="mb-10 text-secondary-foreground/50">
              Lets collaborate and bring your vision to life
            </p>
            <CTAButton />
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
