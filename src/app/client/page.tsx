import { Box, Container } from '@/components';
import { ClientForm } from '../_components/client-form';

export default function ClientPage() {
    return (
        <Container>
            <Box>
                <div className="w-full h-12 bg-zinc-950 border-b border-zinc-800 rounded-t-2xl px-4 flex items-center justify-between font-mono text-xs text-zinc-400">
                    <span className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                        Authenticator
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">Client Register</span>
                </div>
                <ClientForm />
            </Box>
        </Container>
    );
}
