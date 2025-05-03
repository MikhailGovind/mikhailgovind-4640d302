
import { useEffect } from "react";
import { Code, Gamepad2, Laptop, PenTool, Brain } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillCard from "@/components/ui/SkillCard";
import { technicalSkills, softSkills } from "@/data/skills";

const Skills = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const developmentSkills = [
    "Unity Game Engine",
    "C# Programming",
    "Game Mechanics Implementation", 
    "Procedural Generation",
    "2D & 3D Game Development",
    "Performance Optimization"
  ];

  const designSkills = [
    "Level Design",
    "Game Design Documentation",
    "Quest System Design",
    "Narrative Design",
    "User-Centered Design",
    "Player Progression Systems"
  ];

  const creativeSkills = [
    "Creative Writing",
    "Interactive Storytelling",
    "Visual Art Direction",
    "Game Asset Creation",
    "Character Development",
    "World Building"
  ];

  const softwareSkills = [
    "Visual Studio Code",
    "GitHub",
    "Clip Studio Paint",
    "Adobe Photoshop",
    "Twine",
    "Microsoft Office Suite"
  ];

  const problemSolvingSkills = [
    "Debugging & Troubleshooting",
    "Algorithmic Thinking",
    "Creative Problem-Solving",
    "Logic Implementation",
    "Iterative Design Process",
    "Analytical Thinking"
  ];

  return (
    <MainLayout>
      <div className="page-container">
        <SectionTitle 
          title="My Skills" 
          subtitle="A comprehensive overview of my technical and soft skills in game development" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <SkillCard
            title="Game Development"
            icon={<Gamepad2 size={24} />}
            skills={developmentSkills}
          />
          
          <SkillCard
            title="Game Design"
            icon={<PenTool size={24} />}
            skills={designSkills}
          />
          
          <SkillCard
            title="Creative"
            icon={<Brain size={24} />}
            skills={creativeSkills}
          />
          
          <SkillCard
            title="Tools & Software"
            icon={<Laptop size={24} />}
            skills={softwareSkills}
          />
          
          <SkillCard
            title="Programming"
            icon={<Code size={24} />}
            skills={["C# Programming", "Object-Oriented Design", "Unity API", "Version Control (Git)", "Data Structures", "Algorithm Implementation"]}
          />
          
          <SkillCard
            title="Problem Solving"
            icon={<Brain size={24} />}
            skills={problemSolvingSkills}
          />
        </div>
        
        <div className="mt-16">
          <SectionTitle title="Soft Skills" />
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-border mt-8">
            <div className="grid gap-8">
              {softSkills.map((skill, index) => (
                <div key={index} className="border-b border-border pb-8 last:border-b-0 last:pb-0">
                  <h3 className="text-xl font-semibold text-portfolio-primary mb-3">{skill.skill}</h3>
                  <p className="text-foreground">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <SectionTitle title="Technical Proficiencies" />
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-border mt-8">
            <div className="grid gap-8">
              {technicalSkills.map((category, index) => (
                <div key={index} className="border-b border-border pb-8 last:border-b-0 last:pb-0">
                  <h3 className="text-xl font-semibold text-portfolio-primary mb-3">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-3 py-1 bg-portfolio-accent/10 text-portfolio-accent rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Skills;
