import { AppDrawer } from '@/app/(protected)/page';
import { requireAuth } from '@/feature/auth/authenticate';
export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
    await requireAuth();
    return <AppDrawer>{children}</AppDrawer>;
}
