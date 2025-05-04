
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

  return (
    <MainLayout>
      <div className="page-container max-w-5xl">
        <SectionTitle 
          title="Contact Me" 
          subtitle="For opportunities and collaborations" 
          align="center"
        />
        
        <div className="mt-16 flex flex-col items-center">
          <div className="max-w-2xl w-full glass-card p-8 hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Send Me a Message</h3>
            <ContactForm />
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="flex items-start glass-card p-6 hover:shadow-lg transition-all">
              <div className="flex-shrink-0 mt-1">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium">Email</h4>
                <a 
                  href="mailto:27miks12@gmail.com" 
                  className="text-foreground hover:text-accent transition-colors"
                >
                  27miks12@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start glass-card p-6 hover:shadow-lg transition-all">
              <div className="flex-shrink-0 mt-1">
                <Linkedin className="h-6 w-6 text-accent" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium">LinkedIn</h4>
                <a 
                  href="https://linkedin.com/in/mikhail-govind" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  linkedin.com/in/mikhail-govind
                </a>
              </div>
            </div>
            
            <div className="flex items-start glass-card p-6 hover:shadow-lg transition-all">
              <div className="flex-shrink-0 mt-1">
                <Github className="h-6 w-6 text-accent" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium">GitHub</h4>
                <a 
                  href="https://github.com/MikhailGovind" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  github.com/MikhailGovind
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
