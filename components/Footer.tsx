import React from 'react';
import { Box, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#111827] border-t border-gray-800 pt-16 pb-8 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-10 h-10 bg-[#F9D342] rounded-xl flex items-center justify-center text-[#111827]">
                  <Box size={24} strokeWidth={2.5} />
               </div>
               <span className="font-bold text-xl tracking-tight text-white">Lumina 360</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Providing premium 360° virtual tour solutions for modern spaces. Experience reality, virtually.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-[#F9D342] transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><button onClick={() => onNavigate('home')} className="hover:text-[#F9D342] transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-[#F9D342] transition-colors">Services</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-[#F9D342] transition-colors">About</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-[#F9D342] transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-white mb-6">Legal</h4>
             <ul className="space-y-3 text-sm text-gray-400">
               <li><a href="#" className="hover:text-[#F9D342] transition-colors">Privacy Policy</a></li>
               <li><a href="#" className="hover:text-[#F9D342] transition-colors">Terms of Service</a></li>
               <li><a href="#" className="hover:text-[#F9D342] transition-colors">Cookie Policy</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold text-white mb-6">Contact</h4>
             <ul className="space-y-3 text-sm text-gray-400">
               <li>hello@lumina360.com</li>
               <li>+1 (555) 123-4567</li>
               <li>101 Design District, Creative City</li>
             </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Lumina 360. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
             <span>Designed with precision.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};