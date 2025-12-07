'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
    { name: 'Problem', href: '#problem' },
    { name: 'Methodology', href: '#solution' },
    { name: 'Roles', href: '#roles' },
    { name: 'ROI', href: '#roi' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
                    ? 'bg-white/80 dark:bg-deep-slate/80 backdrop-blur-md border-slate-200 dark:border-slate-800 py-3'
                    : 'bg-transparent border-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-slate-900 dark:bg-slate-800 rounded flex items-center justify-center border border-slate-700 group-hover:border-signal-blue transition-colors">
                        <Terminal className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-mono font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                        BYC <span className="text-slate-400 dark:text-slate-500">//</span> SYSTEM
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-signal-blue group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    <Link
                        href="/apply"
                        className="px-5 py-2 bg-signal-blue hover:bg-blue-600 text-white text-sm font-semibold rounded transition-all shadow-md hover:shadow-lg shadow-blue-500/20"
                    >
                        APPLY_NOW
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button
                        className="text-slate-900 dark:text-slate-300 hover:text-signal-blue"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

            </div>

            {/* Mobile Menu Content */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
                    >
                        <div className="px-4 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-slate-900 dark:text-slate-300 hover:text-signal-blue"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <hr className="border-slate-200 dark:border-slate-800 my-2" />
                            <Link href="/apply" className="text-signal-blue font-bold">APPLY_NOW &rarr;</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
