import { UserForm } from '@/app/_components/user-form';
import { Box, Container } from '@/components';

export default function Register(): React.ReactElement {
    return (
        <Container orientation="vertical" align="center">
            <Box orientation="vertical" className="h-auto">
                <div className="w-full h-12 bg-zinc-950 border-b border-zinc-800 rounded-t-2xl px-4 flex items-center justify-between font-mono text-xs text-zinc-400">
                    <span className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                        Authenticator
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">Register</span>
                </div>
                <UserForm />
            </Box>
        </Container>
    );
}
