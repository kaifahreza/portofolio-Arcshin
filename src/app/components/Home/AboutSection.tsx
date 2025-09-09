'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface FloatingTech {
    name: string;
    src: string;
    level: number;
    category: string;
    color: string;
    position: {
        top?: string;
        left?: string;
        right?: string;
        bottom?: string;
    };
    delay: number;
}

interface Particle {
    key: number;
    left: number;
    top: number;
    animationDelay: number;
}

export default function AboutSection() {
    const floatingTechStack: FloatingTech[] = [
        // Frontend
        { name: 'HTML', src: '/assets/img/skill/html.png', level: 95, category: 'Markup', color: 'from-orange-500 to-red-500', position: { top: '10%', left: '15%' }, delay: 0 },
        { name: 'CSS', src: '/assets/img/skill/css.png', level: 92, category: 'Styling', color: 'from-blue-400 to-blue-600', position: { top: '25%', left: '5%' }, delay: 0.1 },
        { name: 'JavaScript', src: '/assets/img/skill/javascript.png', level: 88, category: 'Language', color: 'from-yellow-400 to-orange-500', position: { top: '40%', left: '10%' }, delay: 0.2 },
        { name: 'React', src: '/assets/img/skill/react.png', level: 80, category: 'Frontend', color: 'from-cyan-400 to-blue-500', position: { top: '15%', left: '30%' }, delay: 0.3 },
        { name: 'Next.js', src: '/assets/img/skill/nextjs.png', level: 55, category: 'Framework', color: 'from-gray-300 to-gray-600', position: { top: '30%', left: '25%' }, delay: 0.4 },

        // Backend
        { name: 'PHP', src: '/assets/img/skill/php.png', level: 85, category: 'Backend', color: 'from-purple-500 to-indigo-600', position: { top: '10%', right: '15%' }, delay: 0.5 },
        { name: 'Laravel', src: '/assets/img/skill/laravel.png', level: 82, category: 'Framework', color: 'from-red-400 to-red-600', position: { top: '25%', right: '5%' }, delay: 0.6 },
        { name: 'Node.js', src: '/assets/img/skill/nodejs.png', level: 78, category: 'Runtime', color: 'from-green-400 to-green-600', position: { top: '40%', right: '10%' }, delay: 0.7 },
        { name: 'Express.js', src: '/assets/img/skill/expressjs.png', level: 70, category: 'Framework', color: 'from-gray-400 to-gray-700', position: { top: '15%', right: '30%' }, delay: 0.8 },

        // Styling & Tools
        { name: 'Bootstrap', src: '/assets/img/skill/bootstrap.png', level: 88, category: 'Framework', color: 'from-purple-400 to-purple-600', position: { bottom: '15%', left: '10%' }, delay: 0.9 },
        { name: 'Tailwind', src: '/assets/img/skill/tailwindcss.png', level: 92, category: 'Styling', color: 'from-teal-400 to-cyan-500', position: { bottom: '30%', left: '25%' }, delay: 1.0 },
        { name: 'MySQL', src: '/assets/img/skill/mysql.png', level: 80, category: 'Database', color: 'from-blue-500 to-indigo-600', position: { bottom: '10%', right: '10%' }, delay: 1.1 },
        { name: 'Figma', src: '/assets/img/skill/figma.png', level: 87, category: 'Design', color: 'from-purple-400 to-pink-500', position: { bottom: '25%', right: '25%' }, delay: 1.2 },
        { name: 'Git', src: '/assets/img/skill/git.png', level: 85, category: 'Tool', color: 'from-orange-600 to-red-700', position: { bottom: '30%', left: '5%' }, delay: 1.3 },
        { name: 'MongoDB', src: '/assets/img/skill/mongodb.png', level: 50, category: 'Database', color: 'from-green-600 to-lime-700', position: { bottom: '10%', left: '30%' }, delay: 1.4 },
        { name: 'GitHub', src: '/assets/img/skill/github.png', level: 89, category: 'Version Control', color: 'from-gray-400 to-gray-600', position: { bottom: '23%', right: '5%' }, delay: 1.5 },
    ];

    const [hoveredTech, setHoveredTech] = useState<FloatingTech | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        setIsVisible(true);

        const particleArray: Particle[] = [...Array(20)].map((_, i) => ({
            key: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            animationDelay: Math.random() * 3,
        }));
        setParticles(particleArray);
    }, []);

    return (
        <section className="relative z-10 w-full bg-black py-20 px-4 sm:px-8 md:py-32">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center justify-center gap-16 md:flex-row">
                    <div className="relative w-full max-w-lg h-[500px] md:w-1/2">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
                                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                                
                                <div className="relative w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border-2 border-gray-700 overflow-hidden">
                                    <Image
                                        src="/assets/img/icon.png"
                                        alt="My Profile"
                                        width={64}
                                        height={64}
                                        className="rounded-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {floatingTechStack.map((tech) => (
                            <div
                                key={tech.name}
                                className={`absolute transform transition-all duration-700 cursor-pointer ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                                style={{
                                    ...tech.position,
                                    transitionDelay: `${tech.delay}s`
                                }}
                                onMouseEnter={() => setHoveredTech(tech)}
                                onMouseLeave={() => setHoveredTech(null)}
                            >
                                <div className={`absolute top-1/2 left-1/2 w-px bg-gradient-to-r ${tech.color} opacity-30 transition-opacity duration-300 ${
                                    hoveredTech?.name === tech.name ? 'opacity-60' : ''
                                }`}
                                style={{
                                    height: '60px',
                                    transform: 'translate(-50%, -50%) rotate(45deg)',
                                    transformOrigin: 'center'
                                }}></div>

                                <div className={`relative group transition-all duration-300 ${
                                    hoveredTech?.name === tech.name ? 'scale-125 z-30' : 'hover:scale-110'
                                }`}>
                                    <div className={`absolute -inset-2 rounded-full bg-gradient-to-r ${tech.color} opacity-0 blur-md transition-opacity duration-300 ${
                                        hoveredTech?.name === tech.name ? 'opacity-40' : 'group-hover:opacity-20'
                                    }`}></div>
                                    
                                    <div className="relative w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full p-2 border border-gray-700 group-hover:border-gray-600 transition-colors duration-300">
                                        <Image
                                            src={tech.src}
                                            alt={tech.name}
                                            width={32}
                                            height={32}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    <div className="absolute inset-0 pointer-events-none">
                                        <div 
                                            className="w-full h-full animate-bounce opacity-60"
                                            style={{
                                                animationDelay: `${tech.delay}s`,
                                                animationDuration: '3s'
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                {hoveredTech?.name === tech.name && (
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-40">
                                        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 min-w-[140px] shadow-xl">
                                            <div className="text-white font-semibold text-sm">{tech.name}</div>
                                            <div className="text-gray-400 text-xs mb-2">{tech.category}</div>
                                            
                                            <div className="w-full bg-gray-700 rounded-full h-2 mb-1">
                                                <div 
                                                    className={`h-2 rounded-full bg-gradient-to-r ${tech.color} transition-all duration-500`}
                                                    style={{ width: `${tech.level}%` }}
                                                ></div>
                                            </div>
                                            <div className="text-white text-xs font-medium">{tech.level}%</div>
                                            
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Background Particles */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            {particles.map((particle) => (
                                <div
                                    key={particle.key}
                                    className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-float"
                                    style={{
                                        left: `${particle.left}%`,
                                        top: `${particle.top}%`,
                                        animationDelay: `${particle.animationDelay}s`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="w-full text-center md:w-1/2 md:text-left">
                        <h2 className="text-5xl font-light leading-tight text-white sm:text-6xl">
                            <span className="text-white">About Me</span>
                        </h2>
                        <p className="mt-6 font-light leading-relaxed text-gray-400">
                            Halo! Saya adalah seorang desainer dan pengembang yang bersemangat dalam menciptakan pengalaman digital yang menarik. Saya memiliki keahlian dalam desain UI/UX dan pengembangan web full-stack.
                        </p>
                        <p className="mt-4 font-light leading-relaxed text-gray-400">
                            Dengan pengalaman saya, saya berkomitmen untuk terus belajar dan mengadaptasi teknologi terbaru untuk memberikan solusi terbaik. Mari kita ciptakan sesuatu yang luar biasa bersama!
                        </p>
                        
                        {/* Tech Summary */}
                        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                            <h3 className="text-white font-semibold mb-3">Tech Stack</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                <div>
                                    <div className="text-orange-400 font-medium mb-1">Frontend:</div>
                                    <div className="text-gray-300 text-xs mb-2">Html, Css, Javascript, React, Next.js</div>
                                </div>
                                <div>
                                    <div className="text-purple-400 font-medium mb-1">Backend:</div>
                                    <div className="text-gray-300 text-xs mb-2">PHP, Laravel, Node.js, Express.js</div>
                                </div>
                                <div>
                                    <div className="text-teal-400 font-medium mb-1">Styling:</div>
                                    <div className="text-gray-300 text-xs mb-2">Tailwind CSS, Bootstrap</div>
                                </div>
                                <div>
                                    <div className="text-blue-400 font-medium mb-1">Tools & DB:</div>
                                    <div className="text-gray-300 text-xs">MySQL, MongoDB, Figma, Git, GitHub</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}