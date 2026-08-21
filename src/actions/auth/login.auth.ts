'use server';
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
    } catch (error) {
        throw new Error('Email or password incorrect', { cause: error });
    }
    return;
};
