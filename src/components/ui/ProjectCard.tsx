
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  slug: string;
  date?: string;
  className?: string;
  role?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  github,
  slug,
  date,
  role,
  className,
}: ProjectCardProps) => {
  return (
    <div className={cn("project-card group", className)}>
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {role && (
          <div className="absolute top-2 right-2 bg-portfolio-primary text-white text-xs font-medium px-2 py-1 rounded">
            {role}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-portfolio-primary">{title}</h3>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-secondary hover:text-portfolio-primary transition-colors"
            >
              <Github size={20} />
            </a>
          )}
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
        <div className="mt-6">
          <Link
            to={`/projects/${slug}`}
            className="text-portfolio-accent font-medium hover:text-portfolio-primary transition-colors"
          >
            View Project &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
