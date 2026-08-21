import { Box, Container, Button, Field } from '@/components';

export default function ConsentScreen(): React.ReactElement {
    const scopes = ['email', 'phone', 'address', 'profile'].map((scope) => scope.toUpperCase());
    const clientName = 'Fintech-X';
    const scopesFormatted =
        scopes.length > 2 ? scopes.join(', ') : scopes.length > 1 ? scopes[0] + ' and ' + scopes[1] : scopes[0];
    return (
        <Container orientation="vertical" align="center">
            <Box orientation="vertical" className="items-center gap-6 pb-8">
                <div className="w-full h-12 bg-zinc-950 border-b border-zinc-800 rounded-t-2xl px-4 flex items-center justify-between font-mono text-xs text-zinc-400">
                    <span className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                        Authenticator
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">Consent</span>
                </div>
                <div className="px-8 flex flex-col gap-6 items-center">
                    <h1 className="text-xl font-bold font-mono text-zinc-100 text-center tracking-tight">OAuth 2.0 Authorization Request</h1>
                    <p className="font-sans text-sm text-zinc-300 leading-relaxed text-justify">
                        The client <strong className="text-cyan-400 font-mono">{clientName}</strong> wants to access your <strong className="text-zinc-100 font-mono">{scopesFormatted}</strong>. If
                        you wish to consent to this request, click approve; otherwise, click cancel.
                    </p>
                    <Field orientation="vertical" className="w-full gap-3">
                        <Button type="submit" className="w-full font-semibold bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors">
                            Approve
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            className="w-full bg-transparent text-red-400 border border-red-900/60 hover:bg-red-950/40 hover:text-red-300 font-semibold transition-colors"
                        >
                            Cancel
                        </Button>
                    </Field>
                </div>
            </Box>
        </Container>
    );
}
