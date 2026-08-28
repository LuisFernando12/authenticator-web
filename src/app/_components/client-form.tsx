'use client';

import { createClient } from '@/actions/client/create';
import { ClientSchema, ClientSchemaType } from '@/actions/client/schema/client.schema';
import { Button, Field, FieldGroup, FieldLabel, Input, Select } from '@/components';
import { toast } from '@/components/ui/toast';
import { PlusCircle, TrashIcon } from 'lucide-react';
import { useState, useTransition } from 'react';
import { Controller, useForm } from 'react-hook-form';

export const ClientForm = (): React.ReactElement => {
    const grantTypes = ['authorization_code', 'refresh_token', 'client_credentials'];
    const form = useForm<ClientSchemaType>({
        defaultValues: {
            grantTypes: [grantTypes[0]],
        },
    });
    const [transition, startTransition] = useTransition();
    const [countRedirects, setCountRedirects] = useState(1);
    const [countScopes, setCountScopes] = useState(1);

    const resetForm = () => {
        form.reset();
        form.resetDefaultValues({
            grantTypes: [grantTypes[0]],
        });
    };

    const onSubmit = (data: ClientSchemaType) => {
        console.log('Form data submitted:', data);
        const isSafeParse = ClientSchema.safeParse(data);
        if (isSafeParse.success === false) {
            toast.add({
                title: 'Error',
                description: 'Invalid form data',
                type: 'error',
            });
            return;
        }
        startTransition(async () => {
            try {
                await createClient(data);
                toast.add({
                    title: 'Success',
                    description: 'Client created successfully',
                    type: 'success',
                });
                resetForm();
                return;
            } catch (error) {
                toast.add({
                    title: 'Error',
                    description: 'Failed to create client',
                    type: 'error',
                });
                console.error('Error creating client:', error);
                return;
            }
        });
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup className="gap-5 items-center p-8">
                <h1 className="text-2xl font-bold text-white">Client Register</h1>
                <Field orientation="vertical" className="w-full">
                    <FieldLabel htmlFor="fieldgroup-name" className="text-zinc-300 font-mono text-xs">
                        Client Name
                    </FieldLabel>
                    <Input
                        id="fieldgroup-name"
                        type="text"
                        placeholder="ACME Client"
                        {...form.register('name')}
                        required
                    />
                </Field>
                <Field orientation="vertical" className="w-full overflow-hidden ">
                    <FieldLabel htmlFor="fieldgroup-redirect" className="text-zinc-300 font-mono text-xs">
                        Redirect URL
                    </FieldLabel>
                    <div className="max-h-52 overflow-y-auto overflow-x-hidden flex flex-col gap-2">
                        {Array.from({ length: countRedirects }).map((_, index) => (
                            <div className="flex  gap-1 justify-center items-center" key={index}>
                                <Input
                                    id={'fieldgroup-redirect-' + index}
                                    type="text"
                                    placeholder="https://acme.com/callback"
                                    required={index === 0}
                                    {...form.register(`redirectUris.${index}`)}
                                />
                                {index === countRedirects - 1 && countRedirects < 4 ? (
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => setCountRedirects(countRedirects + 1)}
                                    >
                                        <PlusCircle className="w-6 h-6" color="green" />
                                    </Button>
                                ) : (
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => setCountRedirects(countRedirects - 1)}
                                    >
                                        <TrashIcon className="w-6 h-6" color="red" />
                                    </Button>
                                )}
                            </div>
                        ))}
                    </div>
                </Field>
                <Field orientation="vertical" className="w-full">
                    <FieldLabel htmlFor="fieldgroup-grant" className="text-zinc-300 font-mono text-xs">
                        Grant Types
                    </FieldLabel>
                    <Controller
                        name="grantTypes"
                        control={form.control}
                        render={({ field }) => (
                            <Select
                                items={grantTypes}
                                type="multiple"
                                onChange={field.onChange}
                                value={field.value}
                                required
                            />
                        )}
                    />
                </Field>
                <Field orientation="vertical" className="w-full">
                    <FieldLabel htmlFor="fieldgroup-scopes" className="text-zinc-300 font-mono text-xs">
                        Scopes
                    </FieldLabel>
                    <div className="flex flex-col gap-2 max-h-52 overflow-y-auto overflow-x-hidden">
                        {Array.from({ length: countScopes }).map((_, index) => (
                            <div className="flex gap-1 justify-center items-center" key={index}>
                                <Input
                                    id={'fieldgroup-scopes-' + index}
                                    type="text"
                                    placeholder="profile"
                                    {...form.register(`scopes.${index}`)}
                                    required={index === 0}
                                />
                                {index === countScopes - 1 && countScopes < 4 ? (
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => setCountScopes(countScopes + 1)}
                                        title="Add Scope"
                                    >
                                        <PlusCircle className="w-6 h-6" color="green" />
                                    </Button>
                                ) : (
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => setCountScopes(countScopes - 1)}
                                        title="Remove Scope"
                                    >
                                        <TrashIcon className="w-6 h-6" color="red" />
                                    </Button>
                                )}
                            </div>
                        ))}
                    </div>
                </Field>
                <Field orientation="horizontal" className="w-full gap-1 pl-1">
                    <Input
                        id="fieldgroup-confidential"
                        type="checkbox"
                        className="w-4 h-4"
                        {...form.register('isConfidential')}
                    />
                    <FieldLabel htmlFor="fieldgroup-confidential" className="text-zinc-300 font-mono text-xs">
                        Confidential Client
                    </FieldLabel>
                </Field>
                <Field orientation="vertical" className="w-full">
                    <Button
                        type="submit"
                        className="w-full bg-zinc-100 text-zinc-950 font-mono text-xs py-2 rounded-lg hover:bg-zinc-400"
                        disabled={transition}
                    >
                        Create Client
                    </Button>
                </Field>
            </FieldGroup>
        </form>
    );
};
