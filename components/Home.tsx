import React, { useRef } from 'react';
import { Button } from './ui/Button';
import { 
  Play, 
  Building2, 
  Ruler, 
  Briefcase, 
  Home as HomeIcon, 
  CheckCircle2, 
  ArrowRight, 
  Eye, 
  MousePointer2,
  TrendingUp,
  Zap,
  Clock,
  PenTool
} from 'lucide-react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const demoRef = useRef<HTMLElement>(null);

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION (Light Blue #E6F3FF) */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-20 overflow-hidden bg-[#E6F3FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Centered Hero Content */}
          <div className="text-center max-w-4xl mx-auto mb-16 animate-slide-up relative z-10">
            <h1 className="text-5xl lg:text-7xl font-bold text-[#1A1A1A] tracking-tight leading-[1.1] mb-8">
              Bring Your Spaces to Life with <span className="relative inline-block">360° Tours
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#F9D342]/30 -z-10 rounded-sm"></span>
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-[#4A4A4A] leading-relaxed mb-10 max-w-2xl mx-auto">
              Immersive, high-definition walkthroughs that let your customers explore properties from anywhere in the world.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button onClick={scrollToDemo} variant="outline" size="lg" className="group border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white">
                <Play size={18} className="mr-2 fill-current" /> Watch Demo
              </Button>
              <Button onClick={() => onNavigate('contact')} size="lg" className="bg-[#F9D342] text-[#111827] hover:bg-[#ffde59]">
                Get a Quote
              </Button>
            </div>
          </div>

          {/* Trust Bar */}
          <div className="border-t border-[#111827]/10 pt-10 mt-4 animate-fade-in delay-300">
            <p className="text-sm font-semibold text-gray-500 mb-6 text-center uppercase tracking-wider">Trusted by developers, architects, builders, designers</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-2 group">
                 <Building2 className="text-[#111827]" size={24} />
                 <span className="font-medium text-[#1A1A1A]">Developers</span>
              </div>
              <div className="flex items-center gap-2 group">
                 <Ruler className="text-[#111827]" size={24} />
                 <span className="font-medium text-[#1A1A1A]">Architects</span>
              </div>
              <div className="flex items-center gap-2 group">
                 <Briefcase className="text-[#111827]" size={24} />
                 <span className="font-medium text-[#1A1A1A]">Builders</span>
              </div>
              <div className="flex items-center gap-2 group">
                 <PenTool className="text-[#111827]" size={24} />
                 <span className="font-medium text-[#1A1A1A]">Designers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KPI SECTION (Light/White #FFFFFF) */}
      <section className="py-16 bg-white border-y border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {/* KPI 1 */}
              <div className="flex items-center justify-center gap-5 p-4 group">
                 <div className="w-16 h-16 rounded-2xl bg-[#F0F2F5] flex items-center justify-center text-[#F9D342] group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp size={32} />
                 </div>
                 <div>
                    <span className="block text-4xl font-bold text-[#111827] mb-1">50%+</span>
                    <span className="text-gray-500 font-medium">Higher Engagement</span>
                 </div>
              </div>
              {/* KPI 2 */}
              <div className="flex items-center justify-center gap-5 p-4 group">
                 <div className="w-16 h-16 rounded-2xl bg-[#F0F2F5] flex items-center justify-center text-[#F9D342] group-hover:scale-110 transition-transform duration-300">
                    <Zap size={32} fill="currentColor" />
                 </div>
                 <div>
                    <span className="block text-4xl font-bold text-[#111827] mb-1">3x</span>
                    <span className="text-gray-500 font-medium">Faster Conversions</span>
                 </div>
              </div>
              {/* KPI 3 */}
              <div className="flex items-center justify-center gap-5 p-4 group">
                 <div className="w-16 h-16 rounded-2xl bg-[#F0F2F5] flex items-center justify-center text-[#F9D342] group-hover:scale-110 transition-transform duration-300">
                    <Clock size={32} />
                 </div>
                 <div>
                    <span className="block text-4xl font-bold text-[#111827] mb-1">24h</span>
                    <span className="text-gray-500 font-medium">Fast Turnaround</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. DEMO / EXPERIENCE SECTION (Dark #111827) */}
      <section ref={demoRef} className="py-24 bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-16">
             <div className="max-w-2xl">
                <h2 className="text-sm font-bold text-[#F9D342] tracking-widest uppercase mb-3">Experience The Quality</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Every Detail Matters.</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Our high-resolution rendering ensures every texture, light reflection, and architectural detail is crisp and realistic. 
                  Don't just show a space—let them feel it.
                </p>
             </div>
             <div className="flex gap-4 text-[#F9D342]">
                <Building2 size={32} strokeWidth={1.5} />
                <Eye size={32} strokeWidth={1.5} />
                <MousePointer2 size={32} strokeWidth={1.5} />
             </div>
          </div>
          
          <div className="relative aspect-video w-full bg-slate-800 rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-slate-700/50">
            <video 
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
            >
              <source src="https://drive.google.com/uc?export=download&id=1vQNxN1PF0ZE_PJd288MdnO3iP3VhLl1w" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* 4. BENEFITS SECTION (Light #F0F2F5) */}
      <section className="py-24 bg-[#F0F2F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Why Choose Virtual Tours?</h2>
            <p className="text-[#4A4A4A]">Stay ahead of the curve with immersive technology.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Increase Engagement', desc: 'Keep visitors on your site longer with interactive content that captivates and converts.' },
              { title: 'Save Time & Cost', desc: 'Pre-qualify buyers and reduce unnecessary physical site visits for both you and your clients.' },
              { title: 'Global Accessibility', desc: 'Showcase your property to potential clients anywhere, anytime, on any device without friction.' }
            ].map((benefit, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white shadow-sm border border-[#E5E7EB] hover:shadow-xl hover:shadow-[#111827]/5 hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-[#F0F2F5] rounded-2xl flex items-center justify-center text-[#111827] mb-6">
                  <CheckCircle2 size={28} className="text-[#111827]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{benefit.title}</h3>
                <p className="text-[#4A4A4A] leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE (Dark #111827) */}
      <section className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-wider text-[#F9D342] uppercase mb-3">Industries We Serve</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Tailored for Professionals</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: Building2, label: 'Developers' },
              { icon: Ruler, label: 'Architects' },
              { icon: HomeIcon, label: 'Designers' },
              { icon: Briefcase, label: 'Builders' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-6 group cursor-default p-6 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center text-white group-hover:text-[#F9D342] group-hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/10">
                  <item.icon size={36} strokeWidth={1.5} />
                </div>
                <span className="font-bold text-lg text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION (Light #F0F2F5) */}
      <section className="py-28 bg-[#F0F2F5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl shadow-[#111827]/5 border border-[#E5E7EB] relative overflow-hidden">
             {/* Decorative blob */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#F9D342] rounded-full blur-[100px] opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
             
             <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6 relative z-10">Ready to digitize your space?</h2>
             <p className="text-lg text-[#4A4A4A] mb-10 max-w-2xl mx-auto relative z-10">Get a high-quality virtual tour delivered within days. Elevate your portfolio today.</p>
             <Button size="lg" onClick={() => onNavigate('contact')} className="relative z-10 shadow-xl shadow-[#F9D342]/30">
               Get Started Now <ArrowRight size={18} className="ml-2" />
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
};