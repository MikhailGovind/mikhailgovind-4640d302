
import { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import ExperienceTimeline from "@/components/ui/ExperienceTimeline";
import { experiences, education } from "@/data/experience";

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
            <div className="bg-white p-6 rounded-lg shadow-md border border-border sticky top-24">
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
                <li>
                  <a 
                    href="#certifications" 
                    className="text-portfolio-secondary hover:text-portfolio-accent transition-colors"
                  >
                    Skills & Qualifications
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            {/* Work Experience */}
            <div id="work-experience">
              <h2 className="text-2xl font-bold text-portfolio-primary mb-6">Work Experience</h2>
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-border">
                <ExperienceTimeline items={experiences} />
              </div>
            </div>
            
            {/* Education */}
            <div id="education" className="mt-16">
              <h2 className="text-2xl font-bold text-portfolio-primary mb-6">Education</h2>
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-border">
                <ExperienceTimeline items={education} />
              </div>
            </div>
            
            {/* Skills & Qualifications */}
            <div id="certifications" className="mt-16">
              <h2 className="text-2xl font-bold text-portfolio-primary mb-6">Skills & Qualifications</h2>
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-portfolio-primary mb-4">Technical Skills</h3>
                    <ul className="space-y-4">
                      <li>
                        <h4 className="font-semibold text-portfolio-secondary">Game Development</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Unity3D - Advanced proficiency</li>
                          <li>C# programming for game logic</li>
                          <li>2D/3D game development</li>
                          <li>Procedural content generation</li>
                          <li>Game optimization techniques</li>
                        </ul>
                      </li>
                      <li>
                        <h4 className="font-semibold text-portfolio-secondary">Tools & Software</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Visual Studio Code</li>
                          <li>GitHub version control</li>
                          <li>Adobe Photoshop</li>
                          <li>Clip Studio Paint</li>
                          <li>Twine interactive storytelling</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-portfolio-primary mb-4">Soft Skills</h3>
                    <ul className="space-y-3">
                      <li className="p-3 bg-muted rounded-md">
                        <span className="font-medium">Level and Quest Design:</span> Designing engaging player progression systems and narrative structures.
                      </li>
                      <li className="p-3 bg-muted rounded-md">
                        <span className="font-medium">Collaborative Communication:</span> Effectively conveying design ideas across multidisciplinary teams.
                      </li>
                      <li className="p-3 bg-muted rounded-md">
                        <span className="font-medium">User-Centered Design:</span> Creating accessible and engaging experiences focused on user needs.
                      </li>
                      <li className="p-3 bg-muted rounded-md">
                        <span className="font-medium">Creative Problem-Solving:</span> Adaptive approach to complex challenges in gameplay systems.
                      </li>
                      <li className="p-3 bg-muted rounded-md">
                        <span className="font-medium">Instructional Collaboration:</span> Working effectively with educators and curriculum designers.
                      </li>
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
