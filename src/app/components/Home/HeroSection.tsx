'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IconBrandInstagram, IconBrandLinkedin, IconMail } from '@tabler/icons-react';

export default function Home() {
    return (
        <section className="relative z-20 flex h-screen w-full items-center justify-center overflow-hidden bg-black">
            {/* Particle Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="particles">
                    {Array.from({ length: 50 }, (_, i) => (
                        <div
                            key={i}
                            className="particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 20}s`,
                                animationDuration: `${15 + Math.random() * 10}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Hero Image */}
            <div className="absolute left-0 top-0 flex h-full w-full items-start md:w-auto">
                <Image
                    src="/assets/img/aku.png"
                    className="h-auto w-full object-cover object-left opacity-70 brightness-125 transition-all duration-500 ease-in-out hero-image-animate md:h-full md:w-auto md:opacity-100"
                    alt="Hero Image"
                    width={400}
                    height={600}
                    priority
                />
            </div>

            {/* Main Content */}
            <div className="relative z-30 flex flex-col items-center justify-center px-4 pt-24 text-center md:items-end md:pl-32 md:pt-32 md:text-right lg:pl-48">
                <div className="mb-4 md:mb-8">
                    <h1 className="font-poppins text-2xl leading-tight tracking-tight text-white sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">

                        <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:justify-start md:gap-4">
                            <div className="font-semibold">DIGITAL</div>
                            <div className="rounded-full border border-gray-400 px-2 py-1 text-center text-xs text-gray-400 sm:text-sm">
                                Based in Indonesia
                            </div>
                        </div>

                        <div className="flex items-center justify-center md:justify-start">
                            <div className="font-semibold">EXPERIENCE.</div>
                        </div>

                        <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:justify-start md:gap-4">
                            <div className="font-semibold text-black rounded-sm border border-gray-400 px-2 py-1 bg-white">DESIGNER</div>
                            <div className="flex items-center rounded-full border-gray-400 px-2 py-1">
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:justify-end md:gap-4">
                            <div className="font-semibold text-white">&</div>
                            <div className="font-semibold text-black rounded-sm border border-gray-400 px-2 py-1 bg-white">DEVELOPER</div>
                            <div className="text-xs sm:text-sm font-medium text-gray-400">
                                Fullstack Developer <br /> UI UX Designer
                            </div>
                        </div>
                        
                    </h1>
                </div>
                
                {/* Social Media Links dengan border di sekelilingnya */}
                <div className="flex items-center gap-4 rounded-full border border-gray-100/20 p-2 text-white md:self-end">
                    <Link href="https://www.instagram.com/innsannii/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <IconBrandInstagram className="h-6 w-6 transition-transform hover:scale-110" />
                    </Link>

                    <Link href="https://www.linkedin.com/in/arul-fitrah-insani-868730362/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <IconBrandLinkedin className="h-6 w-6 transition-transform hover:scale-110" />
                    </Link>

                    <Link href="mailto:arulfitrahinsani10@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                        <IconMail className="h-6 w-6 transition-transform hover:scale-110" />
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .particles {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                }

                .particle {
                    position: absolute;
                    width: 2px;
                    height: 2px;
                    background: rgba(255, 255, 255, 0.6);
                    border-radius: 50%;
                    animation: float linear infinite;
                    will-change: transform;
                }

                .particle:nth-child(3n) {
                    width: 1px;
                    height: 1px;
                    background: rgba(255, 255, 255, 0.4);
                }

                .particle:nth-child(4n) {
                    width: 3px;
                    height: 3px;
                    background: rgba(255, 255, 255, 0.3);
                }

                .particle:nth-child(5n) {
                    background: rgba(59, 130, 246, 0.5);
                }

                .particle:nth-child(7n) {
                    background: rgba(147, 51, 234, 0.4);
                }

                @keyframes float {
                    0% {
                        transform: translateY(100vh) translateX(0px) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-10px) translateX(50px) rotate(360deg);
                        opacity: 0;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .particle {
                        animation: none;
                    }
                }

                /* Performance optimization */
                @media (max-width: 768px) {
                    .particles .particle:nth-child(n+26) {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
}