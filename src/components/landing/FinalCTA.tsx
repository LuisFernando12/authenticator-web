'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Shield } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const FinalCTA: React.FC = () => {
    const { language } = useLanguage();

    const content = {
        en: {
            title: 'Ready to build with identity?',
            subtitle: 'Start building applications on top of a dedicated identity layer designed for security and modern developer workflows.',
            start: 'Get started',
            explore: 'Explore documentation',
        },
        pt: {
            title: 'Pronto para construir com identidade?',
            subtitle: 'Comece a desenvolver suas aplicações sobre uma camada de identidade dedicada, projetada para segurança e fluxos modernos de desenvolvimento.',
            start: 'Começar agora',
            explore: 'Explorar a documentação',
        },
    };

    const t = content[language];

    return (
        <section className="py-20 md:py-28 bg-zinc-950 border-b border-zinc-800/60 relative overflow-hidden">
            {/* Brilho de Fundo sutil */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-radial-gradient blur-3xl opacity-40"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 sm:p-12 text-center space-y-6 shadow-2xl backdrop-blur-xs">
                    <div className="inline-flex items-center justify-center p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-cyan-400 mx-auto">
                        <Shield className="h-8 w-8" />
                    </div>

                    <h2 className="text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl font-mono">
                        {t.title}
                    </h2>

                    <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                        <Link
                            href="/register"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-200 transition-colors shadow-sm"
                        >
                            <span>{t.start}</span>
                            <ArrowRight className="h-4 w-4 text-zinc-800" />
                        </Link>

                        <Link
                            href="/docs"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md border border-zinc-800 bg-zinc-950 px-6 py-3 text-sm font-medium text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100 transition-colors"
                        >
                            <BookOpen className="h-4 w-4 text-zinc-400" />
                            <span>{t.explore}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
