'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Menu, X, ArrowRight } from 'lucide-react';
import { useLanguage, LanguageToggle } from './LanguageContext';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'h-4 w-4' }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
);

export const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { language } = useLanguage();

    const content = {
        en: {
            status: 'v2.4 Operational',
            platform: 'Platform',
            security: 'Security',
            developers: 'Developers',
            oauth: 'OAuth 2.0',
            docs: 'Documentation',
            signIn: 'Sign in',
            getStarted: 'Get started',
        },
        pt: {
            status: 'v2.4 Operacional',
            platform: 'Plataforma',
            security: 'Segurança',
            developers: 'Desenvolvedores',
            oauth: 'OAuth 2.0',
            docs: 'Documentação',
            signIn: 'Entrar',
            getStarted: 'Começar agora',
        },
    };

    const t = content[language];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
                {/* Logo Marca */}
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-700/60 group-hover:border-zinc-500 transition-colors">
                            <Shield className="h-4 w-4 text-zinc-100 group-hover:text-cyan-400 transition-colors" />
                        </div>
                        <span className="font-semibold text-zinc-100 tracking-tight text-base font-mono">
                            Authenticator
                        </span>
                    </Link>

                    {/* Badge Operacional */}
                    <div className="hidden lg:flex items-center gap-2 rounded-full border border-emerald-950 bg-emerald-950/40 px-2.5 py-0.5 text-xs text-emerald-400 font-mono">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>{t.status}</span>
                    </div>
                </div>

                {/* Links Desktop */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
                    <a href="#capabilities" className="hover:text-zinc-100 transition-colors">
                        {t.platform}
                    </a>
                    <a href="#security" className="hover:text-zinc-100 transition-colors">
                        {t.security}
                    </a>
                    <a href="#developers" className="hover:text-zinc-100 transition-colors">
                        {t.developers}
                    </a>
                    <a href="#oauth" className="hover:text-zinc-100 transition-colors">
                        {t.oauth}
                    </a>
                    <Link href="/docs" className="hover:text-zinc-100 transition-colors">
                        {t.docs}
                    </Link>
                </nav>

                {/* Botões da Direita + Idioma Toggle */}
                <div className="hidden md:flex items-center gap-3">
                    <LanguageToggle />
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
                        aria-label="GitHub Repository"
                    >
                        <GithubIcon className="h-4 w-4" />
                    </a>
                    <Link
                        href="/login"
                        className="px-3.5 py-1.5 text-sm font-medium text-zinc-300 hover:text-zinc-100 transition-colors"
                    >
                        {t.signIn}
                    </Link>
                    <Link
                        href="/register"
                        className="inline-flex items-center gap-1.5 rounded-md bg-zinc-100 px-3.5 py-1.5 text-sm font-medium text-zinc-900 hover:bg-zinc-200 transition-colors shadow-xs"
                    >
                        <span>{t.getStarted}</span>
                        <ArrowRight className="h-3.5 w-3.5 text-zinc-700" />
                    </Link>
                </div>

                {/* Toggle Hamburger Mobile */}
                <div className="flex md:hidden items-center gap-2">
                    <LanguageToggle />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 text-zinc-400 hover:text-zinc-100 focus:outline-hidden"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Menu Mobile */}
            {mobileMenuOpen && (
                <div className="md:hidden border-b border-zinc-800 bg-zinc-950 px-4 pt-2 pb-6 space-y-4">
                    <div className="flex items-center gap-2 rounded-full border border-emerald-950 bg-emerald-950/40 px-2.5 py-1 text-xs text-emerald-400 font-mono w-fit">
                        <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                        <span>{t.status}</span>
                    </div>
                    <nav className="flex flex-col space-y-3 font-medium text-zinc-300">
                        <a
                            href="#capabilities"
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-1 hover:text-zinc-100"
                        >
                            {t.platform}
                        </a>
                        <a
                            href="#security"
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-1 hover:text-zinc-100"
                        >
                            {t.security}
                        </a>
                        <a
                            href="#developers"
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-1 hover:text-zinc-100"
                        >
                            {t.developers}
                        </a>
                        <a
                            href="#oauth"
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-1 hover:text-zinc-100"
                        >
                            {t.oauth}
                        </a>
                        <Link
                            href="/docs"
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-1 hover:text-zinc-100"
                        >
                            {t.docs}
                        </Link>
                    </nav>
                    <div className="pt-2 flex flex-col gap-2 border-t border-zinc-800">
                        <Link
                            href="/login"
                            className="w-full text-center py-2 text-sm font-medium text-zinc-300 border border-zinc-800 rounded-md hover:bg-zinc-900"
                        >
                            {t.signIn}
                        </Link>
                        <Link
                            href="/register"
                            className="w-full text-center py-2 text-sm font-medium text-zinc-900 bg-zinc-100 rounded-md hover:bg-zinc-200"
                        >
                            {t.getStarted}
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};
