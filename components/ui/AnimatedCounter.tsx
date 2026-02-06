'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

interface AnimatedCounterProps {
    value: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
}

export default function AnimatedCounter({
    value,
    duration = 2,
    suffix = '',
    prefix = ''
}: AnimatedCounterProps) {
    const ref = useRef<HTMLDivElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [displayValue, setDisplayValue] = useState('0');

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [motionValue, isInView, value]);

    useEffect(() => {
        springValue.on('change', (latest) => {
            setDisplayValue(Math.floor(latest).toLocaleString());
        });
    }, [springValue]);

    return (
        <div ref={ref} className="tabular-nums">
            {prefix}{displayValue}{suffix}
        </div>
    );
}
