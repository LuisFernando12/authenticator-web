import React from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function DocsPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center p-6 font-mono">
            <div className="max-w-md w-full rounded-xl border border-zinc-800 bg-zinc-900/60 p-8 text-center space-y-4 shadow-2xl">
                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-cyan-400 w-fit mx-auto">
                    <BookOpen className="h-6 w-6" />
                </div>
                <h1 className="text-xl font-bold text-zinc-100">Authenticator Documentation</h1>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    Explore API references, OAuth 2.0 integration guides, PKCE flows, and SDK documentation.
                </p>
                <div className="pt-4 border-t border-zinc-800">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-100 transition-colors"
                    >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        <span>Return to Authenticator Landing</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
