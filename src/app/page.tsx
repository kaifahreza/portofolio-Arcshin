'use client';

import { useState, useEffect } from 'react';
import HeroSection from './components/Home/HeroSection';
import Header from './components/Layout/Header';
import AboutSection from './components/Home/AboutSection';
import ProjectSection from './components/Home/ProjectSection';
import ProjectMarquee from './components/Home/ProjectMarquee';
import ContactSection from './components/Home/ContactSection';
import FooterSection from './components/Home/FooterSection';
import LoadingScreen from './components/LoadingScreen';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      for (let i = 0; i <= 100; i += 5) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setProgress(i);
      }
      
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsLoading(false);
    };

    loadData();
  }, []);

  if (isLoading) {
    return <LoadingScreen progress={progress} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Header Component */}
      <Header />
      
      {/* Home Content */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Project Section */}
      <ProjectSection />

      {/* Project Marquee */}
      <ProjectMarquee />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}