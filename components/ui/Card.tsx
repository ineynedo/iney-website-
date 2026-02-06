import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    glass?: boolean;
}

export default function Card({
    children,
    className = '',
    hover = true,
    glass = false
}: CardProps) {
    const baseStyles = 'rounded-xl p-6';
    const hoverStyles = hover ? 'card-hover' : '';
    const glassStyles = glass ? 'glass-effect' : 'bg-white shadow-md';

    return (
        <div className={`${baseStyles} ${hoverStyles} ${glassStyles} ${className}`}>
            {children}
        </div>
    );
}
