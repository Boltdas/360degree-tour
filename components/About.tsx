import React from 'react';
import { TrendingUp, Globe, Eye, ScanEye } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 w-full animate-fade-in bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column */}
          <div>
             <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-8 leading-[1.15]">
               About Us — Bringing Real Spaces to Life With 360° Virtual Tours
             </h1>
             <p className="text-lg text-[#4A4A4A] mb-12 leading-relaxed">
               We help builders, designers, and real-estate brands showcase their spaces with immersive 360° virtual tours. Customers can explore rooms instantly from anywhere, giving them complete clarity and confidence before visiting in person.
             </p>
             
             <div className="space-y-10">
               {[
                 { 
                   title: 'Boost Sales for Builders', 
                   desc: 'Virtual tours attract more buyers and increase conversion rates.',
                   icon: TrendingUp 
                 },
                 { 
                   title: 'View Anytime, Anywhere', 
                   desc: 'Clients can explore rooms with one click from home.',
                   icon: Globe 
                 },
                 { 
                   title: 'True-to-Life Clarity', 
                   desc: 'Every detail is captured realistically for better decision-making.',
                   icon: Eye 
                 }
               ].map((item, idx) => (
                 <div key={idx} className="flex gap-5 group">
                   <div className="flex-shrink-0 w-12 h-12 bg-[#F9D342]/20 rounded-xl flex items-center justify-center text-[#111827] group-hover:bg-[#F9D342] transition-colors duration-300">
                     <item.icon size={24} className="text-[#111827]" />
                   </div>
                   <div>
                     <h3 className="font-bold text-[#1A1A1A] text-lg mb-2">{item.title}</h3>
                     <p className="text-[#4A4A4A] leading-relaxed">{item.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-slide-up">
             <div className="aspect-[4/3] w-full bg-[#F0F2F5] rounded-[2.5rem] shadow-2xl shadow-[#111827]/10 border border-[#E5E7EB] flex items-center justify-center overflow-hidden relative group">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                
                <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg shadow-[#111827]/5 group-hover:scale-110 transition-transform duration-500 z-10">
                   <ScanEye size={48} className="text-[#1A1A1A] stroke-1" />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/50 to-transparent"></div>
             </div>
             
             {/* Decorative blob behind */}
             <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#F9D342] rounded-full blur-[80px] opacity-20 -z-10"></div>
             <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#111827] rounded-full blur-[80px] opacity-5 -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};