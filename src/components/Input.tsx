import React from 'react';

interface InputProps {
  reference: React.RefObject<HTMLInputElement>;
  placeholder: string;
  type?: string;
  label?: string;
}

export const Input: React.FC<InputProps> = ({
  reference,
  placeholder,
  type = "text",
  label
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        ref={reference}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
      />
    </div>
  );
};