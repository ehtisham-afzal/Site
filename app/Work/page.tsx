import ProjectCard from "@/components/Cards/ProjectCard";
import PageHeader from "@/components/PageHeader";
import { Projects } from "@/lib/Data";
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
        </div>
      </main>
    </>
  );
};

export default page;
