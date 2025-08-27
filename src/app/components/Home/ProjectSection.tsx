'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Project {
    title: string;
    category: string;
    image: string;
    link?: string;
}

const projects: Project[] = [
    {
        title: 'Personal Portofolio',
        category: 'Design & Development',
        image: '/assets/img/projects/project1.jpg',
        link: '#'
    },
    {
        title: 'Weater',
        category: 'App',
        image: '/assets/img/projects/project2.jpg',
        link: '#'
    },
    {
        title: 'PPLK ITERA 2024',
        category: 'Design & Development',
        image: '/assets/img/projects/project3.jpg',
        link: '#'
    },
    {
        title: 'Project Selanjutnya',
        category: 'Design & Development',
        image: '/assets/img/projects/project4.jpg',
        link: '#'
    },
];

// Component untuk handle image error
const ProjectImage = ({ src, alt, ...props }: any) => {
    const [imgSrc, setImgSrc] = useState(src);
    
    return (
        <Image
            {...props}
            src={imgSrc}
            alt={alt}
            onError={() => setImgSrc('/assets/img/placeholder-project.jpg')}
        />
    );
};

export default function ProjectSection() {
    const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const checkMobile = () => {
                setIsMobile(window.innerWidth < 768);
            };
            
            checkMobile();
            window.addEventListener('resize', checkMobile);
            
            return () => {
                window.removeEventListener('resize', checkMobile);
            };
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined' && hoveredProject && !isMobile) {
            const handleMouseMove = (e: MouseEvent) => {
                setMousePosition({ x: e.clientX, y: e.clientY });
            };

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, [hoveredProject, isMobile]);

    return (
        <section className="relative w-full bg-black min-h-screen py-20 px-4 sm:px-8 md:py-32 overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                <h2 className="text-5xl md:text-6xl font-light leading-tight text-white mb-20 text-center md:text-left">
                    List of My Works
                </h2>
                
                <div className="space-y-0">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="relative border-b border-gray-800/50 cursor-pointer group"
                            onMouseEnter={() => !isMobile && setHoveredProject(project)}
                            onMouseLeave={() => !isMobile && setHoveredProject(null)}
                            onClick={() => isMobile && project.link && window.open(project.link, '_blank')}
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 md:py-12 transition-all duration-300">
                                <div className="flex items-center space-x-4 mb-2 md:mb-0">
                                    <h3 className="text-2xl md:text-5xl font-light text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-4">
                                        {project.title}
                                    </h3>
                                </div>
                                <span className="text-sm md:text-base text-gray-500 transition-colors duration-300 group-hover:text-gray-300">
                                    {project.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Image preview that follows cursor - Only show on desktop */}
                {hoveredProject && !isMobile && (
                    <div 
                        className="fixed z-50 pointer-events-none transition-all duration-200 ease-out hidden md:block"
                        style={{
                            left: `${mousePosition.x + 20}px`,
                            top: `${mousePosition.y - 150}px`,
                        }}
                    >
                        <div className="relative">
                            <ProjectImage 
                                src={hoveredProject.image} 
                                alt={hoveredProject.title} 
                                width={320}
                                height={240}
                                className="w-80 h-60 object-cover rounded-lg shadow-2xl border border-gray-700/50" 
                                priority
                            />
                            {/* Glow effect around image */}
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500/20 via-purple-500/20 to-blue-500/20 blur-xl -z-10"></div>
                        </div>
                    </div>
                )}
            </div>
            
            {/* Bottom fade effect */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </section>
    );
}