import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps {
  onClick?: () => void;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
  text: string;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  type?: 'button' | 'submit';
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  loading = false,
  variant = 'primary',
  text,
  fullWidth = false,
  startIcon,
  type = 'button'
}) => {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 transform hover:scale-105 shadow-lg",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass}`}
    >
      {loading ? (
        <Loader2 className="h-5 w-5 animate-spin mr-2" />
      ) : startIcon ? (
        <span className="mr-2">{startIcon}</span>
      ) : null}
      {loading ? 'Loading...' : text}
    </button>
  );
};