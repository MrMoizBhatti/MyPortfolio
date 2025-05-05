import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const NavLink = ({ href, label, active, onClick }) => {
  return (
    <Link
      href={href}
      className={`relative px-3 py-2 transition-colors duration-200 hover:text-blue-600 ${
        active ? 'text-blue-600 font-medium' : 'text-gray-700'
      }`}
      onClick={onClick}
    >
      {label}
      {active && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-200"></span>
      )}
    </Link>
  );
};

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#research', label: 'Research' },
    { href: '#projects', label: 'Projects' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#home" className="text-xl font-bold text-blue-600 flex items-center">
          AI<span className="text-gray-800">Researcher</span>
          <ChevronRight className="ml-1 h-5 w-5" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              active={activeSection === link.href.substring(1)}
            />
          ))}
          <Link 
            href="#resume" 
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md transition-colors duration-200 hover:bg-blue-700"
          >
            Resume
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-8">
            <Link href="#home" className="text-xl font-bold text-blue-600" onClick={closeMenu}>
              AI<span className="text-gray-800">Researcher</span>
            </Link>
            <button
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={activeSection === link.href.substring(1)}
                onClick={closeMenu}
              />
            ))}
            <Link 
              href="#resume" 
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md text-center"
              onClick={closeMenu}
            >
              Resume
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
