'use client';
import { registerUser } from '@/actions/user/register';
import { User } from '@/actions/user/schema/user.schema';
import { PasswordRules } from '@/components/password-rules';
import { useActionState, useState } from 'react';
import { Button, Field, FieldGroup, FieldLabel, Input } from '../../components';

const initialState = {
    success: false,
    message: '',
    errors: {},
};
export function UserForm() {
    const [state, formAction, isPending] = useActionState(registerUser, initialState);
    const [form, setForm] = useState<User & { confirmPassword: string }>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const enableButton =
        Object.values(form ?? {}).every((value) => value !== '' && value !== undefined) &&
        form?.password === form?.confirmPassword;
    const changeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputName = event.target.name === 'confirm-password' ? 'confirmPassword' : event.target.name;
        if (inputName !== 'confirmPassword') {
        }
        setForm({
            ...form,
            [inputName]: event.target.value,
        });
    };
    return (
        <form action={formAction}>
            <FieldGroup className="w-full h-11/12 rounded-b-2xl flex flex-col gap-5 items-center px-8 py-4">
                <h1 className="text-xl font-bold font-mono text-zinc-100 mt-2 text-center tracking-tight">Register User</h1>
                <Field>
                    <FieldLabel htmlFor="fieldgroup-username" className="text-zinc-300 font-mono text-xs">Username</FieldLabel>
                    <Input
                        id="fieldgroup-username"
                        name="name"
                        placeholder="John Doe"
                        required
                        aria-invalid={!!state.errors?.name}
                        onChange={changeForm}
                    />
                    {state.errors?.name && <span className="text-red-400 font-mono text-xs ml-2 mt-1">{state.errors.name}</span>}
                </Field>
                <Field>
                    <FieldLabel htmlFor="fieldgroup-email" className="text-zinc-300 font-mono text-xs">Email</FieldLabel>
                    <Input
                        id="fieldgroup-email"
                        type="email"
                        placeholder="name@example.com"
                        name="email"
                        required
                        aria-invalid={!!state.errors?.email}
                        onChange={changeForm}
                    />
                    {state.errors?.email && <span className="text-red-400 font-mono text-xs ml-2 mt-1">{state.errors.email}</span>}
                </Field>
                <Field>
                    <FieldLabel htmlFor="fieldgroup-password" className="text-zinc-300 font-mono text-xs">Password</FieldLabel>
                    <Input
                        id="fieldgroup-password"
                        type="password"
                        name="password"
                        required
                        aria-invalid={!!state.errors?.password}
                        onChange={changeForm}
                    />
                    <PasswordRules password={form.password || ''} />
                </Field>
                <Field>
                    <FieldLabel htmlFor="fieldgroup-confirm-password" className="text-zinc-300 font-mono text-xs">Confirm Password</FieldLabel>
                    <Input
                        id="fieldgroup-confirm-password"
                        type="password"
                        name="confirm-password"
                        required
                        aria-invalid={form.confirmPassword !== form.password}
                        onChange={changeForm}
                    />
                    {form.confirmPassword !== form.password && (
                        <span className="text-red-400 font-mono text-xs ml-2 mt-1">Passwords do not match</span>
                    )}
                </Field>
                <Field orientation="vertical" className="py-4 w-full">
                    <Button type="submit" disabled={isPending || !enableButton} className="w-full font-semibold bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors">
                        {isPending ? 'Registering...' : 'Register'}
                    </Button>
                </Field>
            </FieldGroup>
        </form>
    );
}
