'use client';

import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'pt';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        if (typeof window !== 'undefined') {
            const savedLang = localStorage.getItem('authenticator_lang') as Language;
            if (savedLang === 'en' || savedLang === 'pt') {
                return savedLang;
            }
        }
        return 'pt';
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        if (typeof window !== 'undefined') {
            localStorage.setItem('authenticator_lang', lang);
        }
    };

    const value = {
        language,
        setLanguage,
        t: (key: string) => key,
    };

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageToggle: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="inline-flex items-center rounded-lg border border-zinc-800 bg-zinc-900/90 p-0.5 text-xs font-mono">
            <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                    language === 'en'
                        ? 'bg-zinc-800 text-cyan-400 border border-zinc-700/80 shadow-xs'
                        : 'text-zinc-400 hover:text-zinc-200'
                }`}
                aria-label="Switch to English"
            >
                EN
            </button>
            <button
                onClick={() => setLanguage('pt')}
                className={`px-2 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                    language === 'pt'
                        ? 'bg-zinc-800 text-cyan-400 border border-zinc-700/80 shadow-xs'
                        : 'text-zinc-400 hover:text-zinc-200'
                }`}
                aria-label="Mudar para Português"
            >
                PT-BR
            </button>
        </div>
    );
};
