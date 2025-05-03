
import { ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  skills: string[];
  className?: string;
}

const SkillCard = ({ title, icon, skills, className }: SkillCardProps) => {
  return (
    <div className={cn(
      "bg-card text-card-foreground rounded-lg border border-border shadow-md p-6 hover:shadow-lg transition-shadow",
      className
    )}>
      <div className="flex items-center mb-4 text-portfolio-primary">
        <div className="mr-3">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2 text-portfolio-highlight">•</span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
