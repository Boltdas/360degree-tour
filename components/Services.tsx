import React from 'react';
import { Home, Sofa, Store, Building2, Palette, Camera } from 'lucide-react';

const services = [
  {
    title: '360° Property Virtual Tours',
    description: 'Give clients a true-to-life walkthrough of rooms, flats, and properties with immersive 360° visuals.',
    icon: Home
  },
  {
    title: 'Interior & Architectural',
    description: 'Showcase lighting, textures, layout, and design with high-quality interior virtual tours.',
    icon: Sofa
  },
  {
    title: 'Sample Flat & Showroom',
    description: 'Digitize sample flats and showrooms to let customers explore without traveling onsite.',
    icon: Store
  },
  {
    title: 'Commercial Space Tours',
    description: 'Provide complete virtual tours for offices, co-working spaces, gyms, retail stores, and more.',
    icon: Building2
  },
  {
    title: 'Branding Integration',
    description: 'Add logos, brand colors, navigation hotspots, guided tours, and custom-designed UI elements.',
    icon: Palette
  },
  {
    title: 'High-Quality Photography',
    description: 'Professional 360° photography, stitching, and editing for crystal-clear, premium visuals.',
    icon: Camera
  }
];

export const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 w-full animate-fade-in bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 tracking-tight">Our Services</h1>
          <p className="text-lg text-[#4A4A4A] leading-relaxed">
            We deliver end-to-end virtual tour solutions tailored to your needs. From capture to customization, we bring your vision to reality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F9D342]/10 to-transparent rounded-bl-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon */}
              <div className="w-16 h-16 bg-[#F9D342]/10 rounded-2xl flex items-center justify-center text-[#111827] mb-6 group-hover:bg-[#F9D342] transition-colors duration-300">
                <service.icon size={28} strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#111827] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#4A4A4A] leading-relaxed text-[0.95rem]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Decoration */}
        <div className="mt-24 text-center">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F0F2F5] rounded-full text-sm font-semibold text-[#111827]">
              <span className="w-2 h-2 rounded-full bg-[#F9D342]"></span>
              Need a custom solution?
           </div>
        </div>
      </div>
    </div>
  );
};