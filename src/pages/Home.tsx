
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";

const Home = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Featured projects (show only the first 3)
  const featuredProjects = projects.slice(0, 3);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-portfolio-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight opacity-0 animate-fade-in">
                  Mikhail Govind
                </h1>
                <h2 className="mt-2 text-2xl sm:text-3xl font-medium text-portfolio-highlight opacity-0 animate-fade-in-delay-1">
                  Unity Developer & Game Designer
                </h2>
              </div>
              <p className="text-lg sm:text-xl leading-relaxed max-w-2xl opacity-0 animate-fade-in-delay-2">
                Honours graduate in Digital Arts, specializing in Game Design & Development with advanced Unity and C# expertise. Passionate about creating immersive gaming experiences and interactive systems.
              </p>
              <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-delay-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center px-6 py-3 bg-portfolio-highlight text-portfolio-primary font-medium rounded-md hover:bg-white transition-colors"
                >
                  View My Projects
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-transparent text-white font-medium rounded-md border-2 border-white hover:bg-white hover:text-portfolio-primary transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 opacity-0 animate-fade-in-delay-4">
              <div className="bg-portfolio-secondary p-1 rounded-lg shadow-xl">
                <img
                  src="/lovable-uploads/978496b2-8932-43b1-8a0f-94ad86e56d30.png"
                  alt="Mikhail Govind"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Featured Projects" 
            subtitle="Check out some of my recent game development work" 
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                github={project.github}
                slug={project.slug}
                date={project.date}
                role={project.role}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-portfolio-primary text-white font-medium rounded-md hover:bg-portfolio-secondary transition-colors"
            >
              View All Projects
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="About Me" 
                subtitle="Game developer with a passion for creating immersive experiences" 
              />
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  I'm a recent Honours graduate in Digital Arts from the University of the Witwatersrand, where I specialized in Game Design & Development and Creative Writing.
                </p>
                <p className="mb-4">
                  My passion lies in building immersive games and interactive systems that provide engaging experiences across platforms. I have expertise in Unity and C#, with experience in designing levels, implementing gameplay mechanics, and optimizing performance for smooth player experiences.
                </p>
                <p className="mb-6">
                  Currently, I work as a game design tutor at the University of the Witwatersrand, while actively seeking opportunities in game development, software development, or creative writing roles.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center font-medium text-portfolio-accent hover:text-portfolio-primary transition-colors"
                >
                  Learn more about me
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-portfolio-accent/10 absolute inset-0 rounded-xl -rotate-3 transform"></div>
              <div className="bg-white p-1 rounded-xl shadow-md relative z-10">
                <img
                  src="/lovable-uploads/bab2009c-c966-4d10-a82c-358af370a63e.png"
                  alt="About Mikhail Govind"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="My Experience" 
            subtitle="Where I've worked and what I've learned along the way" 
            align="center"
          />
          
          <div className="mt-12 bg-white rounded-xl shadow-md p-8 border border-border">
            <div className="space-y-8">
              {experiences.slice(0, 2).map((experience, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-32 flex-shrink-0">
                    <p className="text-sm text-muted-foreground">{experience.period}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-portfolio-primary">{experience.title}</h3>
                    <p className="text-portfolio-secondary">{experience.company}</p>
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      {experience.description.slice(0, 2).map((item, i) => (
                        <li key={i} className="text-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link
                to="/experience"
                className="inline-flex items-center font-medium text-portfolio-accent hover:text-portfolio-primary transition-colors"
              >
                View full experience
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-portfolio-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            I'm currently looking for new opportunities in game development, software development, or creative writing. Let's connect and create something amazing!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-portfolio-highlight text-portfolio-primary font-medium rounded-md hover:bg-white transition-colors"
          >
            Get In Touch
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
