import { LoginForm } from '@/app/_components/login-form';
import { Box, Container } from '@/components';

export default function Login() {
    return (
        <Container className="justify-center items-center">
            <Box className="gap-8" orientation="vertical">
                <div className="w-full h-12 bg-zinc-950 border-b border-zinc-800 rounded-t-2xl px-4 flex items-center justify-between font-mono text-xs text-zinc-400">
                    <span className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                        Authenticator
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">Sign In</span>
                </div>
                <LoginForm />
            </Box>
        </Container>
    );
}
