'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { 
    IconMenu2, 
    IconX, 
    IconBriefcase, 
    IconUser, 
    IconPhone,
} from '@tabler/icons-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className="absolute top-0 z-40 flex w-full items-center justify-between p-4 font-light text-white sm:p-9">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative flex items-center">
                        <div className="w-26 h-10 rounded-full border border-gray-100/20 flex items-center justify-center transition-colors duration-300">
                            <div className="relative mr-1">
                                <div className="w-3 h-3 bg-blue-700 rounded-full border-1 border-gray-900"></div>
                                <div className="absolute inset-0 w-3 h-3 bg-blue-700 rounded-full animate-ping opacity-75"></div>
                            </div>
                            <span className="text-sm font-normal tracking-wider">Arcshin</span>
                        </div>
                    </div>
                </Link>
                
                {/* Navigasi Link dengan Icon - Hidden pada mobile, visible pada desktop */}
                <nav className="hidden md:flex items-center">
                    <div className="flex items-center gap-4 rounded-full border border-gray-100/20 px-3 py-2 text-xs leading-tight sm:gap-10 sm:px-5 sm:py-3 sm:text-sm">
                        <Link href="#" className="cursor-pointer flex items-center gap-1">
                            <IconBriefcase className="w-4 h-4" />
                            Works
                        </Link>
                        <Link href="#" className="cursor-pointer flex items-center gap-1">
                            <IconUser className="w-4 h-4" />
                            About
                        </Link>
                        <Link href="/Contact" className="cursor-pointer flex items-center gap-1">
                            <IconPhone className="w-4 h-4" />
                            Contact
                        </Link>
                    </div>
                </nav>

                {/* Hamburger button - Hanya visible di mobile dan tidak saat scroll */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`
                        md:hidden p-2 transition-all duration-300 rounded-full bg-transparent
                        ${isScrolled ? 'opacity-0 invisible' : 'opacity-100 visible'}
                    `}
                >
                    {isOpen ? <IconX className="w-6 h-6 text-white" /> : <IconMenu2 className="w-6 h-6 text-white" />}
                </button>
            </header>

            {/* Hamburger button yang muncul saat scroll - untuk semua device */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    fixed top-4 right-4 z-[60] p-2 transition-all duration-300 rounded-full
                    ${isScrolled ? 'opacity-100 visible' : 'opacity-0 invisible'}
                    ${isOpen ? 'bg-white/10 backdrop-blur-sm' : 'bg-transparent'}
                `}
            >
                {isOpen ? <IconX className="w-6 h-6 text-white" /> : <IconMenu2 className="w-6 h-6 text-white" />}
            </button>

            {/* Navigasi Samping dengan Hover Biru */}
            <nav
                className={`
                    fixed top-0 bottom-0 right-0 z-[55] w-64 bg-black/80 backdrop-blur-lg text-white
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                    flex flex-col items-start gap-8 p-10
                `}
            >
                <div className="flex items-center justify-between w-full">
                    <span className="text-sm text-gray-400">NAVIGATION</span>
                </div>
                <Link 
                    href="#" 
                    onClick={() => setIsOpen(false)} 
                    className="text-4xl font-light hover:text-blue-700 transition-colors flex items-center gap-3"
                >
                    Home
                </Link>
                <Link 
                    href="#" 
                    onClick={() => setIsOpen(false)} 
                    className="text-4xl font-light hover:text-blue-700 transition-colors flex items-center gap-3"
                >
                    Works
                </Link>
                <Link 
                    href="#" 
                    onClick={() => setIsOpen(false)} 
                    className="text-4xl font-light hover:text-blue-700 transition-colors flex items-center gap-3"
                >
                    About
                </Link>
                <Link 
                    href="#" 
                    onClick={() => setIsOpen(false)} 
                    className="text-4xl font-light hover:text-button transition-colors flex items-center gap-3"
                >
                    Contact
                </Link>
            </nav>
        </>
    );
}