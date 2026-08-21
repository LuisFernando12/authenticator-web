'use client';

import React, { useState } from 'react';
import { KeyRound, CheckCircle2, FileCode, Check } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const OAuthSection: React.FC = () => {
    const [selectedStep, setSelectedStep] = useState<number>(0);
    const { language } = useLanguage();

    const content = {
        en: {
            badge: 'RFC 6749 & RFC 7636',
            title: 'Secure authorization by design.',
            subtitle: 'Authenticator enforces PKCE for all client flows, eliminating token interception vulnerabilities at the application boundary.',
            h1: 'OAuth 2.0 Framework',
            h2: 'Authorization Code Grant',
            h3: 'PKCE (S256 Challenge)',
            timeline: 'Sequence Timeline',
            stepDetails: 'Step Details',
            verifiedNote: 'Cryptographically verified against replay attacks',
            sampleComment: '// Protocol Payload Sample:',
            steps: [
                {
                    title: '1. Authorization Request',
                    target: 'Client → Authenticator',
                    desc: 'Application redirects user to Authenticator with client_id, redirect_uri, and S256 code_challenge generated client-side.',
                    payload: 'GET /oauth/authorize?response_type=code&client_id=app_123&code_challenge=E9Melh...&code_challenge_method=S256',
                },
                {
                    title: '2. User Consent & Auth',
                    target: 'Authenticator Protocol',
                    desc: 'Authenticator verifies credentials/MFA and generates a short-lived authorization code tied exclusively to the code_challenge.',
                    payload: 'HTTP 302 Location: https://myapp.com/callback?code=ac_901823719283',
                },
                {
                    title: '3. Token Exchange + PKCE',
                    target: 'Client → Authenticator',
                    desc: 'Application exchanges authorization code along with raw code_verifier back to Authenticator over direct backchannel.',
                    payload: 'POST /oauth/token { grant_type: "authorization_code", code: "ac_90182...", code_verifier: "dBjftJeZ4..." }',
                },
                {
                    title: '4. Bearer Access Token',
                    target: 'Authenticator → Client',
                    desc: 'Authenticator verifies code_verifier against code_challenge SHA-256 hash. Upon match, issues Access Token & Refresh Token.',
                    payload: '{ "access_token": "eyJhbGci...", "token_type": "Bearer", "expires_in": 3600, "refresh_token": "rt_88a..." }',
                },
                {
                    title: '5. Resource Verification',
                    target: 'Client → Protected API',
                    desc: 'Application accesses API with Bearer token. API verifies JWT signature using Authenticator public key without DB latency.',
                    payload: 'GET /api/userinfo HTTP/1.1\r\nAuthorization: Bearer eyJhbGciOiRSUzI1Ni...',
                },
            ],
        },
        pt: {
            badge: 'RFC 6749 & RFC 7636',
            title: 'Autorização segura por design.',
            subtitle: 'O Authenticator impõe PKCE em todos os fluxos de cliente, eliminando vulnerabilidades de interceptação de tokens na fronteira da aplicação.',
            h1: 'Framework OAuth 2.0',
            h2: 'Grant Authorization Code',
            h3: 'PKCE (Desafio S256)',
            timeline: 'Linha do Tempo',
            stepDetails: 'Detalhes do Passo',
            verifiedNote: 'Verificado criptograficamente contra ataques de repetição',
            sampleComment: '// Amostra do Payload de Protocolo:',
            steps: [
                {
                    title: '1. Solicitação de Autorização',
                    target: 'Cliente → Authenticator',
                    desc: 'A aplicação redireciona o usuário para o Authenticator com client_id, redirect_uri e o code_challenge S256 gerado no cliente.',
                    payload: 'GET /oauth/authorize?response_type=code&client_id=app_123&code_challenge=E9Melh...&code_challenge_method=S256',
                },
                {
                    title: '2. Consentimento e Autenticação',
                    target: 'Protocolo Authenticator',
                    desc: 'O Authenticator verifica as credenciais/MFA e gera um código de autorização temporário vinculado exclusivamente ao code_challenge.',
                    payload: 'HTTP 302 Location: https://minhaapp.com/callback?code=ac_901823719283',
                },
                {
                    title: '3. Troca de Token + PKCE',
                    target: 'Cliente → Authenticator',
                    desc: 'A aplicação envia o código de autorização e o code_verifier diretamente para o Authenticator via canal direto seguro.',
                    payload: 'POST /oauth/token { grant_type: "authorization_code", code: "ac_90182...", code_verifier: "dBjftJeZ4..." }',
                },
                {
                    title: '4. Token de Acesso Bearer',
                    target: 'Authenticator → Cliente',
                    desc: 'O Authenticator valida o code_verifier em relação ao hash SHA-256 do code_challenge. Com a correspondência, emite o Access Token e o Refresh Token.',
                    payload: '{ "access_token": "eyJhbGci...", "token_type": "Bearer", "expires_in": 3600, "refresh_token": "rt_88a..." }',
                },
                {
                    title: '5. Verificação de Recurso',
                    target: 'Cliente → API Protegida',
                    desc: 'A aplicação acessa a API com o token Bearer. A API valida a assinatura JWT usando a chave pública do Authenticator sem latência de banco de dados.',
                    payload: 'GET /api/userinfo HTTP/1.1\r\nAuthorization: Bearer eyJhbGciOiRSUzI1Ni...',
                },
            ],
        },
    };

    const t = content[language];

    return (
        <section id="oauth" className="py-20 md:py-28 bg-zinc-950 border-b border-zinc-800/60 relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Cabeçalho */}
                <div className="mx-auto max-w-3xl text-center space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/90 px-3 py-1 text-xs text-zinc-300 font-mono">
                        <KeyRound className="h-3.5 w-3.5 text-cyan-400" />
                        <span>{t.badge}</span>
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl font-mono">
                        {t.title}
                    </h2>
                    <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>

                {/* Barra de Highlights */}
                <div className="mt-10 flex flex-wrap justify-center gap-4 text-xs font-mono text-zinc-300">
                    <span className="bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-cyan-400" /> {t.h1}
                    </span>
                    <span className="bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-cyan-400" /> {t.h2}
                    </span>
                    <span className="bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-cyan-400" /> {t.h3}
                    </span>
                </div>

                {/* Sequência Interativa */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
                    {/* Lista de Passos (5 cols) */}
                    <div className="lg:col-span-5 space-y-3">
                        <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider block mb-2">
                            {t.timeline}
                        </span>
                        {t.steps.map((step, idx) => {
                            const isSelected = selectedStep === idx;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedStep(idx)}
                                    className={`w-full text-left p-4 rounded-lg border transition-all duration-200 cursor-pointer font-mono ${
                                        isSelected
                                            ? 'border-cyan-500/80 bg-zinc-900 shadow-md shadow-cyan-950/20'
                                            : 'border-zinc-800/80 bg-zinc-950/60 hover:bg-zinc-900/40 hover:border-zinc-700'
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className={`text-sm font-semibold ${isSelected ? 'text-zinc-100' : 'text-zinc-400'}`}>
                                            {step.title}
                                        </h3>
                                        <span className="text-[10px] text-zinc-500">{step.target}</span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Janela de Inspeção (7 cols) */}
                    <div className="lg:col-span-7 rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 space-y-4 font-mono">
                        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                            <span className="text-xs text-cyan-400 font-semibold flex items-center gap-2">
                                <FileCode className="h-4 w-4" />
                                {t.stepDetails} {selectedStep + 1}
                            </span>
                            <span className="text-[11px] text-zinc-500 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                                {t.steps[selectedStep].target}
                            </span>
                        </div>

                        <p className="text-zinc-300 font-sans text-sm leading-relaxed">
                            {t.steps[selectedStep].desc}
                        </p>

                        <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4 font-mono text-xs overflow-x-auto text-zinc-200 leading-relaxed">
                            <span className="text-zinc-500 block mb-1.5 font-mono">{t.sampleComment}</span>
                            <pre>
                                <code>{t.steps[selectedStep].payload}</code>
                            </pre>
                        </div>

                        <div className="flex items-center gap-2 text-[11px] text-emerald-400 pt-2">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            <span>{t.verifiedNote}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
