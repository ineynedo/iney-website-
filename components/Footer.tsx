import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'Facebook', href: '#', icon: 'FB' },
        { name: 'Instagram', href: '#', icon: 'IG' },
        { name: 'LinkedIn', href: '#', icon: 'IN' },
    ];

    return (
        <footer className="relative border-t border-white/10 text-white py-12">
            <div className="max-w-7xl mx-auto px-6">
                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                    {/* Logo */}
                    <div>
                        <h3 className="text-3xl font-bold">INEY</h3>
                        <p className="text-white/60 mt-2">Votre partenaire digital</p>
                    </div>

                    {/* Contact */}
                    <div className="text-center md:text-right">
                        <a
                            href="mailto:contact@iney.ma"
                            className="text-lg text-white/80 hover:text-white transition-colors block mb-2"
                        >
                            contact@iney.ma
                        </a>
                        <div className="flex gap-3 justify-center md:justify-end">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 glass glass-hover rounded-full flex items-center justify-center transition-all font-bold text-white text-sm"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center pt-8 border-t border-white/10 text-white/60 text-sm">
                    <p>© {currentYear} INEY. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
