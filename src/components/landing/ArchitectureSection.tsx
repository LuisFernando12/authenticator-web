'use client';

import React from 'react';
import { Monitor, Smartphone, Server, Shield, Layers } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const ArchitectureSection: React.FC = () => {
    const { language } = useLanguage();

    const content = {
        en: {
            badge: 'Centralized Architecture',
            title: 'One identity layer. Multiple applications.',
            subtitle: 'Centralize identity while keeping your applications independent.',
            clientHeader: 'Client Ecosystem',
            hubHeader: 'Centralized Identity Hub',
            resourceHeader: 'Protected Resources',
            appA: 'Application A',
            appASub: 'Next.js Web App',
            appB: 'Application B',
            appBSub: 'iOS / Android App',
            appC: 'Application C',
            appCSub: 'Microservice CLI',
            api1Name: 'Core REST API',
            api1Sub: 'Validates signed JWTs',
            api2Name: 'GraphQL Engine',
            api2Sub: 'Role claim evaluation',
            api3Name: 'Webhook Bus',
            api3Sub: 'Audit trail listener',
            bearerAuth: 'Bearer Auth',
            hmacAuth: 'HMAC Validated',
        },
        pt: {
            badge: 'Arquitetura Centralizada',
            title: 'Uma camada de identidade. Múltiplas aplicações.',
            subtitle: 'Centralize a identidade mantendo suas aplicações independentes.',
            clientHeader: 'Ecosistema de Clientes',
            hubHeader: 'Hub Central de Identidade',
            resourceHeader: 'Recursos Protegidos',
            appA: 'Aplicação A',
            appASub: 'Aplicação Web Next.js',
            appB: 'Aplicação B',
            appBSub: 'App iOS / Android',
            appC: 'Aplicação C',
            appCSub: 'CLI de Microsserviço',
            api1Name: 'API REST Principal',
            api1Sub: 'Valida JWTs assinados',
            api2Name: 'Engine GraphQL',
            api2Sub: 'Avaliação de claims de roles',
            api3Name: 'Barramento Webhooks',
            api3Sub: 'Ouvinte de trilha de auditoria',
            bearerAuth: 'Auth Bearer',
            hmacAuth: 'Validado HMAC',
        },
    };

    const t = content[language];

    return (
        <section className="py-20 md:py-28 bg-zinc-950 border-b border-zinc-800/60 relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Cabeçalho */}
                <div className="mx-auto max-w-3xl text-center space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/90 px-3 py-1 text-xs text-zinc-300 font-mono">
                        <Layers className="h-3.5 w-3.5 text-cyan-400" />
                        <span>{t.badge}</span>
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl font-mono">
                        {t.title}
                    </h2>
                    <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>

                {/* Mapa de Topologia */}
                <div className="mt-16 max-w-5xl mx-auto rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-10 relative">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        {/* Coluna de Aplicações Clientes (4 cols) */}
                        <div className="md:col-span-4 space-y-4">
                            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider block mb-2">
                                {t.clientHeader}
                            </span>

                            {/* App A */}
                            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4 flex items-center justify-between group hover:border-zinc-700 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded bg-zinc-900 text-zinc-300">
                                        <Monitor className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-zinc-200">{t.appA}</h4>
                                        <span className="text-[11px] text-zinc-500 font-mono">{t.appASub}</span>
                                    </div>
                                </div>
                                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                            </div>

                            {/* App B */}
                            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4 flex items-center justify-between group hover:border-zinc-700 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded bg-zinc-900 text-zinc-300">
                                        <Smartphone className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-zinc-200">{t.appB}</h4>
                                        <span className="text-[11px] text-zinc-500 font-mono">{t.appBSub}</span>
                                    </div>
                                </div>
                                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                            </div>

                            {/* App C */}
                            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4 flex items-center justify-between group hover:border-zinc-700 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded bg-zinc-900 text-zinc-300">
                                        <Server className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-zinc-200">{t.appC}</h4>
                                        <span className="text-[11px] text-zinc-500 font-mono">{t.appCSub}</span>
                                    </div>
                                </div>
                                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                            </div>
                        </div>

                        {/* Coluna Central Hub (4 cols) */}
                        <div className="md:col-span-4 flex flex-col items-center justify-center text-center">
                            <div className="w-full rounded-xl border border-cyan-800/80 bg-zinc-950 p-6 shadow-xl shadow-cyan-950/30 space-y-3 relative">
                                <div className="inline-flex p-3 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400 mb-1">
                                    <Shield className="h-7 w-7" />
                                </div>
                                <h3 className="text-lg font-bold text-zinc-100 font-mono">Authenticator</h3>
                                <p className="text-xs text-zinc-400 font-mono">{t.hubHeader}</p>
                                
                                <div className="pt-3 border-t border-zinc-800 flex flex-wrap justify-center gap-1.5 text-[10px] font-mono text-cyan-300">
                                    <span className="bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">OAuth 2.0</span>
                                    <span className="bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">PKCE</span>
                                    <span className="bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">Redis</span>
                                </div>
                            </div>
                        </div>

                        {/* Coluna de APIs Protegidas (4 cols) */}
                        <div className="md:col-span-4 space-y-4">
                            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider block mb-2">
                                {t.resourceHeader}
                            </span>

                            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4 space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-zinc-200">{t.api1Name}</span>
                                    <span className="text-[10px] text-emerald-400 font-mono">{t.bearerAuth}</span>
                                </div>
                                <p className="text-xs text-zinc-500 font-mono">{t.api1Sub}</p>
                            </div>

                            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4 space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-zinc-200">{t.api2Name}</span>
                                    <span className="text-[10px] text-emerald-400 font-mono">{t.bearerAuth}</span>
                                </div>
                                <p className="text-xs text-zinc-500 font-mono">{t.api2Sub}</p>
                            </div>

                            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4 space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-zinc-200">{t.api3Name}</span>
                                    <span className="text-[10px] text-emerald-400 font-mono">{t.hmacAuth}</span>
                                </div>
                                <p className="text-xs text-zinc-500 font-mono">{t.api3Sub}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
