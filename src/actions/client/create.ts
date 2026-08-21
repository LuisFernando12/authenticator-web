import api from '../../config/api';

export interface IClientCreatePayload {
    name: string;
    redirectUris: Array<string>;
    grantTypes: Array<string>;
    scopes: Array<string>;
    isConfidential: boolean;
}
export const createClient = async (payload: IClientCreatePayload) => {
    try {
        const response = await api.post('/client', payload);
        return response.data;
    } catch (error) {
        throw new Error('Invalid credentials', { cause: error });
    }
};
