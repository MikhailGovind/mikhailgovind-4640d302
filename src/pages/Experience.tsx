
import { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import ExperienceTimeline from "@/components/ui/ExperienceTimeline";
import { experiences, education } from "@/data/experience";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Experience = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className="page-container">
        <SectionTitle 
          title="My Experience" 
          subtitle="A timeline of my professional journey and academic background" 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
          <div className="lg:col-span-1">
            <div className="bg-card dark:bg-card p-6 rounded-lg shadow-md border border-border sticky top-24">
              <h3 className="font-bold text-lg text-portfolio-primary mb-4">Quick Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#work-experience" 
                    className="text-portfolio-secondary hover:text-portfolio-accent transition-colors"
                  >
                    Work Experience
                  </a>
                </li>
                <li>
                  <a 
                    href="#education" 
                    className="text-portfolio-secondary hover:text-portfolio-accent transition-colors"
                  >
                    Education
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            {/* Work Experience */}
            <div id="work-experience">
              <h2 className="text-2xl font-bold text-portfolio-primary mb-6">Work Experience</h2>
              <div className="space-y-6">
                <Accordion type="single" collapsible className="w-full">
                  {experiences.map((experience, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="bg-card dark:bg-card border border-border rounded-lg overflow-hidden mb-4">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <div className="text-left">
                          <h3 className="text-xl font-bold text-portfolio-primary">{experience.title}</h3>
                          <p className="text-portfolio-secondary">{experience.company}</p>
                          <p className="text-sm text-muted-foreground">{experience.period}</p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="mt-3">
                          <ul className="list-disc pl-5 space-y-1">
                            {experience.description.map((item, i) => (
                              <li key={i} className="text-foreground">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            
            {/* Education */}
            <div id="education" className="mt-16">
              <h2 className="text-2xl font-bold text-portfolio-primary mb-6">Education</h2>
              <div className="bg-card dark:bg-card rounded-lg shadow-md p-6 md:p-8 border border-border">
                <ExperienceTimeline items={education} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Experience;
