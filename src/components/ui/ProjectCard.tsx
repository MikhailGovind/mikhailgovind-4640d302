
import { cn } from "@/lib/utils";
import { Download, FileText, Github, Video } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  videoSrc?: string;
  tags: string[];
  github?: string;
  slug: string;
  date?: string;
  className?: string;
  role?: string;
  buildZip?: string;
  hasDesignDoc?: boolean;
  hasTechDoc?: boolean;
}

const ProjectCard = ({
  title,
  description,
  image,
  videoSrc,
  tags,
  github,
  slug,
  date,
  role,
  className,
  buildZip,
  hasDesignDoc,
  hasTechDoc,
}: ProjectCardProps) => {
  return (
    <div className={cn("project-card group", className)}>
      <div className="relative overflow-hidden aspect-video">
        {videoSrc ? (
          <video
            src={videoSrc}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {role && (
          <div className="absolute top-2 right-2 bg-portfolio-primary text-white text-xs font-medium px-2 py-1 rounded">
            {role}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-portfolio-primary">{title}</h3>
        </div>
        {date && <p className="text-sm text-muted-foreground mt-1">{date}</p>}
        <p className="mt-3 text-foreground line-clamp-3">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-6 space-y-3">
          <div className="flex flex-wrap gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 bg-card border border-border hover:border-portfolio-primary text-foreground hover:text-portfolio-primary text-sm rounded-md transition-colors"
              >
                <Github size={14} className="mr-1" />
                View on GitHub
              </a>
            )}
            
            {buildZip && (
              <a
                href={buildZip}
                download
                className="inline-flex items-center px-3 py-1.5 bg-card border border-border hover:border-portfolio-secondary text-foreground hover:text-portfolio-secondary text-sm rounded-md transition-colors"
              >
                <Download size={14} className="mr-1" />
                Download Build
              </a>
            )}
          </div>
          
          <div className="flex flex-wrap gap-3">
            {hasDesignDoc && (
              <Link
                to={`/documents/design/${slug}`}
                className="inline-flex items-center px-3 py-1.5 bg-card border border-border hover:border-portfolio-accent text-foreground hover:text-portfolio-accent text-sm rounded-md transition-colors"
              >
                <FileText size={14} className="mr-1" />
                View Design Document
              </Link>
            )}
            
            {hasTechDoc && (
              <Link
                to={`/documents/technical/${slug}`}
                className="inline-flex items-center px-3 py-1.5 bg-card border border-border hover:border-portfolio-highlight text-foreground hover:text-portfolio-highlight text-sm rounded-md transition-colors"
              >
                <Video size={14} className="mr-1" />
                View Technical Document
              </Link>
            )}
          </div>
          
          <Link
            to={`/projects/${slug}`}
            className="block mt-4 text-portfolio-accent font-medium hover:text-portfolio-primary transition-colors"
          >
            View Project &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
