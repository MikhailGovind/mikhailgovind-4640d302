import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight, Code, Sparkles, Layers, Rocket, User, Briefcase, Mail } from "lucide-react";
import { projects } from "@/data/projects";
import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import ContactForm from "@/components/ui/ContactForm";
const Home = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Featured projects (show only the first 3)
  const featuredProjects = projects.slice(0, 3);
  return <MainLayout>
      {/* Hero Section */}
      <section className="py-20 animated-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-2xl text-accent opacity-0 animate-fade-in font-semibold sm:text-4xl">
                Game Designer & Developer
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed max-w-2xl opacity-0 animate-fade-in-delay-1">Passionate about creating immersive experiences and interactive systems.</p>
              <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-delay-2">
                <Link to="/projects" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30">
                  View My Projects
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-transparent text-foreground font-medium rounded-lg border-2 border-border hover:border-accent hover:text-accent transition-all">
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 opacity-0 animate-fade-in-delay-3">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl blur opacity-30 animate-pulse-slow"></div>
                <div className="relative bg-card rounded-2xl p-6 shadow-xl">
                  {/* Mock game image with animations */}
                  <img alt="Game Screenshot" className="w-full h-auto rounded-lg shadow-md animate-float mb-4" src="" />
                  <div className="flex justify-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-portfolio-accent animate-pulse-slow"></div>
                      <div className="w-3 h-3 rounded-full bg-portfolio-secondary animate-pulse-slow delay-100"></div>
                      <div className="w-3 h-3 rounded-full bg-portfolio-highlight animate-pulse-slow delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="About Me" subtitle="Learn more about my background and philosophy" align="center" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="glass-card p-6 hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <div className="feature-icon mr-4">
                  <User size={24} />
                </div>
                <h3 className="text-xl font-bold">Background</h3>
              </div>
              <p className="text-muted-foreground">
                I'm a Digital Arts graduate from the University of the Witwatersrand, specializing in Game Design & Development and Creative Writing. With expertise in Unity and C#, I build immersive games and interactive systems that engage players across platforms.
              </p>
            </div>
            
            <div className="glass-card p-6 hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <div className="feature-icon mr-4">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-xl font-bold">Philosophy</h3>
              </div>
              <p className="text-muted-foreground">
                I believe in user-centered design that balances technical excellence with creative innovation. My approach combines robust programming with compelling storytelling to create meaningful player experiences that resonate on multiple levels.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/experience" className="inline-flex items-center text-accent hover:text-accent/80 font-medium">
              Learn more about my experience
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Highlight Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Core Skills" subtitle="Technical expertise and creative capabilities" align="center" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="glass-card p-6 hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <div className="feature-icon mr-4 animate-spin-slow">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-bold">Development</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-secondary">•</span>
                  <span>Unity & C# Programming</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-secondary">•</span>
                  <span>Game Optimization</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-secondary">•</span>
                  <span>UI/UX Development</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-6 hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <div className="feature-icon mr-4 animate-pulse-slow">
                  <Layers size={24} />
                </div>
                <h3 className="text-xl font-bold">Design</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-secondary">•</span>
                  <span>Game Mechanics Design</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-secondary">•</span>
                  <span>Level Design</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-secondary">•</span>
                  <span>Narrative Design</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-6 hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <div className="feature-icon mr-4 animate-float">
                  <Rocket size={24} />
                </div>
                <h3 className="text-xl font-bold">Creative</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-secondary">•</span>
                  <span>Storytelling</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-secondary">•</span>
                  <span>Digital Art</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-secondary">•</span>
                  <span>Audio Integration</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/skills" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30">
              View All Skills
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects with Animation */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Featured Projects" subtitle="Check out some of my recent game development work" align="center" />
          
          <div className="relative">
            {/* Decorative animated elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-portfolio-accent to-portfolio-secondary rounded-full blur-2xl opacity-20 animate-pulse-slow pointer-events-none"></div>
            <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-gradient-to-r from-portfolio-primary to-portfolio-highlight rounded-full blur-xl opacity-20 animate-float pointer-events-none"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredProjects.map((project, index) => <ProjectCard key={project.id} title={project.title} description={project.description} image={project.image} tags={project.tags} github={project.github} slug={project.slug} date={project.date} role={project.role} className={`opacity-0 animate-fade-in-delay-${index + 1}`} />)}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/projects" className="inline-flex items-center px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-all shadow-lg hover:shadow-secondary/30">
              View All Projects
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact Section with Animation */}
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Get In Touch" subtitle="Let's connect and create something amazing together" align="center" />
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="glass-card p-6 animate-float">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Ready to collaborate?</h3>
                <p className="text-muted-foreground mb-6">
                  I'm currently looking for new opportunities in game development, 
                  software development, or creative writing. Whether you have a question, 
                  a project idea, or just want to connect, I'd love to hear from you.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="feature-icon mr-4">
                      <Mail size={20} />
                    </div>
                    <a href="mailto:27miks12@gmail.com" className="text-foreground hover:text-accent transition-colors">
                      27miks12@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="feature-icon mr-4">
                      <Briefcase size={20} />
                    </div>
                    <span>Based in Johannesburg, South Africa</span>
                  </div>
                  <p>Available for remote opportunities worldwide</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>;
};
export default Home;