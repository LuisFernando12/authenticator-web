import api from '../../config/api';

export const newTokenEmailActive = async (email: string): Promise<{ message: string }> => {
    try {
        const response = await api.post('/new-token/email-active', {
            email,
        });
        return response.data;
    } catch (error) {
        throw new Error('Invalid credentials', { cause: error });
    }
};
