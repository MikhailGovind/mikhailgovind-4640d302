
import { useEffect, useState } from "react";
import { Code, Gamepad2, Laptop, PenTool, Brain } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillCard from "@/components/ui/SkillCard";
import { technicalSkills, softSkills } from "@/data/skills";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Link } from "react-router-dom";

interface ExpandableSkill {
  title: string;
  icon: React.ReactNode;
  blurb: string;
  overview: string;
  useCases: string[];
  projects: {
    name: string;
    slug: string;
  }[];
  skills: string[];
}

const Skills = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Track open state for expandable sections
  const [openSkills, setOpenSkills] = useState<Record<string, boolean>>({});

  const toggleSkill = (skillId: string) => {
    setOpenSkills((prev) => ({
      ...prev,
      [skillId]: !prev[skillId],
    }));
  };

  const expandableSkills: ExpandableSkill[] = [
    {
      title: "Game Development",
      icon: <Gamepad2 size={24} />,
      blurb: "Creating interactive digital experiences with Unity and C#",
      overview: "I build games using Unity engine with C# programming, focusing on mechanics implementation, procedural generation, and optimization.",
      useCases: [
        "3D and 2D games for various platforms",
        "Interactive educational experiences",
        "Procedurally generated content",
        "Systems design and implementation"
      ],
      projects: [
        { name: "The DJs of Shaolin", slug: "djs-of-shaolin" }, 
        { name: "Itsy Bitsy Spider", slug: "itsy-bitsy-spider" }, 
        { name: "Playing Game", slug: "playing-game" }
      ],
      skills: [
        "Unity Game Engine",
        "C# Programming",
        "Game Mechanics Implementation", 
        "Procedural Generation",
        "2D & 3D Game Development",
        "Performance Optimization"
      ]
    },
    {
      title: "Game Design",
      icon: <PenTool size={24} />,
      blurb: "Crafting engaging player experiences through thoughtful design",
      overview: "I design game mechanics, levels, and progression systems that keep players engaged while delivering meaningful experiences.",
      useCases: [
        "Level design and world building",
        "Quest and narrative design",
        "Player progression systems",
        "Game mechanics balancing"
      ],
      projects: [
        { name: "The DJs of Shaolin", slug: "djs-of-shaolin" }, 
        { name: "Playing Game", slug: "playing-game" }, 
        { name: "S.O.D.A", slug: "soda" }
      ],
      skills: [
        "Level Design",
        "Game Design Documentation",
        "Quest System Design",
        "Narrative Design",
        "User-Centered Design",
        "Player Progression Systems"
      ]
    },
    {
      title: "Creative",
      icon: <Brain size={24} />,
      blurb: "Bringing ideas to life through writing, art, and worldbuilding",
      overview: "I create compelling narratives, characters, and visual concepts that enhance the gaming experience.",
      useCases: [
        "Interactive storytelling",
        "Character development",
        "World building",
        "Visual asset creation"
      ],
      projects: [
        { name: "Playing Game", slug: "playing-game" }, 
        { name: "The DJs of Shaolin", slug: "djs-of-shaolin" }, 
        { name: "Space Escape", slug: "space-escape" }
      ],
      skills: [
        "Creative Writing",
        "Interactive Storytelling",
        "Visual Art Direction",
        "Game Asset Creation",
        "Character Development",
        "World Building"
      ]
    },
    {
      title: "Tools & Software",
      icon: <Laptop size={24} />,
      blurb: "Utilizing industry standard tools for game development workflow",
      overview: "I'm proficient with various software tools that support the game development process from concept to deployment.",
      useCases: [
        "Version control and collaboration",
        "Digital art creation",
        "Game engine integration",
        "Interactive narrative tools"
      ],
      projects: [
        { name: "All Projects", slug: "projects" }, 
        { name: "FNAF Clone", slug: "fnaf-clone" }, 
        { name: "S.O.D.A", slug: "soda" }
      ],
      skills: [
        "Visual Studio Code",
        "GitHub",
        "Clip Studio Paint",
        "Adobe Photoshop",
        "Twine",
        "Microsoft Office Suite"
      ]
    },
    {
      title: "Programming",
      icon: <Code size={24} />,
      blurb: "Building robust game logic and systems with object-oriented principles",
      overview: "I apply programming fundamentals to create structured, maintainable, and efficient game code.",
      useCases: [
        "Game logic implementation",
        "System architecture",
        "Algorithm development",
        "Technical problem solving"
      ],
      projects: [
        { name: "Itsy Bitsy Spider", slug: "itsy-bitsy-spider" }, 
        { name: "FNAF Clone", slug: "fnaf-clone" }, 
        { name: "S.O.D.A", slug: "soda" }
      ],
      skills: ["C# Programming", "Object-Oriented Design", "Unity API", "Version Control (Git)", "Data Structures", "Algorithm Implementation"]
    },
    {
      title: "Problem Solving",
      icon: <Brain size={24} />,
      blurb: "Approaching challenges with analytical and creative thinking",
      overview: "I tackle design and technical problems with a methodical approach, finding innovative solutions to complex challenges.",
      useCases: [
        "Debugging and troubleshooting",
        "Gameplay mechanic optimization",
        "Technical constraints resolution",
        "Design problem iteration"
      ],
      projects: [
        { name: "Itsy Bitsy Spider", slug: "itsy-bitsy-spider" }, 
        { name: "The DJs of Shaolin", slug: "djs-of-shaolin" }, 
        { name: "S.O.D.A", slug: "soda" }
      ],
      skills: [
        "Debugging & Troubleshooting",
        "Algorithmic Thinking",
        "Creative Problem-Solving",
        "Logic Implementation",
        "Iterative Design Process",
        "Analytical Thinking"
      ]
    },
  ];

  return (
    <MainLayout>
      <div className="page-container">
        <SectionTitle 
          title="My Skills" 
          subtitle="A comprehensive overview of my technical and soft skills in game development" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {expandableSkills.map((skill) => (
            <Collapsible 
              key={skill.title} 
              open={openSkills[skill.title]} 
              onOpenChange={() => toggleSkill(skill.title)}
              className="bg-card dark:bg-card rounded-lg border border-border shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full"
            >
              <CollapsibleTrigger className="w-full text-left p-6 flex items-start justify-between">
                <div className="flex items-center">
                  <div className="text-portfolio-primary mr-3">{skill.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-portfolio-primary">{skill.title}</h3>
                    <p className="text-sm text-foreground mt-1">{skill.blurb}</p>
                  </div>
                </div>
                <div className="text-portfolio-accent">
                  {openSkills[skill.title] ? "-" : "+"}
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 border-t border-border pt-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-portfolio-secondary">Overview</h4>
                    <p className="mt-1">{skill.overview}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-portfolio-secondary">Use Cases</h4>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      {skill.useCases.map((useCase, index) => (
                        <li key={index}>{useCase}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-portfolio-secondary">Related Projects</h4>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      {skill.projects.map((project, index) => (
                        <li key={index}>
                          <Link 
                            to={`/projects/${project.slug}`} 
                            className="text-portfolio-accent hover:underline"
                          >
                            {project.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-portfolio-secondary">Skills</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {skill.skills.map((skillItem, index) => (
                        <span key={index} className="px-3 py-1 bg-portfolio-accent/10 text-portfolio-accent rounded-full text-sm">
                          {skillItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
        
        <div className="mt-16">
          <SectionTitle title="Technical Proficiencies" />
          
          <div className="bg-card dark:bg-card rounded-lg shadow-md p-6 md:p-8 border border-border mt-8">
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
        
        <div className="mt-16">
          <SectionTitle title="Soft Skills" />
          
          <div className="bg-card dark:bg-card rounded-lg shadow-md p-6 md:p-8 border border-border mt-8">
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
      </div>
    </MainLayout>
  );
};

export default Skills;
