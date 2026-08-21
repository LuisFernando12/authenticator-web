import api from '../../config/api';

export const verifyEmail = async (token: string): Promise<void> => {
    try {
        await api.get('/verify-email', {
            params: {
                token: token,
            },
        });
        return;
    } catch (error) {
        throw new Error('Unsuccessful email verification', { cause: error });
    }
};
