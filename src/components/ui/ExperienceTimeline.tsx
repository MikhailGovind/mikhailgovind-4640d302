
import { cn } from "@/lib/utils";

export interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  isLast?: boolean;
}

const TimelineItem = ({ title, company, period, description, isLast = false }: TimelineItemProps) => {
  return (
    <div className="relative pl-8 pb-12">
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-portfolio-highlight border-4 border-white" />
      
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[7px] top-5 bottom-0 w-[2px] bg-gray-200" />
      )}
      
      <div className="pb-1">
        <h3 className="text-xl font-bold text-portfolio-primary">{title}</h3>
        <p className="text-portfolio-secondary font-medium">{company}</p>
        <p className="text-sm text-muted-foreground">{period}</p>
      </div>
      
      <div className="mt-3">
        <ul className="list-disc pl-5 space-y-1">
          {description.map((item, index) => (
            <li key={index} className="text-foreground">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

interface ExperienceTimelineProps {
  items: TimelineItemProps[];
  className?: string;
}

const ExperienceTimeline = ({ items, className }: ExperienceTimelineProps) => {
  return (
    <div className={cn("", className)}>
      {items.map((item, index) => (
        <TimelineItem 
          key={`${item.company}-${index}`} 
          {...item} 
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};

export default ExperienceTimeline;
