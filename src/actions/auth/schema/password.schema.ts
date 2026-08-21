import z from 'zod';

export const PasswordSchema = z.object({
    password: z
        .string()
        .regex(/[a-z]/, 'Needs at least 1 lowercase letter')
        .regex(/[A-Z]/, 'Needs at least 1 capital letter')
        .regex(/\d/, 'Need at least 1 number')
        .regex(/[!@#$%^&*(),.?":{}|<>_\-+=/\\[\];'`~]/, 'Needs at least 1 special character')
        .min(8, 'Password must be at least 8 characters long'),
    code: z.number(),
});

export type INewPasswordPayload = z.infer<typeof PasswordSchema>;
