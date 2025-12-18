
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'black';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-[#d4ff3f] text-black hover:bg-[#c5f030] shadow-sm",
    secondary: "bg-white text-slate-900 hover:bg-slate-50 border border-slate-200",
    outline: "bg-transparent border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900",
    black: "bg-slate-900 text-white hover:bg-slate-800"
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
    xl: "px-10 py-4 text-xl font-bold"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
