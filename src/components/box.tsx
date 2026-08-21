import { cn } from '@/lib/utils';

export function Box({
    children,
    className,
    orientation = 'vertical',
}: {
    children: React.ReactNode;
    className?: string;
    orientation?: 'vertical' | 'horizontal';
}) {
    const orientationClass = {
        vertical: 'flex flex-col',
        horizontal: 'flex flex-row',
    };
    const defaultClasses =
        'min-h-1/4 h-auto max-h-4/5 w-1/4' +
        ' sm:w-1/3 md:w-1/2 lg:w-1/3 xl:w-1/4' +
        ' bg-zinc-900/90 border border-zinc-800 text-zinc-100 rounded-2xl shadow-2xl backdrop-blur-md overflow-hidden';
    return <div className={cn(className, orientationClass[orientation], defaultClasses)}>{children}</div>;
}
