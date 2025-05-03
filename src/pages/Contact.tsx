
import { useEffect } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
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
      <div className="page-container">
        <SectionTitle 
          title="Contact Me" 
          subtitle="Get in touch for opportunities, collaborations, or just to say hello" 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold text-portfolio-primary mb-6">Get In Touch</h3>
            <p className="mb-8 text-lg">
              I'm currently looking for new opportunities in game development, software development, 
              or creative writing. Whether you have a question, a project idea, or just want to connect, 
              I'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="h-6 w-6 text-portfolio-accent" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-portfolio-primary">Email</h4>
                  <a 
                    href="mailto:27miks12@gmail.com" 
                    className="text-foreground hover:text-portfolio-accent transition-colors"
                  >
                    27miks12@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="h-6 w-6 text-portfolio-accent" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-portfolio-primary">Phone</h4>
                  <p className="text-foreground">+27 615031240</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Linkedin className="h-6 w-6 text-portfolio-accent" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-portfolio-primary">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/mikhail-govind" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-portfolio-accent transition-colors"
                  >
                    linkedin.com/in/mikhail-govind
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Github className="h-6 w-6 text-portfolio-accent" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-portfolio-primary">GitHub</h4>
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
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-portfolio-primary mb-6">Location</h3>
              <p className="text-lg">
                Based in Johannesburg, South Africa. Available for remote opportunities worldwide.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-portfolio-primary mb-6">Send Me a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
