'use client';

import React from 'react';
import { AlertTriangle, XCircle, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProblemSection() {
    return (
        <section className="w-full bg-slate-100 dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 py-24 px-4 relative overflow-hidden transition-colors duration-300">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content: High Contrast "System Failure" */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2 font-mono text-red-600 font-bold uppercase tracking-widest text-sm">
                        <AlertTriangle className="w-5 h-5" />
                        System Failure
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight text-slate-900 dark:text-white">
                        The <span className="bg-red-600 text-white px-2">Blind Approach</span> is failing everyone.
                    </h2>

                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-sans max-w-xl">
                        Colleges push students into a generic funnel. Students apply blindly for roles they don't understand.
                        Employers waste thousands of hours interviewing candidates who look good on paper but fail in practice.
                    </p>

                    <div className="grid gap-4 mt-4">
                        <div className="flex items-start gap-4 p-4 border-l-4 border-red-500 bg-white dark:bg-slate-800 shadow-sm">
                            <div className="mt-1"><XCircle className="w-6 h-6 text-red-500" /></div>
                            <div>
                                <h3 className="font-bold font-mono text-lg text-slate-900 dark:text-white">WASTED TUITION</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">Students paying for skills they will never use.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 border-l-4 border-red-500 bg-white dark:bg-slate-800 shadow-sm">
                            <div className="mt-1"><XCircle className="w-6 h-6 text-red-500" /></div>
                            <div>
                                <h3 className="font-bold font-mono text-lg text-slate-900 dark:text-white">RESUME SPAM</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">Employers drowning in unqualified applications.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 border-l-4 border-red-500 bg-white dark:bg-slate-800 shadow-sm">
                            <div className="mt-1"><XCircle className="w-6 h-6 text-red-500" /></div>
                            <div>
                                <h3 className="font-bold font-mono text-lg text-slate-900 dark:text-white">CAREER MISMATCH</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">60% of junior engineers quit or pivot within 2 years.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content: Console Output Visualization */}
                <div className="relative font-mono text-sm bg-slate-900 text-slate-300 p-6 rounded-lg shadow-2xl border border-slate-700 h-full min-h-[400px] flex flex-col">
                    <div className="flex items-center gap-2 border-b border-slate-700 pb-4 mb-4 text-slate-500">
                        <Terminal className="w-4 h-4" />
                        <span>career_path_v1.log</span>
                    </div>

                    <div className="space-y-3 font-mono text-xs md:text-sm">
                        <div className="text-emerald-500">&gt; INITIATING GRADUATE SEQUENCE...</div>
                        <div className="text-slate-400">&gt; Loading generic_curriculum.exe</div>
                        <div className="text-slate-400">&gt; Applying for role: "Software Engineer"</div>
                        <div className="text-yellow-500">&gt; WARNING: Role definition ambiguous.</div>
                        <div className="text-slate-400">&gt; Submitting resume to 150 endpoints...</div>

                        {/* Glitch Animated Error Block */}
                        <motion.div
                            animate={{ opacity: [1, 0.5, 1, 0.8, 1] }}
                            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                            className="text-red-500 mt-4 bg-red-500/10 p-2 border border-red-500/20"
                        >
                            &gt; ERROR: SKILL MISMATCH DETECTED<br />
                            &gt; FATAL: Candidate failed technical interview.<br />
                            &gt; REASON: Lack of practical specialization.
                        </motion.div>

                        <div className="text-slate-400 mt-4">&gt; Retry? (Y/N)</div>
                        <motion.span
                            animate={{ opacity: [0, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="text-white inline-block w-2 h-4 bg-white ml-1 align-middle"
                        />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-50 pointer-events-none" />
                </div>

            </div>
        </section>
    );
}
