'use server';

import api from '@/config/api';
import { redirect } from 'next/navigation';
import { OauthQueryParams } from './schemas/login.schema';

export interface OauthLoginPayload {
    email: string;
    password: string;
    params: OauthQueryParams;
}
export const loginOauth = async ({ email, password, params }: OauthLoginPayload): Promise<void> => {
    let targetUrl;
    try {
        const response = await api.post(
            'oauth/login',
            {
                email,
                password,
            },
            {
                params: params,
                maxRedirects: 0,
                validateStatus: (status: number) => status >= 200 && status < 4000,
            },
        );
        if (response.status === 302 || response.status === 301) {
            targetUrl = response.headers.location;
        }
        if (response.status >= 400) {
            throw new Error('Error to approve consent !');
        }
    } catch (error) {
        throw new Error('Email or password incorrect', { cause: error });
    }
    if (targetUrl) {
        return redirect(targetUrl);
    }
};
