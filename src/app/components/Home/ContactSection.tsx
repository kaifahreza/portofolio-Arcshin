'use client';

import { useState } from 'react';
import { IconBrandWhatsapp, IconMail, IconBrandInstagram, IconBrandLinkedin, IconMapPin, IconSend } from '@tabler/icons-react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setIsSubmitting(false);
        alert('Pesan terkirim! Saya akan membalas secepatnya.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactMethods = [
        {
            icon: IconMail,
            label: 'Email',
            value: 'arulfitrahinsani10@gmail.com',
            link: 'mailto:arulfitrahinsani10@gmail.com',
            color: 'text-red-400'
        },
        {
            icon: IconBrandWhatsapp,
            label: 'WhatsApp',
            value: '+62 812-3456-7890',
            link: 'https://wa.me/6281234567890',
            color: 'text-green-400'
        },
        {
            icon: IconBrandInstagram,
            label: 'Instagram',
            value: '@innsannii',
            link: 'https://www.instagram.com/innsannii/',
            color: 'text-pink-400'
        },
        {
            icon: IconBrandLinkedin,
            label: 'LinkedIn',
            value: 'Arul Fitrah Insani',
            link: 'https://www.linkedin.com/in/arul-fitrah-insani-868730362/',
            color: 'text-blue-400'
        }
    ];

    return (
        <section id="contact" className="relative w-full bg-black py-20 px-4 sm:px-8 md:py-32 overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
                        Let&apos;s <span className="text-blue-400">Work Together</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Tertarik untuk berkolaborasi? Mari berbicara tentang project Anda.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-light text-white mb-6">Get in Touch</h3>
                            <p className="text-gray-400 mb-8">
                                Saya selalu terbuka untuk mendiskusikan project baru, ide kreatif, atau peluang untuk menjadi bagian dari visi Anda.
                            </p>
                        </div>

                        {/* Contact Methods */}
                        <div className="space-y-6">
                            {contactMethods.map((method, index) => {
                                const IconComponent = method.icon;
                                return (
                                    <a
                                        key={index}
                                        href={method.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-4 p-4 rounded-xl border border-gray-800/50 bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 group cursor-pointer"
                                    >
                                        <div className={`p-3 rounded-full bg-gray-800/50 group-hover:scale-110 transition-transform duration-300 ${method.color}`}>
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm">{method.label}</p>
                                            <p className="text-white font-medium">{method.value}</p>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>

                        {/* Location */}
                        <div className="flex items-center space-x-4 p-4 rounded-xl border border-gray-800/50 bg-gray-900/30">
                            <div className="p-3 rounded-full bg-gray-800/50 text-yellow-400">
                                <IconMapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Location</p>
                                <p className="text-white font-medium">Lampung, Indonesia</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="rounded-2xl border border-gray-800/50 bg-gray-900/30 p-8 backdrop-blur-sm">
                        <h3 className="text-2xl font-light text-white mb-8">Send Message</h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-400 text-sm mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/30 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                                        placeholder="Your name"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/30 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-gray-400 text-sm mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/30 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                                    placeholder="Project discussion"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-400 text-sm mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/30 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white py-4 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 disabled:scale-100 flex items-center justify-center space-x-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <IconSend className="w-5 h-5" />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>
                <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-green-600/5 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
}