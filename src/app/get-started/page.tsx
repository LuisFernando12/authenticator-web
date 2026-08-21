import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Rocket } from 'lucide-react';

export default function GetStartedPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center p-6 font-mono">
            <div className="max-w-md w-full rounded-xl border border-zinc-800 bg-zinc-900/60 p-8 text-center space-y-4 shadow-2xl">
                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-cyan-400 w-fit mx-auto">
                    <Rocket className="h-6 w-6" />
                </div>
                <h1 className="text-xl font-bold text-zinc-100">Get Started with Authenticator</h1>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    Set up your first application tenant, generate client credentials, and configure PKCE authorization flows.
                </p>
                <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2">
                    <Link
                        href="/register"
                        className="w-full py-2 bg-zinc-100 text-zinc-900 rounded font-sans text-sm font-medium hover:bg-zinc-200 transition-colors"
                    >
                        Create Developer Account
                    </Link>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 text-xs text-zinc-400 hover:text-zinc-100 transition-colors pt-2"
                    >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        <span>Return to Landing</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
