'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [formData, setFormData] = useState({
        // Section 1 - Vos informations
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        website: '',

        // Section 2 - Votre projet
        projectType: [] as string[],
        projectTypeOther: '',
        mainGoal: '',
        mainGoalOther: '',
        currentSituation: '',
        currentSituationDetails: '',
        budget: '',
        timing: '',
        projectDescription: '',
        successVision: '',

        // Section 3 - Comment on avance
        contactMode: '',
        preferredTime: '',
        availability: '',

        // RGPD
        acceptTerms: false,
    });

    const [file, setFile] = useState<File | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleProjectTypeChange = (type: string) => {
        setFormData(prev => {
            const types = prev.projectType.includes(type)
                ? prev.projectType.filter(t => t !== type)
                : [...prev.projectType, type];
            return { ...prev, projectType: types };
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulation d'envoi (à remplacer par votre API)
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitted(true);
        setIsSubmitting(false);
    };

    if (isSubmitted) {
        return (
            <section id="contact" className="relative min-h-screen py-20 px-6 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-purple-vibrant/20 flex items-center justify-center">
                        <svg className="w-10 h-10 text-purple-vibrant" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Merci !</h2>
                    <p className="text-xl text-white/80 mb-8">
                        Nous avons bien reçu votre projet. Nous revenons vers vous sous 24h avec les prochaines étapes.
                    </p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-8 py-3 glass-active text-white rounded-lg font-semibold hover:scale-105 transition-transform"
                    >
                        Envoyer un autre projet
                    </button>
                </motion.div>
            </section>
        );
    }

    return (
        <section id="contact" className="relative min-h-screen py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero / Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Parlons de votre projet.
                    </h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        Plus vous nous donnez de contexte, plus nous pouvons revenir vers vous avec des idées concrètes et un plan d'action.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Formulaire */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <form onSubmit={handleSubmit} className="space-y-12">
                            {/* Section 1 - Vos informations */}
                            <div className="glass p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold text-white mb-6">Vos informations</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-white/90 mb-2 font-medium">
                                            Prénom <span className="text-purple-vibrant">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Ex : Yassine"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-vibrant transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white/90 mb-2 font-medium">
                                            Nom <span className="text-purple-vibrant">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Ex : Benali"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-vibrant transition-colors"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-white/90 mb-2 font-medium">
                                            Email <span className="text-purple-vibrant">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="votre@email.com"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-vibrant transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white/90 mb-2 font-medium">
                                            Téléphone / WhatsApp <span className="text-white/40 text-sm">(optionnel)</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Ex : +212 6 ..."
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-vibrant transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white/90 mb-2 font-medium">
                                            Nom de l'entreprise <span className="text-white/40 text-sm">(optionnel)</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            placeholder="Ex : Mon Entreprise"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-vibrant transition-colors"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-white/90 mb-2 font-medium">
                                            Site web / réseaux <span className="text-white/40 text-sm">(optionnel)</span>
                                        </label>
                                        <input
                                            type="url"
                                            name="website"
                                            value={formData.website}
                                            onChange={handleInputChange}
                                            placeholder="https://..."
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-vibrant transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Section 2 - Votre projet */}
                            <div className="glass p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold text-white mb-6">Votre projet</h3>
                                <div className="space-y-6">
                                    {/* Type de projet */}
                                    <div>
                                        <label className="block text-white/90 mb-3 font-medium">
                                            Type de projet <span className="text-purple-vibrant">*</span>
                                        </label>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                            {['Site vitrine', 'E-commerce', 'SaaS / Web app', 'Application mobile', 'Branding / identité visuelle', 'Marketing / acquisition', 'Autre'].map((type) => (
                                                <button
                                                    key={type}
                                                    type="button"
                                                    onClick={() => handleProjectTypeChange(type)}
                                                    className={`px-4 py-3 rounded-lg font-medium transition-all border backdrop-blur-sm ${formData.projectType.includes(type)
                                                        ? 'bg-purple-vibrant text-white border-purple-vibrant'
                                                        : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:border-purple-vibrant/30'
                                                        }`}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                        {formData.projectType.includes('Autre') && (
                                            <input
                                                type="text"
                                                name="projectTypeOther"
                                                value={formData.projectTypeOther}
                                                onChange={handleInputChange}
                                                placeholder="Précisez..."
                                                className="w-full mt-3 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-vibrant transition-colors"
                                            />
                                        )}
                                    </div>

                                    {/* Objectif principal */}
                                    <div>
                                        <label className="block text-white/90 mb-3 font-medium">
                                            Objectif principal <span className="text-purple-vibrant">*</span>
                                        </label>
                                        <select
                                            name="mainGoal"
                                            value={formData.mainGoal}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-vibrant transition-colors"
                                        >
                                            <option value="">Sélectionnez...</option>
                                            <option value="attirer">Attirer plus de clients</option>
                                            <option value="presenter">Mieux présenter mon activité</option>
                                            <option value="automatiser">Automatiser / gagner du temps</option>
                                            <option value="lancer">Lancer un nouveau produit</option>
                                            <option value="reprendre">Reprendre un projet existant</option>
                                            <option value="autre">Autre</option>
                                        </select>
                                        {formData.mainGoal === 'autre' && (
                                            <input
                                                type="text"
                                                name="mainGoalOther"
                                                value={formData.mainGoalOther}
                                                onChange={handleInputChange}
                                                placeholder="Précisez votre objectif..."
                                                className="w-full mt-3 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-vibrant transition-colors"
                                            />
                                        )}
                                    </div>

                                    {/* Situation actuelle */}
                                    <div>
                                        <label className="block text-white/90 mb-3 font-medium">
                                            Situation actuelle <span className="text-purple-vibrant">*</span>
                                        </label>
                                        <div className="space-y-2">
                                            {[
                                                { value: 'zero', label: 'Je pars de zéro' },
                                                { value: 'ameliorer', label: 'J\'ai déjà un site / app mais je veux l\'améliorer' },
                                                { value: 'encours', label: 'Projet déjà en cours de développement' }
                                            ].map((option) => (
                                                <label key={option.value} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                                                    <input
                                                        type="radio"
                                                        name="currentSituation"
                                                        value={option.value}
                                                        checked={formData.currentSituation === option.value}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-4 h-4 text-purple-vibrant accent-purple-vibrant"
                                                    />
                                                    <span className="text-white/80">{option.label}</span>
                                                </label>
                                            ))}
                                        </div>
                                        <input
                                            type="text"
                                            name="currentSituationDetails"
                                            value={formData.currentSituationDetails}
                                            onChange={handleInputChange}
                                            placeholder="Lien / détails (optionnel)"
                                            className="w-full mt-3 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-vibrant transition-colors"
                                        />
                                    </div>

                                    {/* Budget estimé */}
                                    <div>
                                        <label className="block text-white/90 mb-3 font-medium">
                                            Budget estimé <span className="text-purple-vibrant">*</span>
                                        </label>
                                        <select
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-vibrant transition-colors"
                                        >
                                            <option value="">Sélectionnez...</option>
                                            <option value="<5000">Moins de 5 000 MAD</option>
                                            <option value="5000-15000">5 000 – 15 000 MAD</option>
                                            <option value="15000-50000">15 000 – 50 000 MAD</option>
                                            <option value=">50000">Plus de 50 000 MAD</option>
                                            <option value="conseil">Je ne sais pas encore, besoin de conseils</option>
                                        </select>
                                    </div>

                                    {/* Timing / urgence */}
                                    <div>
                                        <label className="block text-white/90 mb-3 font-medium">
                                            Timing / urgence <span className="text-purple-vibrant">*</span>
                                        </label>
                                        <div className="space-y-2">
                                            {[
                                                { value: 'exploration', label: 'Je suis en phase d\'exploration (pas pressé)' },
                                                { value: '1-3mois', label: 'Je veux lancer dans 1–3 mois' },
                                                { value: '<1mois', label: 'Je veux lancer dans moins d\'un mois' },
                                                { value: 'urgent', label: 'C\'est très urgent' }
                                            ].map((option) => (
                                                <label key={option.value} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                                                    <input
                                                        type="radio"
                                                        name="timing"
                                                        value={option.value}
                                                        checked={formData.timing === option.value}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-4 h-4 text-purple-vibrant accent-purple-vibrant"
                                                    />
                                                    <span className="text-white/80">{option.label}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Description du projet */}
                                    <div>
                                        <label className="block text-white/90 mb-3 font-medium">
                                            Décrivez votre projet <span className="text-purple-vibrant">*</span>
                                        </label>
                                        <textarea
                                            name="projectDescription"
                                            value={formData.projectDescription}
                                            onChange={handleInputChange}
                                            required
                                            rows={6}
                                            placeholder="Qui êtes-vous ? Que voulez-vous mettre en place ? Quel résultat idéal vous imaginez dans 6 mois ?"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-vibrant transition-colors resize-none"
                                        />
                                    </div>

                                    {/* Vision à 6 mois */}
                                    <div>
                                        <label className="block text-white/90 mb-3 font-medium">
                                            Dans 6 mois, qu'est-ce qui vous ferait dire que le projet est une réussite ? <span className="text-white/40 text-sm">(optionnel)</span>
                                        </label>
                                        <textarea
                                            name="successVision"
                                            value={formData.successVision}
                                            onChange={handleInputChange}
                                            rows={4}
                                            placeholder="Décrivez votre vision du succès..."
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-vibrant transition-colors resize-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Section 3 - Comment on avance */}
                            <div className="glass p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold text-white mb-6">Comment on avance ?</h3>
                                <div className="space-y-6">
                                    {/* Mode de contact préféré */}
                                    <div>
                                        <label className="block text-white/90 mb-3 font-medium">
                                            Mode de contact préféré <span className="text-purple-vibrant">*</span>
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {[
                                                { value: 'appel', label: 'Appel téléphonique' },
                                                { value: 'visio', label: 'Visio (Google Meet / Zoom)' },
                                                { value: 'whatsapp', label: 'Message WhatsApp' },
                                                { value: 'email', label: 'Email uniquement' }
                                            ].map((option) => (
                                                <label key={option.value} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                                                    <input
                                                        type="radio"
                                                        name="contactMode"
                                                        value={option.value}
                                                        checked={formData.contactMode === option.value}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-4 h-4 text-purple-vibrant accent-purple-vibrant"
                                                    />
                                                    <span className="text-white/80">{option.label}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Créneau préféré */}
                                    <div>
                                        <label className="block text-white/90 mb-3 font-medium">
                                            Créneau préféré <span className="text-purple-vibrant">*</span>
                                        </label>
                                        <div className="grid grid-cols-3 gap-3">
                                            {['Matin', 'Après-midi', 'Soir'].map((time) => (
                                                <label key={time} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                                                    <input
                                                        type="radio"
                                                        name="preferredTime"
                                                        value={time.toLowerCase()}
                                                        checked={formData.preferredTime === time.toLowerCase()}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-4 h-4 text-purple-vibrant accent-purple-vibrant"
                                                    />
                                                    <span className="text-white/80">{time}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Disponibilités */}
                                    <div>
                                        <label className="block text-white/90 mb-3 font-medium">
                                            Précisez vos disponibilités <span className="text-white/40 text-sm">(optionnel)</span>
                                        </label>
                                        <textarea
                                            name="availability"
                                            value={formData.availability}
                                            onChange={handleInputChange}
                                            rows={3}
                                            placeholder="Ex : Disponible lundi et mercredi après 14h..."
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-vibrant transition-colors resize-none"
                                        />
                                    </div>

                                    {/* Upload fichier */}
                                    <div>
                                        <label className="block text-white/90 mb-3 font-medium">
                                            Ajouter un document, une maquette ou un cahier des charges <span className="text-white/40 text-sm">(optionnel)</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="file"
                                                onChange={handleFileChange}
                                                className="hidden"
                                                id="file-upload"
                                                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip"
                                            />
                                            <label
                                                htmlFor="file-upload"
                                                className="flex items-center justify-center gap-3 w-full px-4 py-4 bg-white/5 border-2 border-dashed border-white/20 rounded-lg cursor-pointer hover:bg-white/10 hover:border-purple-vibrant/50 transition-all"
                                            >
                                                <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                </svg>
                                                <span className="text-white/70">
                                                    {file ? file.name : 'Cliquez pour choisir un fichier'}
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RGPD + Submit */}
                            <div className="space-y-6">
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="acceptTerms"
                                        checked={formData.acceptTerms}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 w-5 h-5 text-purple-vibrant"
                                    />
                                    <span className="text-white/80 text-sm">
                                        J'accepte que ces informations soient utilisées pour être recontacté à propos de mon projet.
                                    </span>
                                </label>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-10 py-5 bg-gradient-to-r from-purple-light to-purple-vibrant text-white text-lg font-bold rounded-lg hover:opacity-90 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer mon projet'}
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Bloc de rassurance */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <div className="glass p-8 rounded-2xl sticky top-24">
                            <h3 className="text-xl font-bold text-white mb-6">
                                Ce qui se passe après l'envoi
                            </h3>
                            <div className="space-y-4 mb-8">
                                {[
                                    'Nous vous répondons en moins de 24h avec des premières pistes concrètes.',
                                    'Si le projet correspond à notre expertise, nous calons un call de 20–30 minutes.',
                                    'Objectif : vous donner de la clarté, pas vous vendre quelque chose à tout prix.'
                                ].map((text, index) => (
                                    <div key={index} className="flex gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-vibrant/20 flex items-center justify-center mt-0.5">
                                            <span className="text-purple-vibrant text-sm font-bold">{index + 1}</span>
                                        </div>
                                        <p className="text-white/70 text-sm leading-relaxed">{text}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-6 border-t border-white/10">
                                <p className="text-white/50 text-sm">
                                    Basés à Kenitra, nous travaillons principalement avec des entreprises au Maroc (et parfois à l'international). Avec plus de 2 ans d'expérience et une trentaine de projets réalisés, la majorité de nos clients sont satisfaits.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
