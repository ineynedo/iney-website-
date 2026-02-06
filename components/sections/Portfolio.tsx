'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('all');

    const categories = [
        { id: 'all', label: 'Tous nos projets' },
        { id: 'favorites', label: 'Nos favoris' },
    ];

    const projects = [
        {
            id: 1,
            title: 'Identité Visuelle - Startup Tech',
            category: 'all',
            favorite: true,
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        },
        {
            id: 2,
            title: 'Chatbot IA Client',
            category: 'all',
            favorite: true,
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
        },
        {
            id: 3,
            title: 'E-commerce Fashion',
            category: 'all',
            favorite: true,
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        },
        {
            id: 4,
            title: 'Shooting Produit Luxe',
            category: 'all',
            favorite: true,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop',
        },
        {
            id: 5,
            title: 'Campagne Social Media',
            category: 'all',
            favorite: false,
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
        },
        {
            id: 6,
            title: 'SaaS Dashboard',
            category: 'all',
            favorite: false,
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
        },
    ];

    const filteredProjects = activeFilter === 'favorites'
        ? projects.filter(p => p.favorite)
        : projects;

    return (
        <section id="portfolio" className="relative py-24 px-6">
            <div className="relative max-w-7xl mx-auto">
                <SectionTitle
                    subtitle="Découvrez nos meilleures réalisations"
                >
                    Portfolio
                </SectionTitle>

                {/* Filters */}
                <div className="flex justify-center gap-4 mt-12 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveFilter(cat.id)}
                            className={`px-6 py-3 rounded-full font-medium glass glass-hover ${activeFilter === cat.id ? 'text-white' : 'text-white/80'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl glass glass-hover aspect-[4/3]"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            {/* Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <h3 className="text-2xl font-bold text-white">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <p className="text-xl text-white/60 mb-6">
                        Prêt à créer quelque chose d'exceptionnel ?
                    </p>
                    <a
                        href="#contact"
                        className="inline-block px-8 py-4 glass-active text-white rounded-lg font-semibold hover:scale-105 transition-transform"
                    >
                        Discutons de votre projet
                    </a>
                </div>
            </div>
        </section>
    );
}
