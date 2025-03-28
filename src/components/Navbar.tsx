
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-md gradient-bg flex items-center justify-center">
                <span className="text-white font-bold">NCS</span>
              </div>
              <span className="text-xl font-heading font-bold">NCS 2025</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium hover:text-stats-blue transition-colors ${isActive('/') ? 'text-stats-blue' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`font-medium hover:text-stats-blue transition-colors ${isActive('/about') ? 'text-stats-blue' : ''}`}>
              About
            </Link>
            <Link to="/speakers" className={`font-medium hover:text-stats-blue transition-colors ${isActive('/speakers') ? 'text-stats-blue' : ''}`}>
              Speakers
            </Link>
            <Link to="/agenda" className={`font-medium hover:text-stats-blue transition-colors ${isActive('/agenda') ? 'text-stats-blue' : ''}`}>
              Agenda
            </Link>
            <Link to="/resources" className={`font-medium hover:text-stats-blue transition-colors ${isActive('/resources') ? 'text-stats-blue' : ''}`}>
              Resources
            </Link>
            <Link to="/networking" className={`font-medium hover:text-stats-blue transition-colors ${isActive('/networking') ? 'text-stats-blue' : ''}`}>
              Networking
            </Link>
            <Link to="/register">
              <Button className="bg-stats-red text-white hover:bg-stats-orange">
                Register Now
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`px-4 py-2 font-medium hover:bg-stats-light rounded-md ${isActive('/') ? 'bg-stats-light text-stats-blue' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`px-4 py-2 font-medium hover:bg-stats-light rounded-md ${isActive('/about') ? 'bg-stats-light text-stats-blue' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/speakers" 
                className={`px-4 py-2 font-medium hover:bg-stats-light rounded-md ${isActive('/speakers') ? 'bg-stats-light text-stats-blue' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Speakers
              </Link>
              <Link 
                to="/agenda" 
                className={`px-4 py-2 font-medium hover:bg-stats-light rounded-md ${isActive('/agenda') ? 'bg-stats-light text-stats-blue' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Agenda
              </Link>
              <Link 
                to="/resources" 
                className={`px-4 py-2 font-medium hover:bg-stats-light rounded-md ${isActive('/resources') ? 'bg-stats-light text-stats-blue' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                to="/networking" 
                className={`px-4 py-2 font-medium hover:bg-stats-light rounded-md ${isActive('/networking') ? 'bg-stats-light text-stats-blue' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Networking
              </Link>
              <Link 
                to="/register" 
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="bg-stats-red text-white hover:bg-stats-orange w-full">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
