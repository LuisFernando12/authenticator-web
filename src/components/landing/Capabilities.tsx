'use client';

import React, { useState } from 'react';
import { UserCheck, ShieldCheck, Lock, Check, Cpu } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const Capabilities: React.FC = () => {
    const [revokedSession, setRevokedSession] = useState<boolean>(false);
    const { language } = useLanguage();

    const content = {
        en: {
            badge: 'Core Capabilities',
            title: "Authentication shouldn't be complicated.",
            subtitle: 'Build your applications around a dedicated identity layer instead of rebuilding authentication and security for every product.',
            cards: {
                identity: {
                    title: 'Identity',
                    sub: 'Centralized User Protocol',
                    desc: 'Centralize authentication and identity management for your applications.',
                    status: 'STATUS: ACTIVE',
                    issuer: 'issuer',
                    tenant: 'tenant_id',
                    mfa: 'mfa_verified',
                },
                authorization: {
                    title: 'Authorization',
                    sub: 'OAuth 2.0 + PKCE',
                    desc: 'OAuth 2.0 and PKCE designed for secure delegated access.',
                    verifier: 'verifier_matched',
                    verified: 'Verified',
                },
                security: {
                    title: 'Security',
                    sub: 'Session & Token Control',
                    desc: 'Sessions, token management, revocation and security incident tracking.',
                    sessionId: 'Session ID',
                    revokeBtn: 'Revoke Session',
                    restoreBtn: 'Restore Session',
                    tokenFamily: 'token_family',
                    reuseStatus: 'reuse_status',
                    revokedText: 'REVOKED & FLUSHED',
                    cleanText: 'CLEAN',
                },
            },
        },
        pt: {
            badge: 'Capacidades Principais',
            title: 'Autenticação não precisa ser complicada.',
            subtitle: 'Construa suas aplicações em torno de uma camada de identidade dedicada em vez de recriar autenticação e segurança para cada produto.',
            cards: {
                identity: {
                    title: 'Identidade',
                    sub: 'Protocolo Centralizado',
                    desc: 'Centralize a autenticação e o gerenciamento de identidade para todas as suas aplicações web, mobile e APIs sob um único padrão.',
                    status: 'STATUS: ATIVO',
                    issuer: 'emissor',
                    tenant: 'tenant_id',
                    mfa: 'mfa_verificado',
                },
                authorization: {
                    title: 'Autorização',
                    sub: 'OAuth 2.0 + PKCE',
                    desc: 'Fluxo Authorization Code com PKCE (Proof Key for Code Exchange) padronizado e projetado para acesso delegado seguro.',
                    verifier: 'verificador_pareado',
                    verified: 'Verificado',
                },
                security: {
                    title: 'Segurança',
                    sub: 'Sessões e Tokens',
                    desc: 'Gerenciamento granular de sessões, rotação de tokens, detecção de reuso e revogação instantânea respaldada por logs de segurança.',
                    sessionId: 'Sessão',
                    revokeBtn: 'Revogar Sessão',
                    restoreBtn: 'Restaurar Sessão',
                    tokenFamily: 'familia_token',
                    reuseStatus: 'status_reuso',
                    revokedText: 'REVOGADO E LIMPO',
                    cleanText: 'LIMPO',
                },
            },
        },
    };

    const t = content[language];

    return (
        <section id="capabilities" className="py-20 md:py-28 bg-zinc-950 border-b border-zinc-800/60 relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Cabeçalho da Seção */}
                <div className="mx-auto max-w-3xl text-center space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/90 px-3 py-1 text-xs text-zinc-300 font-mono">
                        <Cpu className="h-3.5 w-3.5 text-cyan-400" />
                        <span>{t.badge}</span>
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl font-mono">
                        {t.title}
                    </h2>
                    <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>

                {/* Grid de 3 Cards de Capacidade */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Card 1: Identidade */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700 transition-all duration-200">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 rounded-lg bg-indigo-950/80 border border-indigo-800 text-indigo-400">
                                    <UserCheck className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-100 font-mono">{t.cards.identity.title}</h3>
                                    <span className="text-xs text-indigo-400 font-mono">{t.cards.identity.sub}</span>
                                </div>
                            </div>
                            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                                {t.cards.identity.desc}
                            </p>
                        </div>

                        {/* Fragmento de UI: Payload de Identidade */}
                        <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4 font-mono text-xs">
                            <div className="flex items-center justify-between text-zinc-500 border-b border-zinc-800 pb-2 mb-3">
                                <span>sub: usr_89f201a</span>
                                <span className="text-emerald-400 text-[11px] font-mono">{t.cards.identity.status}</span>
                            </div>
                            <div className="space-y-1.5 text-zinc-300">
                                <div className="flex justify-between">
                                    <span className="text-zinc-500">{t.cards.identity.issuer}:</span>
                                    <span className="text-cyan-400">https://auth.domain.com</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-zinc-500">{t.cards.identity.tenant}:</span>
                                    <span>org_prod_902</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-zinc-500">{t.cards.identity.mfa}:</span>
                                    <span className="text-emerald-400">true (WebAuthn / TOTP)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Autorização */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700 transition-all duration-200">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 rounded-lg bg-cyan-950/80 border border-cyan-800 text-cyan-400">
                                    <Lock className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-100 font-mono">{t.cards.authorization.title}</h3>
                                    <span className="text-xs text-cyan-400 font-mono">{t.cards.authorization.sub}</span>
                                </div>
                            </div>
                            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                                {t.cards.authorization.desc}
                            </p>
                        </div>

                        {/* Fragmento de UI: Estado do Verificador PKCE */}
                        <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4 font-mono text-xs">
                            <div className="flex items-center justify-between text-zinc-500 border-b border-zinc-800 pb-2 mb-3">
                                <span>code_challenge</span>
                                <span className="text-cyan-400 text-[10px] font-mono">SHA-256</span>
                            </div>
                            <div className="bg-zinc-900 p-2 rounded border border-zinc-800 text-zinc-300 truncate text-[11px] mb-2">
                                E9Melhoa2OwvFrEMTJguCHaoeK1t8URW...
                            </div>
                            <div className="flex items-center justify-between text-[11px] text-zinc-400">
                                <span>{t.cards.authorization.verifier}:</span>
                                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                                    <Check className="h-3 w-3 inline" /> {t.cards.authorization.verified}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Segurança */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700 transition-all duration-200">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-400">
                                    <ShieldCheck className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-100 font-mono">{t.cards.security.title}</h3>
                                    <span className="text-xs text-emerald-400 font-mono">{t.cards.security.sub}</span>
                                </div>
                            </div>
                            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                                {t.cards.security.desc}
                            </p>
                        </div>

                        {/* Fragmento de UI: Revogação de Sessão */}
                        <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4 font-mono text-xs">
                            <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3">
                                <span className="text-zinc-400">{t.cards.security.sessionId}: sess_77a2</span>
                                <button
                                    onClick={() => setRevokedSession(!revokedSession)}
                                    className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-colors cursor-pointer ${
                                        revokedSession
                                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                                            : 'bg-red-950 text-red-400 border border-red-800 hover:bg-red-900'
                                    }`}
                                >
                                    {revokedSession ? t.cards.security.restoreBtn : t.cards.security.revokeBtn}
                                </button>
                            </div>

                            <div className="space-y-1 text-zinc-300 text-[11px]">
                                <div className="flex justify-between">
                                    <span className="text-zinc-500">{t.cards.security.tokenFamily}:</span>
                                    <span>fam_99182</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-zinc-500">{t.cards.security.reuseStatus}:</span>
                                    <span className={revokedSession ? 'text-red-400 font-bold' : 'text-emerald-400'}>
                                        {revokedSession ? t.cards.security.revokedText : t.cards.security.cleanText}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
