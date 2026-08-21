'use client';

import React from 'react';
import { ShieldCheck, Key, RefreshCw, FileText, CheckCircle2, Lock, Cpu } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const TrustSection: React.FC = () => {
    const { language } = useLanguage();

    const content = {
        en: {
            badge: 'Security Principles',
            title: 'Security belongs in the architecture.',
            subtitle: 'Security is built directly into our data models and token protocols rather than added as a superficial wrapper.',
            points: [
                {
                    title: 'OAuth 2.0 Framework',
                    desc: 'Built strictly around RFC 6749 authorization code specifications for standard delegation.',
                    icon: Lock,
                },
                {
                    title: 'PKCE Protection',
                    desc: 'SHA-256 code challenge verification (RFC 7636) required for authorization code exchanges.',
                    icon: Key,
                },
                {
                    title: 'Session Revocation',
                    desc: 'Centralized session state stored in Redis enabling sub-millisecond global token revocation.',
                    icon: ShieldCheck,
                },
                {
                    title: 'Token Lifecycle Management',
                    desc: 'Short-lived access tokens paired with rotating refresh tokens for minimal vulnerability windows.',
                    icon: RefreshCw,
                },
                {
                    title: 'Token Reuse Detection',
                    desc: 'Automatic detection of compromised refresh tokens instantly revokes the entire token family.',
                    icon: Cpu,
                },
                {
                    title: 'Security Event Auditing',
                    desc: 'Persistent PostgreSQL audit trail capturing failed auth attempts, invalid requests, and reuse alerts.',
                    icon: FileText,
                },
            ],
        },
        pt: {
            badge: 'Princípios de Segurança',
            title: 'Segurança pertence à arquitetura.',
            subtitle: 'A segurança é construída diretamente em nossos modelos de dados e protocolos de token, em vez de ser adicionada como uma camada superficial.',
            points: [
                {
                    title: 'Framework OAuth 2.0',
                    desc: 'Construído estritamente segundo as especificações de código de autorização RFC 6749 para delegação padronizada.',
                    icon: Lock,
                },
                {
                    title: 'Proteção PKCE',
                    desc: 'Verificação de desafio de código SHA-256 (RFC 7636) obrigatória para trocas de código de autorização.',
                    icon: Key,
                },
                {
                    title: 'Revogação de Sessão',
                    desc: 'Estado de sessão centralizado armazenado no Redis permitindo a revogação global de tokens em sub-milissegundos.',
                    icon: ShieldCheck,
                },
                {
                    title: 'Gestão do Ciclo de Vida do Token',
                    desc: 'Tokens de acesso de curta duração combinados com tokens de atualização rotativos para minimizar janelas de vulnerabilidade.',
                    icon: RefreshCw,
                },
                {
                    title: 'Detecção de Reuso de Tokens',
                    desc: 'Detecção automática de tokens de atualização comprometidos revoga instantaneamente toda a família de tokens.',
                    icon: Cpu,
                },
                {
                    title: 'Auditoria de Eventos de Segurança',
                    desc: 'Trilha de auditoria persistente no PostgreSQL capturando tentativas de autenticação com falha, solicitações inválidas e alertas de reuso.',
                    icon: FileText,
                },
            ],
        },
    };

    const t = content[language];

    return (
        <section className="py-20 md:py-28 bg-zinc-950/80 border-b border-zinc-800/60 relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Cabeçalho */}
                <div className="mx-auto max-w-3xl text-center space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/90 px-3 py-1 text-xs text-zinc-300 font-mono">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                        <span>{t.badge}</span>
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl font-mono">
                        {t.title}
                    </h2>
                    <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>

                {/* Grid de 6 Capacidades */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {t.points.map((pt, idx) => {
                        const IconComponent = pt.icon;
                        return (
                            <div
                                key={idx}
                                className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-zinc-700 transition-colors"
                            >
                                <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 w-fit text-cyan-400 mb-4">
                                    <IconComponent className="h-5 w-5" />
                                </div>
                                <h3 className="text-lg font-bold text-zinc-100 font-mono mb-2">{pt.title}</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed">{pt.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
