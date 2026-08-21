'use client';
import { Input as InputPrimitive } from '@base-ui/react/input';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { Eye, EyeClosed } from 'lucide-react';

interface InputPasswordProps extends React.ComponentProps<'input'> {
    className?: string;
    type?: string;
}
const InputPassword = ({ className, type, ...props }: InputPasswordProps) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
        <div className="relative">
            <InputPrimitive
                type={showPassword ? 'text' : type}
                data-slot="input"
                className={className}
                placeholder={'**************'}
                {...props}
            />
            {!showPassword ? (
                <EyeClosed
                    className="absolute right-2.5 top-2.5 cursor-pointer text-zinc-400 hover:text-zinc-100 transition-colors h-4 w-4"
                    onClick={() => setShowPassword(!showPassword)}
                />
            ) : (
                <Eye
                    className="absolute right-2.5 top-2.5 cursor-pointer text-zinc-400 hover:text-zinc-100 transition-colors h-4 w-4"
                    onClick={() => setShowPassword(!showPassword)}
                />
            )}
        </div>
    );
};
function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
    const defaultClases =
        'h-10 w-full min-w-0 rounded-lg border border-zinc-800 bg-zinc-950/80 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus-visible:border-cyan-500/80 focus-visible:ring-1 focus-visible:ring-cyan-500/50 outline-none transition-all disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-red-500/80 aria-invalid:ring-1 aria-invalid:ring-red-500/30';
    return type === 'password' ? (
        <InputPassword type={type} data-slot="input" className={cn(defaultClases, className)} {...props} />
    ) : (
        <InputPrimitive type={type} data-slot="input" className={cn(defaultClases, className)} {...props} />
    );
}

export { Input };
