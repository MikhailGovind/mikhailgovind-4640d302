
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1A1A1A] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mikhail Govind</h3>
            <p className="text-gray-300">
              Creating immersive digital worlds that engage, inspire and challenge.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://github.com/MikhailGovind" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-portfolio-highlight transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/mikhail-govind" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-portfolio-highlight transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:27miks12@gmail.com" 
                className="text-gray-300 hover:text-portfolio-highlight transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-portfolio-highlight transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-gray-300 hover:text-portfolio-highlight transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-300 hover:text-portfolio-highlight transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-portfolio-highlight transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-portfolio-highlight transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <Mail size={18} className="mr-2" />
                <a href="mailto:27miks12@gmail.com" className="hover:text-portfolio-highlight transition-colors">
                  27miks12@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <span>Johannesburg, South Africa</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Mikhail Govind. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
