'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Sidebar() {
    const [activeSection, setActiveSection] = useState('accueil');

    const navLinks = [
        { id: 'accueil', href: '#accueil', label: 'Accueil' },
        { id: 'services', href: '#services', label: 'Services' },
        { id: 'portfolio', href: '#portfolio', label: 'Portfolio' },
        { id: 'apropos', href: '#apropos', label: 'À propos' },
        { id: 'temoignages', href: '#temoignages', label: 'Témoignages' },
        { id: 'contact', href: '#contact', label: 'Contact' },
    ];

    const socialLinks = [
        { name: 'Facebook', href: '#', label: 'FB' },
        { name: 'Instagram', href: '#', label: 'IG' },
        { name: 'LinkedIn', href: '#', label: 'IN' },
    ];

    // Smooth scroll handler
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setActiveSection(id);

        const element = document.querySelector(e.currentTarget.getAttribute('href') || '');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => document.querySelector(link.href));
            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i] as HTMLElement;
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navLinks[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Sidebar - Desktop (Scrollable, not fixed) */}
            <aside className="hidden lg:block w-64 min-h-screen bg-primary/80 backdrop-blur-lg border-r border-accent/20 text-neutral-light1">
                <div className="sticky top-0">
                    {/* Logo */}
                    <div className="p-8 border-b border-accent/20">
                        <Link href="/" className="block">
                            <h1 className="text-4xl font-bold text-neutral-light1 hover:text-accent transition-colors">
                                INEY
                            </h1>
                            <p className="text-sm text-accent mt-2">Digital Agency</p>
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <nav className="py-8 px-4">
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.id)}
                                        className={`block px-4 py-3 rounded-lg transition-all ${activeSection === link.id
                                                ? 'bg-accent/30 text-neutral-light1 font-semibold'
                                                : 'text-accent hover:bg-accent/10 hover:text-neutral-light1'
                                            }`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Social Links */}
                    <div className="p-6 border-t border-accent/20">
                        <p className="text-sm text-accent mb-4">Suivez-nous</p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="px-3 py-2 bg-accent/20 hover:bg-accent hover:text-primary rounded-lg transition-all text-sm font-medium text-neutral-light1"
                                    aria-label={social.name}
                                >
                                    {social.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Info */}
                    <div className="p-6 border-t border-accent/20 text-sm text-accent">
                        <p>© 2026 INEY</p>
                        <p className="mt-1">Tous droits réservés</p>
                    </div>
                </div>
            </aside>

            {/* Mobile Header */}
            <header className="lg:hidden fixed top-0 left-0 right-0 bg-primary/90 backdrop-blur-lg text-neutral-light1 z-50 shadow-lg">
                <div className="flex items-center justify-between p-4">
                    <Link href="/" className="text-2xl font-bold">
                        INEY
                    </Link>
                    <button className="text-neutral-light1 hover:text-accent">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </header>
        </>
    );
}
