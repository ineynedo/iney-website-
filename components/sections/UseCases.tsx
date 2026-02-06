'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

const useCases = [
    {
        id: 1,
        icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
            </svg>
        ),
        title: 'Site web obsolète',
        problem: 'Votre site a 5 ans et ne reflète plus votre activité',
        solution: 'Refonte complète avec design moderne et performances optimales',
        results: ['Design actuel et responsive', 'Vitesse de chargement x3', 'Taux de conversion +45%'],
        color: 'from-purple-light to-purple-vibrant',
    },
    {
        id: 2,
        icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <path d="M12 18h.01" />
                <path d="M8 6h8M8 10h8" />
            </svg>
        ),
        title: 'Présence digitale inexistante',
        problem: 'Vous n\'avez pas de site ou juste une page Facebook',
        solution: 'Création d\'une identité digitale complète et cohérente',
        results: ['Site vitrine professionnel', 'Stratégie réseaux sociaux', 'Visibilité Google x10'],
        color: 'from-purple-vibrant to-purple-light',
    },
    {
        id: 3,
        icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3v18h18" />
                <path d="M18 17l-5-5-4 4-6-6" />
                <circle cx="18" cy="6" r="3" fill="currentColor" />
            </svg>
        ),
        title: 'Marketing trop basique',
        problem: 'Vous postez sur les réseaux mais sans stratégie ni résultats',
        solution: 'Stratégie marketing data-driven avec contenus optimisés',
        results: ['Plan de contenu structuré', 'Engagement +120%', 'Leads qualifiés x4'],
        color: 'from-purple-light via-purple-vibrant to-purple-light',
    },
    {
        id: 4,
        icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                <circle cx="12" cy="12" r="3" opacity="0.3" fill="currentColor" />
            </svg>
        ),
        title: 'Processus manuels chronophages',
        problem: 'Vous perdez du temps sur des tâches répétitives',
        solution: 'Automatisation intelligente avec IA et outils no-code',
        results: ['Gain de 15h/semaine', 'Erreurs humaines -90%', 'ROI en 3 mois'],
        color: 'from-purple-vibrant to-purple-light',
    },
    {
        id: 5,
        icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L12 9" />
                <path d="M12 9L4 14L12 22L20 14L12 9Z" />
                <circle cx="12" cy="16" r="2" fill="currentColor" />
            </svg>
        ),
        title: 'Lancement de produit',
        problem: 'Vous avez un nouveau produit mais pas de visibilité',
        solution: 'Campagne de lancement 360° avec landing page optimisée',
        results: ['Landing page haute conversion', 'Campagne ads ciblée', '500+ leads en 1 mois'],
        color: 'from-purple-light to-purple-vibrant',
    },
    {
        id: 6,
        icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" fill="currentColor" />
                <circle cx="20" cy="21" r="1" fill="currentColor" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                <path d="M12 6L12 2" strokeWidth="2.5" />
            </svg>
        ),
        title: 'E-commerce qui stagne',
        problem: 'Votre boutique en ligne génère peu de ventes',
        solution: 'Optimisation UX/UI et stratégie d\'acquisition',
        results: ['Panier moyen +35%', 'Taux d\'abandon -40%', 'CA mensuel x2.5'],
        color: 'from-purple-vibrant via-purple-light to-purple-vibrant',
    },
];

export default function UseCases() {
    const [activeCase, setActiveCase] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const handleNext = () => {
        setActiveCase((prev) => (prev + 1) % useCases.length);
    };

    const handlePrev = () => {
        setActiveCase((prev) => (prev - 1 + useCases.length) % useCases.length);
    };

    const currentCase = useCases[activeCase];

    return (
        <section id="use-cases" className="relative py-20 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <SectionTitle subtitle="Des situations concrètes, des solutions sur mesure">
                    Vous vous reconnaissez ?
                </SectionTitle>

                <div className="mt-16">
                    {/* Sélecteur de cas */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
                        {useCases.map((useCase, index) => (
                            <motion.button
                                key={useCase.id}
                                onClick={() => setActiveCase(index)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`p-4 rounded-xl transition-all duration-300 ${activeCase === index
                                    ? 'glass-pink scale-105'
                                    : 'glass glass-hover'
                                    }`}
                            >
                                <div className={`mb-2 transition-colors duration-300 ${activeCase === index ? 'text-purple-vibrant' : 'text-white/70'}`}>{useCase.icon}</div>
                                <div className={`text-xs font-medium transition-colors duration-300 ${activeCase === index ? 'text-purple-light font-bold' : 'text-white/60'
                                    }`}>
                                    {useCase.title}
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Carte interactive du cas actif */}
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCase}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="glass p-8 md:p-12 rounded-3xl border border-white/10"
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                            >
                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Gauche - Problème */}
                                    <div>
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="text-purple-vibrant drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]">{currentCase.icon}</div>
                                            <div>
                                                <h3 className="text-3xl md:text-4xl font-bold text-white">
                                                    {currentCase.title}
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-8 h-8 rounded-full bg-purple-vibrant/20 flex items-center justify-center border border-purple-vibrant/30">
                                                        <svg className="w-5 h-5 text-purple-vibrant" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M12 2L1 21h22L12 2zm0 3.5L19.5 19h-15L12 5.5zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="text-lg font-semibold text-purple-light">Le problème</h4>
                                                </div>
                                                <p className="text-white/70 pl-10">{currentCase.problem}</p>
                                            </div>

                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-8 h-8 rounded-full bg-purple-light/20 flex items-center justify-center border border-purple-light/30">
                                                        <svg className="w-5 h-5 text-purple-light drop-shadow-[0_0_4px_rgba(196,181,253,0.5)]" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="text-lg font-semibold text-purple-vibrant">Notre solution</h4>
                                                </div>
                                                <p className="text-white/70 pl-10">{currentCase.solution}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Droite - Résultats */}
                                    <div className="flex flex-col justify-center">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-light to-purple-vibrant flex items-center justify-center shadow-lg shadow-purple-vibrant/30">
                                                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                </svg>
                                            </div>
                                            <h4 className="text-lg font-semibold text-white">Résultats concrets</h4>
                                        </div>
                                        <div className="space-y-3 pl-10">
                                            {currentCase.results.map((result, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                                                >
                                                    <div className="w-2 h-2 rounded-full bg-purple-vibrant"></div>
                                                    <span className="text-white/80 font-medium">{result}</span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        <motion.a
                                            href="#contact"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="mt-6 px-8 py-4 bg-gradient-to-r from-purple-light to-purple-vibrant text-white font-bold rounded-lg hover:opacity-90 transition-opacity text-center"
                                        >
                                            C'est mon cas, parlons-en
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Navigation arrows */}
                                <div className="flex items-center justify-center gap-4 mt-8">
                                    <button
                                        onClick={handlePrev}
                                        className="w-12 h-12 rounded-full glass glass-hover flex items-center justify-center text-white/70 hover:text-white transition-colors"
                                    >
                                        ←
                                    </button>

                                    <div className="flex gap-2 items-center h-8">
                                        {useCases.map((_, index) => (
                                            <motion.button
                                                key={index}
                                                layout
                                                onClick={() => setActiveCase(index)}
                                                className={`rounded-full ${activeCase === index
                                                    ? 'bg-purple-vibrant'
                                                    : 'bg-white/20 hover:bg-white/40'
                                                    }`}
                                                initial={false}
                                                animate={{
                                                    width: activeCase === index ? 32 : 8,
                                                    height: 8,
                                                }}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        ))}
                                    </div>

                                    <button
                                        onClick={handleNext}
                                        className="w-12 h-12 rounded-full glass glass-hover flex items-center justify-center text-white/70 hover:text-white transition-colors"
                                    >
                                        →
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* CTA final */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <p className="text-white/60 mb-6">
                            Votre situation n'est pas listée ? Pas de problème.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block px-10 py-4 glass-active text-white font-semibold rounded-lg hover:scale-105 transition-transform"
                        >
                            Décrivez-nous votre projet
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
