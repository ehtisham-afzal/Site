import { Projects } from "../../../lib/Data";
import ProjectCard from "../Cards/ProjectCard";

const SelectedWorkSection = () => {
  return (
    <section className="w-full mt-20 md:mt-40">
      <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-5xl scroll-m-20">
        Selected work
      </h2>
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
      </div>
    </section>
  );
};

export default SelectedWorkSection;
