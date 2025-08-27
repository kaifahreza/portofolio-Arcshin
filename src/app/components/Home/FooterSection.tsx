'use client';

import Link from 'next/link';
import { IconBrandWhatsapp, IconMail, IconBrandInstagram, IconBrandLinkedin, IconHeart, IconArrowUp } from '@tabler/icons-react';
import { useState, useEffect } from 'react';

export default function Footer() {
    const [currentYear] = useState(new Date().getFullYear());
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const socialLinks = [
        {
            icon: IconMail,
            href: 'mailto:arulfitrahinsani10@gmail.com',
            label: 'Email',
            color: 'hover:text-red-400'
        },
        {
            icon: IconBrandWhatsapp,
            href: 'https://wa.me/6281234567890',
            label: 'WhatsApp',
            color: 'hover:text-green-400'
        },
        {
            icon: IconBrandInstagram,
            href: 'https://www.instagram.com/innsannii/',
            label: 'Instagram',
            color: 'hover:text-pink-400'
        },
        {
            icon: IconBrandLinkedin,
            href: 'https://www.linkedin.com/in/arul-fitrah-insani-868730362/',
            label: 'LinkedIn',
            color: 'hover:text-blue-400'
        }
    ];

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Works', href: '#works' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' }
    ];

    const serviceLinks = [
        { name: 'Web Development', href: '#services' },
        { name: 'UI/UX Design', href: '#services' },
        { name: 'Mobile Apps', href: '#services' },
        { name: 'Branding', href: '#services' }
    ];

    return (
        <footer className="relative bg-gray-900 border-t border-gray-800/50">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 sm:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 rounded-full border border-gray-700/50 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                                <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                            </div>
                            <span className="text-xl font-semibold text-white">Arcshin</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Fullstack Developer & UI/UX Designer passionate about creating digital experiences that matter. 
                            Let&apos;s build something amazing together.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => {
                                const IconComponent = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2 rounded-lg bg-gray-800/50 border border-gray-700/30 text-gray-400 transition-all duration-300 ${social.color} hover:border-current hover:scale-110`}
                                        aria-label={social.label}
                                    >
                                        <IconComponent className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center space-x-2 group"
                                    >
                                        <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
                        <ul className="space-y-3">
                            {serviceLinks.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        href={service.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center space-x-2 group"
                                    >
                                        <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-green-400 transition-colors"></span>
                                        <span>{service.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Get in Touch</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-gray-400 text-sm mb-1">Email</p>
                                <a
                                    href="mailto:arulfitrahinsani10@gmail.com"
                                    className="text-white hover:text-blue-400 transition-colors duration-300 text-sm"
                                >
                                    arulfitrahinsani10@gmail.com
                                </a>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm mb-1">Location</p>
                                <p className="text-white text-sm">Lampung, Indonesia</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm mb-1">Availability</p>
                                <p className="text-green-400 text-sm">Available for projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800/50">
                <div className="container mx-auto px-4 sm:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-2 text-gray-400 text-sm">
                            <span>© {currentYear} Arcshin. All rights reserved.</span>
                            <span className="flex items-center space-x-1">
                                <span>Made with</span>
                                <IconHeart className="w-4 h-4 text-red-500 fill-current" />
                                <span>in Indonesia</span>
                            </span>
                        </div>
                        
                        <div className="flex items-center space-x-6 text-sm text-gray-400">
                            <Link href="/privacy" className="hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
                    aria-label="Scroll to top"
                >
                    <IconArrowUp className="w-5 h-5" />
                </button>
            )}

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>
            </div>
        </footer>
    );
}