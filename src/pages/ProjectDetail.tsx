
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { getProjectBySlug, projects } from "@/data/projects";
import NotFound from "./NotFound";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || "");
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!project) {
    return <NotFound />;
  }
  
  return (
    <MainLayout>
      <div className="page-container">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-portfolio-accent hover:text-portfolio-primary transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Projects
          </Link>
        </div>
        
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-border">
          <div className="aspect-video relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-portfolio-primary">{project.title}</h1>
                <p className="text-portfolio-secondary mt-1">{project.role} | {project.date}</p>
              </div>
              
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-portfolio-accent text-white font-medium rounded-md hover:bg-portfolio-secondary transition-colors self-start"
                >
                  <Github size={18} className="mr-2" />
                  View on GitHub
                </a>
              )}
            </div>
            
            <div className="mt-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">{project.description}</p>
                
                {project.longDescription && (
                  <div className="space-y-4">
                    {project.longDescription.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                )}
                
                {project.features && (
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-portfolio-primary mb-4">Key Features</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.technologies && (
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-portfolio-primary mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Projects */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-portfolio-primary mb-6">Other Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map(relatedProject => (
                <div key={relatedProject.id} className="project-card">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-portfolio-primary">{relatedProject.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm">{relatedProject.description}</p>
                    <Link
                      to={`/projects/${relatedProject.slug}`}
                      className="mt-3 inline-block text-portfolio-accent hover:text-portfolio-primary text-sm font-medium transition-colors"
                    >
                      View Project &rarr;
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectDetail;
