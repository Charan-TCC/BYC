'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Activity, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    const [text, setText] = useState('');
    const fullText = 'The End of Career Guesswork.';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) clearInterval(timer);
        }, 50); // Speed of typing
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-50 dark:bg-deep-slate px-4 py-20 transition-colors duration-300">
            {/* Background Grid / Data Viz Effect */}
            <div className="absolute inset-0 w-full h-full opacity-5 dark:opacity-10 pointer-events-none">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: 'linear-gradient(var(--bg-grid) 1px, transparent 1px), linear-gradient(90deg, var(--bg-grid) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        backgroundColor: 'transparent'
                    }}>
                    <div className="w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8">

                {/* Status Badge */}
                <div className="flex items-center gap-2 px-3 py-1 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-full font-mono text-xs tracking-wider text-emerald-600 dark:text-emerald-400">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    STATUS: DIAGNOSTIC ACTIVE
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
                    {text}<span className="animate-pulse text-signal-blue">_</span>
                </h1>

                {/* Sub-headline */}
                <p className="max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    We don't sell dreams. We provide a rigorous, <span className="text-slate-900 dark:text-white font-medium">veteran-led diagnosis</span>.
                    We assess, train, and validate engineering talent to find the role you were built for—or tell you the truth if you aren't.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
                    <Link href="/start"
                        className="group px-8 py-3 bg-signal-blue hover:bg-blue-600 text-white font-semibold rounded-md transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]"
                    >
                        Discover Your Fit
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link href="/partner"
                        className="px-8 py-3 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium rounded-md transition-all flex items-center justify-center"
                    >
                        Partner with Us
                    </Link>
                </div>

                {/* Decorative Technical Elements */}
                <div className="mt-16 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4 text-left font-mono text-xs text-slate-500 opacity-80">
                    <div className="border border-slate-200 dark:border-slate-800 p-4 rounded bg-white/50 dark:bg-slate-900/30 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-signal-blue mb-1">
                            <Activity className="w-4 h-4" /> TYPE CHECK
                        </div>
                        <div>&gt;&gt; Analysing career trajectory...</div>
                        <div>&gt;&gt; identifying skill gaps...</div>
                    </div>
                    <div className="border border-slate-200 dark:border-slate-800 p-4 rounded bg-white/50 dark:bg-slate-900/30 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-emerald-500 mb-1">
                            <CheckCircle className="w-4 h-4" /> VALIDATION
                        </div>
                        <div>&gt;&gt; 98.4% Match Rate Verified</div>
                        <div>&gt;&gt; Technical Assessment: PASSED</div>
                    </div>
                    <div className="border border-slate-200 dark:border-slate-800 p-4 rounded bg-white/50 dark:bg-slate-900/30 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-warning-amber mb-1">
                            <AlertTriangle className="w-4 h-4" /> SYSTEM NOTICE
                        </div>
                        <div>&gt;&gt; No marketing fluff detected.</div>
                        <div>&gt;&gt; Optimization protocols active.</div>
                    </div>
                </div>

            </div>
        </section>
    );
}
