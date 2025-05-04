
import { useEffect, useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import ExperienceTimeline from "@/components/ui/ExperienceTimeline";
import { experiences, education } from "@/data/experience";
import { ChevronDown, ChevronUp } from "lucide-react";

const Experience = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const toggleJob = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <MainLayout>
      <div className="page-container max-w-5xl">
        <SectionTitle 
          title="My Experience" 
          subtitle="A timeline of my professional journey and academic background" 
          align="center"
        />
        
        <div className="mt-12 space-y-8">
          {/* Work Experience */}
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300"
              >
                <div 
                  className="p-6 cursor-pointer flex justify-between items-start"
                  onClick={() => toggleJob(index)}
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-portfolio-primary">{experience.title}</h3>
                      <span className="text-sm text-muted-foreground">{experience.period}</span>
                    </div>
                    <p className="text-portfolio-secondary mt-1">{experience.company}</p>
                  </div>
                  <div className="ml-4">
                    {expandedJob === index ? (
                      <ChevronUp className="text-muted-foreground" />
                    ) : (
                      <ChevronDown className="text-muted-foreground" />
                    )}
                  </div>
                </div>

                {expandedJob === index && (
                  <div className="px-6 pb-6 border-t border-border pt-4 animate-fade-in">
                    <ul className="list-disc pl-5 space-y-2">
                      {experience.description.map((item, i) => (
                        <li key={i} className="text-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Education */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-portfolio-primary mb-6">Education</h2>
            <div className="bg-card rounded-lg shadow-md p-6 md:p-8 border border-border">
              <div className="space-y-6">
                <div className="relative pl-8">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-portfolio-highlight border-4 border-card" />
                  
                  <div className="pb-1">
                    <h3 className="text-xl font-bold text-portfolio-primary">{education[0].title}</h3>
                    <p className="text-portfolio-secondary font-medium">{education[0].company}</p>
                    <p className="text-sm text-muted-foreground">{education[0].period}</p>
                  </div>
                  
                  <div className="mt-3">
                    <ul className="list-disc pl-5 space-y-1">
                      {education[0].description.map((item, index) => (
                        <li key={index} className="text-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Experience;
