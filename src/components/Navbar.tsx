import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import logo from '@/assets/logo.png';
import { Link } from 'react-router-dom'; // Aggiungi questa importazione

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper function for smooth scrolling
  const scrollToSection = (sectionId: string) => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm py-4 px-6 fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="RealSync Logo" className="h-8 w-auto mr-2" />
          <a href="#" className="flex items-center">
            <span className="text-realsync-navy font-bold text-2xl">Real<span className="text-realsync-teal">Sync</span></span>
          </a>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className="text-realsync-darkgray hover:text-realsync-navy transition-colors duration-200"
            onClick={(e) => { e.preventDefault(); scrollToSection('#features'); }}
          >
            Features
          </a>
          <a 
            href="#solutions" 
            className="text-realsync-darkgray hover:text-realsync-navy transition-colors duration-200"
            onClick={(e) => { e.preventDefault(); scrollToSection('#solutions'); }}
          >
            Solutions
          </a>
          <a 
            href="#about" 
            className="text-realsync-darkgray hover:text-realsync-navy transition-colors duration-200"
            onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-realsync-darkgray hover:text-realsync-navy transition-colors duration-200"
            onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
          >
            Contact
          </a>
          <a 
            href="#presentation" 
            className="text-realsync-darkgray hover:text-realsync-navy transition-colors duration-200"
            onClick={(e) => { e.preventDefault(); scrollToSection('#presentation'); }}
          >
            Presentation
          </a>
          <Link 
            to="/docs"
            className="text-realsync-darkgray hover:text-realsync-navy transition-colors duration-200"          >
            Documentation
          </Link>

          <Button 
            className="bg-realsync-teal hover:bg-realsync-navy text-white"
            onClick={() => scrollToSection('#contact')}
          >
            Request Demo
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg rounded-b-lg border-t border-gray-100 animate-fade-in">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <a 
              href="#features" 
              className="text-realsync-darkgray hover:text-realsync-navy transition-colors duration-200 py-2"
              onClick={(e) => { e.preventDefault(); scrollToSection('#features'); }}
            >
              Features
            </a>
            <a 
              href="#solutions" 
              className="text-realsync-darkgray hover:text-realsync-navy transition-colors duration-200 py-2"
              onClick={(e) => { e.preventDefault(); scrollToSection('#solutions'); }}
            >
              Solutions
            </a>
            <a 
              href="#about" 
              className="text-realsync-darkgray hover:text-realsync-navy transition-colors duration-200 py-2"
              onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-realsync-darkgray hover:text-realsync-navy transition-colors duration-200 py-2"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
            >
              Contact
            </a>
            <Button 
              className="bg-realsync-teal hover:bg-realsync-navy text-white w-full"
              onClick={() => scrollToSection('#contact')}
            >
              Request Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;