
import { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className="page-container">
        <SectionTitle 
          title="My Projects" 
          subtitle="Explore my portfolio of game development projects built with Unity and C#" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              github={project.github}
              slug={project.slug}
              date={project.date}
              role={project.role}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Projects;
