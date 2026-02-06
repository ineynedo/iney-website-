'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: 'Sarah El Amrani',
            company: 'TechStart Morocco',
            role: 'CEO',
            content: 'INEY a transformé notre vision en une plateforme digitale exceptionnelle. Leur expertise et leur professionnalisme sont remarquables.',
            rating: 5,
            image: 'https://i.pravatar.cc/150?img=1',
        },
        {
            id: 2,
            name: 'Mehdi Benjelloun',
            company: 'Fashion Boutique',
            role: 'Fondateur',
            content: 'Une équipe créative et réactive qui a su comprendre nos besoins. Notre site e-commerce dépasse toutes nos attentes !',
            rating: 5,
            image: 'https://i.pravatar.cc/150?img=2',
        },
        {
            id: 3,
            name: 'Leila Mansouri',
            company: 'Wellness Center',
            role: 'Directrice Marketing',
            content: 'Grâce à INEY, notre présence digitale a explosé. Leur stratégie marketing a doublé notre clientèle en 6 mois.',
            rating: 5,
            image: 'https://i.pravatar.cc/150?img=3',
        },
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section id="temoignages" className="relative py-24 px-6">
            <div className="max-w-5xl mx-auto">
                <SectionTitle
                    subtitle="Ce que nos clients disent de nous"
                >
                    Témoignages
                </SectionTitle>

                <div className="relative mt-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTestimonial.id}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            {/* Stars */}
                            <div className="flex justify-center gap-2 mb-6">
                                {[...Array(currentTestimonial.rating)].map((_, i) => (
                                    <span key={i} className="text-3xl text-yellow-400">⭐</span>
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="text-2xl md:text-3xl font-light mb-12 leading-relaxed text-white">
                                "{currentTestimonial.content}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center justify-center gap-4">
                                <img
                                    src={currentTestimonial.image}
                                    alt={currentTestimonial.name}
                                    className="w-16 h-16 rounded-full border-4 border-white/10"
                                />
                                <div className="text-left">
                                    <div className="font-bold text-xl text-white">{currentTestimonial.name}</div>
                                    <div className="text-white/60">
                                        {currentTestimonial.role} - {currentTestimonial.company}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 glass glass-hover text-white rounded-full flex items-center justify-center transition-all"
                        aria-label="Témoignage précédent"
                    >
                        ←
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 glass glass-hover text-white rounded-full flex items-center justify-center transition-all"
                        aria-label="Témoignage suivant"
                    >
                        →
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-3 mt-12">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                                        ? 'bg-white w-8'
                                        : 'bg-white/30 hover:bg-white/50'
                                    }`}
                                aria-label={`Aller au témoignage ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
