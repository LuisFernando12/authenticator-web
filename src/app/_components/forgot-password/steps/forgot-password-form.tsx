'use client';
import { resetPassword } from '@/actions/auth/reset-password';
import { Button, Field, FieldGroup, FieldLabel, Input } from '@/components';
import { toast } from '@/components/ui/toast';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
interface Props {
    nextStep: (value: boolean) => void;
}
export function ForgotPasswordForm({ nextStep }: Props) {
    const form = useForm<{ email: string }>();
    const [transition, setStartTransition] = useTransition();

    const onSubmit = async (data: { email: string }) => {
        setStartTransition(async () => {
            try {
                const response = await resetPassword(data.email);
                toast.add({
                    title: 'Success',
                    description: response.message,
                    type: 'success',
                });
                form.reset();
                nextStep(true);
            } catch (error) {
                console.error(error);
            }
        });
    };
    return (
        <>
            <h1 className="text-xl font-bold font-mono text-zinc-100 text-center tracking-tight">Reset Password</h1>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full px-8">
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="fieldgroup-email" className="text-zinc-300 font-mono text-xs">Email</FieldLabel>
                        <Input
                            id="fieldgroup-email"
                            type="email"
                            placeholder="name@example.com"
                            {...form.register('email')}
                            required
                        />
                    </Field>
                    <Field orientation="vertical" className="px-0 pt-2">
                        <Button type="submit" disabled={transition} className="w-full font-semibold bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors">
                            {transition ? 'Sending...' : 'Send Email'}
                        </Button>
                    </Field>
                </FieldGroup>
            </form>
        </>
    );
}
