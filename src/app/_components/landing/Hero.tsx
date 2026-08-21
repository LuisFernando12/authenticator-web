'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, KeyRound, Server, CheckCircle2, RefreshCw, Zap, Terminal } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const Hero: React.FC = () => {
    const [activeStage, setActiveStage] = useState<number>(2);
    const [simulating, setSimulating] = useState<boolean>(true);
    const { language } = useLanguage();

    const content = {
        en: {
            badge: 'OAuth 2.0 + PKCE Native Architecture',
            title: 'Identity infrastructure for modern applications.',
            subtitle: 'Authentication, authorization and security designed around your applications.',
            ctaStart: 'Get started',
            ctaExplore: 'Explore the platform',
            topologySpec: 'auth-flow.topology.spec',
            flowActive: 'Flow Active',
            flowPaused: 'Flow Paused',
            secActive: '256-bit Security Active',
            inspecting: 'Inspecting Node',
            nodeLabel: 'Node 0',
            pills: {
                challenge: 'code_challenge_method: S256',
                tokenType: 'token_type: Bearer',
                grantType: 'grant_type: authorization_code',
                reuseDetection: 'reuse_detection: active',
            },
            stages: [
                {
                    id: 1,
                    title: 'Your Application',
                    sub: 'Client App (SPA / Mobile)',
                    badge: 'PKCE Challenge Generated',
                    detail: 'Initializes OAuth 2.0 PKCE flow with SHA-256 code challenge & state parameter.',
                },
                {
                    id: 2,
                    title: 'Authenticator Core',
                    sub: 'Identity Provider Layer',
                    badge: 'Token Rotation & Redis Session',
                    detail: 'Authenticates identity, issues short-lived JWT access tokens & handles refresh token rotation.',
                },
                {
                    id: 3,
                    title: 'Protected API',
                    sub: 'Backend Microservices',
                    badge: 'Bearer Token Verified',
                    detail: 'Validates cryptographically signed access tokens without requiring database lookups.',
                },
            ],
        },
        pt: {
            badge: 'Arquitetura Nativa OAuth 2.0 + PKCE',
            title: 'Infraestrutura de identidade para aplicações modernas.',
            subtitle: 'Autenticação, autorização e segurança projetadas para as suas aplicações.',
            ctaStart: 'Começar agora',
            ctaExplore: 'Explorar a plataforma',
            topologySpec: 'topologia-auth.spec',
            flowActive: 'Fluxo Ativo',
            flowPaused: 'Fluxo Pausado',
            secActive: 'Segurança 256-bit Ativa',
            inspecting: 'Inspecionando Nó',
            nodeLabel: 'Nó 0',
            pills: {
                challenge: 'metodo_desafio_codigo: S256',
                tokenType: 'tipo_token: Bearer',
                grantType: 'tipo_concessao: authorization_code',
                reuseDetection: 'deteccao_reuso: ativa',
            },
            stages: [
                {
                    id: 1,
                    title: 'Sua Aplicação',
                    sub: 'Aplicação Cliente (SPA / Mobile)',
                    badge: 'Desafio PKCE Gerado',
                    detail: 'Inicializa o fluxo OAuth 2.0 PKCE com desafio de código SHA-256 e parâmetro de estado.',
                },
                {
                    id: 2,
                    title: 'Authenticator Core',
                    sub: 'Provedor de Identidade',
                    badge: 'Rotação de Tokens e Sessão Redis',
                    detail: 'Autentica a identidade, emite tokens de acesso JWT de curta duração e gerencia a rotação de tokens de atualização.',
                },
                {
                    id: 3,
                    title: 'API Protegida',
                    sub: 'Microsserviços Backend',
                    badge: 'Token Bearer Verificado',
                    detail: 'Valida tokens de acesso assinados criptograficamente sem necessidade de consultas ao banco de dados.',
                },
            ],
        },
    };

    const t = content[language];
    const icons = [Terminal, ShieldCheck, Server];

    return (
        <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-tech-grid border-b border-zinc-800/60">
            {/* Esferas de Gradiente de Fundo */}
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-gradient blur-3xl opacity-60"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Cabeçalho do Hero */}
                <div className="mx-auto max-w-3xl text-center space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/90 px-3 py-1 text-xs text-zinc-300 font-mono">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                        <span>{t.badge}</span>
                    </div>

                    {/* Título Principal */}
                    <h1 className="text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl md:text-6xl font-mono leading-tight">
                        {t.title}
                    </h1>

                    {/* Subtítulo */}
                    <p className="text-lg text-zinc-400 sm:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>

                    {/* Botões CTA */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                        <Link
                            href="/register"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-200 transition-colors shadow-sm"
                        >
                            <span>{t.ctaStart}</span>
                            <ArrowRight className="h-4 w-4 text-zinc-800" />
                        </Link>
                        <a
                            href="#capabilities"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/60 px-6 py-3 text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 transition-colors"
                        >
                            <span>{t.ctaExplore}</span>
                        </a>
                    </div>
                </div>

                {/* Visualização Interativa do Hero */}
                <div className="mt-16 md:mt-20 max-w-5xl mx-auto">
                    <div className="rounded-xl border border-zinc-800 bg-zinc-950/90 p-4 sm:p-6 md:p-8 shadow-2xl shadow-zinc-950/50 backdrop-blur-xs relative">
                        {/* Barra Interativa */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-800/80 mb-8 font-mono text-xs text-zinc-400">
                            <div className="flex items-center gap-2">
                                <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                                <div className="h-3 w-3 rounded-full bg-amber-500/80"></div>
                                <div className="h-3 w-3 rounded-full bg-emerald-500/80"></div>
                                <span className="ml-2 text-zinc-500">{t.topologySpec}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setSimulating(!simulating)}
                                    className="flex items-center gap-1.5 text-zinc-300 hover:text-zinc-100 bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800 cursor-pointer"
                                >
                                    <RefreshCw className={`h-3 w-3 ${simulating ? 'animate-spin text-cyan-400' : ''}`} />
                                    <span>{simulating ? t.flowActive : t.flowPaused}</span>
                                </button>
                                <span className="hidden sm:inline-block text-zinc-500">|</span>
                                <span className="hidden sm:inline-block text-emerald-400 flex items-center gap-1">
                                    <CheckCircle2 className="h-3 w-3 inline" /> {t.secActive}
                                </span>
                            </div>
                        </div>

                        {/* Mapa da Topologia */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                            {t.stages.map((stage, index) => {
                                const IconComponent = icons[index];
                                const isSelected = activeStage === stage.id;

                                return (
                                    <div key={stage.id} className="relative flex flex-col">
                                        {/* Linha de Conexão */}
                                        {index < t.stages.length - 1 && (
                                            <div className="hidden md:block absolute top-12 -right-3 w-6 z-20 pointer-events-none">
                                                <div className="h-[2px] w-full bg-zinc-800 relative">
                                                    {simulating && (
                                                        <div className="absolute top-[-3px] left-0 h-2 w-2 rounded-full bg-cyan-400 animate-ping"></div>
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        {/* Card do Nó */}
                                        <button
                                            onClick={() => setActiveStage(stage.id)}
                                            className={`text-left rounded-lg p-5 border transition-all duration-200 cursor-pointer ${
                                                isSelected
                                                    ? 'border-cyan-500/60 bg-zinc-900/90 shadow-lg shadow-cyan-950/20'
                                                    : 'border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/60'
                                            }`}
                                        >
                                            <div className="flex items-center justify-between mb-3">
                                                <div className={`p-2 rounded-md ${isSelected ? 'bg-cyan-950 text-cyan-400 border border-cyan-800' : 'bg-zinc-800 text-zinc-400'}`}>
                                                    <IconComponent className="h-5 w-5" />
                                                </div>
                                                <span className="font-mono text-xs text-zinc-500">{t.nodeLabel}{stage.id}</span>
                                            </div>

                                            <h3 className="font-semibold text-zinc-100 text-base">{stage.title}</h3>
                                            <p className="text-xs text-zinc-400 mt-1 font-mono">{stage.sub}</p>

                                            <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between">
                                                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400">
                                                    <Zap className="h-3 w-3" />
                                                    {stage.badge}
                                                </span>
                                            </div>
                                        </button>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Caixa de Detalhes Interativa */}
                        <div className="mt-8 rounded-lg border border-zinc-800/80 bg-zinc-900/60 p-4 sm:p-5 font-mono text-xs">
                            <div className="flex items-center justify-between text-zinc-400 mb-2">
                                <span className="text-cyan-400 flex items-center gap-1.5 font-semibold">
                                    <KeyRound className="h-3.5 w-3.5" />
                                    {t.inspecting}: {t.stages.find((s) => s.id === activeStage)?.title}
                                </span>
                                <span className="text-zinc-500">OAuth 2.0 RFC 7636</span>
                            </div>
                            <p className="text-zinc-300 leading-relaxed font-sans text-sm">
                                {t.stages.find((s) => s.id === activeStage)?.detail}
                            </p>
                            
                            {/* Pills de Estado Técnico */}
                            <div className="mt-4 flex flex-wrap items-center gap-2 pt-3 border-t border-zinc-800/60 text-[11px] text-zinc-400">
                                <span className="bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800 text-zinc-300">
                                    {t.pills.challenge}
                                </span>
                                <span className="bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800 text-emerald-400">
                                    {t.pills.tokenType}
                                </span>
                                <span className="bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800 text-zinc-300">
                                    {t.pills.grantType}
                                </span>
                                <span className="bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800 text-cyan-400">
                                    {t.pills.reuseDetection}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
