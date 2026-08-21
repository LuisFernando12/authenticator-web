import api from '../../config/api';

export const getClient = async (id: string) => {
    try {
        const response = await api.get(`/client/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Invalid credentials', { cause: error });
    }
};
