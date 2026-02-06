'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { useParams } from 'next/navigation';

interface ServiceCardProps {
    title: string;
    description: string;
    expertise: string[];
    slug: string;
    icon: React.ComponentType;
    index: number;
}

export default function ServiceCard({ title, description, expertise, slug, icon: IconComponent, index }: ServiceCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const params = useParams();
    const locale = params?.locale || 'fr';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-[400px] perspective-1000"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <Link href={`/${locale}/services/${slug}`}>
                <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                    {/* Front Face */}
                    <div className="absolute inset-0 backface-hidden">
                        <div className="h-full flex flex-col items-center justify-center text-center p-8 glass glass-hover rounded-xl group cursor-pointer">
                            <div className="w-20 h-20 mb-6 text-white group-hover:scale-110 transition-transform">
                                <IconComponent />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">
                                {title}
                            </h3>
                            <p className="text-white/70 leading-relaxed">
                                {description}
                            </p>
                        </div>
                    </div>

                    {/* Back Face */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180">
                        <div className="h-full flex flex-col justify-center p-8 glass-active rounded-xl cursor-pointer">
                            <h3 className="text-xl font-bold text-white mb-4 text-center">
                                Notre Expertise
                            </h3>
                            <ul className="space-y-3">
                                {expertise.map((item, i) => (
                                    <li key={i} className="flex items-start text-white/90">
                                        <span className="text-white mr-2">✓</span>
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 text-center">
                                <span className="text-white/60 text-sm">Cliquez pour en savoir plus →</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
