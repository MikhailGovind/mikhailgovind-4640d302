
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import { education } from "@/data/experience";
import ExperienceTimeline from "@/components/ui/ExperienceTimeline";

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className="page-container">
        <SectionTitle 
          title="About Me" 
          subtitle="Learn more about my background, interests, and career goals" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-portfolio-primary">Who I Am</h3>
              <p>
                I'm Mikhail Govind, a recent Honours graduate in Digital Arts from the University of the Witwatersrand. 
                My academic journey has been focused on Game Design & Development and Creative Writing, where I've 
                developed a deep passion for creating immersive interactive experiences.
              </p>
              
              <p>
                With a strong foundation in Unity development and C# programming, I've built several games ranging from 
                narrative-driven adventures to procedurally generated worlds. I enjoy the challenge of balancing technical 
                implementation with creative design to create meaningful player experiences.
              </p>
              
              <p>
                Currently, I'm working as a game design tutor at my alma mater, where I help first-year students develop their 
                skills and understanding of fundamental game design concepts. This role has helped me strengthen my ability to 
                communicate complex ideas and provide constructive feedback in a collaborative environment.
              </p>
              
              <h3 className="text-2xl font-bold text-portfolio-primary mt-8">My Approach</h3>
              <p>
                I believe in user-centered design, focusing on creating experiences that are not only technically sound but also 
                engaging and accessible. My approach combines technical expertise with creative problem-solving to develop games 
                that tell compelling stories and provide rewarding gameplay.
              </p>
              
              <p>
                Through my academic projects, I've gained experience in various aspects of game development, including level design, 
                procedural generation, narrative design, and optimization. I'm particularly interested in how games can be used as 
                a medium for storytelling and how different mechanics can support narrative themes.
              </p>
              
              <h3 className="text-2xl font-bold text-portfolio-primary mt-8">Career Goals</h3>
              <p>
                I'm actively seeking opportunities in game development, software development, or creative writing roles. My goal 
                is to join a team where I can contribute my skills and continue to grow as a developer. I'm particularly interested 
                in roles that allow me to combine my technical abilities with my creative background.
              </p>
              
              <p>
                Long-term, I aspire to lead game development projects that push the boundaries of interactive storytelling and create 
                meaningful experiences for players. I'm committed to continuous learning and staying current with industry trends and 
                technologies.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/projects"
                  className="inline-flex items-center px-6 py-3 bg-portfolio-primary text-white font-medium rounded-md hover:bg-portfolio-secondary transition-colors"
                >
                  View My Projects
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-transparent text-portfolio-primary font-medium rounded-md border-2 border-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 border border-border sticky top-24">
              <div className="mb-6 flex justify-center">
                <img
                  src="/lovable-uploads/e3b7b307-b409-418f-b6c1-25f3a92b764f.png"
                  alt="Mikhail Govind"
                  className="rounded-full w-32 h-32 object-cover border-4 border-portfolio-accent"
                />
              </div>
              
              <h3 className="text-xl font-bold text-center text-portfolio-primary mb-4">Mikhail Govind</h3>
              <p className="text-center text-portfolio-secondary mb-6">Unity Developer & Game Designer</p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail size={20} className="text-portfolio-accent" />
                  <a href="mailto:27miks12@gmail.com" className="text-foreground hover:text-portfolio-accent transition-colors">
                    27miks12@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Linkedin size={20} className="text-portfolio-accent" />
                  <a 
                    href="https://linkedin.com/in/mikhail-govind" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-portfolio-accent transition-colors"
                  >
                    linkedin.com/in/mikhail-govind
                  </a>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Github size={20} className="text-portfolio-accent" />
                  <a 
                    href="https://github.com/MikhailGovind" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-portfolio-accent transition-colors"
                  >
                    github.com/MikhailGovind
                  </a>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center w-full px-4 py-2 bg-portfolio-accent text-white font-medium rounded-md hover:bg-portfolio-secondary transition-colors"
                >
                  <Download size={18} className="mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Education */}
        <div className="mt-16">
          <SectionTitle title="Education" />
          <div className="bg-white rounded-lg shadow-md p-8 border border-border mt-6">
            <ExperienceTimeline items={education} />
          </div>
        </div>
        
        {/* Interests */}
        <div className="mt-16">
          <SectionTitle title="Personal Interests" />
          <div className="bg-white rounded-lg shadow-md p-8 border border-border mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-portfolio-primary mb-4">Game Development</h3>
                <p>
                  Beyond my academic work, I'm passionate about exploring different game genres and mechanics. I enjoy
                  analyzing how successful games create engaging experiences and apply these insights to my own projects.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-portfolio-primary mb-4">Creative Writing</h3>
                <p>
                  I have a strong interest in narrative design and storytelling. I enjoy writing short stories and creating
                  narrative frameworks that can be integrated into interactive experiences.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-portfolio-primary mb-4">Digital Art</h3>
                <p>
                  I have experience in digital art and enjoy creating visual assets for my games. I'm interested in how
                  art direction can enhance gameplay and storytelling in interactive media.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-portfolio-primary mb-4">Emerging Technologies</h3>
                <p>
                  I'm fascinated by emerging technologies in game development, such as procedural generation and AI-driven
                  gameplay systems. I'm constantly exploring new tools and techniques to enhance my development process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
