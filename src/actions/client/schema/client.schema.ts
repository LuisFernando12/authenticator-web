import z from 'zod';

export const ClientSchema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    redirectUris: z
        .array(z.string().url({ message: 'Invalid URL' }))
        .min(1, { message: 'At least one redirect URL is required' })
        .max(4, { message: 'Maximum of 4 redirect URLs allowed' }),
    grantTypes: z
        .array(z.string())
        .min(1, { message: 'At least one grant type is required' })
        .max(4, { message: 'Maximum of 4 grant types allowed' }),
    scopes: z
        .array(z.string())
        .min(1, { message: 'At least one scope is required' })
        .max(4, { message: 'Maximum of 4 scopes allowed' }),
    isConfidential: z.boolean(),
});
export type ClientSchemaType = z.infer<typeof ClientSchema>;
