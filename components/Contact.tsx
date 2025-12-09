import React, { useState } from 'react';
import { Button } from './ui/Button';
import { CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] pt-32 pb-20 flex items-center justify-center animate-fade-in px-6 bg-[#F0F2F5]">
        <div className="text-center max-w-md mx-auto p-12 bg-white shadow-xl shadow-[#111827]/5 rounded-3xl border border-[#E5E7EB]">
          <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} />
          </div>
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Request Received</h2>
          <p className="text-[#4A4A4A] mb-8">Thank you for your interest. We will review your project details and get back to you with a quote shortly.</p>
          <Button onClick={() => setSubmitted(false)} variant="outline">Send Another</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 w-full animate-slide-up bg-[#F0F2F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-bold text-[#1A1A1A] mb-6">Let's Digitize Your Space</h1>
            <p className="text-lg text-[#4A4A4A] mb-12">Fill out the form to get a custom quote. We usually respond within 24 hours.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-white shadow-sm border border-[#E5E7EB] rounded-2xl text-[#111827]">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A] text-lg">Call Us</h3>
                  <p className="text-[#4A4A4A]">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-4 bg-white shadow-sm border border-[#E5E7EB] rounded-2xl text-[#111827]">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A] text-lg">Email Us</h3>
                  <p className="text-[#4A4A4A]">hello@lumina360.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="p-4 bg-white shadow-sm border border-[#E5E7EB] rounded-2xl text-[#111827]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A] text-lg">Visit Us</h3>
                  <p className="text-[#4A4A4A]">101 Design District, Creative City</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-[#111827]/5 border border-[#E5E7EB]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-[#1A1A1A] mb-2">Full Name <span className="text-[#F9D342]">*</span></label>
                <input 
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl bg-[#F0F2F5] border-transparent focus:bg-white border focus:border-[#111827] focus:ring-1 focus:ring-[#111827] outline-none transition-all placeholder:text-gray-400"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#1A1A1A] mb-2">Mobile Number <span className="text-[#F9D342]">*</span></label>
                  <input 
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl bg-[#F0F2F5] border-transparent focus:bg-white border focus:border-[#111827] focus:ring-1 focus:ring-[#111827] outline-none transition-all placeholder:text-gray-400"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1A1A1A] mb-2">Email ID <span className="text-[#F9D342]">*</span></label>
                  <input 
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl bg-[#F0F2F5] border-transparent focus:bg-white border focus:border-[#111827] focus:ring-1 focus:ring-[#111827] outline-none transition-all placeholder:text-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1A1A1A] mb-2">Site / Project Location <span className="text-[#F9D342]">*</span></label>
                <input 
                  required
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl bg-[#F0F2F5] border-transparent focus:bg-white border focus:border-[#111827] focus:ring-1 focus:ring-[#111827] outline-none transition-all placeholder:text-gray-400"
                  placeholder="e.g. Downtown Metro Complex"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1A1A1A] mb-2">Message / Requirements</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-[#F0F2F5] border-transparent focus:bg-white border focus:border-[#111827] focus:ring-1 focus:ring-[#111827] outline-none transition-all resize-none placeholder:text-gray-400"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <Button type="submit" fullWidth size="lg" className="bg-[#111827] text-white hover:bg-black hover:shadow-xl hover:shadow-[#111827]/20">Submit & Get Quote</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};