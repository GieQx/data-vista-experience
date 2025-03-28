
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-stats-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center">
                <span className="text-stats-blue font-bold">NCS</span>
              </div>
              <span className="text-xl font-heading font-bold">NCS 2025</span>
            </div>
            <p className="text-sm mb-4">
              The National Convention on Statistics 2025 brings together statisticians, 
              data scientists, and policy makers to empower data-driven decision-making.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-stats-aqua transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-stats-aqua transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-stats-aqua transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-stats-aqua transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-stats-aqua transition-colors">
                  About the Event
                </Link>
              </li>
              <li>
                <Link to="/speakers" className="text-sm hover:text-stats-aqua transition-colors">
                  Keynote Speakers
                </Link>
              </li>
              <li>
                <Link to="/agenda" className="text-sm hover:text-stats-aqua transition-colors">
                  Event Schedule
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm hover:text-stats-aqua transition-colors">
                  Resources & Downloads
                </Link>
              </li>
              <li>
                <Link to="/networking" className="text-sm hover:text-stats-aqua transition-colors">
                  Networking Hub
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>National Statistics Office, Main Building, Capital City</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone size={18} className="flex-shrink-0" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail size={18} className="flex-shrink-0" />
                <span>info@ncs2025.org</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest updates about NCS 2025.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-stats-blue/50 border-stats-teal text-white placeholder:text-white/70" 
              />
              <Button className="bg-stats-aqua hover:bg-stats-green text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} National Convention on Statistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
