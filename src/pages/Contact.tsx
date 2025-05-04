
import { useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactForm from "@/components/ui/ContactForm";

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return <MainLayout>
      {/* Moving background mesh */}
      <div className="moving-mesh"></div>
      
      <div className="page-container">
        <SectionTitle title="Contact Me" subtitle="For opportunities and collaborations" />
        
        <div className="max-w-5xl mx-auto mt-12">
          <div className="glass-card p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">Email</h4>
                      <a href="mailto:27miks12@gmail.com" className="text-foreground hover:text-accent transition-colors">
                        27miks12@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Linkedin className="h-6 w-6 text-accent" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">LinkedIn</h4>
                      <a href="https://linkedin.com/in/mikhail-govind" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">
                        linkedin.com/in/mikhail-govind
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Github className="h-6 w-6 text-accent" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">GitHub</h4>
                      <a href="https://github.com/MikhailGovind" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">
                        github.com/MikhailGovind
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-card rounded-lg border border-border">
                  <p>Based in Johannesburg, South Africa. Available for opportunities worldwide.</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Send Me a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>;
};

export default Contact;
