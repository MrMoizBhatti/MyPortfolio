import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              AI<span className="text-blue-400">Researcher</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Exploring the frontiers of artificial intelligence through
              research, innovation, and practical applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#research" className="text-gray-300 hover:text-blue-400 transition-colors">Research</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">Department of Computer Science</p>
            <p className="text-gray-300 mb-2">University of Technology</p>
            <p className="text-gray-300 mb-2">1234 Research Avenue</p>
            <p className="text-gray-300 mb-2">contact@example.com</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} AI Researcher. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;