'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Filter, User, ArrowRight } from 'lucide-react';

export default function SolutionSection() {
    return (
        <section className="w-full bg-slate-50 dark:bg-deep-slate py-24 px-4 overflow-hidden relative border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            {/* Background Blueprint Grid */}
            <div className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '20px 20px' }}
            />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-signal-blue/30 bg-signal-blue/10 text-signal-blue font-mono text-sm">
                        <Filter className="w-4 h-4" /> THE BYC METHODOLOGY
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-sans text-slate-900 dark:text-white">The Diagnostic Funnel</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-sans text-lg">
                        We don't just train. <span className="text-slate-900 dark:text-white font-medium">We filter.</span> Our process is designed to identify talent, not manufacture it where it doesn't exist.
                    </p>
                </div>

                {/* Pipeline Visual */}
                <div className="relative w-full overflow-hidden p-6">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">

                        {/* Step 1: Deep Immersion */}
                        <div className="flex-1 flex flex-col items-center text-center gap-4 group">
                            <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center relative z-10 group-hover:border-signal-blue transition-colors shadow-sm">
                                <span className="font-mono text-xl text-slate-400 group-hover:text-signal-blue dark:group-hover:text-white">01</span>
                                {/* Input Particles */}
                                <motion.div
                                    className="absolute -left-20 top-1/2 -translate-y-1/2 flex gap-2"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                >
                                    {[...Array(3)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full"
                                            animate={{ x: [0, 80], opacity: [0, 1, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                        />
                                    ))}
                                </motion.div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans">Deep Immersion</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">Input: Theory meets brutal Hands-on Labs.</p>
                        </div>

                        {/* Connector 1 */}
                        <div className="hidden lg:block w-32 h-0.5 bg-slate-300 dark:bg-slate-700 relative">
                            <motion.div
                                className="absolute top-1/2 -translate-y-1/2 h-1 w-8 bg-signal-blue rounded-full"
                                animate={{ x: [-30, 120] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                        </div>

                        {/* Step 2: The Veteran Filter */}
                        <div className="flex-1 flex flex-col items-center text-center gap-4 group">
                            <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 border-2 border-warning-amber flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                                <Filter className="w-6 h-6 text-warning-amber" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans">The Veteran Filter</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">Processing: Veterans review data. 40% Drop-off.</p>

                            {/* Drop-off Animation Visual */}
                            <div className="absolute top-20 right-0 w-full h-20 overflow-hidden pointer-events-none opacity-30">
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={`drop-${i}`}
                                        className="absolute left-1/2 w-1 h-1 bg-red-500 rounded-full"
                                        animate={{ y: [0, 50], opacity: [1, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.7 }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Connector 2 */}
                        <div className="hidden lg:block w-32 h-0.5 bg-slate-300 dark:bg-slate-700 relative">
                            <motion.div
                                className="absolute top-1/2 -translate-y-1/2 h-1 w-8 bg-emerald-500 rounded-full"
                                animate={{ x: [-30, 120] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                            />
                        </div>

                        {/* Step 3: Role-Ready */}
                        <div className="flex-1 flex flex-col items-center text-center gap-4 group">
                            <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-500 flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                                <Check className="w-8 h-8 text-emerald-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans">Role-Ready</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">Output: Mapped to 1 of 5 specific roles.</p>
                        </div>

                    </div>
                </div>

                {/* Sub-note */}
                <div className="mt-12 text-center">
                    <div className="inline-block p-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 rounded-lg max-w-2xl shadow-sm">
                        <div className="flex flex-col md:flex-row items-center gap-4 text-left">
                            <div className="w-full md:w-auto flex justify-center">
                                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-300 dark:border-slate-600">
                                    <ArrowRight className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider mb-1">Alternative Path: Redirected</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-xs font-mono">"Early Exit" with data on why this path isn't a fit. We verify aptitude before you commit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
