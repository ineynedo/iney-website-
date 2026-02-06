'use client';

import { motion } from 'framer-motion';

interface AnimatedTextProps {
    text: string;
    className?: string;
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
    return (
        <div className={`overflow-hidden whitespace-nowrap ${className}`}>
            <motion.div
                className="inline-block"
                animate={{
                    x: [0, -1000],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 20,
                        ease: 'linear',
                    },
                }}
            >
                {Array(10)
                    .fill(text)
                    .map((t, i) => (
                        <span key={i} className="mx-8">
                            {t}
                        </span>
                    ))}
            </motion.div>
        </div>
    );
}
