'use server';
import { cookies } from 'next/headers';
import api from '../../config/api';
export interface LoginPayload {
    email: string;
    password: string;
}
export interface LoginResponse {
    access_token: string;
    refresh_token: string;
    expiresAt: string;
}
export const loginAuth = async ({ email, password }: LoginPayload): Promise<void> => {
    try {
        const response = await api.post('/login', {
            email,
            password,
        });
        if (response.status === 400) {
            throw new Error('User not verified');
        }
        if (response.status !== 200) {
            throw new Error('Email or password incorrect');
        }
        if (response.data && response.data.access_token) {
            const { access_token, refresh_token, expiresAt } = response.data as LoginResponse;
            const cookiesStore = await cookies();
            cookiesStore.set('access_token', access_token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
            });
            cookiesStore.set('refresh_token', refresh_token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                expires: new Date(expiresAt),
            });
        }
    } catch (error) {
        throw new Error('Email or password incorrect', { cause: error });
    }
    return;
};
