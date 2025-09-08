'use client';
import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';

export default function SimpleFooter() {
  const socialLinks = [
    {
      icon: IconBrandGithub,
      href: 'https://github.com/kaifahreza',
      label: 'GitHub'
    },
    {
      icon: IconBrandLinkedin,
      href: 'https://www.linkedin.com/in/arul-fitrah-insani-868730362/',
      label: 'LinkedIn'
    },
    {
      icon: IconBrandX,
      href: 'https://x.com/yourusername',
      label: 'X (Twitter)'
    },
  ];

  return (
    <footer className="bg-black dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright Section */}
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Arcshin. All Rights Reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}