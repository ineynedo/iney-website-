import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export default function Textarea({ label, error, className = '', ...props }: TextareaProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-neutral-dark mb-2">
                    {label}
                </label>
            )}
            <textarea
                className={`
          w-full px-4 py-3 rounded-lg
          bg-white border-2 border-accent
          text-neutral-dark placeholder-accent-dark
          focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
          transition-smooth
          resize-none
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}
          ${className}
        `}
                rows={5}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    );
}
