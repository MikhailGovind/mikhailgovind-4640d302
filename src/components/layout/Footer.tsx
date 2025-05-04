
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#222222] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Tagline */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">Mikhail Govind</h2>
              <p className="text-sm text-gray-300 max-w-xs">
                Crafting interactive worlds and digital experiences that captivate and inspire.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/experience" className="text-gray-300 hover:text-white transition-colors">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link to="/skills" className="text-gray-300 hover:text-white transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/MikhailGovind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github />
                </a>
                <a
                  href="https://linkedin.com/in/mikhail-govind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>
                <a
                  href="mailto:27miks12@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail />
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-center text-gray-400 text-sm">
              © {currentYear} Mikhail Govind. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
