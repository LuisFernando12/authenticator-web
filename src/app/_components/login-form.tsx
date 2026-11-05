'use client';
import { loginAuth } from '@/actions/auth/login.auth';
import { loginOauth } from '@/actions/oauth/login.oauth';
import { OauthQueryParams, OauthQueryParamsSchema } from '@/actions/oauth/schemas/login.schema';
import { toast } from '@/components/ui/toast';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Field, FieldGroup, FieldLabel, Input } from '../../components';
interface Props {
    oauthParams?: OauthQueryParams;
    type: 'oauth-login' | 'default';
}
export function LoginForm({ oauthParams, type }: Props) {
    const [error, setError] = useState<string>('');
    const form = useForm<{
        email: string;
        password: string;
    }>();
    const [transition, setStartTransition] = useTransition();
    const route = useRouter();
    const onSubmit = (data: { email: string; password: string }) => {
        setStartTransition(async () => {
            try {
                if (type === 'default') {
                    await loginAuth(data);
                    return route.push('/dashboard');
                }
                if (type === 'oauth-login' && OauthQueryParamsSchema.safeParse(oauthParams).success) {
                    return await loginOauth({ ...data, params: oauthParams! });
                } else {
                    toast.add({
                        title: 'Error',
                        description: 'Invalid oauth login',
                        type: 'error',
                    });
                    return;
                }
            } catch {
                setError('Email or password incorrect');
            } finally {
                form.reset();
            }
        });
    };
    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup className="gap-5 items-center p-8">
                <h1 className="text-xl font-bold font-mono text-zinc-100 text-center tracking-tight">
                    Sign in to your account
                </h1>
                <Field>
                    <FieldLabel htmlFor="fieldgroup-email" className="text-zinc-300 font-mono text-xs">
                        Email
                    </FieldLabel>
                    <Input
                        id="fieldgroup-email"
                        type="email"
                        placeholder="name@example.com"
                        {...form.register('email')}
                    />
                </Field>
                <Field>
                    <FieldLabel htmlFor="fieldgroup-password" className="text-zinc-300 font-mono text-xs">
                        Password
                    </FieldLabel>
                    <Input
                        id="fieldgroup-password"
                        placeholder="********"
                        type="password"
                        {...form.register('password')}
                    />
                    {error && <div className="h-3 w-full text-xs font-mono text-red-400 mt-1">{error}</div>}
                    <div className="w-full text-right mt-1">
                        <Link
                            href="/forgot-password"
                            className="text-right text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                            Forgot Password?
                        </Link>
                    </div>
                </Field>
                <Field orientation="vertical" className="w-full pt-2">
                    <Button
                        type="submit"
                        disabled={transition || !form.formState.isValid}
                        className="w-full font-semibold bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors"
                    >
                        {transition ? 'Loading...' : 'Submit'}
                    </Button>
                    <div className="w-full text-center mt-3">
                        <Link
                            href="/register"
                            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                            Register Now
                        </Link>
                    </div>
                </Field>
            </FieldGroup>
        </form>
    );
}
