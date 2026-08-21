'use client';

import React from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'h-3.5 w-3.5' }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
);

export const Footer: React.FC = () => {
    const { language } = useLanguage();

    const content = {
        en: {
            desc: 'Identity infrastructure for modern applications. Centralized authentication, OAuth 2.0 authorization, session control, and real-time security incident auditing.',
            col1: 'Platform',
            col2: 'Resources',
            col3: 'Security',
            c1Item1: 'Core Capabilities',
            c1Item2: 'Security Auditing',
            c1Item3: 'OAuth 2.0 + PKCE',
            c1Item4: 'Developer Integration',
            c2Item1: 'Documentation',
            c2Item2: 'GitHub Repository',
            c2Item3: 'Sign in',
            c2Item4: 'Get started',
            c3Item1: 'RFC 6749 (OAuth 2.0)',
            c3Item2: 'RFC 7636 (PKCE)',
            c3Item3: 'Token Rotation Engine',
            c3Item4: 'Redis Session Store',
            copyright: '© 2026 Authenticator. All rights reserved.',
            operational: 'Systems Operational',
        },
        pt: {
            desc: 'Infraestrutura de identidade para aplicações modernas. Autenticação centralizada, autorização OAuth 2.0, controle de sessão e auditoria de incidentes de segurança em tempo real.',
            col1: 'Plataforma',
            col2: 'Recursos',
            col3: 'Segurança',
            c1Item1: 'Capacidades Principais',
            c1Item2: 'Auditoria de Segurança',
            c1Item3: 'OAuth 2.0 + PKCE',
            c1Item4: 'Integração para Devs',
            c2Item1: 'Documentação',
            c2Item2: 'Repositório GitHub',
            c2Item3: 'Entrar',
            c2Item4: 'Começar agora',
            c3Item1: 'RFC 6749 (OAuth 2.0)',
            c3Item2: 'RFC 7636 (PKCE)',
            c3Item3: 'Rotação de Tokens',
            c3Item4: 'Store de Sessões Redis',
            copyright: '© 2026 Authenticator. Todos os direitos reservados.',
            operational: 'Sistemas Operacionais',
        },
    };

    const t = content[language];

    return (
        <footer className="w-full border-t border-zinc-800/80 bg-zinc-950 text-zinc-400 py-12 text-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-zinc-800/80">
                    {/* Coluna da Marca (5 cols) */}
                    <div className="md:col-span-5 space-y-4">
                        <Link href="/" className="flex items-center gap-2.5 group w-fit">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-700/60">
                                <Shield className="h-4 w-4 text-zinc-100" />
                            </div>
                            <span className="font-semibold text-zinc-100 tracking-tight text-base font-mono">
                                Authenticator
                            </span>
                        </Link>
                        <p className="text-zinc-400 max-w-sm text-sm leading-relaxed">
                            {t.desc}
                        </p>
                    </div>

                    {/* Colunas de Links (7 cols) */}
                    <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-mono text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-4">
                                {t.col1}
                            </h4>
                            <ul className="space-y-2.5 font-medium text-xs">
                                <li>
                                    <a href="#capabilities" className="hover:text-zinc-100 transition-colors">
                                        {t.c1Item1}
                                    </a>
                                </li>
                                <li>
                                    <a href="#security" className="hover:text-zinc-100 transition-colors">
                                        {t.c1Item2}
                                    </a>
                                </li>
                                <li>
                                    <a href="#oauth" className="hover:text-zinc-100 transition-colors">
                                        {t.c1Item3}
                                    </a>
                                </li>
                                <li>
                                    <a href="#developers" className="hover:text-zinc-100 transition-colors">
                                        {t.c1Item4}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-mono text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-4">
                                {t.col2}
                            </h4>
                            <ul className="space-y-2.5 font-medium text-xs">
                                <li>
                                    <Link href="/docs" className="hover:text-zinc-100 transition-colors">
                                        {t.c2Item1}
                                    </Link>
                                </li>
                                <li>
                                    <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-zinc-100 transition-colors flex items-center gap-1.5">
                                        <GithubIcon className="h-3.5 w-3.5" />
                                        {t.c2Item2}
                                    </a>
                                </li>
                                <li>
                                    <Link href="/login" className="hover:text-zinc-100 transition-colors">
                                        {t.c2Item3}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/register" className="hover:text-zinc-100 transition-colors">
                                        {t.c2Item4}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-mono text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-4">
                                {t.col3}
                            </h4>
                            <ul className="space-y-2.5 font-medium text-xs text-zinc-400">
                                <li>{t.c3Item1}</li>
                                <li>{t.c3Item2}</li>
                                <li>{t.c3Item3}</li>
                                <li>{t.c3Item4}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Créditos no Rodapé */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
                    <p>{t.copyright}</p>
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                            {t.operational}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
