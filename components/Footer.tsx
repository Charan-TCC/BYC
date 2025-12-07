'use client';

import React from 'react';
import Link from 'next/link';
import { Terminal, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-500 border-t border-slate-200 dark:border-slate-900 pt-16 pb-8 font-sans transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                            <Terminal className="w-5 h-5" />
                            <span className="font-bold text-lg tracking-tight">BYC // SYSTEM</span>
                        </div>
                        <p className="text-sm max-w-xs leading-relaxed">
                            Build Your Career on Truth, not Hype. We promise 100% clarity, even if that means telling you "no."
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="hover:text-signal-blue transition-colors"><Github className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-signal-blue transition-colors"><Twitter className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-signal-blue transition-colors"><Linkedin className="w-5 h-5" /></Link>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-6">Platform</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#problem" className="hover:text-signal-blue transition-colors">The Problem</Link></li>
                            <li><Link href="#solution" className="hover:text-signal-blue transition-colors">Methodology</Link></li>
                            <li><Link href="#roles" className="hover:text-signal-blue transition-colors">Career Tracks</Link></li>
                            <li><Link href="#roi" className="hover:text-signal-blue transition-colors">Outcomes & ROI</Link></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-6">Resources</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="hover:text-signal-blue transition-colors">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-signal-blue transition-colors">Verify Certificate</Link></li>
                            <li><Link href="#" className="hover:text-signal-blue transition-colors">Partner Portal</Link></li>
                            <li><Link href="#" className="hover:text-signal-blue transition-colors">System Status</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-6">Stay Optimised</h4>
                        <p className="text-xs mb-4">Get the latest engineering insights. No spam.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="dev@email.com"
                                className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded px-3 py-2 text-sm w-full focus:outline-none focus:border-signal-blue transition-colors"
                            />
                            <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-3 py-2 rounded font-bold text-xs hover:opacity-90 transition-opacity">
                                SUBMIT
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono">
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-emerald-600 dark:text-emerald-500 uppercase tracking-widest">All Systems Operational</span>
                    </div>
                    <div className="flex gap-6">
                        <span>© 2024 BuildYourCareers.</span>
                        <Link href="#" className="hover:text-signal-blue">Privacy</Link>
                        <Link href="#" className="hover:text-signal-blue">Terms</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
