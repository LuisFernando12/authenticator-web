'use client';
import { Button, Field, Input } from '@/components';
import { toast } from '@/components/ui/toast';
import React, { useEffect } from 'react';
import z from 'zod';

const OTPSchema = z.object({
    otp1: z.number().min(0).max(9),
    otp2: z.number().min(0).max(9),
    otp3: z.number().min(0).max(9),
    otp4: z.number().min(0).max(9),
    otp5: z.number().min(0).max(9),
    otp6: z.number().min(0).max(9),
});
type TypeOTP = z.infer<typeof OTPSchema>;
interface FormOTPProps {
    sendOtp: (code: number) => void;
}
export function FormOTP({ sendOtp }: FormOTPProps) {
    const [otp, setOtp] = React.useState<TypeOTP>({
        otp1: 0,
        otp2: 0,
        otp3: 0,
        otp4: 0,
        otp5: 0,
        otp6: 0,
    });
    const disableButton = Object.values(otp).some((value) => value === 0);
    const inputChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        if (target.getAttribute('aria-invalid') === 'true') {
            target.setAttribute('aria-invalid', 'false');
        }

        if (!target.dataset.otpId) {
            toast.add({ type: 'error', description: 'otp id not found', title: 'Error' });
            return;
        }
        if (target.value !== '') {
            const regex = /^[0-9\b]+$/;
            if (!regex.test(target.value)) {
                target.setAttribute('aria-invalid', 'true');
                return;
            }
        }
        const otpIndex = parseInt(target.dataset.otpId);

        setOtp({ ...otp, ['otp' + otpIndex]: parseInt(target.value) });

        if (target.value === '' && otpIndex > 1) {
            console.log('focus previous input=', otpIndex - 1);
            const previousInput = document.querySelector(`[data-otp-id="${otpIndex - 1}"]`) as HTMLInputElement;
            previousInput.focus();
            return;
        }

        if (otpIndex < 6) {
            const nextInput = document.querySelector(`[data-otp-id="${otpIndex + 1}"]`) as HTMLInputElement;
            nextInput.focus();
        }
    };
    const formatCode = (otp: TypeOTP) => {
        return parseInt(`${otp.otp1}${otp.otp2}${otp.otp3}${otp.otp4}${otp.otp5}${otp.otp6}`);
    };
    const onSubmit = () => {
        if (!OTPSchema.safeParse(otp).success) {
            toast.add({ type: 'error', description: 'Invalid OTP', title: 'Error' });
            return;
        }
        sendOtp(formatCode(otp));
    };
    useEffect(() => {
        const firstInput = document.querySelector(`[data-otp-id="1"]`) as HTMLInputElement;
        firstInput.focus();
    }, []);
    return (
        <>
            <h1 className="text-xl font-bold font-mono text-zinc-100 text-center tracking-tight">Code</h1>
            <form onSubmit={onSubmit} className="w-full px-8">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 w-full justify-center">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <Input
                                className="w-11 h-12 text-center text-xl font-mono font-bold bg-zinc-950 border-zinc-800 text-zinc-100 focus:border-cyan-500"
                                data-otp-id={index + 1}
                                key={index}
                                maxLength={1}
                                type="text"
                                onChange={inputChange}
                            />
                        ))}
                    </div>
                    <Field orientation="vertical" className="px-0 h-10 mt-2">
                        <Button type="submit" className="w-full font-semibold bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors" disabled={disableButton}>
                            Send Code
                        </Button>
                    </Field>
                </div>
            </form>
        </>
    );
}
