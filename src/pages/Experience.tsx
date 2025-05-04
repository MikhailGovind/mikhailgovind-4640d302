
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
        <div className="mt-16">
          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <div key={index} className="experience-item">
                <p className="experience-date">{experience.period}</p>
                <h3 className="experience-title">{experience.title}</h3>
                <p className="experience-company">{experience.company}</p>
                
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
        
        {/* Education */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-primary mb-10">Education</h2>
          
          <div className="experience-item">
            <p className="experience-date">{education[0].period}</p>
            <h3 className="experience-title">{education[0].title}</h3>
            <p className="experience-company">{education[0].company}</p>
            
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
    </MainLayout>
  );
};

export default Experience;
