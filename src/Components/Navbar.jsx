import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Categories', href: '#categories' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Rewards', href: '#certificateSection' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          Eagle <span className="text-pink-400">Web</span>
        </div>

       
        <ul className="hidden md:flex space-x-6 text-sm">
          {navItems.map(({ name, href }) => (
            <li key={name}>
              <a href={href} className="hover:text-pink-400 transition">
                {name}
              </a>
            </li>
          ))}
        </ul>

      
        <div className="hidden md:flex items-center gap-4">
          <Link to="/apply">
            <button className="bg-pink-400 text-black px-4 py-2 rounded-full text-sm hover:bg-white transition">
              Apply Now
            </button>
          </Link>
          <Link to="/contact">
            <button className="border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </Link>
        </div>

      
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

    
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <ul className="flex flex-col space-y-2 text-sm">
            {navItems.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="block px-4 py-2 hover:bg-pink-500 rounded transition"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2 px-4 pt-4">
            <Link to="/apply">
              <button className="bg-pink-400 text-black px-4 py-2 rounded-full text-sm w-full hover:bg-white transition">
                Apply Now
              </button>
            </Link>
            <Link to="/contact">
              <button className="border border-white px-4 py-2 rounded-full text-sm w-full hover:bg-white hover:text-black transition">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


