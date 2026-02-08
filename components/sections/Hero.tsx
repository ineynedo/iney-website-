'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="accueil" className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/hero-poster.jpg"
                className="absolute inset-0 w-full h-full object-cover"
                key="hero-video"
                disablePictureInPicture
            >
                <source src="/hero-video.mp4?v=2" type="video/mp4" />
                <img
                    src="/hero-poster.jpg"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </video>

            {/* Subtle overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Main Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Liquid Glass 3D Title */}
                    <h1
                        className="liquid-glass-text text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-relaxed px-4"
                        data-text="Transformez votre vision en réalité digitale"
                    >
                        Transformez votre vision en réalité digitale
                    </h1>

                    <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
                        Agence digitale à Kenitra spécialisée en branding, IA, développement web et création de contenu
                    </p>

                    {/* CTA Principal */}
                    <motion.a
                        href="#contact"
                        className="inline-block px-10 py-5 glass-active text-white text-lg font-bold rounded-lg hover:scale-105 transition-transform"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Démarrer un projet
                    </motion.a>
                </motion.div>
            </div>

            {/* Smooth gradient transition to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black" />
        </section>
    );
}
