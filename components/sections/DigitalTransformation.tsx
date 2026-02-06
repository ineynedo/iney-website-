'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DigitalTransformation() {
    return (
        <section id="digital" className="relative py-32">
            <div className="max-w-7xl mx-auto px-8">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-center mb-24"
                >
                    <h2 className="text-6xl md:text-7xl font-bold mb-6 uppercase tracking-tight">
                        POURQUOI LE DIGITAL
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                        Dans un monde qui bouge vite, rester "offline" coûte plus cher que de se transformer.
                    </p>
                    <Link
                        href="#contact"
                        className="inline-block px-10 py-4 glass glass-hover rounded-full text-lg font-medium transition-all"
                    >
                        Commencer à réfléchir à votre transformation
                    </Link>
                </motion.div>

                {/* Comparison Section: Sans vs Avec le Digital */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-32"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Sans le Digital - Left Column */}
                        <div>
                            <h3 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
                                SANS DIGITAL
                            </h3>
                            <p className="text-gray-400 mb-8">
                                Les entreprises prennent du retard
                            </p>
                            <div className="space-y-4">
                                <div className="glass-pink p-6 rounded-xl">
                                    <h4 className="text-xl font-semibold mb-2 text-white">Visibilité limitée</h4>
                                    <p className="text-gray-400">
                                        Difficile d'être visible là où vos clients passent leur temps : en ligne.
                                    </p>
                                </div>
                                <div className="glass-pink p-6 rounded-xl">
                                    <h4 className="text-xl font-semibold mb-2 text-white">Tâches chronophages</h4>
                                    <p className="text-gray-400">
                                        Des tâches répétitives consomment vos journées (Excel, papiers, emails).
                                    </p>
                                </div>
                                <div className="glass-pink p-6 rounded-xl">
                                    <h4 className="text-xl font-semibold mb-2 text-white">Décisions au feeling</h4>
                                    <p className="text-gray-400">
                                        Les décisions se prennent au feeling, sans données fiables.
                                    </p>
                                </div>
                                <div className="glass-pink p-6 rounded-xl">
                                    <h4 className="text-xl font-semibold mb-2 text-white">Expérience dépassée</h4>
                                    <p className="text-gray-400">
                                        L'expérience proposée aux clients paraît compliquée, lente, peu moderne.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Avec le Digital - Right Column */}
                        <div>
                            <h3 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
                                AVEC LE DIGITAL
                            </h3>
                            <p className="text-gray-400 mb-8">
                                La transformation digitale, ce n'est pas juste "faire un site"
                            </p>
                            <div className="space-y-4">
                                <div className="glass-pink p-6 rounded-xl">
                                    <h4 className="text-xl font-semibold mb-2 text-white">Plus de visibilité</h4>
                                    <p className="text-gray-400">
                                        Vos clients vous trouvent, vous contactent et achètent en ligne, 24/7.
                                    </p>
                                </div>
                                <div className="glass-pink p-6 rounded-xl">
                                    <h4 className="text-xl font-semibold mb-2 text-white">Plus de productivité</h4>
                                    <p className="text-gray-400">
                                        Automatisation des tâches répétitives, moins d'erreurs, plus de temps pour le cœur de métier.
                                    </p>
                                </div>
                                <div className="glass-pink p-6 rounded-xl">
                                    <h4 className="text-xl font-semibold mb-2 text-white">Plus de clarté</h4>
                                    <p className="text-gray-400">
                                        Données en temps réel pour piloter votre activité avec précision.
                                    </p>
                                </div>
                                <div className="glass-pink p-6 rounded-xl">
                                    <h4 className="text-xl font-semibold mb-2 text-white">Meilleure expérience</h4>
                                    <p className="text-gray-400">
                                        Une expérience fluide et moderne qui fidélise vos clients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Section: Pourquoi Iney */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-32"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
                            POURQUOI INEY
                        </h3>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Se faire accompagner par des experts qui comprennent vos enjeux
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="glass glass-hover p-8 rounded-xl text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-vibrant/20 flex items-center justify-center">
                                <svg className="w-8 h-8 text-purple-vibrant" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold mb-3">Vision business avant tout</h4>
                            <p className="text-gray-400">
                                On ne fait pas de la tech pour la tech. On comprend vos enjeux métier et on propose des solutions qui ont du sens.
                            </p>
                        </div>
                        <div className="glass glass-hover p-8 rounded-xl text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-vibrant/20 flex items-center justify-center">
                                <svg className="w-8 h-8 text-purple-vibrant" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold mb-3">Tech & Design réunis</h4>
                            <p className="text-gray-400">
                                Branding, UX/UI, développement web et mobile : tout est pensé ensemble pour un résultat cohérent.
                            </p>
                        </div>
                        <div className="glass glass-hover p-8 rounded-xl text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-vibrant/20 flex items-center justify-center">
                                <svg className="w-8 h-8 text-purple-vibrant" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold mb-3">Focus résultats</h4>
                            <p className="text-gray-400">
                                Chaque projet vise un impact mesurable : plus de ventes, moins de coûts, meilleure satisfaction client.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Section: Notre Approche */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-32 max-w-4xl mx-auto"
                >
                    <div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
                            NOTRE APPROCHE
                        </h3>
                        <p className="text-gray-400 mb-8">
                            Nous pensons le digital comme un levier long terme, pas comme une campagne ponctuelle
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="glass glass-hover p-6 rounded-xl">
                                <div className="text-4xl font-bold text-purple-vibrant mb-2">01</div>
                                <h4 className="text-xl font-semibold mb-2">Explorer</h4>
                                <p className="text-gray-400">
                                    Audit rapide de votre situation actuelle et de vos priorités.
                                </p>
                            </div>
                            <div className="glass glass-hover p-6 rounded-xl">
                                <div className="text-4xl font-bold text-purple-vibrant mb-2">02</div>
                                <h4 className="text-xl font-semibold mb-2">Imaginer</h4>
                                <p className="text-gray-400">
                                    Proposition d'un plan simple : actions, délais, impact attendu.
                                </p>
                            </div>
                            <div className="glass glass-hover p-6 rounded-xl">
                                <div className="text-4xl font-bold text-purple-vibrant mb-2">03</div>
                                <h4 className="text-xl font-semibold mb-2">Construire</h4>
                                <p className="text-gray-400">
                                    Mise en place des outils (site, automatisations, contenus...).
                                </p>
                            </div>
                            <div className="glass glass-hover p-6 rounded-xl">
                                <div className="text-4xl font-bold text-purple-vibrant mb-2">04</div>
                                <h4 className="text-xl font-semibold mb-2">Améliorer</h4>
                                <p className="text-gray-400">
                                    Suivi des résultats et optimisations continues.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h3 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
                        PRÊT À RÉFLÉCHIR ?
                    </h3>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Un échange suffit pour voir où le digital peut avoir le plus d'impact dans votre activité.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="#contact"
                            className="px-10 py-4 glass glass-hover rounded-full text-lg font-medium transition-all"
                        >
                            Planifier un appel avec Iney
                        </Link>
                        <a
                            href="https://wa.me/33123456789"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-4 glass glass-hover rounded-full text-lg font-medium transition-all flex items-center justify-center gap-3"
                        >
                            <span>💬</span>
                            Écrire sur WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
