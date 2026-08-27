import { Toaster } from '@/components/ui/toast';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Authenticator — Infraestrutura de Identidade para Aplicações Modernas',
    description:
        'Autenticação, autorização, gerenciamento de sessões e rastreamento de incidentes de segurança projetados para arquiteturas modernas.',
    keywords: [
        'Provedor de Identidade',
        'OAuth 2.0',
        'PKCE',
        'Autenticação',
        'Autorização',
        'Gerenciamento de Sessão',
        'Rotação de Tokens',
        'Incidentes de Segurança',
    ],
    authors: [{ name: 'Luis Fernando' }],
    openGraph: {
        title: 'Authenticator — Infraestrutura de Identidade para Aplicações Modernas',
        description: 'Autenticação, autorização e segurança projetadas para as suas aplicações.',
        type: 'website',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth antialiased`}
            data-scroll-behavior="smooth"
        >
            <body className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-zinc-800 selection:text-zinc-100">
                {children}
                <Toaster />
            </body>
        </html>
    );
}
