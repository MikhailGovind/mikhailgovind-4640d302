
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle = ({ title, subtitle, className, align = 'left' }: SectionTitleProps) => {
  return (
    <div className={cn(
      "mb-12",
      align === 'center' && "text-center",
      align === 'right' && "text-right",
      className
    )}>
      <h2 
        className={cn(
          "text-3xl md:text-4xl font-bold gradient-text inline-block",
          className
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div 
        className={cn(
          "h-1 w-24 bg-accent mt-4 rounded-full",
          align === 'center' && "mx-auto",
          align === 'right' && "ml-auto"
        )}
      ></div>
    </div>
  );
};

export default SectionTitle;
