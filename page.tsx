'use client';

import { motion } from 'framer-motion';
import { Palette, Smartphone, Globe, Code, Layers, Rocket, CheckCircle, Server, Shield, Cpu, Database, Cloud } from 'lucide-react';
import ScrollReveal from '@/components/animations/scroll-reveal';
import HolographicCard from '@/components/animations/holographic-card';
import GlitchText from '@/components/animations/glitch-text';
import CyberGrid from '@/components/animations/cyber-grid';
import MatrixRain from '@/components/animations/matrix-rain';
import MagneticButton from '@/components/animations/magnetic-button';
import Link from 'next/link';

export default function ServicesPage() {
    const services = [
        {
            id: 'design',
            title: 'UI/UX Interface',
            description: 'Architecting immersive digital environments with user-centric design protocols.',
            icon: Palette,
            color: 'text-pink-400',
            features: ['User Behavior Analysis', 'Holographic Prototyping', 'Design Systems', 'Motion UI', 'Accessibility Protocols']
        },
        {
            id: 'mobile',
            title: 'Mobile Architecture',
            description: 'Deploying high-performance native and cross-platform mobile applications.',
            icon: Smartphone,
            color: 'text-cyan-400',
            features: ['iOS & Android Core', 'Flutter Framework', 'Native Performance', 'App Store Deployment', 'Real-time Sync']
        },
        {
            id: 'web',
            title: 'Web Systems',
            description: 'Engineering scalable full-stack web solutions with next-gen technologies.',
            icon: Globe,
            color: 'text-purple-400',
            features: ['Next.js / React', 'Node.js Backend', 'Cloud Infrastructure', 'API Integration', 'SEO Optimization']
        },
        {
            id: 'cloud',
            title: 'Cloud Infrastructure',
            description: 'Scalable serverless architecture and distributed computing solutions.',
            icon: Cloud,
            color: 'text-sky-400',
            features: ['AWS / Azure / GCP', 'Docker & Kubernetes', 'Microservices', 'CI/CD Pipelines', 'Serverless Functions']
        },
        {
            id: 'security',
            title: 'Cyber Security',
            description: 'Enterprise-grade security protocols to protect your digital assets.',
            icon: Shield,
            color: 'text-red-400',
            features: ['Penetration Testing', 'Encryption Standards', 'Security Audits', 'Compliance', 'Threat Monitoring']
        },
        {
            id: 'ai',
            title: 'AI Integration',
            description: 'Implementing machine learning models and intelligent automation.',
            icon: Cpu,
            color: 'text-green-400',
            features: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'Chatbots', 'Automation']
        }
    ];

    return (
        <div className="relative min-h-screen pt-24 pb-12">
            {/* Background Effects - Optimized for smooth scroll */}
            <div className="fixed inset-0 z-0 pointer-events-none will-change-transform" style={{ transform: 'translate3d(0,0,0)' }}>
                <MatrixRain className="opacity-5" />
                <CyberGrid className="opacity-5" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                {/* Hero Section */}
                <section className="mb-24 text-center">
                    <ScrollReveal>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full tech-card cyber-glow mb-8"
                        >
                            <Server className="w-4 h-4 text-cyan-400 animate-pulse" />
                            <span className="text-sm font-semibold tech-gradient-text">Service Modules Online</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            <GlitchText intensity="high">
                                <span className="tech-gradient-text">Premium Services</span>
                            </GlitchText>
                        </h1>
                        <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8 leading-relaxed">
                            Deploying cutting-edge digital solutions tailored to your specific parameters.
                            From <span className="text-cyan-400">concept</span> to <span className="text-purple-400">execution</span>.
                        </p>
                    </ScrollReveal>
                </section>

                {/* Services Grid */}
                <section className="mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ScrollReveal key={service.id} delay={index * 0.05}>
                                <HolographicCard className="h-full group cursor-pointer">
                                    <div className="p-8 h-full flex flex-col">
                                        <div className="mb-6 relative">
                                            <div className={`w-16 h-16 rounded-2xl tech-card flex items-center justify-center ${service.color} group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                                                <service.icon className="w-8 h-8 drop-shadow-glow" />
                                            </div>
                                            <div className={`absolute inset-0 bg-current opacity-20 blur-xl rounded-full ${service.color}`} />
                                        </div>

                                        <h2 className="text-2xl font-bold mb-4 tech-gradient-text">{service.title}</h2>
                                        <p className="text-foreground/70 mb-8 text-sm leading-relaxed flex-grow">{service.description}</p>

                                        <ul className="space-y-3 mb-8">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-3 text-sm font-mono text-foreground/60 group-hover:text-foreground/90 transition-colors">
                                                    <CheckCircle className={`w-4 h-4 ${service.color}`} />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link href="/contact" className="mt-auto">
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full py-3 rounded-xl border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/20 text-cyan-400 font-semibold transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                                            >
                                                Initialize Protocol <Rocket className="w-4 h-4" />
                                            </motion.button>
                                        </Link>
                                    </div>
                                </HolographicCard>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* Process Section */}
                <section className="mb-32">
                    <ScrollReveal>
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-bold mb-4 tech-gradient-text">Execution Pipeline</h2>
                            <p className="text-foreground/60">Streamlined workflow for maximum efficiency</p>
                        </div>
                    </ScrollReveal>

                    <div className="relative">
                        {/* Circuit Connector Line - Desktop */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-purple-500/0" />

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { icon: Layers, title: 'Discovery', desc: 'Requirements Analysis' },
                                { icon: Palette, title: 'Design', desc: 'Interface Architecture' },
                                { icon: Code, title: 'Development', desc: 'System Engineering' },
                                { icon: Rocket, title: 'Deployment', desc: 'Launch & Monitor' }
                            ].map((step, index) => (
                                <ScrollReveal key={index} delay={index * 0.1}>
                                    <div className="text-center relative group">
                                        <div className="w-24 h-24 mx-auto tech-card rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:cyber-glow transition-all duration-500 border-2 border-cyan-500/30">
                                            <step.icon className="w-10 h-10 text-cyan-400 group-hover:text-white transition-colors" />
                                            <div className="absolute inset-0 rounded-full border border-cyan-500/50 animate-ping opacity-20" />
                                        </div>
                                        <h3 className="font-bold text-xl mb-2 text-white">{step.title}</h3>
                                        <p className="text-sm text-cyan-400 font-mono">{step.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="mb-20">
                    <ScrollReveal>
                        <div className="tech-card rounded-3xl p-12 md:p-20 relative overflow-hidden text-center group">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                                    Ready to <span className="text-cyan-400">Upgrade</span> Your System?
                                </h2>
                                <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
                                    Initiate collaboration to build next-generation digital infrastructure.
                                </p>
                                <Link href="/contact">
                                    <MagneticButton className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full text-lg font-bold hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-105 transition-all flex items-center gap-3 mx-auto">
                                        <Rocket className="w-6 h-6" />
                                        Start Project
                                    </MagneticButton>
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>
            </div>
        </div>
    );
}
