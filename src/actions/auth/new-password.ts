'use server';
import api from '../../config/api';
import { INewPasswordPayload, PasswordSchema } from './schema/password.schema';

export const newPassword = async ({ code, password }: INewPasswordPayload): Promise<{ message: string }> => {
    if (!PasswordSchema.safeParse({ code, password }).success) throw new Error('Invalid params');
    try {
        const response = await api.post('/new-password', {
            code,
            password,
        });
        return response.data;
    } catch (error) {
        throw new Error('Invalid params', { cause: error });
    }
};
