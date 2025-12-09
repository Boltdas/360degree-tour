import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 ease-out rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    // Primary: CTA accent color #F9D342 with Dark text #111827
    primary: "bg-[#F9D342] text-[#111827] hover:bg-[#ffe066] hover:shadow-lg hover:shadow-[#F9D342]/20 focus:ring-[#F9D342]",
    // Secondary: Used for dark backgrounds mostly, or light generic
    secondary: "bg-white text-[#111827] hover:bg-gray-100 focus:ring-gray-300",
    // Outline: Dark navy border for light backgrounds
    outline: "border-2 border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white bg-transparent focus:ring-[#111827]"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};