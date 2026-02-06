'use client';

import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function About() {
    const stats = [
        { number: 30, label: 'Projets réalisés', suffix: '+' },
        { number: 2, label: 'Années d\'expérience', suffix: '+' },
        { number: 95, label: 'Clients satisfaits', suffix: '%' },
    ];

    return (
        <section id="apropos" className="relative py-24 px-6">
            <div className="relative max-w-7xl mx-auto">
                <SectionTitle
                    subtitle="Votre partenaire digital de confiance"
                >
                    À propos d'INEY
                </SectionTitle>

                {/* Description */}
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xl text-white/80 leading-relaxed mb-4">
                        INEY est une agence digitale basée à Kenitra, spécialisée dans la création d'expériences numériques exceptionnelles.
                    </p>
                    <p className="text-lg text-white/60 leading-relaxed">
                        Nous transformons vos idées en réalité grâce à notre expertise en branding, IA, développement web et création de contenu.
                    </p>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="text-center p-8 glass glass-hover rounded-xl group"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                                <AnimatedCounter
                                    value={stat.number}
                                    suffix={stat.suffix}
                                />
                            </div>
                            <div className="text-base text-white/70">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <a
                        href="#contact"
                        className="inline-block px-8 py-4 glass-active text-white rounded-lg font-semibold hover:scale-105 transition-transform"
                    >
                        Prêt à commencer ?
                    </a>
                </div>
            </div>
        </section>
    );
}
