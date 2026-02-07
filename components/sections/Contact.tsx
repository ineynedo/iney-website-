'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        projectType: '',
        projectTypeOther: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulation d'envoi API
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitted(true);
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="relative py-24 px-6">
            <div className="max-w-2xl mx-auto">

                {/* En-tête Text */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Parlons de votre projet
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-white/70"
                    >
                        Quelques infos suffisent pour que nous revenions vers vous avec des pistes concrètes.
                    </motion.p>
                </div>

                {/* Formulaire ou Message Succès */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {isSubmitted ? (
                        <div className="glass p-10 rounded-2xl text-center border border-purple-vibrant/30 bg-purple-vibrant/5">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-vibrant/20 flex items-center justify-center">
                                <svg className="w-8 h-8 text-purple-vibrant" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Merci, nous avons bien reçu votre projet.</h3>
                            <p className="text-white/70">Nous revenons vers vous très vite.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">

                            {/* Nom complet */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-white/90">
                                    Nom complet <span className="text-purple-vibrant">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    placeholder="Ex : Yassine El Amrani"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-vibrant focus:ring-1 focus:ring-purple-vibrant transition-all"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-white/90">
                                    Email <span className="text-purple-vibrant">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Ex : contact@votreentreprise.ma"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-vibrant focus:ring-1 focus:ring-purple-vibrant transition-all"
                                />
                            </div>

                            {/* Téléphone */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-white/90">
                                    Téléphone / WhatsApp <span className="text-white/40 text-xs ml-1">(optionnel)</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Ex : +212 6 XX XX XX XX"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-vibrant focus:ring-1 focus:ring-purple-vibrant transition-all"
                                />
                            </div>

                            {/* Type de projet */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-white/90">
                                    Type de projet <span className="text-purple-vibrant">*</span>
                                </label>
                                <div className="space-y-3">
                                    <div className="relative">
                                        <select
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-vibrant focus:ring-1 focus:ring-purple-vibrant transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled className="bg-neutral-900 text-white/50">Sélectionnez une option</option>
                                            <option value="vitrine" className="bg-neutral-900">Site vitrine</option>
                                            <option value="ecommerce" className="bg-neutral-900">E-commerce</option>
                                            <option value="saas" className="bg-neutral-900">SaaS / Web app</option>
                                            <option value="mobile" className="bg-neutral-900">Application mobile</option>
                                            <option value="branding" className="bg-neutral-900">Branding / identité visuelle</option>
                                            <option value="marketing" className="bg-neutral-900">Marketing / acquisition</option>
                                            <option value="autre" className="bg-neutral-900">Autre</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-white/50">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>

                                    {formData.projectType === 'autre' && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                        >
                                            <input
                                                type="text"
                                                name="projectTypeOther"
                                                value={formData.projectTypeOther}
                                                onChange={handleInputChange}
                                                placeholder="Précisez votre type de projet..."
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-vibrant focus:ring-1 focus:ring-purple-vibrant transition-all"
                                            />
                                        </motion.div>
                                    )}
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-white/90">
                                    Parlez-nous de votre projet <span className="text-purple-vibrant">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    placeholder="Présentez rapidement votre activité, ce que vous voulez mettre en place (site, app, marketing…) et le résultat que vous visez."
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-vibrant focus:ring-1 focus:ring-purple-vibrant transition-all resize-none"
                                />
                            </div>

                            {/* Bouton */}
                            <div className="pt-4 flex flex-col items-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full sm:w-auto px-12 py-4 bg-purple-vibrant text-white font-bold text-lg rounded-lg hover:bg-purple-600 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-purple-vibrant/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Envoi...' : 'Envoyer mon projet'}
                                </button>
                                <p className="mt-4 text-xs text-white/40 text-center">
                                    Réponse sous 24h, sans blabla inutile.
                                </p>
                            </div>

                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
