'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Definisikan tipe data untuk partikel
interface Particle {
    key: number;
    size: number;
    opacity: number;
    duration: number;
    delay: number;
    left: number;
    top: number;
}

// Definisikan tipe data untuk bentuk geometris
interface GeometricShape {
    key: string;
    size: number;
    left: number;
    top: number;
    duration: number;
    delay: number;
    borderRadius: string;
    transform: string;
}

// Definisikan tipe untuk wave particles
interface WaveParticle {
    key: number;
    delay: number;
    size: number;
    left: number;
}

const greetings = [
    { text: "Hello", lang: "English" },
    { text: "Halo", lang: "Indonesian" },
    { text: "こんにちは", lang: "Japanese" },
    { text: "안녕하세요", lang: "Korean" },
    { text: "你好", lang: "Chinese" },
    { text: "Bonjour", lang: "French" },
    { text: "Hola", lang: "Spanish" },
    { text: "Guten Tag", lang: "German" },
    { text: "Ciao", lang: "Italian" },
    { text: "Olá", lang: "Portuguese" },
    { text: "Привет", lang: "Russian" },
    { text: "مرحبا", lang: "Arabic" },
    { text: "नमस्ते", lang: "Hindi" },
    { text: "สวัสดี", lang: "Thai" },
    { text: "Xin chào", lang: "Vietnamese" }
];

interface LoadingScreenProps {
    progress?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress = 0 }) => {
    const [currentGreeting, setCurrentGreeting] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isClient, setIsClient] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(progress);

    const [particles, setParticles] = useState<Particle[]>([]);
    const [geos, setGeos] = useState<GeometricShape[]>([]);
    const [waveParticles, setWaveParticles] = useState<WaveParticle[]>([]);

    useEffect(() => {
        // Set state isClient ke true setelah komponen di-mount di browser
        setIsClient(true);
        
        // Update loading progress from props
        setLoadingProgress(progress);
        
        // Generate particles only on the client side
        const particleArray: Particle[] = [...Array(50)].map((_, i) => ({
            key: i,
            size: Math.random() * 4 + 2,
            opacity: Math.random() * 0.8 + 0.2,
            duration: Math.random() * 15 + 10,
            delay: Math.random() * 8,
            left: Math.random() * 100,
            top: Math.random() * 100,
        }));
        setParticles(particleArray);

        // Generate geometric shapes only on the client side
        const geoArray: GeometricShape[] = [...Array(12)].map((_, i) => ({
            key: `geo-${i}`,
            size: 15 + Math.random() * 40,
            left: Math.random() * 100,
            top: Math.random() * 100,
            duration: 8 + Math.random() * 25,
            delay: Math.random() * 6,
            borderRadius: Math.random() > 0.6 ? '50%' : Math.random() > 0.3 ? '20%' : '0%',
            transform: `rotate(${Math.random() * 360}deg)`
        }));
        setGeos(geoArray);

        // Generate wave particles
        const waveArray: WaveParticle[] = [...Array(20)].map((_, i) => ({
            key: i,
            delay: i * 0.1,
            size: Math.random() * 3 + 2,
            left: i * 5,
        }));
        setWaveParticles(waveArray);
        
        // Interval for changing greetings
        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentGreeting((prev) => (prev + 1) % greetings.length);
                setIsVisible(true);
            }, 300);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [progress]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
            {/* Hanya render elemen-elemen acak jika isClient sudah true */}
            {isClient && (
                <div className="absolute inset-0 overflow-hidden">
                    {/* Enhanced gradient orbs with breathing effect */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/15 via-blue-600/10 to-indigo-600/15 rounded-full blur-3xl animate-pulse" 
                         style={{ 
                            animationDuration: '6s',
                            transform: 'scale(1)',
                            animation: 'breathe 8s ease-in-out infinite'
                        }}>
                    </div>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-600/12 via-teal-600/8 to-blue-600/12 rounded-full blur-3xl animate-pulse" 
                         style={{ 
                            animationDuration: '7s', 
                            animationDelay: '3s',
                            animation: 'breathe 10s ease-in-out infinite reverse'
                         }}>
                    </div>
                    <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-to-r from-indigo-600/8 to-purple-600/12 rounded-full blur-2xl animate-pulse" 
                         style={{ 
                            animationDuration: '9s', 
                            animationDelay: '1.5s',
                            animation: 'float 12s ease-in-out infinite'
                        }}>
                    </div>
                    
                    {/* Enhanced floating particles with glow effect */}
                    {particles.map((particle) => (
                        <div
                            key={particle.key}
                            className="absolute rounded-full animate-bounce"
                            style={{
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                                left: `${particle.left}%`,
                                top: `${particle.top}%`,
                                opacity: particle.opacity,
                                background: `radial-gradient(circle, rgba(255,255,255,${particle.opacity}) 0%, rgba(255,255,255,0.1) 70%, transparent 100%)`,
                                boxShadow: `0 0 ${particle.size * 2}px rgba(255,255,255,${particle.opacity * 0.5})`,
                                animationDuration: `${particle.duration}s`,
                                animationDelay: `${particle.delay}s`,
                                animationIterationCount: 'infinite',
                                animationTimingFunction: 'ease-in-out',
                                transform: `translateY(${Math.sin(particle.key) * 20}px)`
                            }}
                        ></div>
                    ))}

                    {/* Wave effect particles */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
                        {waveParticles.map((wave) => (
                            <div
                                key={wave.key}
                                className="absolute bottom-0 rounded-full bg-white/5 animate-bounce"
                                style={{
                                    width: `${wave.size}px`,
                                    height: `${wave.size}px`,
                                    left: `${wave.left}%`,
                                    animationDelay: `${wave.delay}s`,
                                    animationDuration: '2s',
                                    transform: `translateY(${Math.sin(wave.key * 0.5) * 10}px)`
                                }}
                            />
                        ))}
                    </div>

                    {/* Enhanced grid pattern with movement */}
                    <div 
                        className="absolute inset-0 opacity-3"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                            `,
                            backgroundSize: '60px 60px',
                            animation: 'gridMove 20s linear infinite'
                        }}
                    ></div>

                    {/* Enhanced floating geometric shapes */}
                    {geos.map((geo) => (
                        <div
                            key={geo.key}
                            className="absolute border animate-spin"
                            style={{
                                width: `${geo.size}px`,
                                height: `${geo.size}px`,
                                left: `${geo.left}%`,
                                top: `${geo.top}%`,
                                animationDuration: `${geo.duration}s`,
                                animationDelay: `${geo.delay}s`,
                                borderRadius: geo.borderRadius,
                                transform: geo.transform,
                                borderColor: `rgba(255,255,255,0.1)`,
                                boxShadow: `inset 0 0 ${geo.size/4}px rgba(255,255,255,0.05)`,
                                background: `linear-gradient(45deg, rgba(255,255,255,0.02), transparent)`
                            }}
                        ></div>
                    ))}

                    {/* Scanning line effect */}
                    <div 
                        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        style={{
                            top: '50%',
                            animation: 'scan 4s ease-in-out infinite'
                        }}
                    ></div>
                </div>
            )}

            <div className="flex flex-col items-center z-10 relative">
                {/* Enhanced Loading Spinner with Character Image and Orbit */}
                <div className="relative w-20 h-20 mb-8">
                    {/* Outer rotating ring */}
                    <div className="absolute inset-0 w-20 h-20 border-2 border-gray-700 rounded-full"></div>
                    <div className="absolute inset-0 w-20 h-20 border-2 border-t-white border-r-cyan-400 rounded-full animate-spin"
                        style={{ animationDuration: '1s' }}></div>
                    
                    {/* Middle ring */}
                    <div className="absolute inset-1 w-18 h-18 border border-gray-600 rounded-full animate-spin" 
                        style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
                    
                    {/* Inner ring with glow */}
                    <div className="absolute inset-2 w-16 h-16 border border-blue-400/50 rounded-full animate-spin"
                        style={{ 
                            animationDuration: '3s',
                            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
                        }}></div>
                    
                    {/* Character Image in Center with pulse effect */}
                    <div className="absolute inset-4 w-12 h-12 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center animate-pulse"
                        style={{
                            boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
                            animationDuration: '2s'
                        }}>
                        <Image 
                            src="/assets/img/icon.png"
                            alt="Character Avatar"
                            width={40}
                            height={40}
                            className="rounded-full object-cover"
                            priority
                        />
                    </div>
                    
                    {/* Orbiting dots */}
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-white rounded-full"
                            style={{
                                top: '50%',
                                left: '50%',
                                transformOrigin: '0 0',
                                transform: `rotate(${i * 120}deg) translateX(45px) translateY(-4px)`,
                                animation: `orbit 3s linear infinite`,
                                animationDelay: `${i * 1}s`,
                                boxShadow: '0 0 8px rgba(255, 255, 255, 0.6)'
                            }}
                        />
                    ))}
                </div>
                
                {/* Enhanced Greeting Text with scale and fade */}
                <div 
                    className={`text-center transition-all duration-500 transform ${
                        isVisible 
                            ? 'opacity-100 translate-y-0 scale-100' 
                            : 'opacity-0 translate-y-8 scale-95'
                    }`}
                >
                    <h1 className="text-5xl md:text-7xl font-extralight text-white mb-3 tracking-wider"
                        style={{
                            textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
                            background: 'linear-gradient(45deg, #ffffff, #e0e7ff, #ffffff)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            animation: 'textGlow 3s ease-in-out infinite alternate'
                        }}>
                        {greetings[currentGreeting].text}
                    </h1>
                    <p className="text-gray-300 text-base uppercase tracking-widest font-light">
                        {greetings[currentGreeting].lang}
                    </p>
                </div>

                {/* Enhanced Loading Progress Dots with wave effect */}
                <div className="flex space-x-3 mt-10">
                    {[0, 1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className="w-3 h-3 bg-white rounded-full"
                            style={{
                                opacity: 0.3,
                                animation: `wave 1.5s ease-in-out infinite`,
                                animationDelay: `${i * 0.2}s`,
                                boxShadow: '0 0 10px rgba(255, 255, 255, 0.4)'
                            }}
                        ></div>
                    ))}
                </div>

                {/* Loading Progress Bar */}
                <div className="w-64 h-1 bg-gray-700 rounded-full mt-8 overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 rounded-full transition-all duration-300 ease-out"
                        style={{ 
                            width: `${Math.min(loadingProgress, 100)}%`,
                            boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
                        }}
                    ></div>
                </div>

                {/* Enhanced Loading Text with typewriter effect */}
                <p className="text-gray-300 text-sm mt-6 font-light tracking-wide">
                    <span 
                        style={{
                            animation: 'typewriter 3s ease-in-out infinite'
                        }}
                    >
                        Preparing your experience...
                    </span>
                </p>

                {/* Loading percentage */}
                <p className="text-gray-400 text-xs mt-2 font-mono">
                    {Math.round(loadingProgress)}%
                </p>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes breathe {
                    0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.7; }
                    50% { transform: scale(1.1) rotate(180deg); opacity: 1; }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-20px) rotate(120deg); }
                    66% { transform: translateY(10px) rotate(240deg); }
                }
                
                @keyframes gridMove {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(60px, 60px); }
                }
                
                @keyframes scan {
                    0% { top: 0%; opacity: 0; }
                    50% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
                
                @keyframes orbit {
                    0% { transform: rotate(0deg) translateX(45px) translateY(-4px); }
                    100% { transform: rotate(360deg) translateX(45px) translateY(-4px); }
                }
                
                @keyframes textGlow {
                    0% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.3); }
                    100% { text-shadow: 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(59, 130, 246, 0.3); }
                }
                
                @keyframes wave {
                    0%, 40%, 100% { 
                        transform: translateY(0) scale(1); 
                        opacity: 0.3; 
                    }
                    20% { 
                        transform: translateY(-10px) scale(1.2); 
                        opacity: 1; 
                    }
                }
                
                @keyframes typewriter {
                    0% { opacity: 1; }
                    50% { opacity: 0.5; }
                    100% { opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default LoadingScreen;