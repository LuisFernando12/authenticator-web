'use client';

import { CircleUser, LayoutDashboard, LucideIcon, SearchAlert, Settings } from 'lucide-react';
import { Drawer } from '../../components/ui/drawer';

interface DashboardRoutes {
    name: string;
    path: string;
    icon: LucideIcon;
}
export function AppDrawer({ children }: { children: React.ReactNode }) {
    const routes: DashboardRoutes[] = [
        { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
        { name: 'Perfil', path: '/profile', icon: CircleUser },
        { name: 'Consentimentos', path: '/consents', icon: SearchAlert },
        { name: 'Configurações', path: '/settings', icon: Settings },
    ];

    return (
        <Drawer.Root>
            <Drawer.Nav>
                {routes.map((route) => (
                    <Drawer.Item key={route.name} text={route.name} href={route.path} icon={route.icon} />
                ))}
            </Drawer.Nav>
            <Drawer.Content>
                <main id="main-content" className="mx-auto max-w-7xl p-6 md:p-10">
                    {children}
                </main>
            </Drawer.Content>
        </Drawer.Root>
    );
}
