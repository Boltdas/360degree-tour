import React, { useState, useEffect } from 'react';
import { Menu, X, Box } from 'lucide-react';
import { Page, NavItem } from '../types';

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#F0F2F5]/90 backdrop-blur-md shadow-sm border-b border-[#E5E7EB]' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-[#111827] rounded-xl flex items-center justify-center text-[#F9D342] transition-transform group-hover:scale-105 shadow-md shadow-[#111827]/10">
              <Box size={24} strokeWidth={2.5} />
            </div>
            <span className="font-bold text-xl tracking-tight text-[#1A1A1A]">Lumina 360</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activePage === item.id 
                    ? 'text-[#111827] font-bold' 
                    : 'text-[#4A4A4A] hover:text-[#111827]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-[#F9D342] text-[#111827] px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#ffe066] transition-all hover:shadow-lg hover:shadow-[#F9D342]/20 transform hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#4A4A4A] hover:text-[#111827]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F0F2F5] border-b border-[#E5E7EB] shadow-xl animate-fade-in">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-3 text-lg font-medium border-b border-gray-200 last:border-0 ${
                  activePage === item.id ? 'text-[#111827] pl-2 border-l-4 border-[#F9D342]' : 'text-[#4A4A4A] hover:text-[#111827] pl-2'
                }`}
              >
                {item.label}
              </button>
            ))}
             <button
                onClick={() => {
                  onNavigate('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-center py-4 mt-4 text-base font-bold bg-[#F9D342] text-[#111827] rounded-xl shadow-lg"
              >
                Get a Quote
              </button>
          </div>
        </div>
      )}
    </nav>
  );
};