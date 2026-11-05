import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<NextResponse> {
    const cookiesStore = await cookies();
    if (cookiesStore.has('access_token') && cookiesStore.has('refresh_token')) {
        cookiesStore.delete('access_token');
        cookiesStore.delete('refresh_token');
    }
    return NextResponse.redirect(new URL('/login', request.url));
}
