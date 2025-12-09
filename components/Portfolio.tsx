import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PortfolioItem } from '../types';

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: 'Modern Loft', category: 'Residential', imageUrl: 'https://picsum.photos/800/600?random=1' },
  { id: 2, title: 'Tech Hub Office', category: 'Commercial', imageUrl: 'https://picsum.photos/800/600?random=2' },
  { id: 3, title: 'Luxury Villa', category: 'Residential', imageUrl: 'https://picsum.photos/800/600?random=3' },
  { id: 4, title: 'Art Gallery', category: 'Public Space', imageUrl: 'https://picsum.photos/800/600?random=4' },
  { id: 5, title: 'Boutique Hotel', category: 'Hospitality', imageUrl: 'https://picsum.photos/800/600?random=5' },
  { id: 6, title: 'Industrial Showroom', category: 'Commercial', imageUrl: 'https://picsum.photos/800/600?random=6' },
];

export const Portfolio: React.FC = () => {
  return (
    <div className="pt-32 pb-20 w-full animate-fade-in bg-[#F0F2F5]">
       <div className="max-w-7xl mx-auto px-6 lg:px-8">
         <div className="mb-16">
           <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">Selected Works</h1>
           <p className="text-lg text-[#4A4A4A] max-w-2xl">Explore our collection of immersive virtual experiences created for industry-leading clients.</p>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group cursor-pointer bg-white p-4 rounded-3xl shadow-sm border border-[#E5E7EB] hover:shadow-xl hover:shadow-[#111827]/10 transition-all duration-300">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 bg-[#F0F2F5]">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#111827]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-[#F9D342] text-[#111827] px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 font-bold shadow-lg">
                      <span className="font-medium">View Tour</span>
                      <ExternalLink size={16} />
                    </div>
                  </div>
                </div>
                <div className="px-2 pb-2">
                   <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#F9D342] transition-colors">{item.title}</h3>
                   <p className="text-[#4A4A4A] text-sm mt-1">{item.category}</p>
                </div>
              </div>
            ))}
         </div>
       </div>
    </div>
  );
};