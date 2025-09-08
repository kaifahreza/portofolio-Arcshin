'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface Project {
    title: string;
    image: string;
    category: string;
    link?: string;
}

interface ProjectImageProps extends Omit<ImageProps, 'src' | 'alt'> {
    src: string;
    alt: string;
}

// Component untuk handle image error dengan type safety
const ProjectImage = ({ src, alt, ...props }: ProjectImageProps) => {
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

const projects: Project[] = [
  {
    title: 'Personal Portofolio',
    category: 'Design & Development',
    image: '/assets/img/projects/project1.jpg',
    link: '#'
  },
  {
    title: 'Weater',
    category: 'App & Development',
    image: '/assets/img/projects/project2.jpg',
    link: '#'
  },
  {
    title: 'Ecommerce',
    category: 'App & Development',
    image: '/assets/img/projects/project3.jpg',
    link: '#'
  },
];

export default function ProjectMarquee() {
  // Duplicate projects untuk seamless loop
  const duplicatedProjects = [...projects, ...projects, ...projects];

  return (
    <section className="relative w-full bg-black py-20 overflow-hidden">
      <div className="relative">
        {/* First Marquee - Speed lebih cepat (25s) */}
        <div className="flex space-x-6 mb-8 animate-marquee">
          {duplicatedProjects.map((project, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-80 h-60 group cursor-pointer transform transition-all duration-500 hover:scale-105"
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl border-2 border-gray-700/30 hover:border-blue-400/50 transition-all duration-300">
                {/* Image Only */}
                <ProjectImage
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Subtle Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]" />
              </div>
            </div>
          ))}
        </div>

        {/* Second Marquee (Reverse) - Speed lebih cepat (25s) */}
        <div className="flex space-x-6 animate-marquee-reverse">
          {duplicatedProjects.map((project, index) => (
            <div
              key={`reverse-${index}`}
              className="flex-shrink-0 w-80 h-60 group cursor-pointer transform transition-all duration-500 hover:scale-105"
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl border-2 border-gray-700/30 hover:border-purple-400/50 transition-all duration-300">
                {/* Image Only */}
                <ProjectImage
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Subtle Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* CSS Styles dengan TypeScript-friendly approach */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-marquee,
          .animate-marquee-reverse {
            animation-duration: 35s;
          }
          
          .flex-shrink-0 {
            width: 300px !important;
            height: 200px !important;
          }
        }

        @media (max-width: 640px) {
          .animate-marquee,
          .animate-marquee-reverse {
            animation-duration: 45s;
          }
          
          .flex-shrink-0 {
            width: 250px !important;
            height: 180px !important;
          }
          
          .space-x-6 {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
}