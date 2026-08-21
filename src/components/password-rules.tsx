export const PasswordRules = ({ password }: { password: string }) => {
    return (
        <div className="flex flex-col text-xs font-mono text-zinc-500 mt-1 space-y-0.5">
            <span className={password.length >= 8 ? 'text-emerald-400 font-semibold' : ''}>
                • Password must be at least 8 characters long
            </span>
            <span className={RegExp(/[a-z]/).test(password) ? 'text-emerald-400 font-semibold' : ''}>
                • Needs at least 1 lowercase letter
            </span>
            <span className={RegExp(/[A-Z]/).test(password) ? 'text-emerald-400 font-semibold' : ''}>
                • Needs at least 1 capital letter
            </span>
            <span className={RegExp(/\d/).test(password) ? 'text-emerald-400 font-semibold' : ''}>• Need at least 1 number</span>
            <span className={RegExp(/[!@#$%^&*(),.?":{}|<>_\-+=/\\[\];'`~]/).test(password) ? 'text-emerald-400 font-semibold' : ''}>
                • Needs at least 1 special character
            </span>
        </div>
    );
};
