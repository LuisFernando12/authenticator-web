'use client';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IPropsDrawerNavItem {
    text: string;
    icon?: LucideIcon;
    href: string;
}

export const DrawerNavItem = ({ text, icon: Icon, href }: IPropsDrawerNavItem) => {
    const pathname = usePathname();
    const active = pathname === href || pathname.startsWith(`${href}/`);
    return (
        <Link
            href={href}
            aria-current={active ? 'page' : undefined}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-300
                 ${active ? 'bg-gray-800 text-white' : 'hover:bg-background hover:text-foreground'}`}
        >
            {Icon && <Icon size={19} aria-hidden />}
            {text}
        </Link>
    );
};
