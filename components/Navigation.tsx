'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const params = useParams();
    const locale = params?.locale || 'fr';

    const navLinks = [
        { href: '#accueil', label: 'Accueil' },
        { href: '#services', label: 'Services' },
        { href: '#digital', label: 'Pourquoi Digital' },
        { href: '#apropos', label: 'À propos' },
        { href: '#temoignages', label: 'Témoignages' },
        { href: '#contact', label: 'Contact' },
    ];


    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, isExternal?: boolean) => {
        if (isExternal) {
            // For external links (full page navigation), let default behavior happen
            setIsMenuOpen(false);
            return;
        }

        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const element = document.querySelector(href || '');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMenuOpen(false);
        }
    };

    return (
        <>
            {/* Top Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-white/10">
                <div className="max-w-full px-8 py-6 flex items-center justify-between">
                    {/* Hamburger Menu Button - Left */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex flex-col gap-1.5 group"
                        aria-label="Menu"
                    >
                        <span className={`w-8 h-0.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: '#FFFFFF' }} />
                        <span className={`w-8 h-0.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: '#FFFFFF' }} />
                        <span className={`w-8 h-0.5 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: '#FFFFFF' }} />
                    </button>

                    {/* Logo - Center */}
                    <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
                        <img
                            src="/logo-iney-white.svg"
                            alt="INEY Agency"
                            className="h-12 md:h-14"
                        />
                    </Link>

                    {/* Empty space for balance */}
                    <div className="w-8"></div>
                </div>
            </nav>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-xl"
                    >
                        <div className="h-full flex flex-col items-center justify-center">
                            {/* Navigation Links */}
                            <nav className="space-y-8">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <a
                                            href={link.href}
                                            onClick={handleNavClick}
                                            className="block text-4xl md:text-6xl font-bold text-neutral-light1 hover:text-accent transition-colors text-center"
                                        >
                                            {link.label}
                                        </a>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="mt-16 flex gap-6"
                            >
                                {['FB', 'IG', 'IN'].map((social) => (
                                    <a
                                        key={social}
                                        href="#"
                                        className="text-accent hover:text-neutral-light1 transition-colors text-lg font-medium"
                                    >
                                        {social}
                                    </a>
                                ))}
                            </motion.div>

                            {/* Footer */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="absolute bottom-8 text-accent text-sm"
                            >
                                © 2026 INEY - Tous droits réservés
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
