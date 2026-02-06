import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BrandingIcon, AIIcon, WebDevIcon, ContentIcon } from '@/components/ui/Icons';
import InteractiveBackground from '@/components/ui/InteractiveBackground';

// Service data
const servicesData = {
    'branding-marketing': {
        title: 'Branding / Marketing Digital',
        tagline: 'Propulsez votre marque vers de nouveaux sommets',
        description: 'Nous créons des identités de marque mémorables et des stratégies marketing digitales qui captivent votre audience et génèrent des résultats mesurables.',
        icon: BrandingIcon,
        color: 'from-pink-500 to-rose-500',
        capabilities: [
            {
                title: 'Identité de Marque',
                items: ['Logo et charte graphique', 'Guide de style', 'Positionnement de marque']
            },
            {
                title: 'Stratégie Digitale',
                items: ['Audit marketing', 'Plan d\'action sur mesure', 'KPIs et suivi']
            },
            {
                title: 'Marketing de Contenu',
                items: ['Campagnes créatives', 'Gestion réseaux sociaux', 'Publicité ciblée']
            }
        ],
        process: [
            { step: '01', title: 'Découverte', desc: 'Analyse de votre marque et objectifs' },
            { step: '02', title: 'Stratégie', desc: 'Élaboration du plan marketing' },
            { step: '03', title: 'Création', desc: 'Design et production de contenu' },
            { step: '04', title: 'Déploiement', desc: 'Lancement et optimisation continue' }
        ]
    },
    'ai-automation': {
        title: 'AI Automation',
        tagline: 'L\'intelligence artificielle au service de votre productivité',
        description: 'Automatisez vos processus métier avec des solutions d\'IA sur mesure qui libèrent du temps pour ce qui compte vraiment.',
        icon: AIIcon,
        color: 'from-pink-500 to-rose-500',
        capabilities: [
            {
                title: 'Automatisation Intelligente',
                items: ['Workflows automatisés', 'Traitement de données', 'Intégrations API']
            },
            {
                title: 'IA Conversationnelle',
                items: ['Chatbots personnalisés', 'Assistants virtuels', 'Support client automatisé']
            },
            {
                title: 'Analyse & Insights',
                items: ['Analyse prédictive', 'Reporting automatisé', 'Optimisation continue']
            }
        ],
        process: [
            { step: '01', title: 'Audit', desc: 'Identification des opportunités d\'automatisation' },
            { step: '02', title: 'Conception', desc: 'Design de la solution IA' },
            { step: '03', title: 'Développement', desc: 'Implémentation et tests' },
            { step: '04', title: 'Déploiement', desc: 'Mise en production et formation' }
        ]
    },
    'dev-web-ui-ux': {
        title: 'Développement Web / UI/UX',
        tagline: 'Des expériences digitales qui marquent les esprits',
        description: 'Nous créons des sites web et applications modernes, performants et intuitifs qui transforment vos visiteurs en clients fidèles.',
        icon: WebDevIcon,
        color: 'from-pink-500 to-rose-500',
        capabilities: [
            {
                title: 'Développement Web',
                items: ['Sites vitrine premium', 'Applications web complexes', 'E-commerce sur mesure']
            },
            {
                title: 'Design UI/UX',
                items: ['Interface utilisateur moderne', 'Expérience optimisée', 'Design system']
            },
            {
                title: 'Performance & SEO',
                items: ['Optimisation vitesse', 'Référencement naturel', 'Responsive design']
            }
        ],
        process: [
            { step: '01', title: 'Analyse', desc: 'Compréhension de vos besoins' },
            { step: '02', title: 'Design', desc: 'Maquettes et prototypes' },
            { step: '03', title: 'Développement', desc: 'Codage et intégration' },
            { step: '04', title: 'Lancement', desc: 'Mise en ligne et maintenance' }
        ]
    },
    'content-creation': {
        title: 'Création de Contenu',
        tagline: 'Racontez votre histoire de manière captivante',
        description: 'Du concept à la production, nous créons du contenu visuel et éditorial qui engage votre audience et renforce votre présence digitale.',
        icon: ContentIcon,
        color: 'from-pink-500 to-rose-500',
        capabilities: [
            {
                title: 'Production Vidéo',
                items: ['Vidéos corporate', 'Contenus réseaux sociaux', 'Motion design']
            },
            {
                title: 'Photographie',
                items: ['Shooting produits', 'Photos corporate', 'Retouche professionnelle']
            },
            {
                title: 'Contenu Éditorial',
                items: ['Rédaction web', 'Storytelling de marque', 'Calendrier éditorial']
            }
        ],
        process: [
            { step: '01', title: 'Briefing', desc: 'Définition des objectifs créatifs' },
            { step: '02', title: 'Préproduction', desc: 'Scénario et planification' },
            { step: '03', title: 'Production', desc: 'Tournage et création' },
            { step: '04', title: 'Post-production', desc: 'Montage et livraison' }
        ]
    }
};

export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug: slug,
    }));
}

export default function ServicePage({ params }: { params: { slug: string; locale: string } }) {
    const service = servicesData[params.slug as keyof typeof servicesData];

    if (!service) {
        notFound();
    }

    const IconComponent = service.icon;

    return (
        <main className="relative min-h-screen">
            {/* Interactive Background */}
            <div className="fixed inset-0 z-0">
                <InteractiveBackground />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Back to Home Button - Fixed Top Left */}
                <Link
                    href="/"
                    className="fixed top-6 left-6 z-50 inline-flex items-center gap-2 px-6 py-3 glass glass-hover rounded-full text-white transition-all"
                >
                    <span>←</span>
                    <span>Retour à l'accueil</span>
                </Link>

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 px-6">
                    <div className="max-w-5xl mx-auto text-center">
                        {/* Icon */}
                        <div className="w-24 h-24 mx-auto mb-8 text-white">
                            <IconComponent />
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            {service.title}
                        </h1>

                        {/* Tagline */}
                        <p className={`text-2xl md:text-3xl font-light bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-8`}>
                            {service.tagline}
                        </p>

                        {/* Description */}
                        <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                </section>

                {/* Capabilities Section */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-white text-center mb-16">
                            Nos Expertises
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {service.capabilities.map((capability, index) => (
                                <div key={index} className="glass glass-hover p-8 rounded-xl">
                                    <h3 className="text-2xl font-bold text-white mb-6">
                                        {capability.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {capability.items.map((item, i) => (
                                            <li key={i} className="flex items-start text-white/80">
                                                <span className="text-white mr-3">→</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-white text-center mb-16">
                            Notre Processus
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {service.process.map((step, index) => (
                                <div key={index} className="text-center">
                                    <div className={`text-6xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4`}>
                                        {step.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/60 text-sm">
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Prêt à démarrer votre projet ?
                        </h2>
                        <p className="text-xl text-white/70 mb-10">
                            Discutons de vos besoins et créons quelque chose d'exceptionnel ensemble.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/#contact"
                                className="px-10 py-4 glass-active text-white text-lg font-semibold rounded-lg hover:scale-105 transition-transform"
                            >
                                Nous contacter
                            </Link>
                            <Link
                                href="/#services"
                                className="px-10 py-4 glass glass-hover text-white text-lg font-semibold rounded-lg hover:scale-105 transition-transform"
                            >
                                Voir tous les services
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
