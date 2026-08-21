import { cn } from '@/lib/utils';
interface Props {
    children: React.ReactNode;
    className?: string;
    orientation?: 'vertical' | 'horizontal';
    align?: 'center' | 'start' | 'end';
}
export function Container({ children, className, orientation = 'vertical', align = 'center' }: Props) {
    const orientationClass = {
        vertical: 'flex flex-col',
        horizontal: 'flex flex-row',
    };
    const alignChildrenClass = {
        center: 'items-center justify-center',
        start: 'items-start justify-start',
        end: 'items-end justify-end',
    };
    const defaultClasses = ' min-h-screen w-full bg-zinc-950 text-zinc-100 bg-tech-grid relative overflow-x-hidden p-4';
    return (
        <div className={cn(className, defaultClasses, orientationClass[orientation], alignChildrenClass[align])}>
            {children}
        </div>
    );
}
