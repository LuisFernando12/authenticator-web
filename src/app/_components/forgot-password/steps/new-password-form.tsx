'use client';
import { newPassword } from '@/actions/auth/new-password';
import { PasswordSchema } from '@/actions/auth/schema/password.schema';
import { Button, Field, FieldGroup, FieldLabel, Input } from '@/components';
import { PasswordRules } from '@/components/password-rules';
import { toast } from '@/components/ui/toast';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { useForm, useWatch } from 'react-hook-form';
interface Props {
    code: number;
}
export function NewPasswordForm({ code }: Props): React.ReactElement {
    const form = useForm<{ password: string; confirmPassword: string }>();
    const [transiction, setStartTransition] = useTransition();
    const router = useRouter();
    const password = useWatch({ control: form.control, name: 'password', defaultValue: '' });
    const confirmPassword = useWatch({ control: form.control, name: 'confirmPassword', defaultValue: '' });
    const disabledButton =
        !form.formState.isValid || transiction || password !== confirmPassword || password.length === 0;
    const onSubmit = async (data: { password: string; confirmPassword: string }) => {
        if (!PasswordSchema.safeParse({ code: code, password: data.password }).success) {
            toast.add({
                title: 'Invalid params',
                description: 'Verify your password and try again!',
                type: 'error',
            });
            return;
        }
        setStartTransition(async () => {
            try {
                const response = await newPassword({ code: code, password: data.password });
                toast.add({
                    title: 'Success',
                    description: response.message,
                    type: 'success',
                });
                form.reset();
                router.push('/login');
            } catch (error) {
                toast.add({
                    title: 'Error',
                    description: 'Error changing password',
                    type: 'error',
                });
                console.error(error);
            }
        });
    };

    return (
        <>
            <h1 className="text-xl font-bold font-mono text-zinc-100 text-center tracking-tight">New Password</h1>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full px-8">
                <FieldGroup className="px-0">
                    <Field>
                        <FieldLabel htmlFor="fieldgroup-password" className="text-zinc-300 font-mono text-xs">Password</FieldLabel>
                        <Input id="fieldgroup-password" type="password" {...form.register('password')} required />
                        <PasswordRules password={password} />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="fieldgroup-confirm-password" className="text-zinc-300 font-mono text-xs">Confirm Password</FieldLabel>
                        <Input
                            id="fieldgroup-confirm-password"
                            type="password"
                            {...form.register('confirmPassword')}
                            required
                            aria-invalid={password !== confirmPassword ? 'true' : 'false'}
                        />
                    </Field>
                    <Field orientation="vertical" className="px-0 pt-2">
                        <Button type="submit" disabled={disabledButton} className="w-full font-semibold bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors">
                            {transiction ? 'Changing Password...' : 'Change Password'}
                        </Button>
                    </Field>
                </FieldGroup>
            </form>
        </>
    );
}
