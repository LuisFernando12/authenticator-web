'use server';
import api from '../../config/api';
import { ClientSchema, ClientSchemaType } from './schema/client.schema';

export const createClient = async (payload: ClientSchemaType) => {
    if (ClientSchema.safeParse(payload).success === false) {
        throw new Error('Error to create client: invalid payload');
    }
    try {
        const response = await api.post('/client', {
            ...payload,
        });
        return response.data;
    } catch {
        throw new Error('Failure to create client, try again later !');
    }
};
