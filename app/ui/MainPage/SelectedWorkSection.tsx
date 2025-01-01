import { FeaturedProjects } from "../../lib/Data";
import ProjectCard from "../Cards/ProjectCard";

const SelectedWorkSection = () => {
  return (
    <section className="w-full mt-20 md:mt-40">
      <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-5xl scroll-m-20">
        Showcased Work
      </h2>
      <div className="w-full space-y-4 md:space-y-8">
        {FeaturedProjects.map((project) => (
          <ProjectCard key={project.Name} Data={project} />
        ))}
      </div>
    </section>
  );
};

export default SelectedWorkSection;
