import { CalendarDays, CircleUserRound, Fingerprint, Mail, ShieldCheck } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Perfil' };
export default async function ProfilePage() {
    const rows = [
        { label: 'E-mail', icon: Mail, value: 'Não informado' },
        { label: 'ID da conta', icon: Fingerprint, value: 'Não informado' },
        { label: 'Conta criada em', icon: CalendarDays, value: 'Não informado' },
        { label: 'MFA', icon: ShieldCheck, value: 'Não informado' },
    ];
    return (
        <div className="mx-auto max-w-4xl space-y-8">
            <header className="space-y-2">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">Conta</p>
                <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Meu perfil</h1>
                <p className="max-w-2xl text-sm leading-6 text-zinc-400">
                    Consulte as informações associadas à sua conta.
                </p>
            </header>

            <section className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-2xl shadow-black/10">
                <div className="h-24 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.13),transparent_65%)]" />
                <div className="-mt-10 flex flex-col gap-5 px-6 pb-7 sm:flex-row sm:items-end sm:px-8">
                    <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-zinc-950 text-2xl font-semibold text-cyan-300 shadow-lg shadow-black/30">
                        JD
                    </div>
                    <div className="min-w-0 flex-1 pb-1">
                        <h2 className="truncate text-xl font-semibold text-zinc-100">John Doe</h2>
                        <p className="mt-1 truncate text-sm text-zinc-400">{'E-mail não informado'}</p>
                    </div>
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs font-medium text-emerald-300">
                        <ShieldCheck className="size-4" aria-hidden="true" />
                        Sessão autenticada
                    </div>
                </div>

                <div className="border-t border-zinc-800 px-6 py-2 sm:px-8">
                    <h3 className="py-5 text-sm font-medium text-zinc-200">Informações da conta</h3>
                    <dl className="divide-y divide-zinc-800/80">
                        {rows.map(({ label, icon: Icon, value }) => (
                            <div key={label} className="flex items-center gap-4 py-4">
                                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-400">
                                    <Icon className="size-4" aria-hidden="true" />
                                </div>
                                <dt className="flex-1 text-sm text-zinc-400">{label}</dt>
                                <dd className="max-w-[55%] truncate text-right text-sm font-medium text-zinc-200">
                                    {value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            <div className="flex items-start gap-3 rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4 text-sm text-zinc-400">
                <CircleUserRound className="mt-0.5 size-4 shrink-0 text-cyan-400" aria-hidden="true" />
                <p>Os dados exibidos dependem das informações fornecidas pelo serviço de autenticação.</p>
            </div>
        </div>
    );
}
