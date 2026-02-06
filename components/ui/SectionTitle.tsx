import { ReactNode } from 'react';

interface SectionTitleProps {
    children: ReactNode;
    subtitle?: string;
}

export default function SectionTitle({ children, subtitle }: SectionTitleProps) {
    return (
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {children}
            </h2>
            {subtitle && (
                <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div className="w-24 h-1 bg-white/20 mx-auto mt-6"></div>
        </div>
    );
}
