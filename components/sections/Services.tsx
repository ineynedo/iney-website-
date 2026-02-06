'use client';

import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';
import { BrandingIcon, AIIcon, WebDevIcon, ContentIcon } from '../ui/Icons';

export default function Services() {
    const services = [
        {
            title: 'Branding / Marketing Digital',
            description: 'Identité visuelle et stratégies marketing pour propulser votre marque',
            expertise: [
                'Création d\'identité de marque',
                'Stratégie digitale sur mesure',
                'Campagnes marketing ciblées',
                'Gestion des réseaux sociaux',
                'Design graphique créatif'
            ],
            slug: 'branding-marketing',
            icon: BrandingIcon,
        },
        {
            title: 'AI Automation',
            description: 'Automatisation intelligente pour optimiser votre productivité',
            expertise: [
                'Automatisation de workflows',
                'Intégration d\'IA avancée',
                'Chatbots intelligents',
                'Analyse de données automatisée',
                'Optimisation des processus'
            ],
            slug: 'ai-automation',
            icon: AIIcon,
        },
        {
            title: 'Dev Web / UI/UX',
            description: 'Sites web et applications avec design exceptionnel',
            expertise: [
                'Sites web responsives',
                'Applications web modernes',
                'Design UI/UX premium',
                'Optimisation de l\'expérience',
                'Développement sur mesure'
            ],
            slug: 'dev-web-ui-ux',
            icon: WebDevIcon,
        },
        {
            title: 'Content Creation',
            description: 'Vidéos, photos et contenu pour captiver votre audience',
            expertise: [
                'Production vidéo professionnelle',
                'Photographie de qualité',
                'Rédaction de contenu engageant',
                'Storytelling visuel',
                'Contenu pour réseaux sociaux'
            ],
            slug: 'content-creation',
            icon: ContentIcon,
        },
    ];

    return (
        <section id="services" className="relative py-24 px-6">
            <div className="relative max-w-7xl mx-auto">
                <SectionTitle
                    subtitle="Nos expertises pour votre succès digital"
                >
                    Nos Services
                </SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.slug}
                            {...service}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
