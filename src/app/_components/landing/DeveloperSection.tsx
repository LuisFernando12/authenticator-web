'use client';

import React, { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const DeveloperSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'ts' | 'go' | 'python' | 'curl'>('ts');
    const [copied, setCopied] = useState<boolean>(false);
    const { language } = useLanguage();

    const content = {
        en: {
            badge: 'Developer First API',
            title: 'Built for developers.',
            subtitle: 'Integrate identity into your application without rebuilding authentication from scratch.',
            topologyHeader: 'Boundary Topology',
            yourApp: 'Your Application',
            auth: 'Authenticator',
            authSub: 'Identity Provider',
            authBadge: 'Core Boundary',
            yourApi: 'Your API',
            protectedRes: 'Protected Resource',
            bearerToken: 'Verified Bearer Token',
            copy: 'Copy',
            copied: 'Copied',
            zeroDep: 'Zero External Dependencies',
        },
        pt: {
            badge: 'API para Desenvolvedores',
            title: 'Feito para desenvolvedores.',
            subtitle: 'Integre identidade na sua aplicação sem precisar reconstruir a autenticação do zero.',
            topologyHeader: 'Topologia da Fronteira',
            yourApp: 'Sua Aplicação',
            auth: 'Authenticator',
            authSub: 'Provedor de Identidade',
            authBadge: 'Fronteira Central',
            yourApi: 'Sua API',
            protectedRes: 'Recurso Protegido',
            bearerToken: 'Token Bearer Verificado',
            copy: 'Copiar',
            copied: 'Copiado',
            zeroDep: 'Zero Dependências Externas',
        },
    };

    const t = content[language];

    const snippets = {
        ts: language === 'en' 
            ? `import { Authenticator } from '@authenticator/sdk';

const authenticator = new Authenticator({
  clientId: process.env.AUTHENTICATOR_CLIENT_ID!,
  domain: 'https://auth.yourdomain.com',
});

// Step 1: Generate PKCE Auth URL
const authorizationUrl = authenticator.authorize({
  clientId: 'app_live_8912',
  redirectUri: 'https://myapp.com/callback',
  codeChallenge: 'E9Melhoa2OwvFrEMTJguCHaoeK1t8URW...',
  codeChallengeMethod: 'S256',
});`
            : `import { Authenticator } from '@authenticator/sdk';

const authenticator = new Authenticator({
  clientId: process.env.AUTHENTICATOR_CLIENT_ID!,
  domain: 'https://auth.seudominio.com',
});

// Passo 1: Gerar URL de Autenticação PKCE
const authorizationUrl = authenticator.authorize({
  clientId: 'app_live_8912',
  redirectUri: 'https://minhaapp.com/callback',
  codeChallenge: 'E9Melhoa2OwvFrEMTJguCHaoeK1t8URW...',
  codeChallengeMethod: 'S256',
});`,

        go: language === 'en'
            ? `package main

import (
    "context"
    "github.com/authenticator/sdk-go"
)

func main() {
    client := authenticator.NewClient(&authenticator.Config{
        ClientID: "app_live_8912",
        Domain:   "https://auth.yourdomain.com",
    })

    // Exchange PKCE Code for Access Token
    token, err := client.ExchangeCode(context.Background(), code, codeVerifier)
}`
            : `package main

import (
    "context"
    "github.com/authenticator/sdk-go"
)

func main() {
    client := authenticator.NewClient(&authenticator.Config{
        ClientID: "app_live_8912",
        Domain:   "https://auth.seudominio.com",
    })

    // Trocar Código PKCE por Token de Acesso
    token, err := client.ExchangeCode(context.Background(), code, codeVerifier)
}`,

        python: language === 'en'
            ? `from authenticator import AuthenticatorClient

client = AuthenticatorClient(
    client_id="app_live_8912",
    domain="https://auth.yourdomain.com"
)

# Validate incoming access token on API route
user_session = client.verify_access_token(
    token=request.headers.get("Authorization")
)`
            : `from authenticator import AuthenticatorClient

client = AuthenticatorClient(
    client_id="app_live_8912",
    domain="https://auth.seudominio.com"
)

# Validar token de acesso recebido na rota da API
user_session = client.verify_access_token(
    token=request.headers.get("Authorization")
)`,

        curl: language === 'en'
            ? `# Exchange Authorization Code + PKCE Verifier for Tokens
curl -X POST https://auth.yourdomain.com/oauth/token \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  -d "grant_type=authorization_code" \\
  -d "client_id=app_live_8912" \\
  -d "code=ac_89120aef" \\
  -d "code_verifier=dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"`
            : `# Trocar Código de Autorização + Verificador PKCE por Tokens
curl -X POST https://auth.seudominio.com/oauth/token \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  -d "grant_type=authorization_code" \\
  -d "client_id=app_live_8912" \\
  -d "code=ac_89120aef" \\
  -d "code_verifier=dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"`,
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(snippets[activeTab]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="developers" className="py-20 md:py-28 bg-zinc-950/80 border-b border-zinc-800/60 relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Cabeçalho */}
                <div className="mx-auto max-w-3xl text-center space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/90 px-3 py-1 text-xs text-zinc-300 font-mono">
                        <Terminal className="h-3.5 w-3.5 text-cyan-400" />
                        <span>{t.badge}</span>
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl font-mono">
                        {t.title}
                    </h2>
                    <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>

                {/* Grid do Diagrama + Studio de Código */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
                    {/* Diagrama de Topologia */}
                    <div className="lg:col-span-5 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 space-y-6">
                        <h3 className="font-mono text-sm text-zinc-300 font-semibold uppercase tracking-wider">
                            {t.topologyHeader}
                        </h3>

                        {/* Fluxo dos Nós */}
                        <div className="space-y-4 font-mono text-xs">
                            {/* App */}
                            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-3.5 flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                    <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                                    <span className="text-zinc-200 font-semibold">{t.yourApp}</span>
                                </div>
                                <span className="text-[11px] text-zinc-500">SPA / Native</span>
                            </div>

                            {/* Seta para baixo */}
                            <div className="flex justify-center text-zinc-600 my-1">
                                <span className="text-xs text-zinc-500 font-mono flex items-center gap-1">
                                    ↓ OAuth 2.0 + PKCE
                                </span>
                            </div>

                            {/* Authenticator */}
                            <div className="rounded-lg border border-cyan-800/80 bg-cyan-950/40 p-4 flex items-center justify-between shadow-lg shadow-cyan-950/40">
                                <div className="flex items-center gap-2.5">
                                    <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse"></div>
                                    <div>
                                        <span className="text-zinc-100 font-bold block">{t.auth}</span>
                                        <span className="text-[11px] text-cyan-300 block">{t.authSub}</span>
                                    </div>
                                </div>
                                <span className="text-[11px] text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                                    {t.authBadge}
                                </span>
                            </div>

                            {/* Seta para baixo */}
                            <div className="flex justify-center text-zinc-600 my-1">
                                <span className="text-xs text-zinc-500 font-mono flex items-center gap-1">
                                    ↓ {t.bearerToken}
                                </span>
                            </div>

                            {/* API Protegida */}
                            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-3.5 flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                    <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                                    <span className="text-zinc-200 font-semibold">{t.yourApi}</span>
                                </div>
                                <span className="text-[11px] text-zinc-500">{t.protectedRes}</span>
                            </div>
                        </div>
                    </div>

                    {/* Studio de Código */}
                    <div className="lg:col-span-7 rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl">
                        {/* Barra de Abas */}
                        <div className="flex items-center justify-between bg-zinc-900/90 px-4 py-2.5 border-b border-zinc-800 text-xs font-mono">
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setActiveTab('ts')}
                                    className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                                        activeTab === 'ts' ? 'bg-zinc-800 text-cyan-400 font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                                    }`}
                                >
                                    TypeScript
                                </button>
                                <button
                                    onClick={() => setActiveTab('go')}
                                    className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                                        activeTab === 'go' ? 'bg-zinc-800 text-cyan-400 font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                                    }`}
                                >
                                    Go
                                </button>
                                <button
                                    onClick={() => setActiveTab('python')}
                                    className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                                        activeTab === 'python' ? 'bg-zinc-800 text-cyan-400 font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                                    }`}
                                >
                                    Python
                                </button>
                                <button
                                    onClick={() => setActiveTab('curl')}
                                    className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                                        activeTab === 'curl' ? 'bg-zinc-800 text-cyan-400 font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                                    }`}
                                >
                                    cURL
                                </button>
                            </div>

                            <button
                                onClick={copyToClipboard}
                                className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-100 transition-colors p-1 rounded cursor-pointer"
                                aria-label="Copy snippet"
                            >
                                {copied ? (
                                    <>
                                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                                        <span className="text-emerald-400">{t.copied}</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy className="h-3.5 w-3.5" />
                                        <span>{t.copy}</span>
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Bloco de Código */}
                        <div className="p-5 font-mono text-xs overflow-x-auto bg-zinc-950 text-zinc-200 leading-relaxed">
                            <pre>
                                <code>{snippets[activeTab]}</code>
                            </pre>
                        </div>

                        {/* Rodapé do Bloco */}
                        <div className="bg-zinc-900/60 px-4 py-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                            <span>OAuth 2.0 RFC 6749 / RFC 7636</span>
                            <span className="text-zinc-400">{t.zeroDep}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
