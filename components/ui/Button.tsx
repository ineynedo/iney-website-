import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'accent';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    className?: string;
}

export default function Button({
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles = 'font-semibold rounded-lg transition-smooth cursor-pointer border-none';

    const variants = {
        primary: 'bg-primary text-neutral-light1 hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5',
        secondary: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-neutral-light1 hover:-translate-y-0.5',
        accent: 'bg-accent text-neutral-dark hover:bg-accent-dark hover:shadow-lg hover:-translate-y-0.5',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-8 py-3 text-base',
        lg: 'px-10 py-4 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
