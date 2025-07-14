import React from 'react';

export interface InputProps
  // grab all the normal <input> attributes except "ref"
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'ref'> {
  /** the ref to the actual <input> element */
  reference: React.Ref<HTMLInputElement>;
  /** optional label above the input */
  label?: string;
}

export const Input: React.FC<InputProps> = ({
  reference,
  label,
  ...inputProps
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
        {...inputProps}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl
                   focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                   outline-none transition-all duration-200
                   bg-gray-50 focus:bg-white"
      />
    </div>
  );
};
