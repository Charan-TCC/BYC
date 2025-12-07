'use client';

import React from 'react';
import { Database, Server, ShieldCheck, Cloud, Code, Key } from 'lucide-react';
import {
    SiPython, SiApachespark, SiApachekafka, SiPostgresql,
    SiApacheairflow, SiDbt, SiSnowflake,
    SiPandas, SiRedis, SiAmazon, SiMongodb
} from 'react-icons/si';

const roles = [
    {
        title: "Junior Data Engineer",
        description: "Pipeline architecture & raw data processing.",
        icon: <Database className="w-6 h-6 text-signal-blue" />,
        stack: [
            { name: "Python", icon: <SiPython className="w-5 h-5" /> },
            { name: "SQL", icon: <SiPostgresql className="w-5 h-5" /> },
            { name: "Spark", icon: <SiApachespark className="w-5 h-5" /> },
            { name: "Kafka", icon: <SiApachekafka className="w-5 h-5" /> }
        ],
    },
    {
        title: "ETL Developer",
        description: "Extract, Transform, Load logic specialization.",
        icon: <Code className="w-6 h-6 text-emerald-500" />,
        stack: [
            { name: "Airflow", icon: <SiApacheairflow className="w-5 h-5" /> },
            { name: "dbt", icon: <SiDbt className="w-5 h-5" /> },
            { name: "Snowflake", icon: <SiSnowflake className="w-5 h-5" /> }
        ],
    },
    {
        title: "Data Quality Analyst",
        description: "Integrity, validation, and governance.",
        icon: <ShieldCheck className="w-6 h-6 text-warning-amber" />,
        stack: [
            { name: "Great Expectations", icon: <ShieldCheck className="w-5 h-5" /> }, // Fallback to Lucide
            { name: "Pandas", icon: <SiPandas className="w-5 h-5" /> },
            { name: "Soda", icon: <Database className="w-5 h-5" /> } // Fallback
        ],
    },
    {
        title: "Database Developer",
        description: "SQL optimization and schema design.",
        icon: <Server className="w-6 h-6 text-purple-500" />,
        stack: [
            { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5" /> },
            { name: "NoSQL", icon: <SiMongodb className="w-5 h-5" /> },
            { name: "Redis", icon: <SiRedis className="w-5 h-5" /> }
        ],
    },
    {
        title: "Cloud Data Associate",
        description: "Cloud-native storage and compute.",
        icon: <Cloud className="w-6 h-6 text-sky-400" />,
        stack: [
            { name: "AWS S3", icon: <SiAmazon className="w-5 h-5" /> },
            { name: "Redshift", icon: <Database className="w-5 h-5" /> },
            { name: "IAM", icon: <Key className="w-5 h-5" /> }
        ],
    },
];

export default function RolesSection() {
    return (
        <section className="w-full bg-slate-100 dark:bg-deep-slate py-24 px-4 relative transition-colors duration-300">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-sans text-slate-900 dark:text-white mb-4 block">
                        We don't train "General Engineers". <br />
                        <span className="text-signal-blue">We build specialists.</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-sans text-lg">
                        The industry doesn't need more generic CS grads. It needs specialists who plug into a pipeline on Day 1.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {roles.map((role, idx) => (
                        <div
                            key={idx}
                            className="group relative p-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 shadow-sm"
                        >
                            <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                                <div>
                                    <div className="mb-4 p-3 bg-slate-100 dark:bg-slate-800/50 rounded-lg inline-block">{role.icon}</div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{role.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">{role.description}</p>
                                </div>

                                {/* Tech Stack - Always Visible */}
                                <div>
                                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Tech Stack</div>
                                    <div className="flex flex-wrap gap-2">
                                        {role.stack.map((tech) => (
                                            <div key={tech.name} className="flex items-center gap-2 px-2 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-xs font-mono text-slate-700 dark:text-slate-300" title={tech.name}>
                                                {tech.icon}
                                                <span>{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Background Gradient Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
