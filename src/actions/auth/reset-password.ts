'use server';
import api from '../../config/api';

export const resetPassword = async (email: string): Promise<{ message: string }> => {
    try {
        const response = await api.post('/reset-password', {
            email,
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Invalid email', { cause: error });
    }
};
