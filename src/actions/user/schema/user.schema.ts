import { z } from 'zod';
export const UserSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    email: z.email({ pattern: z.regexes.email, message: 'Invalid email' }),
    password: z
        .string()
        .regex(/[a-z]/, 'Needs at least 1 lowercase letter')
        .regex(/[A-Z]/, 'Needs at least 1 capital letter')
        .regex(/\d/, 'Need at least 1 number')
        .regex(/[!@#$%^&*(),.?":{}|<>_\-+=/\\[\];'`~]/, 'Needs at least 1 special character')
        .min(8, 'Password must be at least 8 characters long'),
});

export type User = z.infer<typeof UserSchema>;
