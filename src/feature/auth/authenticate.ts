'use server';
import api from '@/config/api';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function requireAuth(): Promise<void> {
    const cookiesStore = await cookies();
    const hasAccessToken = cookiesStore.has('access_token');
    if (!hasAccessToken) {
        redirect('/login');
    }
    const accessToken = cookiesStore.get('access_token')?.value;
    const { status } = await api.get('/me', {
        validateStatus: (status) => status === 200 || status === 401,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    if (status !== 200) {
        redirect('/api/auth/logout');
    }
    return;
}
