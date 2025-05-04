
import { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import { experiences, education } from "@/data/experience";

const Experience = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      {/* Moving background mesh */}
      <div className="moving-mesh"></div>
      
      <div className="page-container">
        <SectionTitle 
          title="My Experience" 
          subtitle="A timeline of my professional journey and academic background" 
        />
        
        {/* Work Experience */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative">
            {/* Continuous timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-portfolio-accent/50"></div>
            
            <div className="space-y-10">
              {experiences.map((experience, index) => (
                <div key={index} className="relative pl-8 pb-12">
                  {/* Timeline dot */}
                  <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-portfolio-accent border-2 border-white dark:border-background"></div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{experience.title}</h3>
                      <p className="text-secondary font-medium">{experience.company}</p>
                    </div>
                    
                    <p className="text-sm text-muted-foreground md:text-right mt-1 md:mt-0">
                      {experience.period}
                    </p>
                  </div>
                  
                  <div className="mt-4">
                    <ul className="list-disc pl-5 space-y-2">
                      {experience.description.map((item, i) => (
                        <li key={i} className="text-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Education */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-10">Education</h2>
          
          <div className="relative">
            {/* Continuous timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-portfolio-accent/50"></div>
            
            <div className="relative pl-8 pb-12">
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-portfolio-accent border-2 border-white dark:border-background"></div>
              
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-primary">{education[0].title}</h3>
                  <p className="text-secondary font-medium">{education[0].company}</p>
                </div>
                
                <p className="text-sm text-muted-foreground md:text-right mt-1 md:mt-0">
                  {education[0].period}
                </p>
              </div>
              
              <div className="mt-4">
                <ul className="list-disc pl-5 space-y-2">
                  {education[0].description.map((item, i) => (
                    <li key={i} className="text-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Experience;
