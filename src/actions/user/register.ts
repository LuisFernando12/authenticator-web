'use server';
import { AxiosError } from 'axios';
import { redirect } from 'next/navigation';
import api from '../../config/api';
import { UserSchema } from './schema/user.schema';

type FormState = {
    success: boolean;
    message?: string;
    errors?: Record<string, string[]>;
    status?: number;
};

export async function registerUser(formState: FormState, formData: FormData): Promise<FormState> {
    const userFormValidate = UserSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    });
    if (!userFormValidate.success) {
        return {
            status: 400,
            success: false,
            message: 'Error to create user, please try again',
            errors: userFormValidate.error.flatten().fieldErrors,
        };
    }

    const { name, email, password } = userFormValidate.data;
    try {
        await api.post('/user', {
            name,
            email,
            password,
        });
    } catch (error: unknown | AxiosError) {
        if (error instanceof AxiosError) {
            if (error.status === 409) {
                return {
                    status: error.status,
                    success: false,
                    message: 'User already exists',
                    errors: {
                        email: ['User already exists'],
                    },
                };
            }
            return {
                status: error.status,
                success: false,
                message: 'Error to create user, please try again',
            };
        }
        return {
            status: 500,
            success: false,
            message: 'Error to create user, please try again',
        };
    }
    return redirect('/login');
}
