'use client';

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';
import { TrendingUp, Users, Clock, DollarSign, Calculator } from 'lucide-react';

export default function ROISection() {
    const [hires, setHires] = useState(5);

    // ROI Calculations
    const traditionalTimePerHire = 45; // days
    const bycTimePerHire = 7; // days
    const timeSaved = (traditionalTimePerHire - bycTimePerHire) * hires;

    const traditionalCostPerHire = 5000; // estimated cost in $ roughly
    const bycCostPerHire = 2000; // estimated
    const costSaved = (traditionalCostPerHire - bycCostPerHire) * hires;

    const data = [
        {
            name: 'Traditional',
            days: traditionalTimePerHire * hires,
            cost: traditionalCostPerHire * hires,
            color: '#94a3b8' // slate-400
        },
        {
            name: 'With BYC',
            days: bycTimePerHire * hires,
            cost: bycCostPerHire * hires,
            color: '#3b82f6' // signal-blue
        }
    ];

    return (
        <section className="w-full bg-slate-50 dark:bg-deep-slate border-t border-slate-200 dark:border-slate-800 py-24 px-4 transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-mono text-xs mb-4">
                        <Calculator className="w-3 h-3" />
                        <span>ROI CALCULATOR</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-sans text-slate-900 dark:text-white mb-6">
                        Stop burning <span className="text-terminal-red">cycles.</span> <br />
                        Start shipping <span className="text-emerald-500">features.</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Calculate how much engineering time and budget you save by skipping the "training wheels" phase.
                    </p>
                </div>

                {/* Value Props: Colleges & Employers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* For Colleges */}
                    <div className="p-8 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors group">
                        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold tracking-wider font-mono text-sm uppercase mb-4">
                            <TrendingUp className="w-4 h-4" /> For Colleges
                        </div>
                        <h3 className="text-xl font-bold font-sans text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Focus on "Placement Yield".</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Stop sending 100 resumes to get 1 select. Send 20 BYC-verified resumes to get 15 selects. Protect your brand equity.
                        </p>
                    </div>

                    {/* For Employers */}
                    <div className="p-8 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors group">
                        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-500 font-bold tracking-wider font-mono text-sm uppercase mb-4">
                            <Users className="w-4 h-4" /> For Employers
                        </div>
                        <h3 className="text-xl font-bold font-sans text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-500 transition-colors">Zero Noise Hiring.</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            When you interview a BYC candidate, the technical screening is already done. You are interviewing for culture fit, not basic competency.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Controls & Metrics */}
                    <div className="space-y-8">
                        <div className="p-8 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm backdrop-blur-sm">
                            <label className="block text-sm font-mono text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wider">
                                Projected Hires: <span className="text-signal-blue font-bold text-xl ml-2">{hires}</span>
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="20"
                                value={hires}
                                onChange={(e) => setHires(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-signal-blue"
                            />
                            <div className="flex justify-between text-xs text-slate-400 font-mono mt-2">
                                <span>1 Hire</span>
                                <span>20 Hires</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 rounded-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Clock className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <div className="text-sm font-mono text-emerald-700 dark:text-emerald-500 uppercase tracking-wider mb-1">Time Saved</div>
                                <div className="text-3xl md:text-4xl font-bold text-emerald-900 dark:text-emerald-400">
                                    {timeSaved} <span className="text-lg font-normal opacity-70">days</span>
                                </div>
                            </div>

                            <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <DollarSign className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <div className="text-sm font-mono text-indigo-700 dark:text-indigo-500 uppercase tracking-wider mb-1">Budget Saved</div>
                                <div className="text-3xl md:text-4xl font-bold text-indigo-900 dark:text-indigo-400">
                                    ${(costSaved / 1000).toFixed(1)}k
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chart Visualization */}
                    <div className="h-[400px] w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col">
                        <div className="text-center text-sm font-mono text-slate-400 mb-6 uppercase shrink-0">Time to Productivity (Days)</div>
                        <div className="flex-1 min-h-0 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#334155" opacity={0.2} />
                                    <XAxis type="number" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis dataKey="name" type="category" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} width={80} />
                                    <Tooltip
                                        cursor={{ fill: 'transparent' }}
                                        contentStyle={{
                                            backgroundColor: '#0f172a',
                                            borderColor: '#334155',
                                            borderRadius: '8px',
                                            color: '#f8fafc'
                                        }}
                                    />
                                    <Bar dataKey="days" radius={[0, 4, 4, 0]} barSize={40}>
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
