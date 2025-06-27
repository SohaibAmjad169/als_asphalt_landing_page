"use client";
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'default';
  className?: string;
  onClick?: () => void;
  scrollTo?: string; // ID of element to scroll to
}

const Button = ({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'default',
  className = '',
  onClick,
  scrollTo
}: ButtonProps) => {
  // Base classes for all buttons
  const baseClasses = "inline-flex items-center justify-center rounded-4xl font-medium transition-all duration-300";
  
  // Size-specific classes
  const sizeClasses = {
    sm: "px-6 py-2 text-sm",
    default: "px-8 py-3.5",
    md: "px-10 py-4",
    lg: "px-12 py-5 text-lg"
  };
  
  // Variant-specific classes
  const variantClasses = {
    primary: "bg-primary text-dark hover:bg-yellow-300",
    outline: "border border-dark text-dark hover:bg-gray-100",
    dark: "bg-dark text-white hover:bg-opacity-90"
  };
  
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const handleScroll = () => {
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    if (onClick) {
      onClick();
    }
  };
  
  if (scrollTo) {
    return (
      <button className={buttonClasses} onClick={handleScroll}>
        {children}
      </button>
    );
  }
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button; 