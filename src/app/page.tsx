import {
    ArchitectureSection,
    Capabilities,
    DeveloperSection,
    FinalCTA,
    Footer,
    Hero,
    Navbar,
    OAuthSection,
    SecuritySection,
    TrustSection,
} from '@/app/_components/landing';
import { LanguageProvider } from '@/app/_components/landing/LanguageContext';

export default function Home() {
    return (
        <LanguageProvider>
            <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-zinc-800 selection:text-zinc-100">
                <Navbar />
                <main className="flex-1">
                    <Hero />
                    <Capabilities />
                    <DeveloperSection />
                    <OAuthSection />
                    <SecuritySection />
                    <ArchitectureSection />
                    <TrustSection />
                    <FinalCTA />
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    );
}
