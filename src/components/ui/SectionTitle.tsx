
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
          "text-3xl md:text-4xl font-bold text-portfolio-primary",
          align === 'center' && "after:left-1/2 after:-translate-x-1/2",
          align === 'right' && "after:right-0 after:left-auto",
          "relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-16 after:h-1 after:bg-portfolio-highlight"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
