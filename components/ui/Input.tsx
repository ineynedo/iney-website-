import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export default function Input({ label, error, className = '', ...props }: InputProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-neutral-dark mb-2">
                    {label}
                </label>
            )}
            <input
                className={`
          w-full px-4 py-3 rounded-lg
          bg-white border-2 border-accent
          text-neutral-dark placeholder-accent-dark
          focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
          transition-smooth
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}
          ${className}
        `}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    );
}
